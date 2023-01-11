// const fs = require("fs");

// const name = document.getElementById('name');
// const email = document.getElementById('email');

// fs.readFile('submit.txt', (err, data) => {
//   if (err) return console.error(err);

//   if (data == 'true') {
//     const success_message = document.getElementById('container-success');
//     success_message.style.display = 'flex';
//     console.log('helooo');
//     setTimeout(() => {
//       success_message.style.display = 'none';
//       fs.writeFile('submit.txt', 'false', err => err ? console.error(err) : 0);
//     }, 3000); 
//   }
// })

// main_form.addEventListener('submit', () => {
//   if (name && email) {
//     fs.writeFile('submit.txt', 'true', err => err ? console.error(err) : 0);
//   }
// });

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

function required() {

}