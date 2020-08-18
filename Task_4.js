function number3(a, b) {
    let total = a + b;
    let sum = String(total);
    if (a == 3 || b == 3) {
        for (count = 0; count < sum.length; count++) {
            let numberIndex = sum[count];
            if (numberIndex == 3) {
                return true;
            } 
            else {
                return false;
            }
        }
    } 
    else {
        return false;
    }
}
