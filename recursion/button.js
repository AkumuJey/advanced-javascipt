
const fire = () => {
    let x = document.getElementById('btn')
    x.classList.toggle('color')
    x.addEventListener('click', (e) =>{
        console.log(e);
    })
}
const receive = () => {
    let form = document.getElementById("myForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevent the form from submitting
        console.log(event);
        console.log(event.target.getin.value);
    });
}
receive()