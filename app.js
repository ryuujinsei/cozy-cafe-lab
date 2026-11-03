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


paragraphEl.classList.add("featured")