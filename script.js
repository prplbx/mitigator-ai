document.addEventListener('DOMContentLoaded', function() {
    // Sticky header
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize ad lazy loading
    handleAdLazyLoading();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .hero-buttons a, .cta a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Form validation
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Simple validation
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Name is required');
                isValid = false;
            } else {
                removeError(nameInput);
            }
            
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email');
                isValid = false;
            } else {
                removeError(emailInput);
            }
            
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Message is required');
                isValid = false;
            } else {
                removeError(messageInput);
            }
            
            if (isValid) {
                // Simulate form submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                // Simulate API call
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
                    
                    contactForm.appendChild(successMessage);
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                }, 1500);
            }
        });
    }
    
    // Helper functions for form validation
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error-message');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        formGroup.classList.add('error');
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        formGroup.classList.remove('error');
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    const useCaseCards = document.querySelectorAll('.use-case-card');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // Check if any part of the element is in the viewport
        return (
            rect.bottom > 0 &&
            rect.right > 0 &&
            rect.top < windowHeight &&
            rect.left < windowWidth
        );
    }
    
    // Function to handle scroll animation
    function handleScrollAnimation() {
        // Animate service cards
        serviceCards.forEach(card => {
            if (isInViewport(card) && !card.classList.contains('animated')) {
                card.classList.add('animated');
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        
        // Animate use case cards
        useCaseCards.forEach((card, index) => {
            if (isInViewport(card) && !card.classList.contains('animated')) {
                setTimeout(() => {
                    card.classList.add('animated');
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100); // Staggered animation
            }
        });
    }
    
    // Animate counter numbers
    const statCards = document.querySelectorAll('.stat-card');
    
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16); // 16ms is roughly 60fps
        const counter = element.querySelector('.counter');
        
        const timer = setInterval(() => {
            start += increment;
            
            if (start >= target) {
                clearInterval(timer);
                counter.textContent = target;
            } else {
                counter.textContent = Math.floor(start);
            }
        }, 16);
    }
    
    function handleCounterAnimation() {
        statCards.forEach(card => {
            if (isInViewport(card) && !card.classList.contains('counted')) {
                card.classList.add('counted');
                const target = parseInt(card.getAttribute('data-count'));
                
                // Different durations based on number size for better visual effect
                let duration = 2000; // default 2 seconds
                if (target > 500) duration = 2500;
                if (target < 50) duration = 1500;
                
                animateCounter(card, target, duration);
            }
        });
    }
    
    // Check for counters in viewport on load and scroll
    window.addEventListener('load', handleCounterAnimation);
    window.addEventListener('scroll', handleCounterAnimation);
    
    // Set initial state for animation
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    useCaseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check for elements in viewport on load and scroll
    window.addEventListener('load', handleScrollAnimation);
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Lazy loading for background images
    const lazyBackgrounds = [
        ...document.querySelectorAll('.ai-graphic'),
        ...document.querySelectorAll('.team-graphic')
    ].filter(Boolean);
    
    if (lazyBackgrounds.length > 0) {
        // Add lazy-load class to all background elements
        lazyBackgrounds.forEach(bg => {
            bg.classList.add('lazy-load');
        });
        
        // Function to handle lazy loading of background images
        function handleLazyLoad() {
            lazyBackgrounds.forEach(bg => {
                if (isInViewport(bg) && !bg.classList.contains('loaded')) {
                    // Add a small delay to ensure smooth transition
                    setTimeout(() => {
                        bg.classList.add('loaded');
                    }, 100);
                }
            });
        }
        
        // Check for lazy load elements on load and scroll
        window.addEventListener('load', handleLazyLoad);
        window.addEventListener('scroll', handleLazyLoad);
    }
    
    // Function to handle lazy loading of ads
    function handleAdLazyLoading() {
        const adContainers = document.querySelectorAll('.ad-container:not(.top-ad)');
        
        // No ad containers found or all are top ads, exit early
        if (adContainers.length === 0) return;
        
        // Add support message to all ad containers
        adContainers.forEach(container => {
            const supportMsg = document.createElement('p');
            supportMsg.className = 'ad-support-message';
            supportMsg.textContent = 'Ad revenue supports our nonprofit mission';
            container.appendChild(supportMsg);
        });
        
        const options = {
            rootMargin: '200px', // Load ads when they're 200px from viewport
            threshold: 0
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const adContainer = entry.target;
                    const adScript = adContainer.querySelector('script');
                    const adIns = adContainer.querySelector('ins');
                    
                    if (adIns && !adContainer.classList.contains('loaded')) {
                        // Execute the adsbygoogle push command
                        (adsbygoogle = window.adsbygoogle || []).push({});
                        adContainer.classList.add('loaded');
                        
                        // Log for debugging
                        console.log('Ad loaded via lazy loading:', adIns.dataset.adSlot);
                    }
                    
                    // Unobserve after loading
                    observer.unobserve(adContainer);
                }
            });
        }, options);
        
        // Observe all ad containers except the top one
        adContainers.forEach(container => {
            observer.observe(container);
        });
    }
    
    // Add CSS for error and success messages
    const style = document.createElement('style');
    style.textContent = `
        .form-group.error input,
        .form-group.error textarea {
            border-color: #ff3860;
        }
        
        .error-message {
            color: #ff3860;
            font-size: 0.9rem;
            margin-top: 5px;
        }
        
        .success-message {
            background-color: #23d160;
            color: white;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
            text-align: center;
        }
        
        header.scrolled {
            padding: 10px 0;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
    `;
    document.head.appendChild(style);
    
    // Prevent ads from causing layout shifts
    window.addEventListener('load', function() {
        // Add a small delay to ensure ads have been processed
        setTimeout(() => {
            document.querySelectorAll('.ad-container ins').forEach(ins => {
                // If the ad didn't load properly
                if (!ins.getAttribute('data-ad-status') || ins.getAttribute('data-ad-status') === 'unfilled') {
                    const container = ins.closest('.ad-container');
                    if (container) {
                        container.style.display = 'none';
                    }
                }
            });
        }, 2000);
    });
});