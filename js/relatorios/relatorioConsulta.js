(function () {
    var formFields = {};
    var dados = getData()
        , consultas;
    document.getElementById('buscar').onclick = buscar;

    [].forEach.call(document.querySelectorAll("[id^='inp']"), function (item) {
        formFields[item.id] = item;
    });
    function buscar() {
        consultas = dados.consulta.filter(function (data) {
            var d = document.getElementById('data').value.split('-');
            return d.length > 0 && data.data == d[2] + '/' + d[1] + '/' + d[0];
        });

        if (consultas.length > 0) {
            var a = consultas.reduce(function (toReturn, obj) {
                return toReturn += '<tr>\n'
                + '<td>' + obj.medico + '</td>\n'
                + '<td>' + obj.paciente + '</td>\n'
                + '<td>' + obj.hora + '</td>\n'
                + '<td>' + obj.tipo + '</td>\n'
                + '</tr>\n';
            },' ');
            document.getElementsByTagName('tbody')[0].innerHTML = a;
        }
    }
})();
