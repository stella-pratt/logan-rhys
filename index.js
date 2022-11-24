window.onscroll = function() {
    let x = document.documentElement.scrollTop/window.innerHeight
    let h = 0.8
    let a = -(25/16)
    let k = 1
    let transparency = a*(x-h)**2 + k
    if(x-h>0) {
        transparency = 1
    }
    let shader = document.querySelector(".shade")
    shader.style.backgroundColor = "rgba(20,20,20," + transparency + ")"


    let text = document.querySelector(".header_text")

    text.style.bottom = (window.innerHeight / 100 * 3) + 0.0015 * document.documentElement.scrollTop**2 + "px"






}