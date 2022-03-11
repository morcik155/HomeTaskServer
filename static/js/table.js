var sub = document.getElementById('sub1');
var dz = document.getElementById('dz1');

function split_table() {
    var dz = document.getElementById('dz2');
    var sub = document.getElementById('sub2');
    dz = dz.textContent || dz.innerText;
    sub = sub.textContent || sub.innerText;
    dz.toString().split(' ')
    sub.split(',')
    // if (sub.value.toString() === ' ') {
    //     if (dz.value.toString() === ' ') {
    //         sub.id = 'vvv';
    //         dz.id = 'www';
    //         sub.parentNode.removeChild(sub);
    //         dz.parentNode.removeChild(dz);
    //         return document.write('{%endfor%}')
    //     }
    // }
    document.write(dz.length.toString())
    for (var i=0;i<dz.length;i++){
    document.write('    <tr>\n' +
        '        <th id="sub1">' + sub + '</th>\n' +
        '        <th id="dz1">' + dz + '</th>\n' +
        '    </tr>')}
}