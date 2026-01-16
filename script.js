// Scroll to why section
function scrollToWhy() {
    const whySection = document.getElementById('why-section');
    whySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Scroll to features section
function scrollToFeatures() {
    const featuresSection = document.getElementById('features-section');
    featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add smooth scroll behavior for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Enhance button interactions
    const buttons = document.querySelectorAll('.cta-primary, .cta-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
});
