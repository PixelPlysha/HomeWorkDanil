const btn = document.querySelectorAll('.btn')

// btns.forEach((btn, index) => {
//     btn.addEventListener('click', () => {
//         console.log(index + 1)
//     }
//     )
// }
// )

btn.addEventListener('click', event => {
    event.currenTarget.classList.toggle('red')
})