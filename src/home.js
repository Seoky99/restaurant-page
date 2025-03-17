import restaurantImg from "./images/restaurant-img.png";
import restaurantOutsideImg from "./images/restaurant-outside.png";

function generateHomeContent() {
    let container = document.querySelector("#content");

    container.appendChild(generateImgContainer());
    container.appendChild(generateTaglineContainer());
    container.appendChild(generateInfoContainer());
}

function generateImgContainer() {
    const imgContainer = document.createElement("div");
    imgContainer.classList = "img-container";
    
    const image = document.createElement("img");
    image.src = restaurantImg;
    image.style.width = "100%";
    image.style.height = "auto";
    imgContainer.appendChild(image);

    const textBlockDiv = document.createElement("div");
    textBlockDiv.classList = "text-block";
    const title = document.createElement("h1");
    title.textContent = "Mario's Pizza";
    const caption = document.createElement("p");
    caption.textContent = "Delicious Pizzas since 1985";

    textBlockDiv.appendChild(title);
    textBlockDiv.appendChild(caption);

    imgContainer.appendChild(textBlockDiv);
    
    return imgContainer; 
}

function generateTaglineContainer() {
    const taglineContainer = document.createElement("div");
    taglineContainer.classList = "tagline-container";

    const tagline = document.createElement("h2");
    tagline.textContent = "Our food has xyz qualities that makes the dining experience 123!";
    taglineContainer.appendChild(tagline);
    
    return taglineContainer; 
}

function generateInfoContainer() {

    const infoContainer = document.createElement("div");
    const hoursContainer = document.createElement("div");
    const locationContainer = document.createElement("div");

    const list = document.createElement("ul");
    const NUM_LIST = 6; 
    for(let i = 0; i < NUM_LIST; i++) {
        const listElt = document.createElement("li");
        listElt.textContent = `Opening hours: ${i} to ${i+1}`; 
        list.appendChild(listElt);
    }
    hoursContainer.classList="hours-container";
    hoursContainer.appendChild(list);
    

    const outsideImage = document.createElement("img");
    outsideImage.src = restaurantOutsideImg; 
    outsideImage.style.height = "150px";
    
    locationContainer.classList="location-container";
    locationContainer.append(outsideImage);

    infoContainer.appendChild(hoursContainer);
    infoContainer.appendChild(locationContainer);
    infoContainer.classList="info-container";

    return infoContainer;
}

export { generateHomeContent }; 


        /*<div class="img-container">
            <img src="./images/restaurant-img.png" alt="restaurant background"
            width="550px">
            <div class="text-block">
                <h1>Title</h1>
                <p>Caption</p>
            </div>
        </div>
        <div class="tagline-container">
            <h2>Tagline</h2>
        </div>
        <div class="info-container">
            <div class="hours-container">
                <ul>
                    <li>1-2</li>
                    <li>2-3</li>
                    <li>3-4</li>
                </ul>
            </div>
            <div class="location-container">
                <img src="images/restaurant-outside.png">
            </div>
        </div> */