from openai import OpenAI

client = OpenAI(api_key="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")

def get_ingredients(captions):
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are an AI Assistant"},
            {
                "role": "user",
                "content": f"""Here is a transcript of a YouTube short recipe. Please generate an ingredient list based on the script. If the exact amount of ingredient is not provided, give an amount based on the context of the recipe. For example: 
                - Fresh parsley, amount to taste
                - Crusty white bread, amount to fill a casserole dish
                - Chicken stock, enough to moisten the bread mixture
                
                Only give me the list of ingredients without any introductory or concluding phrases.
                
                {captions}"""
            }
        ]
    )
    return completion.choices[0].message.content


def store_ingredients(): 
    with open("captions.txt", "r", encoding="utf-8") as file:
        captions = file.readlines()

    captions = [line.strip() for line in captions if line.strip()]  # Remove empty lines
    
    with open("ingredients.txt", "w", encoding="utf-8") as file:
        for caption in captions:
            ingredients = get_ingredients(caption)  # Get ingredients for each caption
            ingredients = ingredients.replace("\n", ", ")  # Replace line breaks with commas
            file.write(ingredients + "\n")  # Write in a single line per caption
            
    print("Stored ingredients")


def get_instructions(captions):
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages = [
            {"role": "system", "content": "You are an AI Assistant" },
            {
                "role": "user",
                "content": f"""Here is a transcript of a YouTube short recipe. Please generate a set of instructions for the recipe. From the transcript, determine where you think a recipe "step" would be It could include multiple ingredients or lines in the script. Then pair the step with the timestamp of where it begins in the video. There may be a introduction in the recipe that does isn't a step. If this is the case, at [0.00s] just give a title of the video. Here is an example:

        "[0.00s] The Best Thanksgiving Stuffing [8.64s] Heat a little bit of oil in a pan and add one pound of breakfast sausage. [10.98s] Once the sausage is browned, remove it from the pan. [13.92s] Melt one stick of butter in the same pan. [15.18s] Add one diced onion and three ribs of diced celery. [18.78s] Once the vegetables begin to sweat, add garlic, fresh rosemary, fresh thyme, and a little parsley. [23.10s] Once fragrant, return the cooked sausage to the pan. [26.40s] Turn off the heat and let the mixture cool for a few minutes. [29.22s] In a large bowl, add crusty white bread. [30.96s] Add the sausage and vegetable mixture, along with some chicken stock and poultry seasoning. [35.70s] Taste the mixture and adjust seasoning as needed before adding three eggs. [37.68s] Mix everything together well until the mixture is nice and wet. [40.50s] Transfer the stuffing mixture to a greased casserole dish. [42.54s] Bake in a 350°F oven for 45 minutes—covered for 20 minutes, then uncovered for the remaining time."

        Do not include any line breaks. Rather, simply separate each step by a space.
        Only give me the instructions without any introductory or concluding phrases. Here is the transcript: {captions}"""
            }
        ]
    )
    return completion.choices[0].message.content

def store_instructions(): 
    with open("captions.txt", "r", encoding="utf-8") as file:
        captions = file.readlines()

    captions = [line.strip() for line in captions if line.strip()]  # Remove empty lines
    
    with open("instructions.txt", "w", encoding="utf-8") as file:
        for caption in captions:
            instructions = get_instructions(caption)  # Get ingredients for each caption
            instructions = instructions.replace("\n", ", ")  # Replace line breaks with commas
            file.write(instructions + "\n")  # Write in a single line per caption
            
    print("Stored instructions")

store_instructions()