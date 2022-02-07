let op;
function func(){
    let itogo;
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    
    switch (op) {
        //сложение
        case'+':
        itogo = x + y;
        break;
        //вычитание
        case'-':
        itogo = x - y;
        break;
        //умножение
        case'*':
        itogo = x * y;
        break;
        //деление
        case'/':
        itogo = x / y;
        break;
    }
    document.getElementById("itogo").innerHTML = itogo;

}