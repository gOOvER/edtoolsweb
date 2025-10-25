// Elite Dangerous Tools - Enhanced JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Elite Dangerous themed enhancements
    
    // Add glow effect to important elements
    function addEliteGlowEffects() {
        const headers = document.querySelectorAll('h1, h2');
        headers.forEach(header => {
            if (header.textContent.includes('Elite') || header.textContent.includes('CMDR')) {
                header.classList.add('ed-glow');
            }
        });
    }
    
    // Tool status indicator
    function updateToolStatus() {
        const statusElements = document.querySelectorAll('[data-tool-status]');
        statusElements.forEach(element => {
            const status = element.getAttribute('data-tool-status');
            element.classList.add(`ed-status-${status}`);
            
            // Add status icon
            const icon = document.createElement('span');
            icon.className = 'ed-status-icon';
            switch(status) {
                case 'online':
                    icon.innerHTML = '🟢';
                    break;
                case 'offline':
                    icon.innerHTML = '🔴';
                    break;
                case 'maintenance':
                    icon.innerHTML = '🟡';
                    break;
            }
            element.prepend(icon);
        });
    }
    
    // Elite Dangerous style card animations
    function enhanceToolCards() {
        const cards = document.querySelectorAll('.ed-tool-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.borderColor = 'var(--ed-orange)';
                this.style.boxShadow = '0 6px 25px rgba(255, 102, 0, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.borderColor = 'var(--ed-grey)';
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
            });
        });
    }
    
    // CMDR greeting based on time of day and language
    function displayCMDRGreeting() {
        const greetingElement = document.querySelector('.cmdr-greeting');
        if (greetingElement) {
            const hour = new Date().getHours();
            const isGerman = window.location.pathname.includes('/de/');
            let greeting;
            
            if (isGerman) {
                if (hour < 6) {
                    greeting = "Gute Nacht, Commander! Die Galaxis schläft nie.";
                } else if (hour < 12) {
                    greeting = "Guten Morgen, Commander! Bereit für neue Abenteuer?";
                } else if (hour < 18) {
                    greeting = "Guten Tag, Commander! Die Sterne warten auf Sie.";
                } else {
                    greeting = "Guten Abend, Commander! Zeit für gefährliche Missionen.";
                }
            } else {
                if (hour < 6) {
                    greeting = "Good night, Commander! The galaxy never sleeps.";
                } else if (hour < 12) {
                    greeting = "Good morning, Commander! Ready for new adventures?";
                } else if (hour < 18) {
                    greeting = "Good day, Commander! The stars await you.";
                } else {
                    greeting = "Good evening, Commander! Time for dangerous missions.";
                }
            }
            
            greetingElement.textContent = greeting;
        }
    }
    
    // Elite Dangerous sound effects (optional)
    function initSoundEffects() {
        // Only if user enables sound
        if (localStorage.getItem('ed-sounds') === 'enabled') {
            const buttons = document.querySelectorAll('.md-button');
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    // Play subtle UI sound
                    playUISound();
                });
            });
        }
    }
    
    function playUISound() {
        // Create a subtle beep sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Galaxy background animation
    function initGalaxyBackground() {
        const canvas = document.createElement('canvas');
        canvas.id = 'galaxy-bg';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const stars = [];
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5
            });
        }
        
        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ff6600';
            
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });
            
            requestAnimationFrame(animateStars);
        }
        
        animateStars();
        
        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Tool search functionality
    function initToolSearch() {
        const searchInput = document.querySelector('#tool-search');
        const toolCards = document.querySelectorAll('.ed-tool-card');
        
        if (searchInput && toolCards.length > 0) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                toolCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    }
    
    // Initialize all enhancements
    addEliteGlowEffects();
    updateToolStatus();
    enhanceToolCards();
    displayCMDRGreeting();
    initSoundEffects();
    initGalaxyBackground();
    initToolSearch();
    
    // Elite Dangerous console welcome message
    console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║                     ELITE DANGEROUS TOOLS                   ║
    ║                                                              ║
    ║  Welcome, Commander! Fly dangerous, but fly smart.          ║
    ║  o7                                                          ║
    ╚══════════════════════════════════════════════════════════════╝
    `);
});

// Theme switcher enhancement
function toggleEliteTheme() {
    const currentScheme = document.querySelector('[data-md-color-scheme]').getAttribute('data-md-color-scheme');
    const newScheme = currentScheme === 'elite-dark' ? 'elite-light' : 'elite-dark';
    
    document.querySelector('[data-md-color-scheme]').setAttribute('data-md-color-scheme', newScheme);
    localStorage.setItem('ed-theme', newScheme);
}

// Load saved theme
const savedTheme = localStorage.getItem('ed-theme');
if (savedTheme) {
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('[data-md-color-scheme]').setAttribute('data-md-color-scheme', savedTheme);
    });
}