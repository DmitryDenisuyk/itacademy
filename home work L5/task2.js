function num13thFri(mass){
    let count = 0;
    for (let i=0; i < mass.length; i++){
    let year = mass[i]; 
    for (let month = 0; month<12; month++) {
        let st3 = new Date(year, month,13);
       if(st3.getDay() == 5){
        count++;
     }
    }
}
    return count;                            
}

let qwe = [];

for (let i = 2000; i < new Date().getFullYear(); i++){
    qwe.push(i);
} 

console.log(num13thFri(qwe)); 
