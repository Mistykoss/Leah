document.getElementById("invitacion").play();
document.getElementById("btn-start").addEventListener("click", ()=>{
    const main = document.getElementById("main-page");
    const video = document.getElementById("invitacion");
    const btn_regalos = document.getElementById("regalos");
    main.classList.add("desaparecer");
    //reproducir video
    video.play();
    setTimeout(()=>{
        btn_regalos.classList.add("show");
    }, video.duration * 700);
    setTimeout(()=>{
        main.style.display = "none";
    }, 1200);
});

//# sourceMappingURL=index.de158e3a.js.map
