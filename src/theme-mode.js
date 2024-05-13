let lightMode = true
const buttonTheme = document.getElementById('theme')

buttonTheme.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')


    const mode = !lightMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `Ativar ${mode} mode`  //currentTarget - O próprio botão ==> essa questão é para a acessibilidade do usuário com leitor de tela (screen reader)
    lightMode = !lightMode
})