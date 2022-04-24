let video = document.getElementById('video01');
let titleVideo = document.getElementById('title_video');
let btn_back = document.getElementById('btn-back');
let btn_decrease = document.getElementById('btn-decrease');
let btn_play = document.getElementById('btn-play');
let btn_forward= document.getElementById('btn-forward');
let btn_increase = document.getElementById('btn-increase');
let btn_stop = document.getElementById('btn-stop');
let progress_bar = document.getElementById('progress-bar');
let vol_bar = document.getElementById('vol_bar');
let icon_vol = document.getElementById('imageVol');

let list_videos = document.querySelectorAll('.list_video_poster');
list_video_stored = [
    {
        title: "<h3 id='title_video'>Elefante</h3>",
        src: "./assets/video/elef.mp4",
        img: "./assets/img/elefante.jpg"

    },
    {
        title: "<h3 id='title_video'>Leão</h3>",
        src: "./assets/video/leao01.mp4",
        img: "./assets/img/leao.jpg"
    },
    {
        title: "<h3 id='title_video'>Gafanhoto</h3>",
        src: "./assets/video/gaf.mp4",
        img: "./assets/img/gafanhoto.webp"
    },
    {
        title: "<h3 id='title_video'>Tucano</h3>",
        src: "./assets/video/tucano.mp4",
        img: './assets/img/tucano.jpg'
    },
    {
        title: "<h3 id='title_video'>Peixe-palhaço</h3>",
        src: "./assets/video/peixe-p.mp4",
        img: "./assets/img/peixe-palhaço.jpg"
    },
]

//seletor de videos
for (let i = 0; i < list_videos.length; i++) {
    list_videos[i].addEventListener('click', function(e) {
         console.log('--', e.target.innerHTML)
        titleVideo.innerHTML = list_video_stored[i].title;
        video.setAttribute('src', list_video_stored[i].src);
        video.setAttribute('poster', list_video_stored[i].img);
     })
}



btn_play.addEventListener('click', play_pause);
function play_pause(){
    let sts = btn_play.getAttribute('status');
    if(sts == 'true'){
        video.play();
        btn_play.setAttribute('src', './assets/img/pause.png');
        btn_play.setAttribute('status', 'false');
    }
    if(sts == 'false'){
        video.pause();
        btn_play.setAttribute('src', './assets/img/play-buttton.png');
        btn_play.setAttribute('status', 'true')
    }
}

btn_back.addEventListener('click', backMinutes);
function backMinutes(){
    video.currentTime -= 10;
}

btn_forward.addEventListener('click', forwardMinutes);
function forwardMinutes(){
    video.currentTime += 10;
}

btn_decrease.addEventListener('click', decreaseVel);
function decreaseVel(){
    video.playbackRate -= 0.1;
}

btn_increase.addEventListener('click', increaseVel);
function increaseVel(){
    video.playbackRate += 0.1;
}

btn_stop.addEventListener('click', stop);
function stop(){
    video.pause();
    video.currentTime = 0;
}

video.addEventListener('timeupdate', (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progress_bar.style.width = progressWidth + '%';
    // console.log(currentTime)
    // console.log(duration)
    //   console.log('----', progressWidth)
});

//volume
function nivelVol(){
    volume = vol_bar.value / 100;
    video.volume = volume;
    if(video.volume === 0){
        imageVol.setAttribute('src', './assets/img/mute.png');
    }else if(video.volume < 0.2){
        imageVol.setAttribute('src', './assets/img/vol_baixo.png');

    }else if(video.volume < 0.6){
        imageVol.setAttribute('src', './assets/img/vol_medio.png');
    }else{
        imageVol.setAttribute('src', './assets/img/vol_alto.png');
    }
}

function mudo(){
    if (video.volume > 0) {
        icon_vol.setAttribute('src', './assets/img/mute.png');
        video.volume = 0;
    }else{
        icon_vol.setAttribute('src', './assets/img/vol_alto.png');
        video.volume = 1;
    }
}

 




