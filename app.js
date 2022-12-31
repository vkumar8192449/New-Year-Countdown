function count() {
    let curr = new Date();
    let yr = curr.getFullYear();
    let newyr = new Date(`01/01/${++yr}`);

    var curr_ms = Date.parse(curr);
    var newyr_ms = Date.parse(newyr);

    var total = newyr_ms - curr_ms;
    var day_print = Math.floor((total) / (1000 * 60 * 60 * 24));
    if (day_print < 10 && day_print >= 0) {
        document.getElementById('days').innerText = `0${day_print}`;
    }
    else {
        document.getElementById('days').innerText = day_print;
    }
    total = total % (1000 * 60 * 60 * 24);
    var hour_print = Math.floor((total) / (1000 * 60 * 60));
    if (hour_print < 10 && hour_print >= 0) {
        document.getElementById('hours').innerText = `0${hour_print}`;
    }
    else {
        document.getElementById('hours').innerText = hour_print;
    }
    total = total % (1000 * 60 * 60);
    var mint_print = Math.floor((total) / (1000 * 60));
    if (mint_print < 10 && mint_print >= 0) {
        document.getElementById('mints').innerText = `0${mint_print}`;
    }
    else {
        document.getElementById('mints').innerText = mint_print;
    }
    total = total % (1000 * 60);
    var sec_print = Math.floor((total) / (1000));
    if (sec_print < 10 && sec_print >= 0) {
        document.getElementById('secs').innerText = `0${sec_print}`;
    }
    else {
        document.getElementById('secs').innerText = sec_print;
    }
    document.getElementById('secs').style.color = '#eb477b';

    if (day_print == 365 && hour_print == 0 && mint_print == 0 && sec_print == 0) {
        document.getElementById('days').innerText = '00';
        clearTimeout(setIn);
        itsnewyear();
    }

}
const setIn = setInterval(count, 1000);

function itsnewyear() {

    document.getElementById('days').style.animationName = 'temp';
    document.getElementById('days').style.animationDuration = '1s';
    document.getElementById('days').style.animationIterationCount = 'infinite';

    document.getElementById('hours').style.animationName = 'temp';
    document.getElementById('hours').style.animationDuration = '1s';
    document.getElementById('hours').style.animationIterationCount = 'infinite';

    document.getElementById('mints').style.animationName = 'temp';
    document.getElementById('mints').style.animationDuration = '1s';
    document.getElementById('mints').style.animationIterationCount = 'infinite';

    document.getElementById('secs').style.animationName = 'temp';
    document.getElementById('secs').style.animationDuration = '1s';
    document.getElementById('secs').style.animationIterationCount = 'infinite';

    document.getElementById('fire1').style.visibility = 'visible';
    document.getElementById('fire2').style.visibility = 'visible';

    document.querySelector('#container p').innerText = `It's New Year🥂`;
}