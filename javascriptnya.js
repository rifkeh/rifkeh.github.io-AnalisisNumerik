function fungsi(x){
    return Math.pow(x, 3) + 4*Math.pow(x, 2) - 10;
}
function fungsinya(){
    let nilaia = document.getElementById("nilaiA").value;
    let nilaib = document.getElementById("nilaiB").value;
    var table = document.getElementById("myTable");
    var a = parseInt(nilaia);
    var b = parseInt(nilaib);
    var c = ((parseInt(a) + parseInt(b))/2);
    for(let i = 0; i < 10; i++){
        var row = table.insertRow(1+i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = a
        cell2.innerHTML = b.toFixed(5);
        cell3.innerHTML = fungsi(a).toFixed(5);
        cell4.innerHTML = fungsi(b).toFixed(5);
        cell5.innerHTML = c.toFixed(5);
        cell6.innerHTML = fungsi(c).toFixed(5);
        if(Math.abs(a-b)<0.00001){
            return
        }
        if(fungsi(a).toFixed(5)*fungsi(c).toFixed(5)<0){
            b = c;
        }else{
            a = c;
        }
        c = (a+b)/2;
    }
    

}
