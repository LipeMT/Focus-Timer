import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export function registerControls(event) {
    controls.addEventListener('click', (event) => {
        // console.log(event.target) //Vai capturar o alvo do clique (target)
        const action = event.target.dataset.action //essa linha vai capturar qual é minha ação ao clicar em qualquer parte do controle, fazendo assim a ligação com o "data-action" que defini em cada elemento da div "controls"
        if (typeof actions[action] !== "function") {
            return
        }
        // actions.toggleRunning(); --> uma forma de chamar a função
        actions[action]() // -->outra forma de chamar a função
    })

    //'controls' foi importado da parte de elementos da nossa aplicação, essa função registerControls faz com que o evento click sobre o elemento 'controls' do html seja mostrado no console da aplicação
}

export function setMinutes(){
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })
    el.minutes.onkeypress = (event) => /\d/.test(event.key) //expressão regular, a variável \d permite que coloque apenas númetos a função test() faz o teste da tecla digitada, e em junção com \d, retorna true quando é digitado um valor numérico

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time < 60 ? time : 60

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
    
}