(function () {
    var formFields = {}
        , isCpfValid = new RegExp("^d{3}.d{3}.d{3}-d{2}$")
        , isPhoneValid = new RegExp("/^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$");

    document.getElementById('save').onclick = save;
    document.getElementById('clear').onclick = clear;

    [].forEach.call(document.querySelectorAll('input'), function (item) {
        formFields[item.id] = item;
    });

    function clear() {
        for (key in formFields) {
            if (formFields[key].type != 'checkbox' &&
                formFields[key].className != "area-texto") {
                formFields[key].value = '';
            }
        }
    }

    function save() {
        var message =
            Object.keys(formFields).reduce(function (prev, next) {
                if(formFields[next].type != 'checkbox' &&
                    formFields[next].className != "area-texto" &&
                    formFields[next].value == '' &&
                    formFields[next].id.indexOf('inp') > -1) {
                    return prev += "O campo " + formFields[next].name + " está vazio!\n";
                }
                return prev += "";
            }, '')
        if(message.length == 0){
            message = 'Salvo com sucesso.'
        }
        alert(message);
        formFields['senha'].value == '' || formFields['senha'].value != formFields['confirmacao'].value ? alert('As senhas devem coincidir') : '';

        if (message.length == 0
            || (formFields['senha'].value != ''
            && formFields['senha'].value == formFields['confirmacao'].value)) {
            location.pathname = 'home.html';
        }
    }
})();
