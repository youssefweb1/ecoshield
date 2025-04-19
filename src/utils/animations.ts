// Add a class to animate elements when they enter the viewport
export const setupScrollAnimations = () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      
      // Check if element is in viewport, with some offset
      if (elementTop < window.innerHeight - elementHeight / 2) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  // Run once on load to check for elements already in view
  animateOnScroll();
  
  return () => {
    window.removeEventListener('scroll', animateOnScroll);
  };
};

// Function to add counter animation to elements
export const setupCounterAnimation = () => {
  const counters = document.querySelectorAll('.animate-counter');
  
  counters.forEach((counter) => {
    const target = parseInt(counter.textContent!.replace(/[^\d]/g, ''), 10);
    let count = 0;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(target / (duration / 16)); // 60fps
    
    const updateCount = () => {
      count += increment;
      if (count >= target) {
        counter.textContent = counter.textContent!.replace(/\d+/, target.toString());
        return;
      }
      
      counter.textContent = counter.textContent!.replace(/\d+/, count.toString());
      requestAnimationFrame(updateCount);
    };
    
    updateCount();
  });
};