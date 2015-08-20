(function () {
  var formFields = {}
  ,   isCpfValid = new RegExp("^d{3}.d{3}.d{3}-d{2}$")
  ,   isPhoneValid = new RegExp("/^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$");

  document.getElementById('save').onclick = save;
  document.getElementById('clear').onclick = clear;

  [].forEach.call(document.querySelectorAll('input'),function(item){
    formFields[item.id] = item;
  });

  function clear(){
    for(key in formFields){
      if(formFields[key].type != 'checkbox' &&
          formFields[key].className != "area-texto" &&
          formFields[key].value == ''){
        formFields[key].value == '';
      }
    }
  }

  function save(){
    var message =
    Object.keys(formFields).reduce(function(prev,next){
      if(formFields[next].type != 'checkbox' &&
         formFields[next].className != "area-texto" &&
         formFields[next].value == '' &&
      formFields[next].id.indexOf('inp') > -1){
        console.log(formFields[next].name,formFields[next].id.indexOf('inp'))
        return prev += "O campo " + formFields[next].name + " está vazio!\n";
      }
      return prev +="";
    },'')
    !
    isCpfValid.test(formFields['inpCpf'].value) ? function(){} : (message += "O campo de CPF não está no formato errado!\n");
    isPhoneValid.test(formFields['fonefixo'].value) ? function(){} : (message += "O campo de Telefone Fixo não está no formato errado!\n");
    isPhoneValid.test(formFields['fonecelular'].value) ? function(){} : (message += "O campo de Telefone Celular não está no formato errado!\n");
    alert(message);
    formFields['senha'].value=='' || formFields['senha'].value != formFields['confirmacao'].value?alert('As senhas devem coincidir'):'';
  }
})();
