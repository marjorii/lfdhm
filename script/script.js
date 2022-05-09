/* Menu */

const menuItems = document.querySelectorAll('.pages a');
const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('.pages');

/* Handle pages items and hash (on load + on click) */

if (!window.location.hash) {
    menuItems[0].classList.add('current');
    window.location.hash = '#home';
}
else {
    menuItems.forEach((item) => {
        if (item.href.includes(window.location.hash)) {
            item.classList.add('current');
        }
    });
}

menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = e.currentTarget.hash.replace('#', '')
        menuItems.forEach((i) => {
            if (i !== item) {
                i.classList.remove('current');
            }
        });
        item.classList.add('current');
    });
});

/* Handle mobile button (on click) */

menuButton.onclick = (e) => {
    e.target.nextElementSibling.classList.toggle('hide');
}

/* Remove hide class on pages items if desktop */

showMenu(menu);

window.addEventListener('resize', () => {
    showMenu(menu);
});


/* Gallery */

/* Handle news scroll with gallery buttons */

const paginationButtons = Array.from(document.querySelectorAll('#gallery-buttons-container button'));
const prev = paginationButtons[0];
const next = paginationButtons[1];
const gallery = document.getElementById('gallery');

/* To fix */
paginationButtons.forEach((button) => {
   button.onclick = () => {
       // Next button
       if (button == next) {
           // Disable next button if no more content to scroll
           if (gallery.scrollLeft >= (gallery.scrollWidth - gallery.offsetWidth) - gallery.offsetWidth) {
               next.disabled = true;
           }
           // Scroll left
           gallery.scrollBy(gallery.offsetWidth + 15, 0);

           // Active prev button if left scroll
           if (gallery.scrollLeft > 0) {
               prev.disabled = false;
           }
       }
       // Prev button
       else {
           // Active next button if content to scroll
           if (gallery.scrollLeft < gallery.scrollWidth) {
               next.disabled = false;
           }
           // Disable prev button if no more content to scroll
           if (gallery.scrollLeft <= (gallery.offsetWidth)) {
               prev.disabled = true;
           }

           // Scroll right
           gallery.scrollBy(- gallery.offsetWidth - 15, 0);

       }
       // console.log('offsetWidth: ', gallery.offsetWidth, 'scrollWidth: ', gallery.scrollWidth, 'scrollWidth - offsetWidth: ', gallery.scrollWidth - gallery.offsetWidth, 'scrollLeft: ', gallery.scrollLeft);
   }
});


function paginationSwitch() {
   // Remove left scroll if left scroll
   if (gallery.scrollLeft > 0) {
       gallery.scrollLeft = 0;
   }

   // If scroll, active next button, disable prev button
   if (gallery.scrollWidth > gallery.offsetWidth) {
       prev.disabled = true;
       next.disabled = false;
   }
   // If no scroll, disable buttons
   else {
       paginationButtons.forEach((button) => {
           button.disabled = true;
       });
   }
}


/* Functions */

function showMenu(menu) {
    if (window.innerWidth > 1100) {
        menu.classList.remove('hide');
    }
    else {
        menu.classList.add('hide');
    }
}
