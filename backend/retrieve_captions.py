import requests

def get_captions(video_id):
    url = "https://www.searchapi.io/api/v1/search"
    params = {
        "engine": "youtube_transcripts",
        "video_id": video_id,
        "lang": "en",
        "api_key": "CHxXrLsu94et2roe9HRu3d3Q"
    }

    response = requests.get(url, params=params)
    data = response.json()  # Parse JSON response

    # Extract transcript text if the expected key exists
    if "transcripts" in data:
        transcript_text = " ".join([entry["text"] for entry in data["transcripts"]])
        return transcript_text
    else:
        print("Transcript not found")

video_ids = [
    "2L679Vwvzrw",
    "H1Pi1OjQlgg",
    "U4lQPin-zis",
    "IkB0iuvhj4U",
    "A5hrMz_LeyY",
    "zCFB_fYo00E",
    "_zsRhuNbV3k",
    "ZRLVtp_Rkfg",
    "8VVeokwoOsw",
    "99k0nEiEbaQ",
    "2WDIBat-Jgo",
    "SD1bCnZNrII",
    "vpCcFQLvmZo",
    "oBzNZNVqqz0",
    "GDdvQvCPTc8",
    "AWSZ4VleZRQ",
    "ZEKcsUaWO-k",
    "N4ppO2_Ms_k",
    "jB1kzRuF2K8",
    "3XFgNPLha0w",
    "fpm1i9KLkvM"
]

def count_list(list):
    sum = 0
    for i in range(len(video_ids)):
        sum += 1
    return sum

captions_list = []
for video_id in video_ids:
    captions_list.append(get_captions(video_id))  # Store the captions in list

# Write to the file after collecting all captions
with open("output.txt", "w", encoding="utf-8") as file:
    file.writelines("\n".join(captions_list))  # Join array elements with newline

print("Captions saved to output.txt")