$(document).ready(function () {
    $('#go').click(derivate);

    function derivate() {
        var e = $('#acc').val(), dx = 0.1, x = 1, i = 1;
        e = +e;
        f1 = 0;
        do{
            f2=f1;
            f1 = (mathFunction(x + dx) - mathFunction(x)) / dx;
            $('#console').html($('#console').html() + 'F' + '<sup>' + i + '</sup>' + ' = ' + f1.toFixed(4) + '<br/>');
            i++;
            dx = dx / i;
            a = Math.abs(f1 - f2);
        } while (Math.abs(f1 - f2) >= e);
        return f1;
    }
    function mathFunction(a) {
        return a * a;
    }
});