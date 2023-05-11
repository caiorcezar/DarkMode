const botaoMudaTema = document.querySelector('#muda-tema');

//troca Dark Mode
function trocaDarkMode() {
    document.body.classList.toggle('dark')
}

//Carrega a opção do usuário
function carregaTema(){
    const darkMode = localStorage.getItem('dark')

    if(darkMode){
        trocaDarkMode()
    }
}
carregaTema()

botaoMudaTema.addEventListener('change', function () {

    trocaDarkMode()

    //Salvando Light ou dark mode
    localStorage.removeItem('dark')
    
    if (document.body.classList.contains('dark')){
        localStorage.setItem('dark', 1)
    }

})