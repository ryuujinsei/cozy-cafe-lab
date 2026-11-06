console.log('Cozy Cafe JavaScript is connected!');

// Part 1 :

const mainTitleEl = document.querySelector('#main-title');
console.log(mainTitleEl.textContent);
mainTitleEl.textContent = 'Welcome to the Cozy Cafe';


// Part 2:
const highlightTitleEls = document.querySelectorAll('.highlight-title');
highlightTitleEls.forEach(element => {
    console.log(element.textContent); 
    element.style.fontStyle = 'italic';
});

const paragraphEl = document.querySelector('#quote-of-the-day');
paragraphEl.textContent = 'A little coffee, a little conversation.';
paragraphEl.classList.add("featured");


// Part 3:

const imageEl = document.querySelector('#main-photo');
console.log(imageEl.getAttribute('src'));
imageEl.setAttribute("src", "./assets/berry-cake.jpg");
imageEl.setAttribute("alt","A berry cake served at the cafe");


// Part 4:

const btnEl = document.querySelector('#bg-color-btn');
const bodyEl = document.querySelector('body')
const handleBackgroundChange = () => {
    bodyEl.style.backgroundColor = "lavender";
}

btnEl.addEventListener('click',(handleBackgroundChange));


// Part 5:
const roseLatteEl = document.querySelector('#rose-latte');
const croissantEl = document.querySelector('#croissant');
const cheesecakeEl = document.querySelector('#cheesecake');
const roseLatteBtn = document.getElementById('0')
const croissantBtn = document.getElementById('1')
const cheesecakeBtn = document.getElementById('2')

roseLatteEl.textContent = 'Available'
croissantEl.textContent = 'Sold Out'
cheesecakeEl.textContent = 'Available'

roseLatteBtn.addEventListener('click', () => {
    roseLatteEl.textContent = 'Sold out'
    
})
croissantBtn.addEventListener('click', () => {
    croissantEl.textContent = 'Sold Out'
    
})
cheesecakeBtn.addEventListener('click', () => {
    cheesecakeEl.textContent = 'Sold Out'
    
})




// const specialityElements = document.querySelectorAll('.speciality-status')
// const statuses = ['Available', 'Sold Out', 'Available']

// statuses.forEach((status, index) => {
//     console.log(status, index);
//     console.log(specialityElements[index]);
//     specialityElements[index].textContent = status
// });
