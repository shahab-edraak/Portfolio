let theme = "dark"

      function scrollToTop() {
        window.scroll(100,100);
      }
      function ChangeTheme(){
        const root_theme = document.querySelector(':root');
        if(theme==="dark"){
          root_theme.style.setProperty('--clr-dark', '#ffffff'); 
          theme="light"
          
        }else{
          root_theme.style.setProperty('--clr-dark', '#070a13'); 
          theme="dark"
        }
      }