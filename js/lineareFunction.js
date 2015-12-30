$(document).ready(function () {
    $('#go').click(takeProp)
    function Error(a) {
        $('.errorPop').html(a);
        $('.errorPop').show();
        setTimeout(function () {
            $('.errorPop').hide();
            $('.errorPop').html('');
        }, 5000)
    }
    function write(str) {
        $('#result').html($('#result').html() + str + '<br/>');
    }
    function takeProp() {
        if ($('#count').val() == '') {
            Error('"Max power of func" field is empty, check it again.');
            return false;
        }
        count = +$('#count').val();
        for (var i = 1; i < count+1; i++) {
            elem1 = document.createElement('input');
            elem2 = document.createElement('input');
            elem1.type = elem2.type = 'text';
            elem1.id = 'a' + i;
            elem2.id = 'p' + i;
            elem1.placeholder = 'a' + i;
            elem2.placeholder = 'p' + i;
            document.getElementById('console').appendChild(elem1);
            document.getElementById('console').appendChild(elem2);
        }
        //Freepart generate
        freepart = document.createElement('input');
        freepart.type = 'text';
        freepart.id = 'c';
        freepart.placeholder = 'c';
        document.getElementById('console').appendChild(freepart);
        //area EndPint input generate
        areaL = document.createElement('input');
        areaR = document.createElement('input');
        areaL.type = areaR.type = 'text';
        areaL.id = 'arL';
        areaR.id = 'arR';
        areaL.placeholder = 'Area A'
        areaR.placeholder = 'Area B'
        document.getElementById('console').appendChild(areaL);
        document.getElementById('console').appendChild(areaR);
        //Step field generate
        step = document.createElement('input');
        step.type = 'text';
        step.id = 'step';
        step.placeholder = 'step( h )';
        document.getElementById('console').appendChild(step);
        //action btn generate
        btn = document.createElement('button');
        btn.id = 'prop-btn';
        btn.innerHTML = 'Done';

        document.getElementById('console').appendChild(btn);
        $('#prop-btn').click(calculate);

        function calculate() {
            //output of F(x)
            var Fx = 'F(x) = ',F$x='F\'(x) = ';
            for (var i = 1; i < count + 1; i++) {
                
                Fx = Fx + $('#a' + i).val() + 'x<sup>' + $('#p' + i).val() + '</sup> + ';
            }
            Fx = Fx + $('#c').val();
            write(Fx);
            write('Have segment [ ' + $('#arL').val() + ' , ' + $('#arR').val() + ' ] and Step = ' + $("#step").val());
            //take number of iteration
            Niteration = (($('#arR').val() - $('#arL').val()) / $("#step").val())+1;
            write('Number of iteration : ' + Niteration)
            //Descripteion on process
            var dots = [+$('#arL').val()], step = +$("#step").val(), str = 'X<sub>k</sub> =',temp;
            for (var i = 0; i < Niteration; i++) {
                temp = dots[i] + step;
                dots.push(+temp.toFixed(10));//because of specific calculation of JavaScript;
                str += ' ' + dots[i]+',';
            }
            write(str);
            write('<hr>')
            //begin of algoritm
            var Fopt = fx(dots[0]),xopt = dots[0],Fwork;
            for (var i = 0; i < Niteration; i++) {
                write('<span class="step">Step<span> ' + (i + 1));
                Fwork = fx(dots[i]);
                write('F(' + dots[i] + ') = ' + Fwork);
                if (Fwork < Fopt) {
                    Fopt = Fwork;
                    xopt = dots[i];
                }
            }
            write('Our min value of funcion - F('+xopt+') = '+Fopt)
        }
        function fx(k) {
            var fvalue = 0, a, n,
                c = ($('#c').val() !== "") ? +$('#c').val() : 0;//if input C empty -> c=0, else get input value
            for (var j = 1; j < count + 1; j++) {
                a = +$('#a'+j).val();
                n = +$('#p'+j).val();
                fvalue += a * Math.pow(k, n);
            }
            fvalue = fvalue + c;
            return fvalue;
        }
    }
});