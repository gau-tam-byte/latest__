function tempe(){
    var cel = document.getElementById("c").value;
    var fer = ( cel * 9/5) + 32;
    document.getElementById("f").value = fer
}

function wer(){
    var w = document.getElementById("kg").value;
    var p = w * 2.205;
    document.getElementById("lbs").value = p;
}

function di(){
    var km = document.getElementById("Distance").value;
    var m = km * 0.62137;
    document.getElementById("miles").value = m;
}