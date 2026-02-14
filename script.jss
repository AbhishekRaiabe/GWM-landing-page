

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Grow With Me Landing Page Loaded Successfully! 🚀');
    
    // Initialize functions
    initSmoothScroll();
    initButtonAnimations();
    trackButtonClicks();
});

/* ========== SMOOTH SCROLL ========== */
function initSmoothScroll() {
    // Smooth scroll for any anchor links (if you add navigation later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ========== BUTTON ANIMATIONS ========== */
function initButtonAnimations() {
    const buyButton = document.querySelector('.buy-button');
    
    if (buyButton) {
        // Add ripple effect on click
        buyButton.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
}

/* ========== TRACK BUTTON CLICKS ========== */
function trackButtonClicks() {
    const buyButton = document.querySelector('.buy-button');
    
    if (buyButton) {
        buyButton.addEventListener('click', function(e) {
            // Log button click (useful for analytics)
            console.log('Buy button clicked - Redirecting to Instagram');
            
            // Optional: Add analytics tracking here
            // Example: gtag('event', 'click', { 'event_category': 'button', 'event_label': 'buy_now' });
        });
    }
}

/* ========== SCROLL ANIMATIONS (Optional) ========== */
// Uncomment if you want fade-in animations on scroll
/*
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.whats-included, .where-to-use, .pricing-section').forEach(section => {
        observer.observe(section);
    });
}
*/

/* ========== COUNTDOWN TIMER (Optional) ========== */
// Uncomment if you want to add a countdown timer
/*
function initCountdownTimer(endDate) {
    const timerElement = document.getElementById('countdown-timer');
    
    if (!timerElement) return;
    
    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        if (distance < 0) {
            clearInterval(timerInterval);
            timerElement.innerHTML = "OFFER ENDED";
        }
    }
    
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// Example: Set countdown for 7 days from now
// const endDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
// initCountdownTimer(endDate);
*/

/* ========== FORM VALIDATION (For future use) ========== */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ========== LOCAL STORAGE (For future use) ========== */
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function getFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error('Error getting from localStorage:', e);
        return null;
    }
}

/* ========== ANALYTICS INTEGRATION (Optional) ========== */
// Add Google Analytics or Facebook Pixel tracking
/*
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Example usage:
// trackEvent('engagement', 'click', 'buy_button');
*/

/* ========== UTILITY FUNCTIONS ========== */
// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ========== CONSOLE MESSAGE ========== */
console.log('%c🚀 Grow With Me - Reels Bundle Landing Page', 'color: #FFD700; font-size: 20px; font-weight: bold;');
console.log('%c150,000+ Reels Bundle - Get Instant Access!', 'color: #FFFFFF; font-size: 14px;');