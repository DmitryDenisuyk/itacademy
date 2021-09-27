let a = 1,
b = true,
s = "string";

//task 1

b + a;  // 2
b + s;  //truestring
a + s;  //1string

//task 2

b * a;  //1
b * s;  //NaN
a * s;  //NaN

//task 3

b / a;  //1
b / s;  //NaN
a / s;  //NaN

//task 4

Boolean(a);  //true
String(b);   //'true'
Number(s);   //NaN
