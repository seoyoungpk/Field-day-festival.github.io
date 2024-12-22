document.addEventListener("DOMContentLoaded", function () {
    // 모든 아이콘을 가져옵니다.
    const icons = document.querySelectorAll(".icon div");

    // 각 아이콘에 클릭 이벤트 추가
    icons.forEach((icon) => {
        icon.addEventListener("click", () => {
            // 현재 클릭된 아이콘의 클래스 이름 가져오기
            const className = icon.querySelector("div").classList[0].replace("-img", "");

            // 모든 맵 이미지를 가져옵니다.
            const mapImages = document.querySelectorAll(".map img");

            // 각 이미지를 처리
            mapImages.forEach((img) => {
                if (img.classList.contains(`map-${className}`)) {
                    // 이름이 일치하는 이미지는 보이게 함
                    img.style.opacity = "1";
                    img.style.transition = "opacity 0.5s ease-in-out";
                } else if (img.classList.contains("map")) {
                    // "background image"는 항상 보이게 함
                    img.style.opacity = "1";
                } else {
                    // 다른 이미지는 숨김
                    img.style.opacity = "0";
                    img.style.transition = "opacity 0.2s ease-in-out";
                }
            });
        });
    });
});

function refreshPage() {
    location.reload(); // 페이지를 새로고침
}

const scrollButton = document.getElementById('scroll-button');
    const showStart = 200; // 버튼이 나타나기 시작하는 스크롤 위치
    const showEnd = 800; // 버튼이 사라지는 스크롤 위치

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        // 특정 구간에서만 버튼 표시
        if (scrollY > showStart && scrollY < showEnd) {
            scrollButton.classList.add('show');
            scrollButton.classList.remove('hide');
        } else {
            scrollButton.classList.add('hide');
            scrollButton.classList.remove('show');
        }
    });


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