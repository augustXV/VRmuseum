const navP = document.querySelectorAll(".nav_p")
const navTarget = document.querySelectorAll(".nav_target")
const menuBtn = document.querySelector(".menu_btn")
const headerPicList = document.querySelector(".header_pic_list")

menuBtn.addEventListener("click", function() {
    if (!headerPicList.classList.contains("header_pop_up")){
        headerPicList.classList.remove("header_pic_list");
        headerPicList.classList.add("header_pop_up");

    } else if (headerPicList.classList.contains("header_pop_up")) {
        headerPicList.classList.remove("header_pop_up");
        headerPicList.classList.add("header_pic_list");
    }
})

for(let item of navP) {
    item.addEventListener("click", function() {
        for(let targetItem of navTarget){
            if (item.textContent == targetItem.textContent){
                targetItem.scrollIntoView({block: "center", behavior: "smooth"});
            }
        }
    })
}