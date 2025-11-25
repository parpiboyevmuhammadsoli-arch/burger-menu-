let headerList = document.querySelector(".header__list")
let isOpen = false
document.querySelector(".burgerbox").addEventListener("click",()=>{
    isOpen=!isOpen

    if(isOpen){
        headerList.classList.remove("mobile")
    }
    else{
        headerList.classList.add("mobile")
        // headerList.style.display="flex"
    }
})


localStorage.setItem("name", "Laylo")
localStorage.setItem("age", "15")
localStorage.setItem("height", "160")

localStorage.removeItem("name") 
// localStorage.setItem ->  bizga ma'lumotlarni saqlash uchun kerak bo'ladi.
// localStorage.removeItem  ->  bizga ma'lumotlarni key orqali o'chirib tashlash uchun kerak.