var width = 200;
var height = 200;
var color;

$('#color').click(() => {
    color = prompt('which color do you want to change?');
    $('#square').css('background-color', color);
})

$('#show').click(() => {
    $('#square').show()
})

$('#hide').click(() => {
    $('#square').hide();
})

$('#big').click(() => {
    width = width + 20;
    height = height + 20;
    $('#square').css('width', width);
    $('#square').css('height', height);
})

$('#small').click(() => {
    width = width - 20;
    height = height - 20;
    $('#square').css('width', width);
    $('#square').css('height', height);
})

$('#reset').click(() => {
    $('#square').css('width', 200);
    $('#square').css('height', 200);
    $('#square').css('background-color', '#2f00ff');
})