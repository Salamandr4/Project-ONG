/* scripts.js - máscaras e validação adicional (vanilla JS) */

/* UTIL: aplicar máscara genérica */
function setInputFilter(textbox, inputFilter) {
  ["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

/* Máscara CPF: 000.000.000-00 */
function cpfMask(value){
  return value
    .replace(/\D/g,'')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d{1,2})$/,'$1-$2')
    .slice(0,14);
}

/* Telefone (BR) - formatas 10/11 dígitos: (00) 00000-0000 */
function phoneMask(value){
  const v = value.replace(/\D/g,'').slice(0,11);
  if (v.length <= 10) {
    return v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3').replace(/-$/,'');
  } else {
    return v.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3');
  }
}

/* CEP: 00000-000 */
function cepMask(value){
  return value.replace(/\D/g,'').replace(/(\d{5})(\d{1,3})/,'$1-$2').slice(0,9);
}

/* Inicializa máscaras e validação */
document.addEventListener('DOMContentLoaded', function(){
  // seleção de inputs
  const cpf = document.querySelector('#cpf');
  const tel = document.querySelector('#telefone');
  const cep = document.querySelector('#cep');

  if(cpf){
    cpf.addEventListener('input', e => { e.target.value = cpfMask(e.target.value); });
    // bloqueio de caracteres não numéricos já tratado pela função
  }
  if(tel){
    tel.addEventListener('input', e => { e.target.value = phoneMask(e.target.value); });
  }
  if(cep){
    cep.addEventListener('input', e => { e.target.value = cepMask(e.target.value); });
  }

  // submissão com validação extra (ex: checar CPF mínimo de dígitos)
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', function(e){
      // bloqueia envio se inválido
      if(!form.checkValidity()){
        // permite mostrar mensagens nativas
        form.reportValidity();
        e.preventDefault();
        return;
      }

      // validação simples de CPF (apenas formato: 11 dígitos numéricos)
      if(cpf){
        const digits = cpf.value.replace(/\D/g,'');
        if(digits.length !== 11){
          alert('CPF inválido: verifique se possui 11 dígitos.');
          e.preventDefault(); return;
        }
      }

      // se tudo ok, simular envio (aqui você faria fetch para API)
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Enviando...';

      // demo: salvar localmente (podemos substituir por fetch)
      const data = new FormData(form);
      const obj = Object.fromEntries(data.entries());
      console.log('Form enviado (simulado):', obj);

      // simula resposta
      setTimeout(() => {
        alert('Cadastro realizado com sucesso! (simulação)');
        btn.disabled = false;
        btn.textContent = 'Enviar';
        form.reset();
      }, 900);
    });
  }

  // melhoria de acessibilidade: focar na main via skip link
  const skip = document.querySelector('.skip-link');
  if(skip){
    skip.addEventListener('click', function(e){
      const main = document.querySelector('main');
      if(main){ main.setAttribute('tabindex','-1'); main.focus(); }
    });
  }
});
