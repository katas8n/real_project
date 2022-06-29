const secondText = document.querySelector('.text-second');

setTimeout(() => {
    secondText.style.transition = '1000ms linear';
    secondText.style.top = '380px';
    secondText.style.color = 'rgba(42, 168, 195, 1)';
    secondText.style.fontSize = '2.3rem';
}, 1000);