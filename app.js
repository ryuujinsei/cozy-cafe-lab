console.log('Cozy Cafe JavaScript is connected!');

// Part 1 :

const mainTitleEl = document.querySelector('#main-title');
console.log(mainTitleEl.textContent);
mainTitleEl.textContent = 'Welcome to the Cozy Cafe';


// Part 2:
const highlightTitleEls = document.querySelector('.highlight-title');
highlightTitleEls.forEach(element => {
    console.log(element.textContent); 
    element.style.fontstyle = 'Italic';
});