// Subtle animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add staggered animation to steps
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });

    // Add subtle glow effect to buttons on hover
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });

    // Add parallax-like effect to hero section on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        
        if (Math.abs(scrolled - lastScroll) > 5) {
            hero.style.transform = `translateY(${rate}px)`;
            lastScroll = scrolled;
        }
    });
});

