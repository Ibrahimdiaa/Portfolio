document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const projectCards = document.querySelectorAll('.project-card');
  const skillItems = document.querySelectorAll('.skill-item');
  const socialLinks = document.querySelectorAll('.social-link');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function checkVisibility() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
      
      if (isVisible) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
    
    projectCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
      const delay = card.getAttribute('data-delay') || 0;
      
      if (isVisible) {
        setTimeout(() => {
          card.classList.add('visible');
        }, delay * 1000);
      } else {
        card.classList.remove('visible');
      }
    });
    
    skillItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
      
      if (isVisible) {
        item.classList.add('visible');
      }
    });
    
    socialLinks.forEach(link => {
      const rect = link.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
      
      if (isVisible) {
        link.classList.add('visible');
      }
    });
  }
  
  // Navigation active state
  function updateActiveNav() {
    let fromTop = window.scrollY + 100;
    
    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);
      
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  checkVisibility();
  updateActiveNav();
  window.addEventListener('scroll', function() {
    checkVisibility();
    updateActiveNav();
  });
  
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px) scale(1.08) rotateY(-15deg)';
    });
    
    item.addEventListener('mouseleave', function() {
      if (!this.classList.contains('visible')) {
        this.style.transform = 'translateX(-100px)';
      } else {
        this.style.transform = 'translateY(0) scale(1) rotateY(0)';
      }
    });
  });
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-20px) rotateX(5deg) rotateY(-5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
      if (!this.classList.contains('visible')) {
        this.style.transform = 'translateX(-100px)';
      } else {
        this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
      }
    });
  });
  
  // إضافة معالج حدث للبريد الإلكتروني
  const emailLink = document.getElementById('email-link');
  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'mailto:Himabrinck@gmail.com';
    });
  }
});

function openProjectModal(projectId) {
  const modal = document.getElementById(`${projectId}-modal`);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal(projectId) {
  const modal = document.getElementById(`${projectId}-modal`);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.project-modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}