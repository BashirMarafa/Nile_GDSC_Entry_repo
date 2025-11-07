console.log("Welcome to your Beginner Web Dev Challenge!");
document.addEventListener('DOMContentLoaded', () => {

   
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleButton.querySelector('i'); 
    
    function toggleTheme() {
        
        body.classList.toggle('dark-mode');

        
        if (body.classList.contains('dark-mode')) {
           
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
          
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    
    themeToggleButton.addEventListener('click', toggleTheme);
    
});
