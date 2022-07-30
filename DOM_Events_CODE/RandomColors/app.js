const button = document.querySelector('button');
const text = document.querySelector('h1');

button.addEventListener('click', function() {
    const newColor = getColor();
    document.body.style.backgroundColor = newColor;
    text.innerText = newColor;
})

const getColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}