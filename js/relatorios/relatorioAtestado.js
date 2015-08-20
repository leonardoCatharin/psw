(function () {
    var formFields = {};
    
    var dados = getData()
        , paciente;


    document.getElementById('buscar').onclick = buscar;
    document.getElementById('imprimir').onclick = imprimir;

    [].forEach.call(document.querySelectorAll("[id^='inp']"), function (item) {
        formFields[item.id] = item;
    });

    console.log(formFields)

    function imprimir() {
        var message =
            Object.keys(formFields).reduce(function (prev, next) {
                if (formFields[next].value == '') {
                    return prev += "O campo " + formFields[next].name + " está vazio ou invalido!\n";
                }
                return prev += "";
            }, '')

        if(paciente == null && formFields.inpBusca.value.length > 0){
            message+='Uma pessoa tem que ser selecionada\n';
        }
        if(message.length == 0){
            message = 'Impressão bem sucedida!!!';
            location.pathname = 'home.html';
        }
        alert(message);
    }

    function buscar() {
        paciente = dados.paciente.filter(function (data) {
            return data.name == document.getElementById('inpBusca').value;
        })[0];

        if (paciente == null) {
            document.getElementById('inpBusca').value = '';
            alert('Paciente nao encontrado');
        } else {
            alert('Paciente encontrado');
        }
    }
})();
