
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
  
  // Enhanced Profile Section Animations
  const initProfileAnimations = () => {
    // Animate profile image with smooth entrance
    gsap.from('.animate-float', {
      duration: 1.5,
      scale: 0.8,
      opacity: 0,
      rotation: -10,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.3
    });

    // Animate floating badges with staggered entrance
    gsap.from('.floating-badge', {
      duration: 1.2,
      scale: 0,
      opacity: 0,
      rotation: 180,
      ease: 'back.out(1.7)',
      stagger: {
        amount: 0.8,
        from: 'random'
      },
      delay: 0.8
    });

    // Add continuous subtle movement to badges
    document.querySelectorAll('.floating-badge').forEach((badge, index) => {
      gsap.to(badge, {
        y: '+=15',
        duration: 2 + (index * 0.3),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      });
    });

    // Enhance text animations with smoother effects
    gsap.from('.hero-section h1', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from('.hero-section h2', {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.4
    });

    gsap.from('.hero-section p', {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.6
    });

    // Animate CTA buttons
    gsap.from('.hero-section .flex.flex-wrap.gap-4 a', {
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      ease: 'back.out(1.7)',
      stagger: 0.15,
      delay: 0.8
    });

    // Animate social icons
    gsap.from('.hero-section .flex.space-x-5 a', {
      duration: 0.6,
      scale: 0,
      opacity: 0,
      rotation: 360,
      ease: 'back.out(2)',
      stagger: 0.1,
      delay: 1
    });

    // Add hover animation enhancements
    document.querySelectorAll('.floating-badge').forEach(badge => {
      badge.addEventListener('mouseenter', () => {
        gsap.to(badge, {
          scale: 1.3,
          rotation: 15,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      badge.addEventListener('mouseleave', () => {
        gsap.to(badge, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  };
  
  // Enhanced Experience Section Animations
  const initExperienceAnimations = () => {
    // Animate experience cards on scroll
    gsap.utils.toArray('.experience-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out'
      });

      // Animate company logo separately
      const logo = card.querySelector('.company-logo');
      if (logo) {
        gsap.from(logo, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          scale: 0,
          rotation: -180,
          duration: 0.8,
          delay: index * 0.2 + 0.3,
          ease: 'back.out(1.7)'
        });
      }

      // Animate bullet points
      const listItems = card.querySelectorAll('li');
      gsap.from(listItems, {
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
        },
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: index * 0.2 + 0.5,
        ease: 'power2.out'
      });

      // Animate tech tags
      const tags = card.querySelectorAll('.flex.flex-wrap.gap-2 span');
      gsap.from(tags, {
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
        },
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        delay: index * 0.2 + 0.8,
        ease: 'back.out(2)'
      });
    });

    // Add parallax effect to experience section background elements
    gsap.utils.toArray('#experience .absolute.rounded-full').forEach((element, index) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: index % 2 === 0 ? -100 : 100,
        rotation: index % 2 === 0 ? 45 : -45,
        ease: 'none'
      });
    });
  };
  
  // Add responsive handling for mobile devices
  const checkMobile = () => {
    return window.innerWidth < 768;
  };
  
  // Initialize animations based on device
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize background animations
    initBackgroundAnimations();
    
    // Initialize profile animations
    initProfileAnimations();
    
    // Initialize experience animations
    initExperienceAnimations();
    
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
