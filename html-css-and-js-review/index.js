const myHeading = document.querySelector('h2')
myHeading.textContent = "Wow!"

let myButton = document.querySelector('button')
myButton.addEventListener('click', () => {
    document.getElementById('content').textContent = "I am working"
})

const imageChanger = document.getElementById('imageChanger')
imageChanger.addEventListener('click', () => {
    let imageOne = '../images/firefoxBlue.jpeg'
    let imageTwo = '../images/firefoxYellow.jpeg'
    let myImage = document.querySelector('img')
    let mySrc = myImage.getAttribute('src')
    if (mySrc === imageOne) {
        myImage.setAttribute('src', imageTwo)
    } else{
        myImage.setAttribute('src', imageOne)
    }
    document.title = 'Olee'
})
// window.addEventListener('load', () => {
//     const userInput = prompt('Who are you')
//     let x = confirm(`Are you ready ${userInput}`)
//     alert(`Bingo! ${x}`)
// })
