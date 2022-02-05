
//1. yontem :
// var cars = ["Opel", "Audi", "BMW"];

// // console.log(cars);


//2. yontem :
// var cars2 = Array.of("Opel", "Audi", "BMW")

// // console.log(cars2);

//3. yontem : cok kullanilmasi tavsiye edilmiyor, eski bir yapi.
// var cars3 = new Array("Opel", "Audi", "BMW")

// console.log(cars3);

//-----------------------

// var num1 = new Array(2,10)
// // console.log(num1);
// var num2 = new Array(10) // tek sayi verildiginde bos eleman dondurebiliyor.bu yuzden biraz sikintili.
// console.log(num2);

//---------------------------

// Access the array of elements

// var cars = ["Opel", "Audi",[1,2,true] ,"BMW"]

// console.log(
//     cars[0]
// );

// console.log(cars[2][2]);

//----------------------------

// const cars = ["Opel", "Audi",[1,2,true] ,"BMW"]

// cars[2] = 'Porsche'  // burda sadece index numarasi olan 2 yi degistiriyor.

// cars = [1,2,3] // burada cars in degeri degismez, cunku const ile atama yapilmisti.

// console.log(cars); // deger yine const ile atana cikar.

//----------------------------

// var cars = ["Opel", "Audi",[1,2,true] ,"BMW"]

// cars[2] = 'Porsche'  // burda sadece index numarasi olan 2 yi degistiriyor.

// cars = [1,2,3] // burada cars in degeri degisir, cunku var ile atama yapilmisti.

// console.log(cars); 

//-----------------------------------

/* const cars = ["Opel", "Audi",[1,2,true] ,"BMW"]

cars[4] = 'Porsche' // eleman ekleme
console.log(cars);
//cars = []

console.log(cars);

// cars[cars.length] = 'Ferrari'
cars[10] = 'Ferrari'

console.log(cars[8]); */

//----------------------------------------

// const cars = ["Opel", ,"Audi" ,,,,"BMW"]

// console.log(cars);  // atilan virgul kadar empty eleman yapiyor

//----------------------------------

// const cars = ["Opel", "Audi", "BMW"];
// // const cars = 2

// console.log(typeof cars);
// console.log(cars instanceof Array);  // eger sonuc true donduruyorsa bu array dir demektir
// console.log(Array.isArray(cars));  // array olup olmadigini anlamak icin 2. yontem.

//length
/* const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

console.log(fruits)
console.log(fruits.length)
 */


//concat
/* const fruits = ["Banana", "Orange","Lemon"];
const vegetables = ['Broccoli','Celery','Parsley','Artichoke']

// console.log(fruits.concat(vegetables));
// console.log(fruits.concat('Fig',3,'Pear')); // , ile eklenenleri array in  sonuna ekliyor.

console.log(''+fruits);  // iki array i toplamaya calisirsan string e cevirir.
console.log(fruits.toString());  // bu da strinde cevirme metodu  */

//sort

// sort metodu arraylerde sayilari siralamaz, asci ye gore siralar

// const daltones = ['Joe','Jack','William','Avarel']

// console.log(daltones.sort());

// const num = [40, 100, 1, 5, 25, 10];

// console.log(num.sort()); //string olarak sıralar

// console.log(num.sort((a,b) => a - b)); // sayisal siralama icin.

// console.log(num.sort((a,b) => b - a)); // bu da tersten siralar.

// console.log(daltones.reverse()); //orjinali değiştirir

// console.log(daltones);


//push - pop(sadece sonraki elemani siler)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("Pears"));
// fruits.push("Pears");
// console.log(fruits);
// fruits.push("Pears" , "pineapple",2);
// console.log(fruits);



// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits.pop());

// console.log(fruits);

// push yeni arrayin uzunlgunu da dondurur.


//----------------------------

//shift(en basindakini siliyo) unshift (en basa ekliyo)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const deleted = fruits.shift()
// console.log(deleted);
// console.log(fruits);

// const uns = fruits.unshift('Pears','fig',2,[1,2,'a'])
// console.log(uns);
// console.log(fruits);

// unshift yeni arrayin uzunlgunu da dondurur.
//------------------------------

//splice 

// var names = ["John", "Edward", "Victor"]
// var deleted = names.splice (1,2, "Mark", "James" , 'Onur')  // index numarasi 1 olana git, ordan itiberen olan 2 elemani sil,  mark james onur u ekle. silinenleri gosterir
// console.log({deleted});
// console.log(names);

//------------------------------------

//slice

// const months = ['Jan', 'March', 'April', 'June',"july"];

// const springs = months.slice(1,3) //  son rakam dahil degildir
// const springs1 = months.slice(-4,-2)
// const springs2 = months.slice(1,-2)
// const springs3 = months.slice(2,-7)

// console.log(springs);
// console.log(springs1);
// console.log(springs2);
// console.log(months);
// console.log(springs3);

// tek rakam yazilirsa verilenden sona kadar alir.
//her zman soldan saga dogru islem yapar.
//orjinal array i degistirmiyor

//indexof lastindexof
// const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
// const x = colors.indexOf("Green") // buraya 3 yazilmadigi icin ilk greeni alir.
// const x = colors.indexOf("Green", 3) // buraya 3 yazildigi icin index numarasi 3de dahil olmak uzere sonrasindaki ilk green i alir.
// console.log(x)



// const colors = ["Red", "Yellow", "Green", "Blue", "Green","Red","Yellow","Blue"];
// const last = colors.lastIndexOf("Blue", 6)  // sondan basa dogru gider. 
// console.log(last)

//splice 

var names = ["John", "Edward", "Victor"]
var deleted = names.splice (1,0, "Mark", "James" , 'Onur')
console.log({deleted});
console.log(names);