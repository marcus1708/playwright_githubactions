document.addEventListener('DOMContentLoaded', function () {
  const emailCheckbox = document.getElementById('email-checkbox');
  const phoneCheckbox = document.getElementById('phone-checkbox');
  const emailLabelSpan = document.querySelector('.email-label-span');
  const phoneLabelSpan = document.querySelector('.phone-label-span');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const firstNameField = document.getElementById('first-name');
  const professionField = document.getElementById('profession');
  const commentField = document.getElementById('comment');
  const submitButton = document.getElementById('submit-button');

  // Função para criar ou exibir mensagens de erro
  function showError(field, message) {
    let errorSpan = field.parentElement.querySelector('.error');
    if (!errorSpan) {
      errorSpan = document.createElement('span');
      errorSpan.className = 'error';
      errorSpan.style.color = 'red';
      errorSpan.style.fontSize = '0.9em';
      field.parentElement.appendChild(errorSpan);
    }
    errorSpan.textContent = message;
  }

  // Função para remover mensagens de erro
  function clearError(field) {
    const errorSpan = field.parentElement.querySelector('.error');
    if (errorSpan) {
      errorSpan.remove();
    }
  }

  // Validação para o checkbox de email
  if (emailCheckbox) {
    emailCheckbox.checked = false;
    emailCheckbox.addEventListener('change', function () {
      if (this.checked) {
        emailLabelSpan.style.display = 'inline';
        emailField.required = true;
      } else {
        emailLabelSpan.style.display = 'none';
        emailField.required = false;
      }
    });
  }

  // Validação para o checkbox de telefone
  if (phoneCheckbox) {
    phoneCheckbox.checked = false;
    phoneCheckbox.addEventListener('change', function () {
      if (this.checked) {
        phoneLabelSpan.style.display = 'inline';
        phoneField.required = true;
      } else {
        phoneLabelSpan.style.display = 'none';
        phoneField.required = false;
      }
    });
  }

  // Validação ao clicar no botão "Enviar"
  if (submitButton) {
    submitButton.addEventListener('click', function (event) {
      let hasError = false;

      // Validação para o campo Nome
      if (!firstNameField.value.trim()) {
        showError(firstNameField, 'Campo Obrigatório: Nome');
        hasError = true;
      } else {
        clearError(firstNameField);
      }

      // Validação para o campo Profissão
      if (!professionField.value.trim()) {
        showError(professionField, 'Campo Obrigatório: Profissão');
        hasError = true;
      } else {
        clearError(professionField);
      }

      // Validação para o campo Comentário
      if (!commentField.value.trim()) {
        showError(commentField, 'Campo Obrigatório: Comentário');
        hasError = true;
      } else {
        clearError(commentField);
      }

      // Impede o envio do formulário se houver erros
      if (hasError) {
        event.preventDefault();
      }
    });
  }
});