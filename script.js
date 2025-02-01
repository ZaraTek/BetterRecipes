async function fetchVideo() {
    const videoId = document.getElementById("videoId").value.trim();
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

async function fetchCaptions() {
    const videoId = document.getElementById('videoId').value;
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
        } else {
            document.getElementById('captions').innerHTML = "Captions not available for this video or language.";
        }
    } catch (error) {
        document.getElementById('captions').innerHTML = "Error fetching captions.";
        console.error(error);
    }
}

async function gptProcess() {

}