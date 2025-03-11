
  // Initialize background animations
  function initBackgroundAnimations() {
    // Create bubbles for different sections
    createBubbles('bubbles-container-projects', 15);
    createBubbles('bubbles-container-contact', 10);
    
    // Create glowing dots
    createGlowingDots('glowing-dots-container', 30);
    createGlowingDots('glowing-dots-container-skills', 20);
    
    // Create shooting stars
    createShootingStars('shooting-stars-container', 5);
  }
  
  // Create floating bubbles
  function createBubbles(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 80 + 20; // 20-100px
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.opacity = `${Math.random() * 0.2 + 0.1}`;
      
      // Set custom animation properties
      bubble.style.setProperty('--duration', `${Math.random() * 10 + 10}s`);
      bubble.style.setProperty('--distance', `${Math.random() * 100 - 50}px`);
      bubble.style.setProperty('--distance-x', `${Math.random() * 100 - 50}px`);
      
      // Randomize between indigo and pink
      const color = Math.random() > 0.5 ? 
        'rgba(79, 70, 229, 0.15)' : 'rgba(236, 72, 153, 0.15)';
      bubble.style.background = color;
      
      container.appendChild(bubble);
    }
  }
  
  // Create glowing dots
  function createGlowingDots(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'glowing-dot';
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      
      // Randomize animation duration and delay
      dot.style.animationDuration = `${Math.random() * 3 + 2}s`;
      dot.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(dot);
    }
  }
  
  // Create shooting stars
  function createShootingStars(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.top = `${Math.random() * 70}%`;
      star.style.left = `${Math.random() * 30}%`;
      
      // Randomize animation delay
      star.style.animationDelay = `${Math.random() * 15}s`;
      
      container.appendChild(star);
    }
  }
  
  // Register ScrollToPlugin
  gsap.registerPlugin(ScrollToPlugin);

  // Smooth scroll function
  const smoothScroll = (targetId) => {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: targetSection, offsetY: 70 }, // Adjust offsetY for fixed header
        ease: 'power2.out',
      });
    }
  };

  // Make smoothScroll globally accessible
  window.smoothScroll = smoothScroll;
  
  // Add responsive handling for mobile devices
  const checkMobile = () => {
    return window.innerWidth < 768;
  };
  
  // Initialize animations based on device
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize background animations
    initBackgroundAnimations();
    
    // Adjust animations for mobile if needed
    if (checkMobile()) {
      // Mobile-specific adjustments
      document.querySelectorAll('.animate-fade-in').forEach(el => {
        el.style.animationDuration = '0.5s';
      });
    }
  });
  
  // Handle window resize events
  window.addEventListener('resize', () => {
    // Any responsive adjustments needed on resize
  });
