// Sticky nav bar 
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("navWrapper");
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky");
			} else {
    			navbar.classList.remove("sticky");
  				}
}

// hamburger menu

const menuButton = document.querySelector('.menuButton');
let wholeNav = document.querySelector("nav");
let hamNav = document.querySelectorAll('.navFlexParent li a');
let menuOpen = false;
menuButton.addEventListener('click', () => {
	if(!menuOpen) {
		menuButton.classList.add('open');
		menuOpen = true;
		hamNav.forEach(function (navItem) {
			navItem.style.display = "block";
			navItem.style.color = "white";
		});
		wholeNav.style.backgroundColor = "black";
	} else {
		menuButton.classList.remove('open');
		menuOpen = false;
		hamNav.forEach(function (navItem) {
			navItem.style.display = "none";
		});
		wholeNav.style.backgroundColor = "transparent";
	}
});

// Carousel for photos 

let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
	showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
	let i;
	let x = document.getElementsByClassName(slideId[no]);
	if (n > x.length) {
		slideIndex[no] = 1;
	}
	if (n < 1) {
		slideIndex[no] = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex[no] - 1].style.display = "block";
}


// for soundBoard / audio section 

// I'm not done this project yet. This is a work in progress! But it more or less works... yay!
// I'm working on simplifying this to a function - not done yet.

const player0 = document.getElementById("audio0");
const player1 = document.getElementById("audio1");
const player2 = document.getElementById("audio2");
const player3 = document.getElementById("audio3");
const player4 = document.getElementById("audio4");
const player5 = document.getElementById("audio5");
const player6 = document.getElementById("audio6");
const player7 = document.getElementById("audio7");
const player8 = document.getElementById("audio8");

// // click image & song plays or pauses
const button0 = document.getElementById("img0");
button0.addEventListener("click", () => {
    if (player0.paused) {
		player0.play();
	} else {
		player0.pause();
	}
});

const button1 = document.getElementById("img1");
button1.addEventListener("click", () => {
	if (player1.paused) {
		player1.play();
	} else {
		player1.pause();
	}
});

const button2 = document.getElementById("img2");
button2.addEventListener("click", () => {
	if (player2.paused) {
		player2.play();
	} else {
		player2.pause();
	}
});

const button3 = document.getElementById("img3");
button3.addEventListener("click", () => {
	if (player3.paused) {
		player3.play();
	} else {
		player3.pause();
	}
});

const button4 = document.getElementById("img4");
button4.addEventListener("click", () => {
	if (player4.paused) {
		player4.play();
	} else {
		player4.pause();
	}
});

const button5 = document.getElementById("img5");
button5.addEventListener("click", () => {
	if (player5.paused) {
		player5.play();
	} else {
		player5.pause();
	}
});

const button6 = document.getElementById("img6");
button6.addEventListener("click", () => {
	if (player6.paused) {
		player6.play();
	} else {
		player6.pause();
	}
});

const button7 = document.getElementById("img7");
button7.addEventListener("click", () => {
	if (player7.paused) {
		player7.play();
	} else {
		player7.pause();
	}
});

const button8 = document.getElementById("img8");
button8.addEventListener("click", () => {
	if (player8.paused) {
		player8.play();
	} else {
		player8.pause();
	}
});

// working on simplifying the above to a function 

// function playSong(trackId) {
// //    let audioID = "audio" + trackId.toString();
//     const player = document.getElementById(trackId);
//     if (player.paused) {
// 			player.play();
// 		} else {
// 			player.pause();
// 		}
// }

// const buttons = document.getElementsByClassName('image');
// const buttonsArray = [...buttons];
// let i = 0;
// buttonsArray.forEach((pic) => {
//     pic.addEventListener("click", () => {
//         playSong(this.id);
//     });
//     i++;
// });

// changes play icon to pause on click and back again
const images = document.getElementsByClassName('image');
// create a copy
const imageArray = [...images];
// Apply the code to each image 
imageArray.forEach((image) => {
	image.addEventListener("click", function () {
		const icon = this.querySelector("i");
		if (icon.classList.contains("fa-play")) {
			icon.classList.remove("fa-play");
			icon.classList.add("fa-pause");
		} else {
			icon.classList.remove("fa-pause");
			icon.classList.add("fa-play");
		}
	});
});

// click button to get a random song 
// Planning to ADD stopping one song before another starts on random in this section! Haven't done it yet! 

function getSong() {
	const song = [
		{
			title: "Times Like This",
			src: "./audioFiles/timesLikeThisSoundBoard.mp3",
		},
		{
			title: "I Won't Mind",
			src: "./audioFiles/iWontMindSoundBoard.mp3",
		},
		{
			title: "A Day With Julia",
			src: "./audioFiles/aDayWithJuliaSoundBoard.mp3",
		},
		{
			title: "Lion Tamer",
			src: "./audioFiles/lionTamerSoundBoard.mp3",
		},
		{
			title: "Over The Rainbow",
			src: "./audioFiles/overTheRainbowSoundBoard.mp3",
		},
		{
			title: "I Dreamed A Dream",
			src: "./audioFiles/iDreamedADreamSoundBoard.mp3",
		},
		{
			title: "Another Hundred People",
			src: "./audioFiles/anotherHundredPeopleSoundBoard.mp3",
		},
		{
			title: "A Way Back To Then",
			src: "./audioFiles/aWayBackToThenSoundBoard.mp3",
		},
		{
			title: "Defying Gravity",
			src: "./audioFiles/defyingGravitySoundBoard.mp3",
		},
	];

    const randomSong = song[Math.floor(Math.random() * song.length)];
 
    const audio = new Audio(randomSong.src);
	audio.play();
}

document.querySelector('button').addEventListener("click", () => {
    getSong();
});

// pause all music 
// hoping to figure out a better solution to stopping the audio for the random button - for now, just reloading the page

document.querySelector('.quiet').onclick = function () {
	// const sounds = document.getElementsByTagName("audio");
    // for (i = 0; i < sounds.length; i++) sounds[i].pause();
    location.reload();
	return false;
};

// Also want to add something to stop currently playing audio if another is starting up

// I also want to add something to change the pause button on the image back to play once the track is finished

// recaptcha 
   function onSubmit(token) {
     document.getElementById("form").submit();
   }