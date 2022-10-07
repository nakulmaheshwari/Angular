middle = document.getElementById('middle');

b1 = document.getElementById('1');
b2 = document.getElementById('2');
b3 = document.getElementById('3');
b4 = document.getElementById('4');
b5 = document.getElementById('5');
b6 = document.getElementById('6');
b7 = document.getElementById('7');
b8 = document.getElementById('8');

middle.addEventListener('click', () => {
    let temp = b8.innerHTML;
    b8.innerHTML = b7.innerHTML;
    b7.innerHTML = b6.innerHTML;
    b6.innerHTML = b5.innerHTML;
    b5.innerHTML = b4.innerHTML;
    b4.innerHTML = b3.innerHTML;
    b3.innerHTML = b2.innerHTML;
    b2.innerHTML = b1.innerHTML;
    b1.innerHTML = temp;
})