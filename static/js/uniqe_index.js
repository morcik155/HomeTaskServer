var index = 0;
var indexes = ['in1', 'in2', 'in3', 'in4', 'in5', 'in6'];
var index_id = 0;
var indexes_id = ['in7', 'in8', 'in9', 'in10', 'in11', 'in12'];

function inp() {
    var input = document.getElementById('in_dz');
    input.name = indexes[index];
    index++;
    input.id = indexes_id[index_id];
    index_id++;
}