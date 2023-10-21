let rateContainer = document.getElementById("rate-container");

let ratedButton = {
    button: null,
    value: null,
    lastButton: null
};

let isFirstTime = true;

rateContainer.addEventListener('click', (e) => {
    if(isFirstTime == false) {
        if(e.target.id === "rate-container")
            ratedButton.lastButton.classList.remove("btn-clicked");
        else
            ratedButton.lastButton.classList.remove("btn-clicked");
    }

    if(e.target.id !== "rate-container") {
        ratedButton.button = document.getElementById(e.target.id);
        ratedButton.button.classList.add("btn-clicked");
        ratedButton.value = ratedButton.button.textContent;
        
        console.log(ratedButton.value);
        
        ratedButton.lastButton = ratedButton.button;
        isFirstTime = false;
    }
});