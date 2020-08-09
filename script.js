// var Xmas95 = new Date('December 25, 1995 23:15:30');
// var day = Xmas95.getDate();

// console.log(day); // 25
var objFecha = new Date();
var objFecha2 = objFecha.getDate() + "/" + objFecha.getMonth() + "/" + objFecha.getFullYear()
console.log( objFecha2);
console.log(new Date())
var txt = document.getElementById("fecha");
txt.innerHTML = objFecha2;


// var d = new Date("July 21, 1983 01:15:00");
// var n = d.getDate();
// var e = m.getfullyear();

// console.log(n + e);