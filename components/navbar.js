class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <a href="#" class="logo">⭐</a>
                    
                    <div class="nav-links" id="navLinks">
                        <a href="#about" class="nav-link">About</a>
                        <a href="#projects" class="nav-link">Projects</a>
                        <a href="#contact" class="nav-link">Contact</a>
                        <custom-theme-toggle></custom-theme-toggle>
                    </div>
                    
                    <button class="mobile-menu-btn" id="mobileMenuBtn">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </nav>
            
            <style>
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background-color: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-bottom: 1px solid var(--border-color);
                    z-index: 1000;
                    transition: background-color 0.3s;
                }
                
                .dark-mode .navbar {
                    background-color: rgba(31, 41, 55, 0.9);
                }
                
                .navbar .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 20px;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: var(--text-color);
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                }
                
                .nav-link:hover {
                    color: var(--primary-color);
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: var(--text-color);
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: var(--card-bg);
                        flex-direction: column;
                        padding: 2rem;
                        gap: 1.5rem;
                        display: none;
                        box-shadow: var(--shadow-lg);
                        border-bottom: 1px solid var(--border-color);
                    }
                    
                    .nav-links.active {
                        display: flex;
                    }
                }
            </style>
        `;
        
        const mobileMenuBtn = this.querySelector('#mobileMenuBtn');
        const navLinks = this.querySelector('#navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!this.contains(event.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);