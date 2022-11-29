const random = (min, max) => { // задаём константу с рандомным значением между min и max
    const rand = min + Math.random() * (max - min + 1); //к min добавляем случайное значение между min и max
    return Math.floor(rand);  //возвращаем целое значение rand
}


const btn = document.querySelector('#btn'); //возвращает элемент документа, который соответствует селектору #btn

btn.addEventListener('mouseenter', () => {//при наведении мыши изменяем её положение на рандомные значения в % относительно экрана
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});


btn.addEventListener('click', () => {// при нажатии на кнопку выводим текст
    alert('Congrats! You hit the button! What are you doing with your life? :D');
});





























