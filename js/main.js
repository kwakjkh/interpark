window.onload = function(){    
    // 상단의 마이페이지리스트 기능
    const arrow = document.querySelector(".icon-arrow")
    const mypage = document.querySelector(".mypage-list")
    arrow.onclick = function(){
        mypage.classList.toggle("show")
    }
}