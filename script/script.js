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
        if (window.innerWidth < 1250) {
            menu.classList.add('hide');
        }
        item.classList.add('current');
    });
});

/* Handle mobile button (on click) */

menuButton.onclick = (e) => {
    e.target.parentElement.parentElement.nextElementSibling.firstElementChild.classList.toggle('hide');
}

/* Remove hide class on pages items if desktop */

showMenu(menu);

window.addEventListener('resize', () => {
    showMenu(menu);
    // paginationSwitch()
});


/* Gallery */

/* Handle news scroll with gallery buttons */

const paginationButtons = Array.from(document.querySelectorAll('#gallery-buttons-container button'));
const prev = paginationButtons[0];
const next = paginationButtons[1];
const gallery = document.getElementById('gallery');
const figureWidth = gallery.firstElementChild.offsetWidth + 40;

/* To fix */
// paginationButtons.forEach((button) => {
//    button.onclick = () => {
//        // Next button
//        if (button == next) {
//
//            let nextLeftSpace = gallery.scrollLeftMax - (gallery.scrollLeft + figureWidth);
//            if (nextLeftSpace < figureWidth) {
//                gallery.scrollBy(gallery.scrollLeftMax, 0);
//                next.disabled = true;
//            }
//
//            else {
//                // Scroll left
//                gallery.scrollBy(figureWidth, 0);
//            }
//            // Active prev button if left scroll
//            if (gallery.scrollLeft > 0) {
//                prev.disabled = false;
//            }
//        }
//        // Prev button
//        else {
//            let nextLeftSpace = gallery.scrollLeft - figureWidth;
//            if (nextLeftSpace < figureWidth) {
//                // Scroll right
//                gallery.scrollTo(0, 0)
//                prev.disabled = true;
//            }
//            else {
//               gallery.scrollBy(-figureWidth, 0);
//            }
//            // Active next button if content to scroll
//            if (gallery.scrollLeft < gallery.scrollLeftMax) {
//                next.disabled = false;
//            }
//
//        }
//    }
// });

// paginationSwitch()



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
    if (window.innerWidth > 1250) {
        menu.classList.remove('hide');
    }
    else {
        menu.classList.add('hide');
    }
}
