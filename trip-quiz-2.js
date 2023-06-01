const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");
const sun = document.getElementById("sun");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
    if(toggleTheme.checked){
      html.dataset.theme = "dark";
      localStorage.setItem("theme","dark");
    }
    else{
      html.dataset.theme = "light";
      localStorage.setItem("theme","light");
    }
  }
  
  const startTheme = localStorage.getItem("theme");
  
  if(startTheme=="light" || !startTheme){
    html.dataset.theme="light";
  }
  else{
    html.dataset.theme="dark";
    toggleTheme.checked=true;
  }


  

function handleChange(atbildes, pareizaAtbilde) {
  var visasAtbildes = document.getElementsByName(atbildes);
  visasAtbildes.forEach((atbilde) => {
  console.log(atbilde);
  if (atbilde.checked == true) {
      if (atbilde.value == pareizaAtbilde) {
        atbilde.parentElement.style.backgroundColor = "green";
      } else {
        atbilde.parentElement.style.backgroundColor = "red";
      }
  } else {
     atbilde.parentElement.style.backgroundColor = "var(--third-color)";
  }
});
 }