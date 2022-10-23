//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2: get the email address inside the input field
    // always reemember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step-3:  get password
    const paswwordField = document.getElementById('user-password');
    const password = paswwordField.value;

    //step-4: verify email and password
    if (email === 'fahim.cse.uap@gmail.com' && password === '16101036') {
        window.location.href = 'bank.html';

    } else {
        alert('Invalid user!!!');
    }
})