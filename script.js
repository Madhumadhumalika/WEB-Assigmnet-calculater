document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll('button');

    buttons.forEach(item => {
        item.onclick = () => {
            if (item.id === 'clear') {
                display.innerText = '';
            } else if (item.id === 'backspace') {
                let string = display.innerText.toString();
                display.innerText = string.substr(0, string.length - 1);
            } else if (display.innerText !== '' && item.id === 'equal') {
                try {
                    display.innerText = eval(display.innerText);
                } catch (error) {
                    display.innerText = 'Error';
                }
            } else if (display.innerText === '' && item.id === 'equal') {
                display.innerText = 'Empty!';
                setTimeout(() => (display.innerText = ''), 2000);
            } else {
                display.innerText += item.id;
            }
        };
    });

    const theme = document.querySelector('.them');
    const calculator = document.querySelector('.calculator-black');
    const togglerIcon = document.querySelector('.toggler-icon');
    let isDark = true;

    theme.onclick = () => {
        calculator.classList.toggle('dark');
        theme.classList.toggle('active');
        isDark = !isDark;
    };
});
