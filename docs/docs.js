// Dokumentation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active');
            sidebar.classList.toggle('sidebar-collapsed');
        });
    }

    // Responsive Sidebar
    function handleResize() {
        if (window.innerWidth < 768) {
            sidebar.classList.add('sidebar-collapsed');
            hamburger.classList.add('is-active');
        } else {
            sidebar.classList.remove('sidebar-collapsed');
            hamburger.classList.remove('is-active');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    // Smooth Scroll für Anker-Links
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

    // Aktiven Menüpunkt hervorheben
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Code-Beispiele kopieren
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Kopieren';
        
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent)
                .then(() => {
                    copyButton.textContent = 'Kopiert!';
                    setTimeout(() => {
                        copyButton.textContent = 'Kopieren';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Fehler beim Kopieren:', err);
                });
        });
        
        block.parentNode.insertBefore(copyButton, block);
    });
});

document.addEventListener('alpine:init', () => {
    Alpine.data('sidebar', () => ({
        isOpen: window.innerWidth >= 768,
        
        init() {
            this.handleResize();
            window.addEventListener('resize', () => this.handleResize());
        },
        
        handleResize() {
            this.isOpen = window.innerWidth >= 768;
        },
        
        toggle() {
            this.isOpen = !this.isOpen;
        }
    }));
}); 