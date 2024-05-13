import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import * as sounds from './sounds.js'

export function updateDisplay(seconds, minutes){
    seconds = seconds ?? state.seconds //verifica se o valor passado na função é null, se for, seconds receberá o state.seconds
    minutes = minutes ?? state.minutes 

    el.seconds.textContent = String(seconds).padStart(2, "0") //preencher o começo, quero um número com 2 caracteres, e se tiver só um, ele preenche com 0
    el.minutes.textContent = String(minutes).padStart(2, "0")

}

export function countDown(){

    clearTimeout(state.countdownId)

    if(!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        sounds.kitchenTimer.play()
        return
    }

    updateDisplay(seconds, minutes)

    state.countdownId = setTimeout(() => countDown(), 1000);
}