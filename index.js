function sendMessage() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');

  const success_message = document.getElementById('alert-success');
  const error_message = document.getElementById('alert-error');
  const body = document.getElementById('body');

  if (name.value && email.value) {
    error_message.style.display = 'none';
    success_message.style.display = 'flex';

    document.getElementById('main-form').reset();
       
    setTimeout(() => {
      success_message.style.display = 'none';
      if (error_message.style.display !== 'flex') {
        body.style.marginTop = '200px';
      }
    }, 5000); 

  } else {
    success_message.style.display = 'none';
    error_message.style.display = 'flex';
  }

  let alert_height = getComputedStyle(success_message).height;
  alert_height = alert_height.slice(0, alert_height.length - 2);

  if (success_message.style.display == 'flex' || error_message.style.display == 'flex') {
    body.style.marginTop = '168px';
  } 
}

