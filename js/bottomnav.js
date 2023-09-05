const navigation = document.getElementById('bottom-navigation');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const footerPosition = footer.getBoundingClientRect().top;

    // Adjust this threshold as needed
    if (scrollPosition > 100 && footerPosition > window.innerHeight) {
        navigation.style.bottom = '24px';
    } else {
        navigation.style.bottom = '-80px';
    }
}, { passive: true }); // Adding { passive: true } to the event listener options
