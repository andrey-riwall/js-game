document.addEventListener('DOMContentLoaded', () => {


    let player = document.querySelector("#player");
    player.style.top = 260 + 'px';
    player.style.left = 260 + 'px';

    let up = 20;
    let b_up = false;
    let b_dn = false;
    let left = 20;
    let b_l = false;
    let b_r = false;

    // эта функция двигает объект в верх
    function go_u () {
        let go = player.offsetTop -= up;
        player.style.top = go + "px";
    }
    // эта функция двигает объект в лево
    function go_l () {
        let go = player.offsetLeft -= left;
        player.style.left = go + "px";
    }

    // эта функция двигает объект в вниз
    function go_d () {
        let go = player.offsetTop += up;
        player.style.top = go + "px";
    }
    // эта функция двигает объект в вправо
    function go_r () {
        let go = player.offsetLeft += left;
        player.style.left = go + "px";
    }

    // И так создадим событие нажатие клавиатуры во всем документе
    document.addEventListener("keydown",function(e) {
        // console.log(e);
        console.log('x: ' + player.style.left + '  y: ' + player.style.top)

        // если нажал W то запускается функция движения в верх и также в лево
        if (player.style.top <= (0 + 'px')) {
            b_up = false;
        } else if (b_up) {
            go_u();
        }else {
        if (e.key == "w") {
            b_up = true;
            go_u();
        } else {
            b_up = false;
            b_dn = false;
            b_l = false;
            b_r = false;
        }
        }


        if (player.style.top >= (500 + 'px')) {
            b_dn = false;
        } else if (b_dn) {
            go_d();
        }else {
        if (e.key == "s") {
            b_dn = true;
            go_d();
        } else {
            b_up = false;
            b_dn = false;
            b_l = false;
            b_r = false;
        }
        }


        if (player.style.left <= (0 + 'px')) {
            b_l = false;
        } else if (b_l) {
            go_l();
        }else {
        if (e.key == "a") {
            b_l = true;
            go_l();
        } else {
            b_up = false;
            b_dn = false;
            b_l = false;
            b_r = false;
        }
        }


        if (player.style.left >= (500 + 'px')) {
            b_r = false;
        } else if (b_r) {
            go_r();
        }else {
        if (e.key == "d") {
            b_r = true;
            go_r();
        } else {
            b_up = false;
            b_dn = false;
            b_l = false;
            b_r = false;
        }
        }

        

        // if (player.style.top < (0 + 'px')) {
        //     alert('x: ' + player.style.left + '  y: ' + player.style.top)
        //     player.style.top = 0;
        // } else if (player.style.top > (490 + 'px')) {
        //     alert('x: ' + player.style.left + '  y: ' + player.style.top)
        //     player.style.top = 490 + 'px';
        // } else if (player.style.left < (0 + 'px')) {
        //     alert('x: ' + player.style.left + '  y: ' + player.style.top)
        //     player.style.left = 0;
        // } else if (player.style.left > (490 + 'px')) {
        //     alert('x: ' + player.style.left + '  y: ' + player.style.top)
        //     player.style.left = 490 + 'px';
        // }

    })
});


