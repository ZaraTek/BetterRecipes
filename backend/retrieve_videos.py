import os
import requests
import json

def fetch_video(video_id, folder="downloads", index=1):
    os.makedirs(folder, exist_ok=True)
    
    url = f"https://zylalabs.com/api/3219/youtube+mp4+video+downloader+api/5880/get+mp4?id={video_id}"
    
    headers = {
        'Authorization': 'Bearer 6573|nlzRB3czOZMD3kk8sg9nYOiDSmMjLdFDt2Om2yfZ'
    }
    
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        content_type = response.headers.get("Content-Type", "")
        if "application/json" in content_type:
            try:
                data = response.json()
                print("Full API Response:")
                print(json.dumps(data, indent=2))  # Pretty-print JSON
                
                # Look for video/mp4 format
                video_url = None
                if "formats" in data:
                    for fmt in data["formats"]:
                        if "video/mp4" in fmt.get("mimeType", ""):
                            video_url = fmt["url"]
                            break

                if video_url:
                    print(f"Found Video URL: {video_url}")
                else:
                    print("No direct MP4 video URL found in response.")
            except json.JSONDecodeError:
                print("Failed to parse JSON response.")
        else:
            print(f"Unexpected response type: {content_type}")

video_ids = ["2L679Vwvzrw"]  # Test with one video first

for index, video_id in enumerate(video_ids, start=1):
    fetch_video(video_id, folder="my_videos", index=index)
