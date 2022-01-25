// (1)
//  name conventions:
//camel case:   camelCase , theQuickBrownFoxJump
var printCustomerMassege = "welcome"

// snake case: "the_quick_brown_fox"

// kebab or train case: the-brown-fox  daha cok css de kullaniliyor. js de kullanimi tavsiye edilmiyor.

// screaming snake case or hazard case = THEQUICKFOX

// integer olarak kullanimda en cok 16 digit kullanliyor.ustunde digit oldugu zman bunu gostermiyor. dogruluk aramayin. noktali olanlarda ise noktada sonra 17 digit alir.17 den sonrasinda yuzdeyuz dogrulu saglamaz.

var x = 999999999999999;     
var y = 9999999999999999;

console.log(x);
console.log(y);

var z = 1.12345678912345678
var zz = 1.12345678912345678455 // goruldugu gibi 17den sonrasini almiyor.

console.log(z);
console.log(zz);


// js de maksimum safe olarak kullanicak sayi asagidaki sayidir.bunun ustunde dogruluk payi dusuk. 
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991


var x = 0.1 + 0.2
console.log(x);  // sonuc= 0.30000000000000004 neden? 2lik sistemde tam bolunemyen durumlarda boyle sonuclar alinabliyor.bunu cozmek icin;
console.log(x.toFixed(5)); //noktada sonraki 5 degeri getir demek. tofixed ten sonra deger stringe donmus oldu.bunu tekrar number yapmak icin : x in basina + koyuyoruz
console.log(+x.toFixed(2)); 


console.log(15+25);

console.log(0000015+00025); //basina 0 kondugu zaman js bunu octal yani 8li sistemde algiliyor.icerisinde 7den buyuk bir rakam yoksa. 01234567 015 : 5 + 8 = 13 025: 5 + 16 = 21 13+21 =34

console.log(018+028); //decimal

console.log(Number(018));


// data tipleri ve degiskenlerin nerede tutuldugu ile ilgili olarak:

// stackte yer alan bilgiler (or; var ile yazilan), duzgun sirali veriler, dezavantaji hafizasi dusuk browserdaki yani progarm sirasinda degismeyecek bir deger kullancaksak bunu stackte tutuyoruz.

//heapte yer alan bilgiler: hafiza daha genis, eger buyuk hafizlari veri tutacaksak bunlarin referans noktalarini hafizada tutup heap e gonderiyoruz.


let a = 2; 
let b = a;
console.log({a},{b});

 a = 3;  // burada a degerini degistiriyoruz ama tekrar cikti aldigimizda a nin degeri degisiyor ama b ayni kaliyor. let yerine var da yazilsa ayni sonucu verir.
console.log({a},{b});