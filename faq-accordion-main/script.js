let buttons = document.querySelectorAll(".accordion__item--button");
let content = document.querySelectorAll(".accordion__item--content");

const disclosure = (disc)=>{
    const discOpen = disc.getAttribute('aria-expanded') === 'true';
    disc.setAttribute('aria-expanded', !discOpen)
}

buttons.forEach(button => {
    button.classList.remove('active')
    button.addEventListener('click', (e) => {
        disclosure(button)
      if (!e.currentTarget.parentElement.classList.contains('active')) {
        e.currentTarget.parentElement.classList.add('active')
      } else {
        e.currentTarget.parentElement.classList.remove('active')
      }
    })
  })

