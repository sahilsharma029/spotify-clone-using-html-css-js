console.log("hello");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let songinfo = document.querySelector('.songinfoimg');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "हम हाथ उठा कर कहते हैं हम हो गए राधा रानी के", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "Kishori Tere Charnan Ki Raj Pau", filepath: "songs/2.mp3", coverpath: "covers/10.jpg"},
    {songName: "abdc", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "abdc", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "abdc", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songName: "abdc", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songName: "abdc", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songName: "abdc", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songName: "abdc", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
]

songitem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        songinfo.style.opacity = 1;
    }
    else{
        audioElement.pause();
        songinfo.style.opacity = 0;
    }
}
)

audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;

});

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
}
)

function makeallplay()
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplay();
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime= 0;
        audioElement.play();
    })
})