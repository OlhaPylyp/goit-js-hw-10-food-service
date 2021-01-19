import '../sass/styles.scss';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs ={ 
//  theme: document.querySelector('.theme-switch'),
    input: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
  
}

refs.input.addEventListener('change', switchTheme)
function switchTheme(event) { 
    event.preventDefault();
    refs.body.classList.add('light-theme') 
    if (event.currentTarget.checked) {
        // addDarkThemeToBody()
        refs.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('Theme', Theme.DARK);
    } else { refs.body.classList.replace('dark-theme','light-theme', );    localStorage.setItem('Theme', Theme.LIGHT);  } 
}
// function addDarkThemeToBody() { 
//     // refs.body.classList.add('dark-theme')
//     // refs.body.classList.remove('light-theme') 
//     refs.body.classList.replace(light-theme,dark-theme) 
//     // const darkTheme = JSON.stringify(Theme.DARK);
//     // const parsed = JSON.parse(darkTheme);
//     localStorage.setItem('Theme', Theme.DARK);  

// };
// function addLightThemeToBody() { 
// refs.body.classList.replace(light-theme, dark-theme) 
//     // refs.body.classList.add('light-theme') 
//     // const lightTheme = JSON.stringify(Theme.LIGHT);
//     // const parsedLight = JSON.parse(lightTheme );
// //     localStorage.setItem('Theme', Theme.LIGHT); 
// };
const saveTheme = localStorage.getItem("Theme");
if (saveTheme === Theme.DARK) { 
    refs.body.classList.add('dark-theme')
    refs.input.checked = true; 
    }