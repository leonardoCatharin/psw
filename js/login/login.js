(function(){

  document.getElementById('botao-login').onclick = validation;


  function validation(){
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if(!getData().checkLogin(nome,senha)){
      alert ("Informações incorretas");
    }
    else{
      location.pathname = '/home.html';
    }
  }

})();
