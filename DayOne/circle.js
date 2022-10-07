c1 = document.getElementById('circle1');
c1.addEventListener('click', () => {
    alert("You Clicked Circle 1");
    event.stopPropagation()
})

c2 = document.getElementById('circle2');
c2.addEventListener('click', () => {
    alert("You Clicked Circle 2");
    event.stopPropagation()
})
c3 = document.getElementById('circle3');
c3.addEventListener('click', () => {
    alert("You Clicked Circle 3");
    event.stopPropagation()
})

// var ten = 10;
// var tgt = document.getElementsByTagName('body')[0];
// for(var count = 0; count < 5; count++){
//     ten += 30;
//     d = document.createElement('div');
//     d.class = "circle"
//     d.style.width = ten.toString() +  "px";
//     d.style.height = ten.toString() +  "px";
//     d.style.margin = "-" + (ten/2).toString() +  "px 0 0 -" +  (ten/2).toString() + "px";

//     tgt.append(d);
    
// };