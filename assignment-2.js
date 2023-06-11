var x = [ 10, 20, 30];

const total = () => {
    let len = x.length;
    let sum = 0;

    for(let i=0; i<len; i++) {
        sum += x[i];
    }

    return sum;
}

console.log(total());