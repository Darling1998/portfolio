

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
}; 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window. onscroll = () =>{
    sections. forEach(sec =>{
         let top = window. scrollY;
         let offset = sec.offsetTop - 150;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
			  navLinks. forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
             });
         };
    });
}
