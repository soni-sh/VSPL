
const togglebtn = document.querySelector('.navbar-toggler');
    const collapse = document.getElementById('navbarSupportedContent'); // Correct the ID
    const contactBtn = document.querySelector('.contact-btn'); // Add this line

    togglebtn.addEventListener('click', () => {
        // Toggle the visibility of the navbar
        if (collapse.style.display === 'none' || collapse.style.display === '') {
            collapse.style.setProperty('display', 'block', 'important');
        } else {
            collapse.style.setProperty('display', 'none', 'important');
        }

        // Toggle the visibility of the contact button
        if (contactBtn.style.display === 'none' || contactBtn.style.display === '') {
            contactBtn.style.setProperty('display', 'block', 'important');
        } else {
            contactBtn.style.setProperty('display', 'none', 'important');
        }
    });
