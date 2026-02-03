 function myFunction() {
    alert("function is working");
}

const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  
  if(document.body.classList.contains("dark")) {
    themeToggleBtn.textContent = "☀️"; 
  } else {
    themeToggleBtn.textContent = "🌙"; 
  }
});
