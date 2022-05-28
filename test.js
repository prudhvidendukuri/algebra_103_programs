var a = Number(prompt("Prime Numbers below this number are:"));
var primeNumber = [];
for (b = 2; b <= a; b++ ) {
    var c = b;
    for (i = 2; i <= c; i++) {
        if (c % i != 0) {
            continue;
        } else if (c % i == 0 && c != i) {
        
            break;
        }
        if (c % i == 0 && c == i) {
            primeNumber.push(c);
            
        }
    }

}
alert("the Prime Numbers are :" + primeNumber);

