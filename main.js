'use strict';

function displayError() {
    $('.js-imageResults').append(
        `<div class="dogResult">
            <p class="dogError">Please input a number between 1 and 50 to see images.</p>
        </div>`
    );
}

function displayResults(responseJson) {
    $('.js-imageResults').append(
        `<div class="dogResult">
            <p class="dogName">${responseJson}</p>
            <img src="${responseJson}" class="dogImage">
        </div>`
    );
    console.log(responseJson);
}

function goGetImages() {
    const apiLink = "https://dog.ceo/api/breeds/image/random/";
    let dogCount = apiLink + $('.js-dogNumber').val();
    fetch(dogCount)
        .then (response => response.json())
        .then (responseJson => responseJson.message.forEach(displayResults))
        .catch(error => alert('Doh! Something when wrong! Please try again.'));
}

function dogImageGenerator(){
    $('.js-howManyDogs').submit(event => {
        event.preventDefault();
        $('.js-imageResults').html(``);
        if ($('.js-dogNumber').val() < 1 || $('.js-dogNumber').val() > 50) {
            displayError();
        } else {
            goGetImages();
        }
    })
}

$(dogImageGenerator);