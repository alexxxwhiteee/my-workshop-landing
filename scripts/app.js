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



  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("resize", function (event) {
        event.preventDefault();

        const html = document.querySelector("html");
        const nav = document.querySelector("nav");
        let navHeight = nav.offsetHeight
        const h = document.getElementsByClassName("black")
        let hHeight = h[0].offsetHeight
        html.style.scrollPaddingTop = `${navHeight+hHeight+24}px`;
    });
    });



  document.addEventListener("DOMContentLoaded", function () {
    const imgView = [...document.querySelectorAll(".product__photoes img")];
    
    let div = document.createElement("div");
    div.className = "div__img";

    let button = document.createElement("button");
    button.className = "btn";

    let img = document.createElement("img");
    img.className = "img__view";
    
for (let i of imgView) {
        i.addEventListener("click", function (event) {
        event.preventDefault();

        img.src = i.src
        img.style.top = `${(window.scrollY)+window.innerHeight/2}px`;
        if (window.innerHeight > window.innerWidth){
            img.style.width = `${(window.innerWidth)*0.7}px`;
            img.style.height = "initial";
        } else {
            img.style.height = `${(window.innerHeight)*0.7}px`;
            img.style.width = "initial";
        }
        div.style.top = `${window.scrollY}px`;
        button.style.top = `${window.scrollY}px`;

        document.body.append(div);
        document.body.append(button);
        document.body.append(img);
        document.body.style.overflow = "hidden";
        });
    }

button.addEventListener("click", function (event) {
        event.preventDefault();
    
        div.remove();
        button.remove();
        img.remove();
        document.body.style.overflow = "auto";
        });
}); 




let userAgent = navigator.userAgent

function getBrowserName(userAgent) {
    if (userAgent.includes("Firefox")) {
        return;
    } else if (userAgent.includes("SamsungBrowser")) {
        return;
    } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        return;
    } else if (userAgent.includes("Edge")) {
        return;
    } else if (userAgent.includes("Edg")) {
        return;
    } else if (userAgent.includes("Chrome")) {
        return;
    } else if (userAgent.includes("Safari")) {
        alert ("Возможно некорректное отображение на устройствах под управлением macOS и iOS");
    } else {
      return;
    }
  }
  
getBrowserName(userAgent)

