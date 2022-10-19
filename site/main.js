const navP = document.querySelectorAll(".nav_p")
const navTarget = document.querySelectorAll(".nav_target")

for(let item of navP) {
    item.addEventListener("click", function() {
        for(let targetItem of navTarget){
            if (item.textContent == targetItem.textContent){
                targetItem.scrollIntoView({block: "end", behavior: "smooth"});
            }
        }
    })
}