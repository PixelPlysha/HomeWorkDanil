const button = document.querySelector('.btn')


// button.addEventListener('click', () => {
//     console.log('клик сработал')
// })

let btnIsRed = false

button.addEventListener('click', () => {
    if (btnIsRed) {
        button.style.backgroundColor = 'blue'
        btnIsRed = false
    } else {
        button.style.backgroundColor = 'red'
        btnIsRed = true
    }
})



function scrolling() {
    console.log('scroll')
}