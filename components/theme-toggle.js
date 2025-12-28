class CustomThemeToggle extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <button class="theme-toggle" id="themeToggle">
                <i class="fas fa-sun"></i>
                <i class="fas fa-moon"></i>
            </button>
            
            <style>
                .theme-toggle {
                    background-color: var(--border-color);
                    color: var(--text-color);
                    border: none;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    transition: background-color 0.3s;
                }
                
                .theme-toggle:hover {
                    background-color: var(--primary-color);
                    color: white;
                }
                
                .theme-toggle .fa-sun {
                    display: block;
                }
                
                .theme-toggle .fa-moon {
                    display: none;
                }
                
                .dark-mode .theme-toggle .fa-sun {
                    display: none;
                }
                
                .dark-mode .theme-toggle .fa-moon {
                    display: block;
                }
            </style>
        `;
        
        const themeToggle = this.querySelector('#themeToggle');
        
        themeToggle.addEventListener('click', () => {
            const body = document.body;
            const isDark = body.classList.contains('dark-mode');
            
            if (isDark) {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
}

customElements.define('custom-theme-toggle', CustomThemeToggle);

// Initialize theme
(function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
})();