$(document).ready(function () {
    $('#go').click(takeProp)
    function takeProp() {
        count = +$('#count').val();
        for (var i = 1; i < count+1; i++) {
            elem1 = document.createElement('input');
            elem2 = document.createElement('input');
            //labelelem1 = document.createElement('label');
            //labelelem2 =document.createElement('label');
            elem1.type = elem2.type = 'text';
            elem1.id = 'a' + i;
            elem2.id = 'p' + i;
            elem1.placeholder = 'a' + i;
            elem2.placeholder = 'p' + i;
            //labelelem1.setAttribute('for', 'a' + i);
            //labelelem2.setAttribute('for', 'p' + i);
            //labelelem1.innerHTML = 'a' + i;
            //labelelem2.innerHTML = 'p' + i;
            //document.getElementById('console').appendChild(labelelem1);
            document.getElementById('console').appendChild(elem1);
            //document.getElementById('console').appendChild(labelelem2);
            document.getElementById('console').appendChild(elem2);
        }
        freepart = document.createElement('input');
        freepart.type = 'text';
        freepart.id = 'c';
        freepart.placeholder = 'c';
        document.getElementById('console').appendChild(freepart);

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
            $('#result').html(Fx + '<br/>');
            //output of f'(x);
            for (var i = 1; i < count+1; i++) {
                m=$('#a' + i).val() *$('#p' + i).val();
                k=$('#p' + i).val() - 1;
                F$x = F$x + m + 'x<sup>' + k + '</sup> + '
            }
            document.getElementById('result').innerHTML += F$x;

        }
    }
});