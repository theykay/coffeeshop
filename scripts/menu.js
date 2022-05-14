const menuContainer = document.getElementById('menu');
const menuNav = document.getElementById('menu-nav-container');

const fetchMenu = async () => {
  let response = await fetch('./menu.json');
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
    let menuNavEntry = `
      <li class="menu-nav-li">
        <a class="menu-nav-link" href="#${item.category}">
          ${item.category}
        </a>
      </li>
    `;
    let menuContents = document.createElement('section');
    menuContents.setAttribute('class', 'menu-contents');
    menuSection.innerHTML += menuHeader;
    item.items.forEach(menuItem => {
      let menuCard = `
        <div class="menu-card">
          <img class="menu-card-img" src="${menuItem.drive}" alt="${menuItem.name}" />
          <section class="menu-card-text">
            <h3 class="menu-card-name">${menuItem.name}</h3>
            <p class="menu-card-blurb">${menuItem.description}</p>
            <h4 class="menu-card-cost">${menuItem.price}</h4>
          </section>
        </div>
      `;
      menuContents.innerHTML += menuCard;
    });
    menuSection.append(menuContents);
    menuNav.innerHTML += menuNavEntry;
    menuContainer.append(menuSection);
  });
}

renderMenu();