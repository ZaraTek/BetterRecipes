document.getElementById("fetchVideo").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            if (response && response.url) {
                document.getElementById("videoContainer").innerHTML = `
                    <h2>Fetched Video:</h2>
                    <video width="640" height="360" controls>
                        <source src="${response.url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            } else {
                document.getElementById("videoContainer").innerHTML = `<p>Failed to retrieve video.</p>`;
            }
        }
    });

    xhr.open("GET", "https://ytgrabber.p.rapidapi.com/app/get/YfcYPyxXVCo");
    xhr.setRequestHeader("x-rapidapi-key", "a78c7261a3mshe3c9c9275969b5cp1e8bedjsn3812ee175fa5");
    xhr.setRequestHeader("x-rapidapi-host", "ytgrabber.p.rapidapi.com");

    xhr.send(null);
});
