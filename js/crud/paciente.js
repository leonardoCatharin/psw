(function () {
  var formFields = {},
      newPaciente = {};
  document.getElementById('save').onclick = save;
  document.getElementById('clean').onclick = clear;
  document.getElementById('prontuario').onclick = prontuario;
  [].forEach.call(document.querySelectorAll('input'),function(item){
    formFields[item.id] = item;
  });
  function isAdicionalAndCheckbox(key){
    return (
       key == "fuma"
    || key == "alcool"
    || key == "diabetes"
    || key == "colesterol"
    || key == "cardio")
  }

  function prontuario(){
    location.href = "/views/prontuario/prontuario.html";
  }
  
  function clear(){
    Object.keys(formFields).forEach(function(item){
      formFields[item].value = '';
    })
  }

  function save(){
    var message =
    Object.keys(formFields).reduce(function(prev,next){
      if(formFields[next].type != 'checkbox' &&
         formFields[next].className != "area-texto" &&
         formFields[next].value == ''){
        return prev += "O campo " + formFields[next].name + " está vazio!\n";
      }
      return prev +="";
    },'')

    formFields['email'].checkValidity()  ? function(){} : (message += "O campo de email está no formato errado!\n");
    if(!message){
      message += "O registro foi salvo com sucesso!";
      newPaciente.adicionais = {};

      Object.keys(formFields).forEach(function(item){
        if(isAdicionalAndCheckbox(item)){
          newPaciente.adicionais[item] = (formFields[item].checked);
        } else {
          newPaciente[item] = formFields[item].value;
        }
      })
      if(document.getElementById('alergia').value)
        newPaciente.adicionais.alergias = document.getElementById('alergia').value;
      if(document.getElementById('cirurgia').value)
        newPaciente.adicionais.cirurgia = document.getElementById('cirurgia').value;
      }
    alert(message);
    // console.log(newPaciente) -> Exibe o paciente;
    clear();
  }
})();
