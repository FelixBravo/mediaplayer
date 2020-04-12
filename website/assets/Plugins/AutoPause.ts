import MediaPlayer from '../MediaPlayer'
class AutoPause {
    private threshold: number
    player: MediaPlayer

    constructor() {
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })

        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0]
        
        const isVisible = entry.intersectionRatio >= this.threshold
        const tiempo = entry.time/1000;

        if (isVisible){
            this.player.play()

            console.log('Tiempo en segundos para play: ' + tiempo)
        } else{
            this.player.pause()
            console.log('Tiempo en segundos para pause: ' + tiempo)
        }
        console.log(entry)
    }

    private handleVisibilityChange(){
        const isVisible = document.visibilityState === 'visible'
        if (isVisible){
            this.player.play()
        } else{
            this.player.pause()
        }
    }
}   


export default AutoPause