// =========================
// Language Menu
// =========================

const languageButton = document.getElementById("languageButton");
const languageMenu = document.getElementById("languageMenu");

if (languageButton && languageMenu) {

    languageButton.addEventListener("click", function (e) {

        e.stopPropagation();
        languageMenu.classList.toggle("show");

    });

    document.addEventListener("click", function () {

        languageMenu.classList.remove("show");

    });

    languageMenu.addEventListener("click", function (e) {

        e.stopPropagation();

    });

}


// =========================
// Language Change
// =========================

document.querySelectorAll("[data-lang]").forEach(item => {

    item.addEventListener("click", function (e) {

        e.preventDefault();

        const targetLang = this.dataset.lang;

        // 현재 주소
        let path = window.location.pathname;

        // 언어 폴더 변경
        path = path.replace("/ko/", "/" + targetLang + "/");
        path = path.replace("/en/", "/" + targetLang + "/");
        path = path.replace("/jp/", "/" + targetLang + "/");
        path = path.replace("/cn/", "/" + targetLang + "/");

        window.location.href = path;

    });

});