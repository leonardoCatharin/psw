(function(){
  'use strict';
  var fields = document.querySelectorAll('[id^="inp"]');
  function save(){
    var message =
    [].filter.call(fields,function(item){
      return !item.value;
    }).reduce(function(prev,next){
      return prev += "O campo " + next.name + " está incorreto!\n";
    },'')
    message = !!message ? function(){} : "Registro salvo com sucesso!";
    alert(message);
  }
  function clean(){
    [].forEach.call(fields,function(item){
      item.value = '';
    })
  };
  function mountDOMHelpers(){
    document.getElementById('inpPaciente').innerHTML =
    getData().paciente.reduce(function(prev,next){
      return prev += '<option value="'+ next.name+'">' + next.name +' '+  next.sobrenome + '</option>';
    }, '');
    document.getElementById('inpMedico').innerHTML =
    getData().medico.reduce(function(prev,next){
      return prev += '<option>' + next.name +' '+  next.sobrenome + ' [CRM: '+ next.crm + ']</option>';
    }, '');
    document.getElementById('inpConsulta').innerHTML =
    getData().tipoconsulta.reduce(function(prev,next){
      return prev += '<option>' +  next.valor + '[Duração:'+next.horario+']</option>';
    }, '');
    document.getElementById('save').onclick = save;
    document.getElementById('clean').onclick = clean;
  }
  mountDOMHelpers();
})();
