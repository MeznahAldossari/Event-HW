let logo = document.getElementById("RoverLogo");
let bg = document.getElementById("rover-hero-container");
let bg2 = document.getElementById("rover-action-shot");
let dog1 = document.getElementById("dog1");
let dog2 = document.getElementById("dog2");
let dog3 = document.getElementById("dog3");
let dog4 = document.getElementById("dog4");
let dog5 = document.getElementById("dog5");
let dog6 = document.getElementById("dog6");
let dog7 = document.getElementById("dog7");
let dog8 = document.getElementById("dog8");
let dog9 = document.getElementById("dog9");
let dog10 = document.getElementById("dog10");
let dog11 = document.getElementById("dog11");

// let dog

logo.addEventListener("click", () => {
  if (!logo.src.includes("logo3.jpg")) {
    console.log("hello");
    logo.src = "logo3.jpg";
    logo.style.height = "13vh";
    logo.style.width = "20vh";
    bg.style.backgroundImage = "url(cat2.jpg)";
    bg2.style.backgroundImage = "url(cat4.jpg)";

    dog1.innerText = "We're the Cat People";
    dog2.innerText =
      "Book trusted, local pet sitters and walkers who will care for your cat like you would.";
    dog3.innerText = "Cat Boarding";
    dog4.innerText = "Cat walking";
    dog5.innerText = "Whenever your cat needs a walk.";
    dog6.innerText = "Catty Day Care";
    dog7.innerText = "Daytime pet care in your sitter’s cat-friendly home.";
    dog8.innerText =
      "My Rover sitter sent me updates throughout the day and took care of my cat as if she were her own. ";
    dog9.innerText = "We’re The Cat People.";
    dog10.innerText = "We’re the treat-your-cat-like-family cat people";
    dog11.innerText = "Services for every cat";
  } else {
    console.log("hello");
    logo.src = "https://i.ibb.co/zftD2vk/logo.png";
    // logo.style.height = "13vh";
    // logo.style.width = "20vh";
    bg.style.backgroundImage = "url(bg-dog2.jpg)";
    bg2.style.backgroundImage = "url(dog6.jpg)";

    dog1.innerText = "We're the Dog People";
    dog2.innerText =
      "Book trusted, local pet sitters and walkers who will care for your dog like you would.";
    dog3.innerText = "Dog Boarding";
    dog4.innerText = "Dog walking";
    dog5.innerText = "Whenever your dog needs a walk.";
    dog6.innerText = "Doggy Day Care";
    dog7.innerText = "Daytime pet care in your sitter’s dog-friendly home.";
    dog8.innerText =
      "My Rover sitter sent me updates throughout the day and took care of my dog as if she were her own. ";
    dog9.innerText = "We’re The Dog People.";
    dog10.innerText = "We’re the treat-your-dog-like-family dog people";
    dog11.innerText = "Services for every dog";
  }
});

function dropList() {
  let dispalyValue = document.getElementById("dropdown");
  if (dispalyValue.style.display != "block") {
    dispalyValue.style.display = "block";
    dispalyValue.style.zIndex = 1;
  } else {
    dispalyValue.style.display = "none";
  }
}
