

// NEW SECTION
 
var feedLength = 21;
var activeIndex = Math.floor(Math.random() * feedLength);
var activeIndexArray = [];
var activeIndexArrayIndex = 0;

function getRandomArray() {
    let arr = Array.from({ length: 21 }, (_, i) => i); 
    
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
    
    activeIndexArray = arr;
}
getRandomArray();
console.log("HOWDY"+activeIndexArray);



function loadVideo() {
    console.log("loadvid");
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = `backend/my_videos/video${activeIndex}.mp4`;
    getIngredients(localIngredients);
    getInstructions(localInstructions);
}

var localIngredients = [
    "- Ground beef, 1 pound, - Onion, amount to taste, - Tomatoes, amount to taste, - Lettuce, amount to taste, - Pickles, amount to taste, - Cheddar cheese, enough for topping each burger, - Mayonnaise, amount to taste, - Ketchup, amount to taste, - Mustard, amount to taste, - Grated pickles, amount to taste, - Pickle juice, amount to taste, - Garlic powder, amount to taste, - Paprika, amount to taste, - Onion powder, amount to taste, - Salt, amount to taste, - Pepper, amount to taste, - Burger buns, enough to accommodate the patties",
    "- Chicken thighs (or chicken breasts), - Soy sauce, - Oyster sauce, - Black pepper, - Garlic (lots), - Coca-Cola",
    "- Olive oil, enough to coat the pan, - 1 tablespoon tomato paste, - Chopped tomatoes, 1 cup, - Minced garlic, 1 clove, - Garlic powder, to taste, - Paprika, to taste, - Red pepper flakes, to taste, - Lentils, 1/4 cup, - Water, enough to cover the lentils, - Eggs, 1 to 2, - Fresh parsley, amount to taste, - Feta cheese, amount to taste",
    "- Oil, enough to coat the pan, - 1 pound ground beef, - Salt, to taste, - Black pepper, to taste, - Shallots, 1-2 minced, - Garlic, 2-3 cloves minced, - Ginger, 1 tablespoon minced, - 1/4 cup soy sauce, - 1/4 cup sugar, - 1 tablespoon rice wine vinegar, - 1 teaspoon sriracha, - 1 teaspoon Korean chili flakes, - Sesame oil, a drizzle, - Lime juice, to taste, - Fresh cilantro, chopped, to taste, - Green onion, chopped, to taste, - Cornstarch, for slurry, as needed",
    "- Heavy cream, 2 cups, - Sugar, 1 cup, - Cream cheese, 16 ounces",
    "- Garlic powder, 1 teaspoon, - Paprika, 1 teaspoon, - Cayenne, 1/2 teaspoon, - Chicken, enough for pot pie (approximately 2 cups shredded), - Lemon juice, 2 tablespoons, - Salt, to taste, - Pepper, to taste, - Oil, 2 tablespoons, - Potatoes, 2 medium, diced, - Yellow onion, 1, chopped, - Carrots, 2, diced, - Minced garlic, 2 cloves, - Flour, 2 tablespoons, - Fresh rosemary, 1 tablespoon, chopped, - Curry powder, 1 teaspoon, - Chicken bouillon, 1 cube (or equivalent), - Chicken broth, 2 cups, - Heavy cream, 1 cup, - Frozen peas, 1 cup, - Puff pastry, 2 sheets, thawed, - Egg, 1, for egg wash",
    "- Lotus biscuits, 1 packet, - Unsalted butter, 6 tablespoons, - Dulce de leche, 1 can (prepared by cooking condensed milk), - Bananas, 3 (sliced), - Whipped cream, enough to generously cover the top, - Chocolate shavings, enough to sprinkle on top",
    "- Rotisserie chicken, shredded, - Olive oil, a drizzle, - Onions, 1 medium, - Sweet potato, 1 medium, - Regular potato, 1 medium, - Butter, 5 tablespoons, - Frozen mixed vegetables, about 2 cups, - All-purpose flour, 1/2 cup, - Half and half, 2 cups, - Chicken stock, 2 cups, - Porcini mushroom powder, to taste, - Garlic powder, to taste, - Chili powder, to taste, - Onion powder, to taste, - Salt, to taste, - Pepper, to taste, - Store-bought puff pastry, enough to cover the pan",
    "- Ribeye steaks, thinly sliced, - Salt, to taste, - Pepper, to taste, - Adobo seasoning, to taste, - Worcestershire sauce, to taste, - Bell peppers, chopped, - Onions, chopped, - Shredded pepper jack cheese, - Kings Hawaiian dinner rolls, - White American cheese slices, - Cheddar cheese, a small amount, - Garlic butter, for brushing",
    "- Olive oil, enough to coat the pan, - Diced onion, 1 medium, - Chopped garlic, 2-3 cloves, - Tomato paste, 2-3 tablespoons, - Heavy cream, 1 cup, - Chili pepper flakes, to taste, - Salt, to taste, - Black pepper, to taste, - Pasta water, enough to adjust consistency, - Your favorite pasta, 8 ounces, - Butter, 2 tablespoons, - Parmesan cheese, grated, for topping, - Fresh basil, for garnish",
    "- Garlic, to taste, - Hot chili, to taste, - Carrot, 1 leftover carrot, - Red onion, 0.5 onion, - Bell pepper, 1 bell pepper, - Broccolini, a handful, - Chicken breast, enough for thin slices, - Salt, to taste, - Pepper, to taste, - Soy sauce, enough to taste, - Rice vinegar, enough to taste, - Cornstarch, 1 tablespoon, - Water, enough to mix with cornstarch",
    "- Onion, 1 medium, - Bell pepper (capsicum), 1 medium, - Spring onions, 3-4, - Long red chili, 1, - Garlic, 2-3 cloves, - Beef (thinly sliced), around 500g, - Soy sauce, enough to marinate the beef and add to the sauce, - Bicarbonate of soda, a pinch, - Ground white pepper, to taste, - Corn flour, enough to coat the beef, - Oil (for frying), enough to fill the wok, - Sweet chili sauce, a few tablespoons, - Tomato ketchup, a few tablespoons, - Rice wine vinegar, a few tablespoons, - Sesame oil, a few tablespoons, - Toasted sesame seeds, for garnish, - Cooked rice, for serving",
    "- 1 whole onion, - 1 whole carrot, - 2 potatoes, - 2 pounds boneless chicken thighs, cut into bite-sized pieces, - 3 cups water, - 1 can full fat coconut milk, - Curry cubes, amount as per package instructions",
    "- Chicken thighs, enough for one pot, - Salt, to taste, - Pepper, to taste, - Garlic powder, to taste, - Paprika, to taste, - Turmeric, to taste, - Onions, thinly sliced, 1 medium onion, - Mushrooms, sliced, 1 cup, - Garlic, minced, 2-3 cloves, - Curry powder, to taste, - Tomato paste, 1-2 tablespoons (optional), - Ground masala, to taste (optional), - Coconut milk, 1 can (about 400ml)",
    "- Steak, 1 pound, cut into 1-inch cubes, - Olive oil, enough to coat steak, - Salt, to taste, - Black pepper, to taste, - Garlic powder, to taste, - Butter, 2 tablespoons, - Shallots, 2, diced, - Fresh rosemary, 1 tablespoon, chopped, - Fresh thyme, 1 tablespoon, chopped, - Garlic, 3 cloves, minced, - Worcestershire sauce, 2 tablespoons",
    "- Boiling water, enough to fill a large pot, - Chicken bouillon, amount based on package instructions, - Pasta, enough for desired serving size, - French beans, amount for a side, - Garlic, 2-3 cloves, - Red pepper flakes, to taste, - Olive oil, enough to sauté garlic, - Cold butter, about 1/2 cup, - Pecorino Romano cheese, grated, to taste, - Salt, to taste, - Black pepper, to taste",
    "- Olive oil, enough for a nice layer  , - Onion, 1 medium, seasoned with salt and black pepper  , - Garlic, sliced, 2-3 cloves  , - Red chili flakes, to taste  , - Tomatoes, 2-3 cups, chopped  , - Fresh basil, a bunch  , - Eggplant, 2 medium  , - Flour, enough for dredging  , - Eggs, for egg wash, 2-3  , - Seasoned breadcrumbs, enough for coating  , - Fresh mozzarella, 1-2 cups, sliced  , - Parmesan cheese, freshly grated, for serving  , - Extra fresh basil, for serving ",
    "- Olive oil, enough to coat the pan  , - Onion, 1 medium, diced  , - Salt, to taste  , - Black pepper, to taste  , - Garlic, 2-3 cloves, minced  , - Ground beef, 1 pound  , - Curry powder, to taste  , - Sweet paprika, to taste  , - Tomato paste, a few tablespoons  , - Butter, 1/2 stick  , - Paprika, to taste (for sauce)  , - Yogurt, 1 cup  , - Lemon juice, to taste  , - Fresh tomatoes, a few, diced  , - Fresh parsley, amount to taste  , - Feta cheese, optional, amount to taste  ",
    "- 1/4 cup chocolate, - 2 tbsp butter, - 1 whole egg",
    "- Sugar, 2 tablespoons  , - Baking soda, a tiny pinch  ",
    "- Kings Hawaiian original sweet rolls, 1 pack, - Garlic butter, amount to spread on rolls, - Cheese, enough to sprinkle over rolls"
];

localInstructions = [
    "[0.04s] Smash Burger Recipe [5.56s] Divide a pound of ground beef into four equal sections, then shape each section into a round compacted ball. [11.56s] Pop these in the fridge while you prep your toppings, such as onion, tomatoes, lettuce, and pickles. [16.28s] Add your ball of meat to a super hot pan and flatten it out using parchment paper in between, careful not to go too thin. [22.76s] You can also use two spatulas to flatten out your patties if you don't have a burger press. [25.60s] Top these off with some cheddar cheese, cover until it's melty, then take it off the heat. [30.40s] To make the burger sauce, combine mayonnaise, ketchup, mustard, grated pickles, pickle juice, garlic powder, paprika, onion powder, salt, and pepper. [37.20s] Build your burger starting with the lettuce on the bottom, then tomato—make sure you season that tomato—and then the rest of your toppings. Enjoy.",
    "[0.04s] Soy Glazed Chicken Rice Bowl [4.56s] Marinate the chicken with soy sauce, oyster sauce, black pepper, and lots of garlic. [12.48s] Sauté the marinated chicken for 4 to 5 minutes or until it gets nice and brown. [16.48s] Add Coca-Cola as the secret ingredient. [19.20s] Cover and let it cook for 7 to 8 minutes.",
    "[0.00s] Single Serving Shakshuka [4.72s] Add olive oil to a pan and 1 tablespoon of tomato paste; cook down. [6.88s] Add chopped tomatoes, minced garlic, garlic powder, paprika, red pepper flakes, and lentils. [12.16s] Pour in some water, cover with a lid, and cook on medium-low heat for about 20 minutes. [15.40s] Mash up the tomatoes. [17.04s] Crack in 1 to 2 eggs; cook uncovered for 1 minute and covered for 2 minutes for a runny yolk. [22.48s] Top with fresh parsley and feta, then enjoy.",
    "[0.00s] Easy Korean Beef Recipe [2.22s] Heat a little bit of oil in the pan and add one pound of ground beef. Season with a little salt and black pepper. [7.80s] Cook the ground beef until it's about halfway done. [10.86s] Add minced shallots, minced garlic, and minced ginger. [12.84s] Continue to cook for about 30 seconds or until you start to smell the garlic. [15.96s] Add a fourth a cup of soy sauce, a fourth a cup of sugar, a tablespoon of rice wine vinegar, a teaspoon of sriracha, a teaspoon of Korean chili flakes, and a little bit of sesame oil. Mix until combined. [26.76s] Add lime juice, cilantro, green onion, and a little bit of cornstarch slurry. [30.66s] Once the sauce is nice and thick, it's done.",
    "[0.00s] World's Easiest Tiramisu [7.14s] Take about two cups of heavy cream and start whipping it until you get soft peaks. [10.44s] Mix in about one cup of sugar and 16 ounces of cream cheese.",
    "[1.84s] Combine garlic powder, paprika, and cayenne to make a spice mix. [8.60s] Marinate your chicken in lemon juice, the spice mix, salt, pepper, and some oil. [12.32s] Bake it in the air fryer for about 10 minutes, then once it's cooled, shred it with a fork. [15.28s] In a pan with melted butter, saute potatoes, yellow onion, carrots, and minced garlic. [18.88s] Sprinkle in some flour and cook for a few more minutes. [22.20s] Add fresh thyme, rosemary, curry powder, and chicken bouillon. [24.04s] Pour in broth and heavy cream, add salt and pepper, and simmer for about 10 minutes until thickened. [29.04s] Add the shredded chicken back in along with some frozen peas. [32.08s] Roll out a sheet of thawed puff pastry so it's big enough to fit your baking dish. [36.24s] Brush with an egg wash and bake for about 5 minutes to avoid a soggy crust. [39.48s] Add the pot pie filling, cover with another sheet of puff pastry, and seal the edges with a fork. [45.08s] Add some slits on top for ventilation, brush with an egg wash, and bake for about 30 minutes or until golden.",
    "[0.00s] Banoffee Pie [4.02s] Start by crushing a packet of lotus biscuits and add in 6 tablespoons of melted butter. [10.74s] Bring the mixture together and then press it down into the bottom and sides of an 8 inch tart pan and refrigerate it for 30 minutes. [16.50s] I made the dulce de leche filling a day in advance simply by cooking a can of condensed milk submerged in water for about 3 hours. [24.30s] Spread it out into the biscuit base and then top it with three sliced bananas. [30.14s] Whipped cream on top and some chocolate shavings to complete the banoffee pie.",
    "[0.08s] Chicken Pot Pie Recipe [2.24s] Remove the meat from one rotisserie chicken. [5.76s] Heat a little bit of olive oil in a pan and add onions. [8.80s] After five minutes, add sweet potato, regular potato, and five tablespoons of butter, along with a few frozen mixed vegetables. [19.84s] Coat everything with the butter, then sprinkle in half a cup of flour. [21.76s] Add about two cups of half and half and two cups of chicken stock. [25.52s] Add the chicken and season with porcini mushroom powder, garlic powder, chili powder, onion powder, salt, and pepper. [30.96s] Transfer the filling into an oven-safe pan. [32.72s] Lay a piece of store-bought puff pastry over the pan, trim the edges, and crimp with a fork. [37.84s] Place the pan in the oven at 400°F for 20 minutes, then reduce the temperature to 350°F and bake for 20 more minutes.",
    "[0.00s] Cheesesteak Sliders Recipe [6.26s] Slice ribeye steaks really thin and cook in a hot skillet until browned. [13.10s] Season cooked steak with salt, pepper, adobo, and Worcestershire sauce. [19.22s] Add peppers and onions to the skillet and cook down. [22.76s] Reintroduce the steak to the skillet and mix well, then add shredded pepper jack cheese. [30.08s] Slice Kings Hawaiian dinner rolls and line the bottom with white American cheese. [35.72s] Add the steak mixture on top of the cheese and top with more pepper jack cheese and a bit of cheddar. [42.62s] Place assembled sliders on a sheet tray, top with roll tops, and brush with garlic butter. Bake until rolls are golden brown and cheese is bubbly.",
    "[0.00s] Gigi Hadid's Favorite Pasta [5.52s] First in a saucepan, heat up some olive oil and add a diced onion and chopped garlic. [10.64s] Cook it until the onions are soft and then add your tomato paste. [13.92s] Let it cook until the paste becomes darker and then you're gonna add some heavy cream. [17.76s] Mix it up until the paste and the cream have blended together and then add chili pepper flakes, some salt, and black pepper. [24.08s] Add some pasta water, your favorite pasta, and some butter. [26.88s] Top it off with some parmesan cheese and basil.",
    "[0.00s] Cooking Basics for Students Part 7 [12.54s] Put a pan on super high heat and let it get hot. [16.44s] Take out whatever veggies you have in your fridge, like garlic, hot chili, leftover carrot, half a red onion, bell pepper, and broccolini. [26.82s] Cut up some chicken breast into thin slices and season with salt and pepper. [32.04s] Start cooking with the aromatics, such as garlic and chilies. [36.66s] Add the chicken, which will cook very fast, so be ready with your other veggies. [40.86s] Throw in the veggies with some salt and pepper and start tossing or use a spatula to move them around if you're not confident with tossing. [47.64s] Finish with some soy sauce and rice vinegar. [51.30s] Mix some cornstarch and water and add it to the pan for a nice glossy finish.",
    "[0.00s] Crispy Chili Beef Stir Fry [2.22s] Start by removing the top and the bottom from the onion, slice it in half and then thinly slice. Slice the bell pepper in half, remove the pith and seeds by giving it a bang on the bench, then thinly slice into strips. Separate the roots and stems from the spring onions, giving it a rough chop, then thinly slice the stem ends for garnish. [17.10s] Thinly slice one long red chili and then grate the garlic on a microplane. [20.46s] Thinly slice the beef into nice little strips, add it to a bowl and add in the soy sauce, bicarb soda, and ground white pepper. Give it a mix with your hands and then just set this aside. [26.70s] In another bowl add the soy sauce, sweet chili sauce, tomato ketchup, rice wine vinegar, sesame oil, the garlic, and ground white pepper. Then give it a whisk and set aside. [35.58s] Heat your oil in a wok to 180 degrees Celsius then add the beef to the corn flour and give it a nice dusting. Add the beef to the oil and fry for two and a half minutes or until crispy, then remove and drain. [44.76s] In a pan over high heat add in the oil and the vegetables, then mix and cook for three minutes. [47.88s] Add in the spring onion and cook for a further one minute, then add in the sauce and the beef. Mix around and cook for another one minute until it looks ready, then serve it over rice. [56.16s] Garnish with toasted sesame seeds, the chili, and the spring onion.",
    "[0.00s] How to Make Extra Creamy Japanese Curry [2.32s] Slice one whole onion and chop one whole carrot. [4.80s] Cut two potatoes and two pounds of boneless chicken thighs into bite-sized pieces. [7.92s] Add the chicken thighs to a pan and cook for two to three minutes. [11.92s] Add the sliced onion and saute for one to two minutes. [13.76s] Add the potatoes and carrots to the pan. [15.68s] Pour in three cups of water. [17.92s] Use the whole pack of curry cubes. Bring it to a simmer, put the lid on, and let it cook for 30 minutes. [21.76s] Add one can of full fat coconut milk and the curry cubes. [23.76s] Mix together and let it cook for another 15 minutes.",
    "[0.64s] How to Make Creamy Coconut Chicken [2.96s] Season the chicken thighs with salt, pepper, garlic powder, paprika, and turmeric. [6.40s] Fry the chicken for three minutes on each side, remove, and set aside. [10.88s] Add thinly sliced onions and sliced mushrooms to the pan and sauté together for two to three minutes. [17.04s] Add minced garlic, curry powder, and tomato paste. Optionally, add a little bit of ground masala and mix together. [23.12s] Add back in the chicken. [24.00s] Add coconut milk, ensuring the chicken is coated in the sauce. [26.88s] Cover and let it cook for 10 minutes.",
    "[0.01s] Garlic Butter Steak Bites [4.27s] Slice your steak into about one-inch cubes. [8.83s] Coat the steak with a little bit of olive oil, then season with salt, black pepper, and garlic powder. [15.79s] In a hot cast iron skillet, add some oil. [18.31s] Once the oil is hot, add in your steak. [22.93s] Cook the steak for about one minute on each side, then 30 seconds to one minute on each side, depending on your preference. [28.99s] Once the steak is done, remove it from the skillet. [31.03s] Slightly reduce the heat and add in butter. [33.13s] Once the butter is melted, add in diced shallots with salt and black pepper, cooking for about a minute. [36.79s] Add in fresh rosemary, thyme, and garlic, and cook for about 30 seconds. [41.59s] Add the steak bites back in with Worcestershire sauce and toss in the garlic butter for a couple of minutes.",
    "[0.12s] 15-Minute Butter Noodles [5.24s] To a large boiling pot of water, add chicken bouillon, pasta, and French beans in the last couple minutes of cooking. [10.28s] Reserve some pasta water and cook down garlic and red pepper flakes in oil. [13.68s] Add that oil to the drained pasta, along with pasta water and some cold butter, and stir this aggressively to create the sauce. [18.32s] Add in the rest of that pasta water, Pecorino Romano, salt, and lots of black pepper and mix this together until the silky sauce coats your noodles.",
    "[0.00s] Rustic Eggplant Parmesan [6.64s] Start with the sauce by adding a layer of olive oil. [9.60s] Add the onion, season with salt and black pepper, and fry for about a minute. [14.20s] Add sliced garlic and red chili flake. [17.32s] Once the garlic is fragrant, add the tomatoes, season with more salt and black pepper, and add fresh basil. [24.08s] Let this simmer and reduce while preparing the eggplant. [26.52s] Cut the tops off the eggplant, optionally peel it, then slice into 1/4-inch thick strips. [33.92s] Salt the eggplant and set it aside. [35.48s] Dredge the eggplant in flour, then egg wash, then into seasoned breadcrumbs, and fry. [43.48s] Add fresh mozzarella and bake in a 350°F oven for about 7 minutes. [47.80s] Serve with sauce on top, freshly grated Parmesan cheese, and fresh basil.",
    "[0.00s] Viral Turkish Pasta [2.92s] Add olive oil to a hot pan. [4.44s] Add onion and season with salt and black pepper. [7.72s] Once the onion turns translucent, add garlic and let it get fragrant. [11.04s] Add one pound of ground beef and season with salt, black pepper, curry powder, and sweet paprika. [16.44s] Brown and break up the ground beef. [19.12s] Add a few tablespoons of tomato paste and stir into the ground beef and onions. Set aside. [24.08s] For sauce number one, melt half a stick of butter in a pan. [27.60s] Add paprika, stir to combine, and set aside. [30.96s] For sauce number two, combine yogurt, minced garlic, lemon juice, and a big pinch of salt. Mix and set aside. [36.84s] Add some of the beef mixture on top of the pasta. [38.36s] Add a few dollops of the yogurt sauce and a drizzle of the paprika butter. [42.08s] Top with a few tomatoes and parsley, and optionally add a little bit of feta cheese.",
    "[0.00s] Dubai Chocolate Cake [10.28s] Mix together 1/4 cup of chocolate and 2 tablespoons of butter. [15.04s] Pop this into the microwave for about 1 minute until everything melts. [18.40s] Add in one whole egg. [20.28s] Pop this into the microwave for about 1 minute.",
    "[0.04s] Squid Game Dalgona Cookie [5.72s] Add 2 tablespoons of sugar into a small pan over medium heat. [7.72s] Stir continuously until all the sugar melts. [9.24s] Add a tiny pinch of baking soda and mix well.",
    "[0.04s] Garlic Butter Cheesy Bread [9.56s] Get a whole pack of Kings Hawaiian original sweet rolls. [13.32s] Place the rolls into a baking dish and cut two slits down each row. [37.16s] Pop the dish into a 400°F oven for about 10 to 12 minutes."
]



// OLD SECTION

var timedSteps = [];
var ingredientsGLOBAL = "";

var currentStepIndex = 10000;
var oldStepIndex = 1000;
var typingStepsInst = [];
var typingIngArray = [];
var typingIndexInst;
var typingIndexIng;
var isIngredientsDisplaying = false;
var container = document.getElementById("screen");
var content = container.innerHTML;
var isLoopingStep = false;
var loopingStepIndex = 0;
var currentDisplayedIndex;

loadVideo();


function getIngredients(localIngredients) {
    var wholeResponse = localIngredients[activeIndex];
    wholeResponse = wholeResponse.slice(2);
    ingredientsGLOBAL = "";
    
    dataList = String(wholeResponse).split(", - ");

    // console.log("here is data list: " + dataList);
    for (i=0; i < dataList.length; i++) {
        ingredientsGLOBAL += "- " + dataList[i] + "<br>";
    }
    if (isIngredientsDisplaying) {
        typeStepIng(ingredientsGLOBAL);
    }
}

function getInstructions(localInstructions) {
    const data = localInstructions[activeIndex]; // Ensure activeIndex is valid
    if (!data) {
        console.error("Invalid activeIndex or localInstructions");
        return;
    }

    const steps = data.slice(1);
    var separatedSteps = steps.split("[");
    // console.log(separatedSteps);

    var timedStepsGPT = []; // Ensure it's initialized

    for (let i in separatedSteps) {
        if (separatedSteps[i] && separatedSteps[i].includes(']')) {
            let splitStep = separatedSteps[i].split(']');
            let timeValue = parseFloat(splitStep[0].slice(0, -1));
            let stepText = splitStep.length > 1 ? splitStep[1] : "";

            timedStepsGPT[i] = [timeValue, stepText];
        }
    }

    timedSteps = timedStepsGPT;
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

    if (isLoopingStep) {
        if (currentStepIndex !== loopingStepIndex) {
            videoPlayer.currentTime = timedSteps[loopingStepIndex][0];
            currentStepIndex = loopingStepIndex;
            if (currentStepIndex !== 0 && loopingStepIndex !== currentDisplayedIndex) {
                typeStepInst(timedSteps[loopingStepIndex][1], loopingStepIndex);
            }
        }
    } else {
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
    
}

function typeStepInst(str, stepIndex) {
    currentDisplayedIndex = stepIndex;
    typingStepsInst = [];   
    for (i = 0; i < str.length; i++) {
        typingStepsInst.push(str.slice(0, i));
        typingIndexInst = 0;
        setTimeout(() => typeCharInst(str, i), (15 * i));
    }
}
function typeCharInst() {
    const steps = document.getElementById("steps");
    currentDisplayedIndex = currentStepIndex;
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
        
        if (left-400 < 20) {
            ingredients.style.alignItems = "start";
            steps.style.left = `${left+20}px`;
            steps.style.bottom = `180px`;
            ingredients.style.left = `${left+20}px`;
        } else {
            ingredients.style.alignItems = "end";
            steps.style.left = `max(${left-400}px, 20px)`;
            ingredients.style.left = `max(${left-400}px, 20px)`;
            steps.style.bottom = `100px`;
        }
    }
    
}

window.addEventListener("resize", onResize);

function forward() {
    if (!isLoopingStep) {
        loopingStepIndex = currentStepIndex;
    }
    isLoopingStep = true;
    document.getElementById("toggleLoop").innerHTML = "Looping Step";
    document.getElementById("toggleLoop").classList.add("looping");
    loopingStepIndex++;
    currentStepIndex = loopingStepIndex;

    if (currentStepIndex == 0) {
        document.getElementById("steps").innerHTML = `<strong>${timedSteps[currentStepIndex][1]}</strong>`;
    }
    else {
        typeStepInst(timedSteps[currentStepIndex][1], currentStepIndex);
    }
}
function back() {
    if (!isLoopingStep) {
        loopingStepIndex = currentStepIndex;
    }
    isLoopingStep = true;
    document.getElementById("toggleLoop").innerHTML = "Looping Step";
    document.getElementById("toggleLoop").classList.add("looping");
    loopingStepIndex--;
    currentStepIndex = loopingStepIndex;

    if (currentStepIndex == 0) {
        document.getElementById("steps").innerHTML = `<strong>${timedSteps[currentStepIndex][1]}</strong>`;
    }
    else {
        typeStepInst(timedSteps[currentStepIndex][1], currentStepIndex);
    }
}
function toggleLoop() {
    if (!isLoopingStep) {
        loopingStepIndex = currentStepIndex;
    }
    isLoopingStep = !isLoopingStep;
    document.getElementById("toggleLoop").innerHTML = isLoopingStep ? "Looping Step": "Loop Step";
    if (isLoopingStep) {
        document.getElementById("toggleLoop").classList.add("looping");
    } else {
        document.getElementById("toggleLoop").classList.remove("looping");
    }
    currentStepIndex = loopingStepIndex;
}

function down() {
    activeIndexArrayIndex++;
    if (activeIndexArrayIndex >= activeIndexArray.length) activeIndexArrayIndex = 0;
    
    activeIndex = activeIndexArray[activeIndexArrayIndex];

    // Ensure ingredients and instructions update
    getIngredients(localIngredients);
    getInstructions(localInstructions);

    loadVideo(); // Load the video after updating variables

    document.getElementById("steps").innerHTML = `<strong>${timedSteps[0][1]}</strong>`;
    playIcon.style.display = "none";
}

function up() {
    activeIndexArrayIndex--;
    if (activeIndexArrayIndex < 0) activeIndexArrayIndex = activeIndexArray.length - 1;

    activeIndex = activeIndexArray[activeIndexArrayIndex];

    // Ensure ingredients and instructions update
    getIngredients(localIngredients);
    getInstructions(localInstructions);

    loadVideo();

    document.getElementById("steps").innerHTML = `<strong>${timedSteps[0][1]}</strong>`;
    playIcon.style.display = "none";
}
