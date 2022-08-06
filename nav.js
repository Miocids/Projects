const link = document.querySelector(".show-links");
const navToggle = document.querySelector(".nav-toggle");
const button = document.querySelector(".nav-header1");

navToggle.addEventListener("click",(e)=>{
    if (link.classList.contains("show-links")){
        link.classList.remove("show-links");
    } else {
        
        link.classList.add("show-links");
    }
    })

    button.addEventListener("click", (e)=>{
        link.classList.toggle("show-links1");
    })
