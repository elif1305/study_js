// Functions


// let student = 'Ella';

// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`); // burada student yazmak zorunda degiliz , sayHi in icine studentname yazigimiz icin oraya da studentname yazabliriz.
// }

// sayHi(student) 

//---------------------------

// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`); }
// let students = ['John', 'Jane', 'Joe', 2 , false, [0,1]];
// sayHi(students)

//--------------------------------

// let students = ['John', 'Jane', 'Joe']
// function sayHi(studentName){
//     console.log(`Welcome ${studentName}`);
// }

// sayHi(students)  // burada hepsini yaznyana yaziyor.

// for (let i = 0; i < students.length; i++) {   // burada isimler iterate edilmis durumda
//     sayHi(students[i])    // burada fonksiyonu bozmadan iterasyon yaptik
    
// }
 
//------------------------------
// let students = ['John', 'Jane', 'Joe']
// function sayHi(student){               // burada function in icine herhangi bise yazilablir , onemli olan bu kod icinde hepsine ayni sey yazilmasi.
//     for (let i = 0; i < student.length; i++) {
//         console.log(`Welcome ${student[i]}`)
//     }
// }

// sayHi(students)   // yulardaki ile ayni ornek,burada direk fonsiyon olarak yazdik


//------------------------

// function sum (){
//     let add = 0;
//     console.log(arguments);
//     console.log(arguments.length);
//     for (let i =0; i < arguments.length; i++){
//         add += arguments[i]
//     }
//     return add;
// } 

// console.log(sum(1));
// console.log(sum(1,2,3,4,5,6));
// console.log(sum(100,520));


//----------------

// function sum1(a, ...others) {
//     console.log(arguments);     // argumanlarin ne oldugunu gormek icin bunu yazdik
//     console.log(others);   // others ne oldugunu gormek icin bunu yazdik
//     let sum =0;
//     for (let i=0; i < arguments.length; i++){  // buraaya argument yerine oter yazarsak ona gore islem yapar
//     sum += arguments[i]   // yukarya other yazilirsa buraya da others yazilmasi gerekir . asagidaki ornege bak
//     }
//     return sum * a;
//     }

// console.log(sum1(5,2,3,4,5,6)); 

//----------------

// function sum1(a, ...others) {
//     console.log(arguments);      // argumanlarin ne oldugunu gormek icin bunu yazdik
//     console.log(others);   // others ne oldugunu gormek icin bunu yazdik
//     let sum =0;
//     for (let i=0; i < others.length; i++){  
//     sum += others[i]   
//     }
//     return sum * a;
//     }

// console.log(sum1(5,2,3,4,5,6)); 

//------------------------


    // const bill = function(tax, ...list){
    //     console.log(list);
    //     let total = 0;
    //     for(let i =0; i < list.length; i++){
    //         total += list[i]+list[i]*tax;
    //     }
    //     return total;
    // }

    // console.log(bill(0.10, 10,10,20,10))

//----------------------


    //  function bolme (num1,num2){
    //     if(num2 === 0) {
    //     return "Zero Division Error"
    //     } else {
    //       return num1 / num2
    //     }
    // }

    // console.log(bolme(12,2));
    // console.log(bolme(12,3)); 


//----------------------

//yukaridaki ornegin tek satir hail :

// function bolme (num1,num2){
//     if(num2 === 0) return "Zero Division Error"  // burada sonuc 0 deilgse zaten ilk return calismayacak ve diger return e gececek
//     return num1 / num2

// }

// console.log(bolme(12,2));
// console.log(bolme(12,3));     // (12/0) i dene.



//----------------

// yukaridaki ornegin ternary yazilisi: (bu yazilis onemlidir, ozellikle is konusunda kodalrin bu seilde yazilmasi beklenir.)

    // function div2(num1, num2){
    //     return num2 ? num1 / num2 : 'Zero division Error!'
    // }

    // console.log(div2(10,3)); 
// ternarry de return den sonra yazilan (num2) true ise ? den sonraki ilk kisim calisir, false ise : dan sonra kisim calisir.

//-------------------------------

// interview sorusudur. pascalNumber kendisine kadar olan sayiliarin toplamini veren bir fonskiyondur.

// 1. versiyon: recersive kullanamdan yazilisi

    // function pascalNumber1(n){
    //     let sum = 0;
    //     for(let i = 1; i < n+1; i++){
    //     sum +=i
    //     }
    //     return sum
    //     }
    
    // console.log(pascalNumber1(5));


//----------------------------


// 2. versiyon: recersive kullanamdan yazilisi

    //  function pascalNumber2(n){
    //     return (n* (n+1)/2)
    //     }
    // console.log(pascalNumber2(100)); 


//---------------------------------


  // recursive fonskdiyon
    // function pascalNumber3 (n){ 
    //     if(n === 1) return 1; // Çıkış yolunu belirtmek şart
    //     return n + pascalNumber3(n-1) // 2 + 1
    // }

    // console.log(pascalNumber3(3)); 

//---------------------

   // arrow functions: (functions larin kisaltilmis hali)

    //geleneksel fonksiyon


    // function add100 (a){
    //     return a + 100;
    // }

//--------------------------
    
    // // function expresion

    // let toplam = function (a){return a + 100}

//------------------

    //Arrow function breakdown

    //  let ahmet = (a) => {
    //     return a +100
    // } 
    // console.log(ahmet(10));

//----------------


//  let mehmet = (a) => a + 100;
// console.log(mehmet(20)); 



//---------------------

//  let toplam = a => a + 100;
// console.log(toplam(30)); 

//--------------

// let user = 'Murat';

// let sayHi = () => console.log(`Welcome ${user}`);

// sayHi() 

//----------------------------


// let toplam2 = (num1, num2) => num1 + num2;

// console.log(typeof toplam2()); 


//-------------------------------------

//iife


//  let iife = (function trian(num) {
//     if (num === 1) return 1;
//     return num + trian(num-1);
// })(3);  // burada iife nin degeri icin 3 atandigi icin tekrardan asagida parantez icinde 5 yazinca hata veriyor. parantezin ici bos olmali.

// console.log(iife(5)); 
//--------------

// with anonymous function expression non recursive

// let nums = 5
// let iife2 =(function(num) {
//     return num*(num +1)/2;
// })(nums);

// console.log(iife2);



