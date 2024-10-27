// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll for Feature Blocks
window.addEventListener('scroll', function() {
    const featureBlocks = document.querySelectorAll('.feature-block');
    featureBlocks.forEach(block => {
        const blockPosition = block.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (blockPosition < screenPosition) {
            block.style.opacity = '1';
            block.style.transform = 'translateY(0)';
        } else {
            block.style.opacity = '0';
            block.style.transform = 'translateY(50px)';
        }
    });
});