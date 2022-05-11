const menuContainer = document.getElementById('menu');

const fetchMenu = async () => {
  let response = await fetch('../menu.json');
  return await response.json();
}

const renderMenu = async () => {
  const menu = await fetchMenu();
  // console.log(menu);
  menu.forEach(item => {
    let menuSection = document.createElement('section');
    menuSection.setAttribute('id', item.category);
    menuSection.setAttribute('class', 'menu-category');
    let menuHeader = `
      <h1 class="menu-header">${item.category}</h1>
    `;
    menuSection.innerHTML += menuHeader;
    item.items.forEach(menuItem => {
      let menuCard = `
        <div class="menu-card">
          <img class="menu-card-img" src="${menuItem.image}" alt="${menuItem.name}" />
          <h3 class="menu-card-name">${menuItem.name}</h3>
          <p class="menu-card-blurb">${menuItem.description}</p>
          <h5 class="menu-card-cost">${menuItem.price}</h5>
        </div>
      `;
      menuSection.innerHTML += menuCard;
    });
    menuContainer.append(menuSection);
  });
}

renderMenu();