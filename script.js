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

// Scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple alert - in production, you'd send this to a server
    alert(`Thank you ${name}! We'll get back to you at ${email} soon.`);
    
    // Reset form
    event.target.reset();
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
