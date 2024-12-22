document.querySelectorAll(".accordion-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        // 토글 콘텐츠와 버튼 상태
        if (content.classList.contains("show")) {
            content.style.maxHeight = "0"; // 닫힘
            content.classList.remove("show");
            button.classList.remove("open"); // `open` 클래스 제거
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; // 열림
            content.classList.add("show");
            button.classList.add("open"); // `open` 클래스 추가
        }
    });
});


// mobile-menu 요소와 close-icon 요소, 그리고 메뉴를 여는 버튼 선택
const mobileMenu = document.getElementById('mobile-menu');
const closeIcon = document.getElementById('close-icon');
const mobileIcon = document.getElementById('mobile-icon');

// close-icon 클릭 시 mobile-menu 숨기기
closeIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('open'); // open 클래스 제거로 메뉴 숨김
});

// mobileIcon 클릭 시 mobile-menu 열기
mobileIcon.addEventListener('click', function() {
    mobileMenu.classList.add('open'); // open 클래스 추가로 메뉴 열기
});