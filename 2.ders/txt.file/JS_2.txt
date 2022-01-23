// (6)

console.log("i am from js file");

// bu dosyanin html e tanimlanmasi gerekiyor.
// html de head veya body kismina git , script:src yi sec.
// yaziktan sonra ./ ile basla,mak zorunlu degildir ama tavsiye edilir, buludugum klasor ile ayni dosya icersinde bulunan dosyalardan birini secicem demek.

// (10)

var x = 7
var y = 5

console.log(x);
console.log({x}); // (11) konsolda okumayi kolaylastirma adina bu sekilde object olrak yazabiliirz.
y=x //(12) x in icindeki degeri y ye atadi
console.log(y=x); //(13)

// shift alt a --> toplu olarak blogu konum yapmak icin kisayol

// alert('hey') // (14) js in built in fonksiyonudur. websitesine girdigimizde 'konumunuza erismek istiyor' 'kameraya erismek istiyor' gibi alert cikaran fonksiyondur. (15) ekranda surekli cikmamasi icin yoruma alind.


var a ='global'   // (16) let ilede tnaimlama yapilaboilir.
console.log(a);
{
    let a = 'scope'   // (17) a nin degeri sadece burada scope a esit. parantez kapandigi zaman artik degeri basta yazilan (suslu parantez disindaki) degere doner.
    console.log(a);
}

console.log(a); // (18) scope (suslu parantez ) disinda yazildiginda yine ilk degerine dondu.

var a ='global'   // (19) or: scope icinde var ile atama yapma :

console.log(a);
{
    var a = 'scope'   // (20) a nin degeri var ile atandigi icin artik scope olarak degisti.
    console.log(a);
}

console.log(a); // (21) scope (suslu parantez ) icinde var kullanildigi icin degeri  ilk degere donmedi.

var b ='sari' // (22) ic ice scope acilabilir.
console.log(b); 
{
    let b = 'kirmizi'  
    console.log(b);
    {   // (23)
        let b = 'inner' // (24) bu esitleme yapilmasaydi bir ustteki scope a gidipp onun degerini (kirmizi) alirdi.
        console.log(b);
    }
    console.log(b); // (25) yukarde let b ='inner' yerine b='inner' yazilsaydi bunun degeri inner olurdu.
}

console.log(b); 

// (26) bir daha kullanmayacgimiz seyleri scope icinde tanimlariz , sadece scope icinde kullanilr ve daha sonrasinda hafizada tutulmaz. boylece kodu da yavaslatmaz.

// (27)
var c = 3 ;
console.log(c);
var c = 5;
console.log(c);

// (28) 
//let t = 3 ;
//console.log(t);
//let t = 5;     // (29) yukarda t degeri 3 e esitlendigi icin let ile tekrar atama yapinca hata veriyor. (30) hataynin ekranda gorunmemeis icin tamami yoruma alindi.
//console.log(t); 

var k = 5//(31) var ile tanimlanan degerler yer isgal ediyor, hafizada yer kapliyor
let kk = 8 //(32) let ile tanimlandiginda hafizada yer kaplamiyor


///const d = 5 //(33) d ye const ile atama yapildigin icin sonrasinda  d ye yeni deger atamasi yapilmak istendiginde hata verir.
// d = 7 


// const p ;  // (34) consta ilk deger atamasi olmadan asagidaki sekilde bir tanimlama yapamiyoruz. var ve lette bu yapilabiliyor.
// p = 9 ; // (35) hata vermemesi icin yoruma alindi.

console.log(s); // (36) basta hata veriyor cunku s tanimlamasi yok.altta ; var ile tanimlama altta yapildigi zaman bu sefer hata vermiyor undefined oluyor.. bunun nedeni de tanimlamadan once cagrildigi icin.
var s = 6; //(37) 


console.log(h); // (36) basta hata veriyor cunku h tanimlamasi yok.altta ; let ile tanimlama altta yapildigi zaman ulamadigi icin yine hata veriyor.
let h = 6; //(37) window(this) yazip baktigimizda sistemde cikmiyor.

// (38) var ile let arasindaki fark, var ile yapildiginda sisteme kaydediyor ve undefined oluyor fakat let ile yapildiginda hafizaya almadigi icin tekrardan hata veriyor.
