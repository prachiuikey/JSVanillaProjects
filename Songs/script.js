const songs = ["Albatroz", "Friends" ,
"Mess" , "Heaven" , "Pepeta" , "Trampoline"];

songs.forEach((song) => {
    const btn = document.createElement('button');
    const stopBtn = document.createElement('button');
    btn.classList.add("btn");
    stopBtn.classList.add("btn2");

    btn.innerText = song;
    stopBtn.innerText = "X";
    stopBtn.style.color = "red";

    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(song).play();
        
    });

    stopBtn.addEventListener("click", ()=> {
        document.getElementById(song).pause();
    });

    document.body.appendChild(btn);
    document.body.appendChild(stopBtn);
});

function stopSongs() {
    songs.forEach((song) => {
        const s = document.getElementById(song);
        
        s.pause();
        s.currentTime = 0;
    });
}