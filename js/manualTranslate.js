function translatePage(){
    let seletor = document.getElementById("translateOp");

    let desc1 = document.getElementById("desc1");
    let desc2 = document.getElementById("desc2");
    let desc3 = document.getElementById("desc3");

    if(seletor.checked == true){
        desc1.innerText = "Hello, I'm Matheus Santana";
        desc2.innerText = "Electronic Engineer Student";
        desc3.innerText = "Full Stack Developer";
    }else{
        desc1.innerText = "Olá, eu sou Matheus Santana";
        desc2.innerText = "Estudante de Engenharia Eletrônica";
        desc3.innerText = "Desenvolvedor Full Stack";
    }
}