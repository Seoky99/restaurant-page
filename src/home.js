let container = document.querySelector("#content");

function createDiv() {
    let newElt = document.createElement("h1"); 
    newElt.textContent = generateImgContainer();

    container.appendChild(newElt);
}

function generateImgContainer() {
    return "test!";
}

export { createDiv }; 





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