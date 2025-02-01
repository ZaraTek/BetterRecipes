async function fetchVideo(videoId) {
    if (!videoId) {
        alert("Please enter a YouTube video ID.");
        return;
    }

    const apiUrl = `https://zylalabs.com/api/3219/youtube+mp4+video+downloader+api/6812/youtube+downloader?videoId=${videoId}`;
    const apiKey = "Bearer 6573|nlzRB3czOZMD3kk8sg9nYOiDSmMjLdFDt2Om2yfZ"; // Replace with your actual API key

    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Authorization": apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.status || !data.videos || !data.videos.items.length) {
            alert("Error fetching video. Try a different video ID.");
            return;
        }

        // Select the best quality video available
        const videoUrl = data.videos.items[0].url;
        const videoTitle = data.title;

        document.getElementById("videoTitle").innerText = videoTitle;
        const videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.src = videoUrl;
        videoPlayer.style.display = "block";

    } catch (error) {
        console.error("Error fetching video:", error);
        alert("Failed to fetch video.");
    }
}

async function fetchCaptions(videoId) {
    const lang = "en";
    const apiKey = 'cj255q8vXyah9eS771ZFLQgk'; // Replace with actual API key
    const url = `https://www.searchapi.io/api/v1/search?api_key=${apiKey}&engine=youtube_transcripts&video_id=${videoId}&lang=${lang}`;

    document.getElementById('captions').innerHTML = "Fetching captions...";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.transcripts) {
            let captions = data.transcripts.map(t => `<p><strong>[${t.start.toFixed(2)}s]</strong> ${t.text}</p>`).join('');
            document.getElementById('captions').innerHTML = captions;
            document.getElementById('captions').style.display = 'block';
            getIngredients(captions);
            getInstructions(captions);
        } else {
            document.getElementById('captions').innerHTML = "Captions not available for this video or language.";
        }
    } catch (error) {
        document.getElementById('captions').innerHTML = "Error fetching captions.";
        console.error(error);
    }
}

async function getIngredients(captions) {
    const responseDiv = document.getElementById('ingredients');
    responseDiv.innerHTML = "Loading...";

    const apiKey = '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'; // Replace this with your OpenAI API Key

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: 'You are an AI Assistant' },
                    { role: "user", content: `Here is a transcript of a YouTube short recipe. Please generate an ingredient list based on the script. If the exact amount of ingredient is not provided, give an amount based on the context of the recipe. For example: "Fresh parsley, amount to taste - Crusty white bread, amount to fill a casserole dish - Chicken stock, enough to moisten the bread mixture"
Only give me the list of ingredients without any introductory or concluding phrases. ${captions}` }
                ]
            })
        });

        const data = await response.json();
        responseDiv.innerHTML = `<strong>Response:</strong> ${data.choices[0].message.content}`;
    } catch (error) {
        responseDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }  
}

async function getInstructions(captions) {
    const responseDiv = document.getElementById('instructions');
    responseDiv.innerHTML = "Loading...";

    const apiKey = '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'; // Replace this with your OpenAI API Key

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: 'You are an AI Assistant' },
                    { role: "user", content: `Here is a transcript of a YouTube short recipe. Please generate a set of instructions for the recipe. From the transcript, determine where you think a recipe "step" would be It could include multiple ingredients or lines in the script. Then pair the step with the timestamp of where it begins in the video. There may be a introduction in the recipe that does isn't a step. If this is the case, at [0.00s] just give a title of the video. Here is an example:

"[0.00s] The Best Thanksgiving Stuffing

[8.64s] Heat a little bit of oil in a pan and add one pound of breakfast sausage.

[10.98s] Once the sausage is browned, remove it from the pan.

[13.92s] Melt one stick of butter in the same pan.

[15.18s] Add one diced onion and three ribs of diced celery.

[18.78s] Once the vegetables begin to sweat, add garlic, fresh rosemary, fresh thyme, and a little parsley.

[23.10s] Once fragrant, return the cooked sausage to the pan.

[26.40s] Turn off the heat and let the mixture cool for a few minutes.

[29.22s] In a large bowl, add crusty white bread.

[30.96s] Add the sausage and vegetable mixture, along with some chicken stock and poultry seasoning.

[35.70s] Taste the mixture and adjust seasoning as needed before adding three eggs.

[37.68s] Mix everything together well until the mixture is nice and wet.

[40.50s] Transfer the stuffing mixture to a greased casserole dish.

[42.54s] Bake in a 350°F oven for 45 minutes—covered for 20 minutes, then uncovered for the remaining time."

Only give me the instructions without any introductory or concluding phrases. Here is the transcript: ${captions}` }
                ]
            })
        });

        const data = await response.json();
        responseDiv.innerHTML = `<strong>Response:</strong> ${data.choices[0].message.content}`;
    } catch (error) {
        responseDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
    }  
}

async function searchYouTube() {
    const API_KEY = 'AIzaSyDR3bNdgAgA71trSKB35CpVrgyWLi2HTlU';  // Replace with actual API key
    const query = document.getElementById('searchQuery').value;
    const maxResults = 10;

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)} recipe&type=video&maxResults=${maxResults}&videoDuration=short&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.items) {
            alert("No results found.");
            return;
        }

        const videoContainer = document.getElementById('videoResults');
        videoContainer.innerHTML = ''; 

        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            const thumbnail = item.snippet.thumbnails.medium.url;

            const videoElement = document.createElement('div');
            videoElement.classList.add('video');
            videoElement.innerHTML = `
                <button onclick='loadVideo("${videoId}")'>
                    <img src="${thumbnail}" alt="${title}">
                </button>
                <p>${title}</p>
            `;
            videoContainer.appendChild(videoElement);
        });
    } catch (error) {
        console.error("Error fetching YouTube data:", error);
        alert("Failed to fetch YouTube data. Please check your API key.");
    }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        searchYouTube();
    }
}

function loadVideo(videoId){
    fetchVideo(videoId);
    fetchCaptions(videoId);
}