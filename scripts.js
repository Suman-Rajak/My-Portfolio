// function loadingmore() {
//     // Hide the "Load More" button immediately
//     document.querySelector('#loadmore').style.display = 'none';
//     document.querySelector('.center-container').style.display = 'none';
//     document.querySelector('.demo1').style.display = 'none';

//     // Get all elements with the class .projectlater
//     var elements = document.querySelectorAll('.projectlater');

//     // Loop through each element and gradually change opacity to 1 (fade in)
//     elements.forEach(function (element) {
//         element.style.display = 'block'; // Display the element
//         setTimeout(function () {
//             element.style.opacity = '1'; // Gradually change opacity to 1
//         }, 50); // Add a small delay to start the animation
//     });
// }


const texts = ["Designer", "Developer", "Freelancer"]; // Array of texts to display
let count = 0; // Index of the current text
let index = 0; // Index of the current character
let currentText = ''; // Current text being typed
let letter = ''; // Current character being typed
let themeicon = document.getElementById('themeicon')

function themechange() {
    document.body.classList.toggle("lighttheme");
    if (document.body.classList.contains("lighttheme")) {
        themeicon.setAttribute("name", "moon")
        themeicon.style.color = "black";
    }
    else {
        themeicon.setAttribute("name", "sunny")
        themeicon.style.color = "white";
    }
}

themeicon.addEventListener("click", themechange);

function type() {
    if (index < texts[count].length) {
        currentText += texts[count].charAt(index);
        document.getElementById('typewriter').innerHTML = currentText + "|"; // Add "|" after each character
        index++;
        setTimeout(type, 100); // Adjust typing speed (milliseconds)
    } else {
        setTimeout(erase, 1500); // Wait before erasing
    }
}

function erase() {
    if (index >= 0) {
        currentText = texts[count].substring(0, index - 1);
        document.getElementById('typewriter').innerHTML = currentText + "|"; // Add "|" after each character
        index--;
        setTimeout(erase, 100); // Adjust erasing speed (milliseconds)
    } else {
        count++;
        if (count >= texts.length) count = 0; // Loop through texts
        setTimeout(type, 500); // Wait before typing the next text
    }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, 1000); // Initial delay before typing starts
});

// Start the typing effect
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, 1000); // Initial delay before typing starts
});



// Excel Sheet Connect

const scriptURL = 'https://script.google.com/macros/s/AKfycbxI9bMvwqnhUIiSuUk7Owfx8p6lXv8YgyHbnmUacamIV88j51FvwdRtElu6TuCphcmL/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You for your response"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()

        }

        )
        .catch(error => console.error('Error!', error.message))
})
