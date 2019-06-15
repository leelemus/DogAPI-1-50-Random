'use strict';

function displayResults(responseJson) {
    $('.js-imageResults').append(
        `<div class="dogResult">
            <p class="dogName">${responseJson}</p>
            <img src="${responseJson}" class="dogImage">
        </div>`
    );
}

function goGetImages() {
    const apiLink = "https://dog.ceo/api/breeds/image/random/";
    let dogCount = apiLink + $('.js-dogNumber').val();
    fetch(dogCount)
        .then (response => response.json())
        .then (responseJson => responseJson.message.forEach(displayResults))
        .catch(error => alert('Doh! Something when wrong!'));
}

function listenButton(){
    $('.js-howManyDogs').submit(event => {
        event.preventDefault();
        $('.js-imageResults').html(``);
        goGetImages();
    })
}

function dogImageGenerator() {
    listenButton();
}


$(dogImageGenerator);