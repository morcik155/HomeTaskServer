var subls = [];
var dzls = [];
var datels = [];

function split_table(dz1, sub1, date) {
    var div = document.createElement('div');
    div.innerHTML = dz1.slice(1, dz1.length - 1);
    dz1 = div.firstChild.nodeValue;
    var div1 = document.createElement('div');
    div1.innerHTML = sub1.slice(1, sub1.length - 1);
    sub1 = div1.firstChild.nodeValue;
    var div2 = document.createElement('div');
    div2.innerHTML = date.slice(1, date.length - 1)
    date = div2.firstChild.nodeValue;
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
        }
        if (dz1[i] == ',') {
            help = help.slice(1, help.length - 1)
            dzls.push(help)
            help = '';
        }
        if (i == dz1.length - 1) {
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
        }
        if (sub1[i] == ',') {
            help = help.slice(1, help.length - 1)
            subls.push(help)
            help = '';
        }
        if (i == sub1.length - 1) {
            help = help.slice(1, help.length - 1)
            subls.push(help)
        }
    }
    help = ''
    for (i = 0; i < date.length; i++) {
        if (date[i] != ',') {
            if (help.length == 0) {
                if (date[i] == ' ') {
                } else {
                    help = help + date[i];
                }
            } else {
                help = help + date[i];
            }
        }
        if (date[i] == ',') {
            help = help.slice(1, help.length - 1)
            datels.push(help)
            help = '';
        }
        if (i == date.length - 1) {
            help = help.slice(1, help.length - 1)
            datels.push(help)
        }
    }
    for (i = 0; i < datels.length; i++) {
        document.write('<table class="table" border="1"><tr><th>' + datels[i] + '</th></tr></table>')
        document.write('<table class="table" border="1">')
        for (var j = 0; j < subls.length+datels.length-i-1; j++) {
            if (subls[j] != '') {
                document.write('<tr><th>' + subls[j] + '</th><th>' + dzls[j] + '</th></tr>')
            } else {
                subls = subls.slice(j, subls.length)
                dzls = dzls.slice(j, dzls.length)
            }
        }
        document.write('</table><h3></h3>')
    }
}