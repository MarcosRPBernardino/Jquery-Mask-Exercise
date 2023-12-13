$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf : {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages:{
            nome: 'Por favor, digite seu nome completo.',
            email: 'Por favor, digite um email válido.',
            telefone: 'Por favor digite seu telefone com DDD.',
            cpf: 'Por favor, digite seu CPF.',
            endereco:'Por favor, digite seu endereço.',
            cep:'Por favor, digite seu CEP.',
        },
        submitHandler: function(form) {
            $(form).submit();
        },
        invalidHandler: function(e,validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
            alert (`O formulário contém  ${camposIncorretos} campos incorretos!`);
            }
        }
    })
})