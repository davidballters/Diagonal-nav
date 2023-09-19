const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

container.addEventListener("click", () => {
  if (container.classList.contains('show-nav')) {
    container.classList.remove('show-nav')
    console.log('si entra')

  } else {
    container.classList.add('show-nav')
    console.log('no entra')
  }                           
});