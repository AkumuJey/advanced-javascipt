let cameraButton = document.getElementById('camera')

cameraButton.addEventListener('click', () => webcam())


const webcam = () => {
    let constraints = {
        video: true,
        audio: true
    }
    navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
        let webvideo = document.getElementById('webvideo')
        webvideo.srcObject = mediaStream
        webvideo.play()
    }).catch((error) => {
        if (error.name === 'NotAllowedError') {
            console.log('Permission to access camera and microphone was denied.');
        } else {
            console.error('Error accessing camera and microphone:', error);
        }
    })
}


  

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
