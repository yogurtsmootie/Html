function playVideo(videoSrc) {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoElement = document.getElementById('videoElement');
    var videoSource = document.getElementById('videoSource');
    
    videoSource.src = videoSrc;
    videoElement.load();
    videoElement.muted = true; // 비디오 음소거
    videoElement.play();  // 비디오 자동 재생
    videoPlayer.style.display = 'block';
}

function closeVideo() {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoElement = document.getElementById('videoElement');
    
    videoElement.pause();
    videoPlayer.style.display = 'none';
}

function closeVideoByClickOutside(event) {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoElement = document.getElementById('videoElement');

    if (!videoElement.contains(event.target)) {
        closeVideo();
    }
}
