let quoteContant = document.querySelector(".quote-contant span");
let authorName = document.querySelector(".quote-author span");
let quoteBtn = document.querySelector(".btn button");
let listenBtn = document.querySelector(".listen-btn");
let copyBtn = document.querySelector(".copy-btn");
let shareBtn = document.querySelector(".share-btn");
let copyMsg = document.querySelector(".copy-msg");

async function quoteGenerator() {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();

    quoteContant.textContent = data.content;
    authorName.textContent = "—"+data.author;
    
}

quoteBtn.addEventListener("click", function() {
    quoteGenerator();
});

listenBtn.addEventListener("click", function(event) {
    let utteranse = new SpeechSynthesisUtterance(quoteContant.innerText + "by" + authorName.innerText);
    speechSynthesis.speak(utteranse);
});


copyBtn.addEventListener("click", function(event) {
    console.log(event);
    navigator.clipboard.writeText(`${quoteContant.innerText} ${authorName.innerText}`);
    copyMsg.style.left = "10%";
    setTimeout(()=> {
        copyMsg.style.left = "-20%";
        copyMsg.style.transition = "0.3s";
    }, 2000)
});
