const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/sport-betting.jpg') {
		myImage.setAttribute('src', 'images/sport-betting-2.jpg');
	} else {
		myImage.setAttribute('src', 'images/sport-betting.jpg');
	}
}

function setUserName() {
	let myName = prompt('Hey buddy, what\'s your name?');
	if(!myName) {
		setUserName()
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Hello world, ' + myName + '!';
	}
}

myImage.onclick = setUserName()