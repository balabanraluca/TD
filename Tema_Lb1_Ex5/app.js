var result;

$("#adunare").on('click', adunare);
$("#scadere").on('click', scadere);
$("#inmultire").on('click', inmultire);
$("#impartire").on('click', impartire);
$("#rest").on('click', rest);
$("#egal").on('click', egal);

function adunare() {
    result=  parseInt($("#firstNumber").val()) + parseInt($("#secondNumber").val());
}

function scadere() {
    result= parseInt($("#firstNumber").val()) - parseInt($("#secondNumber").val());
}

function inmultire() {
    result= parseInt($("#firstNumber").val()) * parseInt($("#secondNumber").val());
}

function impartire() {
    result= parseInt($("#firstNumber").val()) / parseInt($("#secondNumber").val());
}

function rest() {
    result= parseInt($("#firstNumber").val()) % parseInt($("#secondNumber").val());
}
function egal(divId, value) {
    $("#result").html(result);
}