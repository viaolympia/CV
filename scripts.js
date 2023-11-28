console.log("Script is running!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired!");

    let progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(function (progressBar) {
        let percent = progressBar.getAttribute("data-percent");

        
        let progressBarInner = document.createElement("div");
        progressBarInner.classList.add("progress-bar-inner");
        progressBarInner.style.width = percent + "%";

     
        progressBar.appendChild(progressBarInner);
    });
});
