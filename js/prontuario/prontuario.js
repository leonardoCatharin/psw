(function(){
  'use strict';
  var diagnostico = document.getElementById('inpDiagnostico')
  ,   salvar = document.getElementById('salvar')
  ,   limpar = document.getElementById('limpar')
  ,   formFields = document.querySelectorAll('[id^="inp"]')
  ,   newProntuario = {};

  document.getElementById('inpPaciente').innerHTML = getData().paciente.reduce(function(prev,next){
    return prev+= '<option value="'+ next.name +'">' + next.name + ' ' + next.sobrenome + '</option>';
  },'')

  function save(){
    var message = 'É necessário um diagnóstico para gerar um prontuário';
    if(!!diagnostico.value){
      [].forEach.call(formFields,function(item){
        newProntuario[item.name.toLowerCase()] = item.value;
      })
      message = ('Paciente salvo com sucesso!');
    }
    alert(message)
  }
  function clean(){
    [].forEach.call(formFields,function(item){
      item.value = "";
    })
  }

  salvar.onclick = save;
  limpar.onclick = clean;

})();
