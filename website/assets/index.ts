import MediaPlayer from '@fbravo/eyemediaplayer'
import AutoPlay from '@fbravo/eyemediaplayer/lib/Plugins/AutoPlay'
import AutoPause from '@fbravo/eyemediaplayer/lib/Plugins/AutoPause'
import Ads from '@fbravo/eyemediaplayer/lib/Plugins/Ads'

const video = document.querySelector("video")
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()]
})

const buttonPlay: HTMLElement = document.getElementById("playButton")
buttonPlay.onclick = () => player.togglePlay()

const buttonMute: HTMLElement = document.getElementById("muteButton")
buttonMute.onclick = () => player.toggleMute()

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
