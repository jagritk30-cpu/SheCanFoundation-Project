const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';
}

function showErrors(errors) {
  if (errors.name) nameError.textContent = errors.name;
  if (errors.email) emailError.textContent = errors.email;
  if (errors.message) messageError.textContent = errors.message;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearErrors();

  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  const result = await response.json();
  if (!response.ok) {
    showErrors(result.errors || { message: 'Unable to submit at this time.' });
    return;
  }

  form.reset();
  successMessage.textContent = result.message;
});
