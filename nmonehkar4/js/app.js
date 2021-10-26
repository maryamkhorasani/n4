//display menu

function menu() {
  const menu = document.querySelector(".menu-fixed");
  const bars = document.querySelector(".fa-bars");
  const times = document.querySelector(".fa-times");

  bars.addEventListener("click", () => {
    menu.classList.add("active");
  });
  times.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}
menu();

// active items

function items() {
  const items = document.querySelectorAll(".work__nav-item");

  const disableItem = function () {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  };

  items.forEach((item) => {
    item.addEventListener("click", () => {
      disableItem();

      item.classList.add("active");
    });
  });
}
items();

// show figures with data-img
function showFigures() {
  const figures = document.querySelectorAll(".figure");

  document.querySelector(".work__nav").addEventListener("click", (e) => {
    figures.forEach((figur) => {
      let filterImg = e.target.getAttribute("data-img");
      let filterName = figur.getAttribute("data-img");
      figur.classList.add("hide");
      if (filterImg == filterName || filterImg == "All") {
        figur.classList.remove("hide");
        figur.classList.add("show");
      } else {
        figur.classList.add("hide");
        figur.classList.remove("show");
      }
    });
  });
}
showFigures();

//active Item
const menu_item = document.querySelectorAll(".menu__item");

function activeItem() {
  menu_item.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      removeClassactive();
      menuItem.classList.add("menu__item-active");
    });
  });

  function removeClassactive() {
    menu_item.forEach((menuItem) => {
      menuItem.classList.remove("menu__item-active");
    });
  }
}
activeItem();

// highlight menu_item with scroll


const menu_link = document.querySelectorAll(".menu__link");


function callback(enteries) {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      const filterId = entry.target.getAttribute("id");
      
      menu_item.forEach((item) => {
        const filteritem = item.getAttribute("data-name");
        console.log(filteritem);

         if(filterId == filteritem){
           console.log('object');
            item.classList.add('menu__item-active')
         }
         else{
          item.classList.remove('menu__item-active')
         }
      });
    }
  });
}
const obs = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.3,
});
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  obs.observe(section);
});
