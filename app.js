let tabContent = document.querySelectorAll(".tab-content")
let tabs = document.querySelectorAll(".tab-title-item")
let tabsWrap = document.querySelector(".tab-title-items")

function hideTabsContent() {
    tabContent.forEach(item => {
        item.style.display = "none"
    })
    tabs.forEach(item => {
        item.classList.remove("tab-active")
    })
}

function showTabsContent(i = 0) {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tab-active")
}
hideTabsContent()
showTabsContent()

tabs.forEach((item, i, arr) => {
    item.addEventListener("click", function (e) {
        if (e.target.classList.contains("tab-title-item")) {
            hideTabsContent()
            showTabsContent(i)
        }
    })
})



// tabsWrap.addEventListener("click",function (e) {
// let target = e.target


//  })