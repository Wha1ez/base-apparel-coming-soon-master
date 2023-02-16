const input = document.getElementById('email');
const error = document.querySelector('.error-icon');
const enterBtn = document.querySelector('.enter-btn');
const notification = document.querySelector('.notification');

const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const notificationFunction = setInterval(() => {
    error.style.display = "none";
    notification.style.display = "none";
    input.reset();
}, 2000)

enterBtn.addEventListener("click", () => {
   if (input.value === 0 || !input.value.match(emailValidator)) {
        error.style.display = "inline";
        notification.style.display = 'inline';
        notification.textContent = 'Please provide a valid email';
        return notificationFunction;
   }else{
        notification.style.display = 'inline'
        notification.textContent = 'welcome to the Family.';
        notification.style.color = 'green';
        return notificationFunction;
   }
})