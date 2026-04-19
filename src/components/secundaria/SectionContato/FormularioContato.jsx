
import './FormularioContato.css'

import { useState } from 'react';
function FormularioContato() {

    // Gerencia o estado dos campos do formulário, criado antes de setar o 'value' no form group
    const [FormData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        mensagem: '',
        aceitaTermos: false
    });

    // Gerencia o estado dos erros de email
    const [emailError, setEmailError] = useState('');

    const [cpfError, setCpfError] = useState('');

    const mascaraCPF = (valor) => {
          // 1. Remove tudo o que não é número (o \D significa "não-dígito")
        let cpfLimpo = valor.replace(/\D/g, "");
         // 2. Aplica os pontos e o traço progressivamente
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca o primeiro ponto
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca o segundo ponto
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca o traço

        return cpfLimpo;
    }

    // Atualiza o estado conforme o usuário digita
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let novoValor = type === 'checkbox' ? checked : value;

        
         
            
        if (name === 'cpf' && cpfError) {
            setCpfError('');
        }

        if( name == 'cpf' ) {
            novoValor = mascaraCPF(novoValor)
        }

        if (name === 'email' && emailError) {
            setEmailError('');
        }

        setFormData({
            ...FormData,
            [name]: novoValor
        });

    };

    // Função auxiliar para validar o formato do e-mail via Regex
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Função auxiliar para validar o formato do cpf via Regex
    const validaCpfComRegex = (cpf) => {
        const regexCpfFormatado = /^\d{3}\.\d{3}\.\d{3-\d{2}$/;
        const regexCpfApenasNumeros = /^\d{11}$/;

        return regexCpfFormatado.test(cpf) || regexCpfApenasNumeros.test(cpf);
    }


    // função validadora do cpf via matemática(outra validação feita depois da primeir validação)
    const validaCpfOficial = (cpf) => {
         // Limpa a string tirando pontos e traços (usando métodos de array/string em vez de regex)
        const cpfLimpo = cpf.split('').filter(char => char >= '0' && char <= '9').join('');


        // Rejeita CPFs com tamanho errado ou números repetidos (ex: 111.111.111-11)
        if (cpfLimpo.length !== 11) return false;

         let todosIguais = true;
        for (let i = 1; i < 11; i++) {
            if (cpfLimpo[0] !== cpfLimpo[i]) todosIguais = false;
        }
        if (todosIguais) return false;

        // Cálculo do 1º Dígito Verificador
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

        // Cálculo do 2º Dígito Verificador
        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

        return true;
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validarEmail(FormData.email)) {
            setEmailError('Por favor, insira um endereço de e-mail válido');
            return;
        }

        if(!validaCpfOficial(FormData.cpf)) {
            setCpfError('Insira um cpf válido!');
            return
        }


        console.log('Dados enviados:', FormData);
        alert('Mensagem enviada com sucesso! Entraremos em contato dentro de 24 horas');

        setFormData({nome: '', cpf: '', email: '', mensagem:'', aceitaTermos: false});
    };


    return(
        <form className="ContainerFormularioContato" onSubmit={handleSubmit} autoComplete='off'>
            <h4 className="TituloFormularioContato">
                Envie sua mensagem
            </h4>

            <div className="FormGroup">
                <label htmlFor="nome" className="LabelFormularioContato">Nome</label>

                <input 
                type="text"
                id="nome"
                name="nome"
                value={FormData.nome}
                onChange={handleChange}
                required
                placeholder= "Seu nome completo"
                
                 />
                 
                 
            </div>

            <div className="FormGroup">
                <label htmlFor="cpf" className="LabelFormularioContato" >CPF</label>

                <input 
                type="text"
                id="cpf"
                name="cpf"
                value={FormData.cpf}
                onChange={handleChange}
                required
                placeholder="Seu cpf 123.456.789-00"
                className={cpfError ? 'input-error' : ''}
                autoComplete='new-password'
                />
                {cpfError && <span className="error-text" style={{ color:'red', fontSize: '13px', margin: '-8px 0px -6px', display:'block' }}>{cpfError}</span>}
               

            </div>

            <div className="FormGroup">
                <label htmlFor="email" className="LabelFormularioContato">E-mail</label>

                <input 
                type="email"
                id="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                className={emailError ? 'input-error': ''}
               
                />
                {/* Exibe mensagem de erro se emailError for válido */}
                {emailError && <span className="error-text" style={{ color: 'red', fontSize: '13px', margin: '-8px 0px -6px', display: 'block' }}>{emailError}</span>}
            </div>

            <div className="FormGroup">
                <label htmlFor="mensagem" className="LabelFormularioContato">Mensagem</label>

                <textarea
                    id="mensagem"
                    name="mensagem"
                    rows= "5"
                    value={FormData.mensagem}
                    onChange={handleChange}
                    required
                    placeholder="Como podemos te ajudar?"
                ></textarea>
            </div>

<div className="FooterFormulario">
    
                <div className="FormGroup CheckboxGroup">
                    <input
                    type="checkbox"
                    id="aceitaTermos"
                    name="aceitaTermos"
                    checked={FormData.aceitaTermos}
                    onChange={handleChange}
                    required
                    />
                    
    
                    <label htmlFor="aceitaTermos">
                        Aceito e concordo com os termos de privacidade.
                    </label>
    
                </div>
    
                <button type="submit" className="SubmitBtn">
                    Enviar 
                </button>
</div>
        </form>
    )
}

export default FormularioContato;