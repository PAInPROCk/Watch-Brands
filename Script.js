        document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
    
        themeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', this.checked);
            document.body.classList.toggle('light-mode', !this.checked);
            localStorage.setItem('theme', this.checked ? 'dark' : 'light');
        });
    
        const savedTheme = localStorage.getItem('theme');
        themeToggle.checked = savedTheme === 'dark';
        document.body.classList.toggle('dark-mode', themeToggle.checked);
        document.body.classList.toggle('light-mode', !themeToggle.checked);
    
        document.querySelectorAll('.Rolex button').forEach(button => {
            button.addEventListener('click', function() {
                const watchUrl = this.dataset.url;
                if (watchUrl) {
                    window.open(watchUrl, "_blank");
                } else {
                    console.error('URL not defined for this button');
                }
            });
        });
    });
    
    
    
    function GMT(){
        window.open("https://www.rolex.com/watches/gmt-master-ii","_blank");
    }
    
    function sub(){
        window.open("https://www.rolex.com/watches/submariner","_blank");
    }
    
    function Datejust(){
        window.open("https://www.rolex.com/watches/datejust","_blank");
    }
    
    function Deepsea(){
        window.open("https://www.rolex.com/watches/deepsea","_blank");
    }
    
    function Sea(){
        window.open("https://www.rolex.com/watches/sea-dweller","_blank");
    }
    
    function Air(){
        window.open("https://www.rolex.com/watches/air-king","_blank");
    }