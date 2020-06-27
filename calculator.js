function calulator(values){
    var digitChr = document.getElementById("screen");
    digitChr.value += values;
}
function clear(){
    var elements = document.getElementById("screen");
    elements.value = " ";
}
function result(){
    var exp = document.getElementById("screen");
    exp.value = eval(exp.value);
}
function remove(){
    var exp = document.getElementById("screen");
    exp.value = exp.value.slice(0,-1);
}
