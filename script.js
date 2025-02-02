var timedSteps = [];
var currentStepIndex = 10000;
var oldStepIndex = 1000;
var typingStepsInst = [];
var typingIngArray = [];
var typingIndexInst;
var typingIndexIng;
var isIngredientsDisplaying = false;
var ingredientsGLOBAL = "";

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
    const apiKey = 'CHxXrLsu94et2roe9HRu3d3Q'; // Replace with actual API key
    const url = `https://www.searchapi.io/api/v1/search?api_key=${apiKey}&engine=youtube_transcripts&video_id=${videoId}&lang=${lang}`;

    captions = "[0.02s] hey yo so the other day I made these[1.82s] Cheesesteak sliders it's never too late[3.62s] to make appetizers and these are the[5.12s] truthful let me show you how to get down[6.26s] so I got some ribeye steaks that I[8.06s] sliced down really thin until it looked[9.80s] like this and I got them into a hot[11.36s] skillet cooked them down until they were[13.10s] nice and brown then I hit them with some[14.42s] salt pepper and adobo and Worcestershire[16.34s] sauce I really hate trying to say that[17.90s] words you could see but I got some[19.22s] peppers and onions into that same[20.60s] Skillet cook those down then I added the[22.76s] steak back in after everything was well[24.38s] and mixed together I added some shredded[25.94s] pepper jack cheese to the mixture then I[27.92s] set it aside to cool while I was letting[30.08s] it cool I sliced up some Kings Hawaiian[31.94s] dinner rolls lined the bottom with some[34.04s] white American cheese put that steak[35.72s] mixture down and then I topped it with[37.22s] some more of that pepper jack and yeah[38.84s] it was just a tiny bit of cheddar in[40.34s] there too but I got these onto a sheet[42.62s] tray got the top on and hit it with some[44.42s] garlic butter into the oven until it[46.34s] rolls with golden brown the cheese was[48.02s] bubbly these cheesecake sliders were[49.94s] cheesy ooey gooey plenty of flavor try[52.40s] these things out next time you're having[53.78s] people over and you won't regret it and[55.82s] you already know it's a wrap let's go";
    getIngredients(captions);
    getInstructions(captions);

    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     if (data.transcripts) {
    //         let captions = data.transcripts.map(t => ` [${t.start.toFixed(2)}s] ${t.text}`).join('');
    //         getIngredients(captions);
    //         getInstructions(captions);
    //     } else {
    //         console.log("Failed to retrieve captions.");
    //     }
    // } catch (error) {
    //     console.log("Error fetching captions.");
    //     console.error(error);
    // }
}

async function getIngredients(captions) {
    console.log("GETTING INGREDIENTS");
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
                    {
                        role: "user", content: `Here is a transcript of a YouTube short recipe. Please generate an ingredient list based on the script. If the exact amount of ingredient is not provided, give an amount based on the context of the recipe. For example: 
                        "- Fresh parsley, amount to taste
                        - Crusty white bread, amount to fill a casserole dish
                        - Chicken stock, enough to moisten the bread mixture"
Only give me the list of ingredients without any introductory or concluding phrases. ${captions}`
                    }
                ]
            })
        });

        const data = await response.json();
        var wholeResponse = data.choices[0].message.content;
        ingredientsGLOBAL = "";
        
        dataList = String(wholeResponse).split("- ").slice(1);
        console.log(typeof dataList[0]);
        // console.log("here is data list: " + dataList);
        for (i=0; i < dataList.length; i++) {
            ingredientsGLOBAL += "- " + dataList[i] + "<br>";
        }

        if (isIngredientsDisplaying) {
            typeStepIng(ingredientsGLOBAL);
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

async function getInstructions(captions) {
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
                    {
                        role: "user", content: `Here is a transcript of a YouTube short recipe. Please generate a set of instructions for the recipe. From the transcript, determine where you think a recipe "step" would be It could include multiple ingredients or lines in the script. Then pair the step with the timestamp of where it begins in the video. There may be a introduction in the recipe that does isn't a step. If this is the case, at [0.00s] just give a title of the video. Here is an example:

"[0.00s] The Best Thanksgiving Stuffing [8.64s] Heat a little bit of oil in a pan and add one pound of breakfast sausage. [10.98s] Once the sausage is browned, remove it from the pan. [13.92s] Melt one stick of butter in the same pan. [15.18s] Add one diced onion and three ribs of diced celery. [18.78s] Once the vegetables begin to sweat, add garlic, fresh rosemary, fresh thyme, and a little parsley. [23.10s] Once fragrant, return the cooked sausage to the pan. [26.40s] Turn off the heat and let the mixture cool for a few minutes. [29.22s] In a large bowl, add crusty white bread. [30.96s] Add the sausage and vegetable mixture, along with some chicken stock and poultry seasoning. [35.70s] Taste the mixture and adjust seasoning as needed before adding three eggs. [37.68s] Mix everything together well until the mixture is nice and wet. [40.50s] Transfer the stuffing mixture to a greased casserole dish. [42.54s] Bake in a 350°F oven for 45 minutes—covered for 20 minutes, then uncovered for the remaining time."

Do not include any line breaks. Rather, simply separate each step by a space.
Only give me the instructions without any introductory or concluding phrases. Here is the transcript: ${captions}`
                    }
                ]
            })
        });

        const data = await response.json();
        const steps = data.choices[0].message.content.slice(1);
        var separatedSteps = steps.split("[");
        for (i in separatedSteps) {
            timedSteps[i] = [parseFloat(separatedSteps[i].split(']')[0].slice(0,-1)) ,separatedSteps[i].split(']')[1]];
        }
    } catch (error) {
        console.log(`<strong>Error:</strong> ${error.message}`);
    }
}

async function searchYouTube() {
    loadVideo("8VVeokwoOsw");

    // const API_KEY = 'AIzaSyA8Dkhh_pYICYQkI5Q18yaW23haJ9-kEZ4';  // Replace with actual API key
    // const query = document.getElementById('searchQuery').value;
    // const maxResults = 1;

    // const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)} recipe&type=video&maxResults=${maxResults}&videoDuration=short&key=${API_KEY}`;

    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     if (!data.items) {
    //         alert("No results found.");
    //         return;
    //     }

    //     const videoContainer = document.getElementById('videoResults');
    //     videoContainer.innerHTML = '';

    //     data.items.forEach(item => {
    //         const videoId = item.id.videoId;
    //         const title = item.snippet.title;
    //         const thumbnail = item.snippet.thumbnails.high.url;

    //         const videoElement = document.createElement('div');
    //         videoElement.classList.add('video');
    //         videoElement.innerHTML = `
    //             <div class="thumbnail-container">
    //                 <button class="thumbnail-button" onclick='loadVideo("${videoId}")'>
    //                     <img class="thumbnail" src="${thumbnail}" alt="${title}">
    //                 </button>
    //                 <p class="video-title">${title}</p>
    //             </div>  
    //         `;
    //         videoContainer.appendChild(videoElement);
    //     });
    // } catch (error) {
    //     console.error("Error fetching YouTube data:", error);
    //     alert("Failed to fetch YouTube data. Please check your API key.");
    // }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        searchYouTube();
    }
}

function loadVideo(videoId) {
    document.getElementById("videoPlayerView").style.display = "flex";
    document.getElementById("searchView").style.display = "none";
    fetchVideo(videoId);
    fetchCaptions(videoId);
}

const video = document.getElementById("videoPlayer");
const progress = document.getElementById("progress");
const muteButton = document.getElementById("mute-toggle");
const playIcon = document.getElementById("playButton");

document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.querySelector('input[type="range"]');
    rangeInput.addEventListener("input", updateProgress);
    updateProgress(rangeInput); // Initial update
});

video.addEventListener("canplaythrough", function () {
    onResize();
});

// Play/Pause Toggle
video.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = "none";
    } else {
        video.pause();
        playIcon.style.display = "block";
    }
});

// Update Progress Bar
video.addEventListener("timeupdate", () => {
    progress.value = (video.currentTime / video.duration) * 100;
    const rangeInput = document.querySelector('input[type="range"]');
    updateProgress(rangeInput);
});

// Seek in Video
progress.addEventListener("input", () => {
    video.currentTime = (progress.value / 100) * video.duration;
});

// Mute/Unmute
muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    document.getElementById("volumeIcon").src = video.muted ? "mute_icon.svg" : "volume_icon.svg";
});

function updateProgress(rangeInput) {
    // we don't know what this does or why its here const percent = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100 + "%";

    const currentTime = document.getElementById("videoPlayer").currentTime;

    for (let i = 0; i < timedSteps.length; i++) {
        if (timedSteps[i][0] <= currentTime) {
            currentStepIndex = i;
        }
    } // at the end of this for loop, currentStepIndex is correct

    if (currentStepIndex != oldStepIndex) {
        
        if (currentStepIndex == 0) {
            document.getElementById("steps").innerHTML = `<strong>${timedSteps[currentStepIndex][1]}</strong>`;
        }
        else {
            typeStepInst(timedSteps[currentStepIndex][1], currentStepIndex);
        }
    }
    oldStepIndex = currentStepIndex;
}

function typeStepInst(str, stepIndex) {
    typingStepsInst = [];
    for (i = 0; i < str.length; i++) {
        typingStepsInst.push(str.slice(0, i));
        typingIndexInst = 0;
        setTimeout(() => typeCharInst(str, i), (15 * i));
    }
}
function typeCharInst() {
    const steps = document.getElementById("steps");
    if (currentStepIndex == 0) {
        document.getElementById("steps").innerHTML = `<strong>${timedSteps[currentStepIndex][1]}</strong>`;
    }
    else {
        steps.innerHTML = `<strong>Step ${currentStepIndex}.</strong> ${typingStepsInst[typingIndexInst]}`;
    }
    if (typingIndexInst < typingStepsInst.length) {
        typingIndexInst++;
    }
    if (typingIndexInst >= typingStepsInst.length-1) {
        typingIndexInst = typingStepsInst.length-1;
    }
}

function toggleIngredients() {
    isIngredientsDisplaying = !isIngredientsDisplaying;
    const ingredients = document.getElementById("listContainer");
    const button = document.getElementById("ingredientsArrow");
    
    ingredients.style.display = isIngredientsDisplaying ? "block": "none";
    button.src = isIngredientsDisplaying ? "flipped_dropdown_icon.svg": "dropdown_icon.svg";

    typeStepIng(ingredientsGLOBAL);

}

function typeStepIng(str) {
    typingIngArray = [];
    for (i = 0; i < str.length; i++) {
        typingIngArray.push(str.slice(0, i));
        typingIndexIng = 0;
        setTimeout(() => typeCharIng(str), (5 * i));
    }
}

function typeCharIng(str) {
    const ingredients = document.getElementById("ingredients");
    ingredients.innerHTML = `${typingIngArray[typingIndexIng]}`;
    if (typingIndexIng < typingIngArray.length) {
        typingIndexIng++;
    }
    if (typingIndexIng >= typingIngArray.length-1) {
        typingIndexIng = typingIngArray.length-1;
    }
}

function onResize() {
    const videoPlayer = document.getElementById("videoPlayer");
    const steps = document.getElementById("stepsContainer");
    const ingredients = document.getElementById("ingredientContainer");
    const ingredientsButton = document.getElementById("ingredientsButton");
    
    steps.style.display="block";
    ingredientsButton.style.display="flex";

    if (videoPlayer) {
        const rect = videoPlayer.getBoundingClientRect();
        const left = rect.left;
        steps.style.left = `max(${left-400}px, 20px)`;
        ingredients.style.left = `max(${left-400}px, 20px)`;
    }
    
}

window.addEventListener("resize", onResize);
