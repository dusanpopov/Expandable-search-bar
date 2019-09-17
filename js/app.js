const searchBtn = document.querySelector(".container__button");
const search = document.querySelector(".container__input");
const tip = document.querySelector(".tip");


searchBtn.addEventListener("click", () => {

    search.classList.toggle("search-style");
    tip.classList.remove("tip-style");
    search.focus();
    search.value = "";

    let charNumber = 0;
    let placeholderMessage = "Enter a search term";
    let speed = 100;
    let inputMessage = "";

    function typeWriterEffect() {

        if (charNumber < placeholderMessage.length) {

            inputMessage += `${placeholderMessage.charAt(charNumber)}`;
            search.setAttribute("placeholder", inputMessage);
            charNumber += 1;
            setTimeout(typeWriterEffect, speed);
        }
    }

    typeWriterEffect();

});

search.addEventListener("keydown", () => {
    tip.classList.add("tip-style");
});
