let max = 1500,
    r1 = rndbtw(1, max-3),
    r2 = rndbtw(1, max-2-r1),
    r3 = rndbtw(1, max-1-r1-r2),
    r4 = max - r1 - r2 - r3;

function rndbtw(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
function generate() {
    let r = [];
        currsum = 0;
    for(let i=0; i < 4 - 1; i++) {
       r[i] = rndbtw(1, 1500-(4-i-1)-currsum);
       currsum += r[i];
    }
    r[4-1] = 1500 - currsum;
    let newR = r.map(item => item/100);
    return newR;
  }

console.log(generate());