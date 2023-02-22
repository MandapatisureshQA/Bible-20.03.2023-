const hamburger1 = document.querySelector(".middle-nav-hamburger");
const closeButton1 = document.querySelector(".close-button1");
const sidebarContainer1 = document.querySelector(".hero-sidebar-container");

const openSidebar1 = () => {
    sidebarContainer1.classList.add("show-sidebar");
    }

const closeSidebar1 = () => {
    sidebarContainer1.classList.remove("show-sidebar");
    }

hamburger1.addEventListener("click", openSidebar1 );
closeButton1.addEventListener("click", closeSidebar1);
