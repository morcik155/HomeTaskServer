function split_table(dz1, sub1) {
    var div = document.createElement('div');
    div.innerHTML = dz1.slice(1, dz1.length - 1);
    dz1 = div.firstChild.nodeValue;
    var div1 = document.createElement('div');
    div1.innerHTML = sub1.slice(1, sub1.length - 1);
    sub1 = div1.firstChild.nodeValue;
    console.log(dz1)
    console.log(sub1)
    var subls = [];
    var dzls = [];
    var help = '';
    for (var i = 0; i < dz1.length; i++) {
        if (dz1[i] != ',') {
            if (help.length == 0) {
                if (dz1[i] == ' ') {
                } else {
                    help = help + dz1[i];
                }
            } else {
                help = help + dz1[i];
            }
        } else {
            help = help.slice(1, help.length - 1)
            dzls.push(help)
            help = '';
        }
    }
    help = ''
    for (i = 0; i < sub1.length; i++) {
        if (sub1[i] != ',') {
            if (help.length == 0) {
                if (sub1[i] == ' ') {
                } else {
                    help = help + sub1[i];
                }
            } else {
                help = help + sub1[i];
            }
        } else {
            help = help.slice(1, help.length - 1)
            subls.push(help)
            help = '';
        }
    }
    console.log(dzls)
    console.log(subls)
    for (i = 0; i < dzls.length; i++) {
        document.write('    <tr>' +
            '        <th>' + subls[i] + '</th>' +
            '        <th>' + dzls[i] + '</th>' +
            '    </tr>')
    }
}