function sendMessage() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');

  const success_message = document.getElementById('container-success');
  const error_message = document.getElementById('container-error');

  console.log(name.value);
  console.log(email.value);

  if (name.value && email.value) {
    error_message.style.display = 'none';
    success_message.style.display = 'flex';

    document.getElementById('main-form').reset();
       
    setTimeout(() => {
      success_message.style.display = 'none';
    }, 5000); 
  } else {
    success_message.style.display = 'none';
    error_message.style.display = 'flex';
  }
}

