const myHeading = document.querySelector('h2')
myHeading.textContent = "Wow!"

let myButton = document.querySelector('button')
myButton.addEventListener('click', () => {
    document.getElementById('content').textContent = "I am working"
})