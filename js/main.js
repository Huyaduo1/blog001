const helloButton = document.getElementById("hello-button");
if (helloButton) {
    helloButton.addEventListener("click", () => {
        window.alert("你好，欢迎来信。");
    });
}

if (typeof renderMathInElement === "function") {
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
        ]
    });
}
