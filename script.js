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

        // Select the best quality video
        const videoUrl = data.videos.items[0].url;
        const videoTitle = data.title;

        document.getElementById("videoTitle").innerText = videoTitle;
        const videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.src = videoUrl;
        videoPlayer.style.display = "block";

        // Process and transcribe audio
        transcribeAudio(videoUrl);

    } catch (error) {
        console.error("Error fetching video:", error);
        alert("Failed to fetch video.");
    }
}

async function transcribeAudio(videoUrl) {
    try {
        // Convert video to audio (using a proxy server or backend solution)
        const audioBlob = await extractAudio(videoUrl);

        if (!audioBlob) {
            alert("Error extracting audio.");
            return;
        }

        const formData = new FormData();
        formData.append("file", audioBlob, "audio.mp3");
        formData.append("model", "whisper-1");

        const whisperResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer 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` // Replace with your actual API key
            },
            body: formData
        });

        if (!whisperResponse.ok) {
            throw new Error(`Whisper API request failed: ${whisperResponse.status}`);
        }

        const transcriptData = await whisperResponse.json();
        document.getElementById("transcription").innerText = transcriptData.text;

    } catch (error) {
        console.error("Error transcribing audio:", error);
        document.getElementById("transcription").innerText = "Failed to transcribe audio.";
    }
}

// Function to extract audio from video (Requires a backend service)
async function extractAudio(videoUrl) {
    try {
        const response = await fetch(videoUrl);
        const blob = await response.blob();

        // Convert video file to audio (e.g., using FFmpeg on a backend server)
        // For now, returning the blob as is (Whisper API supports MP3/WAV)
        return blob;
    } catch (error) {
        console.error("Error extracting audio:", error);
        return null;
    }
}
