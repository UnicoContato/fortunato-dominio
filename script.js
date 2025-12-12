document.addEventListener('DOMContentLoaded', () => {
    
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('scroll-hide');
            header.classList.remove('scroll-show');
        } else {
            header.classList.remove('scroll-hide');
            header.classList.add('scroll-show');
        }
        lastScrollTop = scrollTop;
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const privacyBtn = document.getElementById('privacy-btn');
    const privacyModal = document.getElementById('privacy-modal');
    const closeModal = document.getElementById('close-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    function toggleModal(show) {
        if (show) {
            privacyModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            privacyModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    privacyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(true);
    });

    closeModal.addEventListener('click', () => toggleModal(false));
    closeModalBtn.addEventListener('click', () => toggleModal(false));

    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            toggleModal(false);
        }
    });
});