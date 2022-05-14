const gears = document.getElementsByClassName('fa-gear');

Array.from(gears).forEach(gear => {
  gear.addEventListener('click', e => {
    console.log(e.target.previousSibling)
  })
});