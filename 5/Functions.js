// console.log('hello');

// function sayHi(){          // fonksiyon tanimlandi.
//     console.log('Hello');
// }

// sayHi()           // fonksiyon cagrildi.  tanimin ustunden cagirsakta yine de calisir.

//-------------------

// let userName = 'Johnny'

// function sayHi(name){
//     console.log(`Hello ${name}`);
// }

// sayHi(userName);      // degiskene atayarak yazdirma.
// sayHi('Deep')


//-------------------
// let userName = 'Ella'

// function sayHi(name = 'New User'){ // kullanici hic isim girmezse new user calisir, eger girerse girdiig iism cikar.
//     console.log(`Hello ${name}`);
// }
// sayHi();
// sayHi(userName);
// sayHi('Mark')


//---------------------

// function lar:
// mikro seviyede olacak,
// aldigi degeri degistirmeden donecek
// clg ile cagrilmayacak

//---------------------------

// function sayHi(){     
//     console.log('Hello');
// }

// function sayHi2(name){
//     return ('Hello'+ name)  // bunun altina clg ile yazilan kodlar calismaz
// }

// console.log(sayHi2('Matthew'));

// console.log(typeof sayHi2());  // tipi string oldu


// console.log(typeof sayHi());

//-----------------------

// function add100(num1){
//     return num1+100
// }

// console.log(add100(23));

//------------------------------

// console.log(add100(23, 12));

// function add100(num1, num2){
//     return num1+num2
// }


//-----------


// function add100(num1, num2 = 0){   // diyelim ki kullanici 2.sayi vemeyi unuttu , o yuzden um 2 ye default 0 verdik, yani kullanici bise yazmayi unutursa 0 olacak toplanacak, yazarsa yazdigi degeri alacak.
//     return num1+num2
// }

// console.log(add100(23, 12));
// console.log(add100(23));

//-------------------------

// console.log(square(4));

// let square = function(a){return a*a};

// console.log(square(3));


//----------------------------


// let adder = new Function ('a','b', 'return a+b');  // Function constructor: cok kullanilmayan bir yontemdir.

// console.log(adder(2,6));

// console.log(typeof adder);


//----------------------------

// let sum = function(a,b){ return a+b;};

// let addTwo = function (num1){
//     return sum(+num1,2)      // num in basina arti konmazsa str i 4 alir 2 ile toplamaz yanyana yazar, yani 42 olur., +num seklinde yazilirsa ikisini toplar ve sonuc 6 olur.
// }

// console.log(addTwo(5));
// console.log(addTwo('4'));

//-------------------------------

//shortcut tanımlama

// function sayHello(name = 'New User'){
    
//     name && console.log(`Hello ${name}`);
//     // 1 && 3 =>3
// }

// sayHello('mark')
// sayHello()
 
//-----------------

//Fonksiyon kendi verilen değeri değiştirmeyecek

/* function square(num1){
    num1 *= num1
    // myNum = num1 * num1; //globali bozar istenmeyen durum
    // return myNum;
    return num1;
}

let myNum = 4;

console.log(square(myNum));
console.log(myNum); */

//------------------


// let student = {};

// student.name = 'Jhon'

// function sayHi3(student){
//     console.log(`Hello! ${student.name} from entry point`);
//     student.name = 'Zeynep';
//     student.lastname = 'özgür';
//     console.log(`Hello! ${student.name} inside function`);
//     student = {name : "Leon"};
//     console.log(`Hello! ${student.name} inside function`);
// }

// sayHi3(student)
// console.log(`Hello! ${student.name} from outside`); 
// console.log(`Hello! ${student.lastname} from outside`); 