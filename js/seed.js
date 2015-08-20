function getData(){
  return {
    'medico': [
      {id: 0, name: 'Alexandre', sobrenome:'Gebara', crm: '876049', telefone: '44 98717711',login: 'alegebara',senha:'123'},
      {id: 1, name: 'Mario', sobrenome:'Leonardo', crm: '312321', telefone: '44 9523211',login: 'maleonardo',senha:'123'},
      {id: 2, name: 'João', sobrenome:'Juca', crm: '12312321', telefone: '44 213129312',login: 'jojuca',senha:'123'},
      {id: 3, name: 'Marco', sobrenome:'Aurélio', crm: '233333', telefone: '44 1308493',login: 'maurelio',senha:'123'},
      {id: 4, name: 'Jorge', sobrenome:'Silva', crm: '12321', telefone: '44 123812321',login: 'josilva',senha:'123'}
    ],
    'paciente': [
      {id: 0, name: 'João',sobrenome:'da Silva',  idade: 28,prontuario: []},
      {id: 1, name: 'Judas',sobrenome:'Skywalker',  idade: 66,prontuario: []},
      {id: 2, name: 'Luigi',sobrenome:'Mario',  idade: 33,prontuario: []},
      {id: 0, name: 'Evandro',sobrenome:'Juca',  idade: 22,prontuario: []}
    ],
    'secretaria': [
      {id: 0, name: 'Joana', sobrenome:'White', telefone: '44 97636382',login: 'joanawhite',senha:'123'},
      {id: 1, name: 'Man', sobrenome:'Golin', telefone: '47 82729272',login: 'mangolin',senha:'123'},
      {id: 2, name: 'Julia', sobrenome:'Juliana', telefone: '44 1232333',login: 'juju',senha:'123'},
      {id: 3, name: 'Rafaela', sobrenome:'Hakaraka', telefone: '44 123333',login: 'raha',senha:'123'},
      {id: 4, name: 'Bia', sobrenome:'Zus', telefone: '420 12312321',login: 'biazus',senha:'123'}
    ],
    'consulta': [
      {medico: 'Alexandre',paciente: 'João', hora: '14:30', data: '16/09/2015',tipo:'Primeira Consulta'},
      {medico: 'Mario',paciente: 'Judas', hora: '11:30', data: '25/09/2015',tipo:'Retorno'},
      {medico: 'Jorge',paciente: 'Evandro', hora: '17:20', data: '25/08/2015',tipo:'Primeira Consulta'},
      {medico: 'Marco',paciente: 'Luigi', hora: '19:30', data: '12/09/2015',tipo:'Primeira Consulta'}
    ],
    'tipoconsulta': [
      {horario: '60 minutos', valor: 'Primeira consulta'},
      {horario: '30 minutos', valor: 'Consulta de retorno'},
    ],
    hasMedico: function(name){
      return this.medico.filter(function(item){
        return name == item.name;
      })
    },
    checkLogin: function (login,senha){
      return this.medico.concat(this.secretaria).filter(function(item){
        return item.login == login && item.senha==senha;
      }).length>0
    }
  }
}
