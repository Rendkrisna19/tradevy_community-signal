const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const arrow = document.querySelector('.arrow');

question.addEventListener('click', () => {
  answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  arrow.classList.toggle('down');
});


const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavbarLinks = document.getElementById('mobile-navbar-links');

        mobileMenu.addEventListener('click', () => {
            mobileNavbarLinks.classList.toggle('active');
        });

        document.querySelectorAll('.navbar-links a, .mobile-navbar-links a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                mobileNavbarLinks.classList.remove('active');
            });
        });
          
