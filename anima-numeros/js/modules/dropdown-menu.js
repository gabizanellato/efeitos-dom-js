import outsideClick from './outsideclick.js'

export default function initDropdownMenu(){
  const dropdown = document.querySelectorAll('[data-dropdown]')
  dropdown.forEach(item => {
    item.addEventListener('touchstart', handleClick) // ideal para mobile
    item.addEventListener('click', handleClick)
  
  })
  
  function handleClick(event){
    event.preventDefault()
    this.classList.toggle('active') //add e remove
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }
}

