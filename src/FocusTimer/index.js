import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()
    timer.countDown()
    events.setMinutes()

    events.registerControls(); //função de "events sendo chamada, através da segunda importaçao, ou seja, está executando a funçao de registrar os controles da aplicação, play, pause, etc"
}