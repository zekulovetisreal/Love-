// =========================
// LẤY CÁC PHẦN TỬ
// =========================

const yesButton =
    document.getElementById("yes");

const noButton =
    document.getElementById("no");

const question =
    document.getElementById("question");

const success =
    document.getElementById("success");


// =========================
// NÚT ĐỒNG Ý
// =========================

yesButton.addEventListener(
    "click",
    function () {

        // Ẩn câu hỏi
        question.style.display = "none";

        // Hiện màn hình thành công
        success.style.display = "block";


        // Tạo rất nhiều tim
        for (let i = 0; i < 50; i++) {

            setTimeout(
                createHeart,
                i * 80
            );

        }

    }
);


// =========================
// NÚT KHÔNG
// =========================

// Máy tính
noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


// Điện thoại
noButton.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    },
    {
        passive: false
    }
);


// Nếu cố bấm
noButton.addEventListener(
    "click",
    moveNoButton
);


// =========================
// DI CHUYỂN NÚT KHÔNG
// =========================

function moveNoButton() {

    // Kích thước button
    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;


    // Khoảng cách an toàn
    const padding = 10;


    // Vị trí tối đa
    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;

    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;


    // Tạo vị trí ngẫu nhiên
    const randomX =
        Math.random() *
        Math.max(maxX, padding);

    const randomY =
        Math.random() *
        Math.max(maxY, padding);


    // Đưa button ra khỏi card
    noButton.style.position =
        "fixed";


    noButton.style.left =
        randomX + "px";


    noButton.style.top =
        randomY + "px";
}


// =========================
// TẠO TIM
// =========================

function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    // Danh sách emoji
    const heartList = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "💓"
    ];


    // Chọn ngẫu nhiên
    heart.textContent =
        heartList[
            Math.floor(
                Math.random() *
                heartList.length
            )
        ];


    // Vị trí ngang
    heart.style.left =
        Math.random() * 100 + "vw";


    // Kích thước
    heart.style.fontSize =
        18 +
        Math.random() * 30 +
        "px";


    // Tốc độ
    heart.style.animationDuration =
        3 +
        Math.random() * 4 +
        "s";


    // Thêm vào trang
    document.body.appendChild(
        heart
    );


    // Xóa sau khi hoàn thành
    setTimeout(
        function () {

            heart.remove();

        },
        7000
    );
}


// =========================
// TIM TỰ ĐỘNG
// =========================

setInterval(
    createHeart,
    700
);