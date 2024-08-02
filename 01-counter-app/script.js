document.querySelector('.subtract').addEventListener('click', () => {
  document.querySelector('.count').innerHTML--
})

document.querySelector('.add').addEventListener('click', () => {
  document.querySelector('.count').innerHTML++
})

document.querySelector('.reset').addEventListener('click', () => {
  document.querySelector('.count').innerHTML = 0
})
// comment
