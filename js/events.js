function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Event handle Make Blue
const blueButton = document.getElementById("make-blue-btn");

blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Event handle make green   
const greenButton = document.getElementById('make-green-btn');

// anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle by using add eventlisenter
const blackButton = document.getElementById('make-black-btn');

blackButton.addEventListener('click', makeBlack);

function makeBlack() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

// addEventListener 
const hotpinkButton = document.getElementById('make-hotpink-btn');
hotpinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
});

// direct shortcut
document.getElementById('make-lightBlue-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'LightBlue';
});