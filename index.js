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



    let piano = document.querySelector(".piano")
    piano.style.transform = "translateX(" + (-2*document.documentElement.scrollTop) + "px)"

    let piano_div = document.querySelector(".piano_scroll")
    let distance = piano_div.getBoundingClientRect().top
    let move = (distance + window.innerHeight/100*20)/-window.innerHeight + 0.5

    let ab = -100/343
    let hb = 0
    let kb = 0.1

    let position = ab*(move-hb)**3 + kb
    piano.style.transform = "translateX(" + (1-position*10000) + "px)"
}

