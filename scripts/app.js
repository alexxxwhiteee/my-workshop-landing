document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
    const maxWidth = 4000;
   
    
    window.addEventListener("scroll", function () {
      if (window.scrollY < 100 || window.outerWidth > maxWidth) {
        backToTop.style.display = "none";
      } else {
        backToTop.style.display = "block";
      }
    });
   
    
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });


