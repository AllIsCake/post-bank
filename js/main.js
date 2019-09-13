//header tabs
function ShowContHeader(id, evt) {
    // Get all elements with class="tablinks" and remove the class "active"
    tabHeaderlinks = document.querySelectorAll('.header-tabs_item a');
    for (i = 0; i < tabHeaderlinks.length; i++) {
        tabHeaderlinks[i].classList.remove('header-tabs_active');
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += " header-tabs_active";
}
//main tabs 
function ShowContMain(id, evt) {
    tabMainlinks = document.querySelectorAll('.myExperience-choose_tabs_item');
    for (i = 0; i < tabMainlinks.length; i++) {
        tabMainlinks[i].classList.remove('myExperience-choose_tabs_item__active');
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className += " myExperience-choose_tabs_item__active";
}
//dropdown menus

function dropDownMenu(id, event) {
    let dropDownItems = document.getElementById(id).querySelectorAll('a');
    let dropDownMenu = document.getElementById(id).querySelector('.dropdown-menu-content');
    let dropDownBtn = document.getElementById(id).querySelector('.dropdown-btn');
    dropDownMenu.classList.toggle('dropdownmenu-hide');
    event.target.addEventListener('click', () => {
    dropDownItems.forEach((elem) => {
        elem.addEventListener('click', () => {
            dropDownMenu.classList.add('dropdownmenu-hide');
            event.target.textContent = elem.textContent;
        });
    }); 
});
window.onclick = function(event) {
    let dropDownMenu = document.getElementById(id).querySelector('.dropdown-menu-content');
    if (event.target != dropDownMenu && event.target != dropDownBtn) {
        let dropDownMenuAll = document.querySelectorAll('.dropdown-menu-content');
        console.log(event.target)
        dropDownMenuAll.forEach((elem) => {
            elem.classList.add('dropdownmenu-hide');
        })
    }
}
}
//mobile menu
let mobileOpenBtn = document.querySelector('.mobile-menu_btn');
let mobileCloseBtn = document.querySelector('.mobile-menu_main__close');
let mobileMenu = document.querySelector('.mobile-menu_main');
mobileOpenBtn.addEventListener('click', () => {
    mobileMenu.classList.add("mobile-menu_active");
});
mobileCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove("mobile-menu_active");
});
