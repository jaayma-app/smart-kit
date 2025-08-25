// Menu toggle
      let menuIcon = document.querySelector('#menu-icon');
      let navbar = document.querySelector('.navbar');

      menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };

      // Scroll sections active link
      let sections = document.querySelectorAll('section');
      let navLinks = document.querySelectorAll('header nav a');

      window.onscroll = () => {
        sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
          };
        });

        // Sticky navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove toggle icon and navbar when clicking navbar link
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      };

      // Scroll reveal
      ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
      });

      ScrollReveal().reveal('.home-content, .feature-header', { origin: 'top' });
      ScrollReveal().reveal('.video-container, .feature-icon, .calibration-steps', { origin: 'bottom' });
      ScrollReveal().reveal('.home-content h1, .feature-info', { origin: 'left' });
      ScrollReveal().reveal('.home-content p, .btn', { origin: 'right' });

      // Typed js
      const typed = new Typed('.multiple-text', {
        strings: ['Smart Kit', 'Gaze Control', 'Length Tracker', 'Angle Meter'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });

      // Language functions (placeholder)
      function changeLanguage(lang) {
        console.log('Changing language to:', lang);
        // Your existing language change functionality would go here
      }
