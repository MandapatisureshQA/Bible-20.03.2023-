const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");

const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
}

const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar");
}
hamburger.addEventListener("click", openSidebar );
closeButton.addEventListener("click", closeSidebar);





//nav bar sticky

const navbarContainer = document.querySelector(".nav-container");
window.addEventListener("scroll", function()
{
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth  >= 992 ? 70 : 50 ;
    if(scrollNumber >= targetNumber)
    {
        navbarContainer.classList.add("sticky-nav");
    }
    else
    {
        navbarContainer.classList.remove("sticky-nav");
    }
});


// const manualHamburger = document.querySelector(".title-hamburger");
// const manualCloseButton = document.querySelector(".manual-close-button");
// const manualSidebarContainer = document.querySelector(".manual-sidebar-container");


// const manualOpenSidebar = () => {
//     manualSidebarContainer.classList.add("manual-show-sidebar");
// }

// const manualCloseSidebar = () => {
//     manualSidebarContainer.classList.remove("manual-show-sidebar");
// }


manualHamburger.addEventListener("click", manualOpenSidebar );
manualCloseButton.addEventListener("click", manualCloseSidebar);


//mibile sidebar sticky

const navbarContainer1 = document.querySelector(".title-nav-header");
window.addEventListener("scroll", function()
{
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth  >= 992 ? 70 : 50 ;
    if(scrollNumber >= targetNumber)
    {
        navbarContainer1.classList.add("sticky-nav");
    }
    else
    {
        navbarContainer1.classList.remove("sticky-nav");
    }
});


