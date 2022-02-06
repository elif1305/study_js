//                  Document Object Model(DOM)
// programing interface,dom ile html sayfalarına erişebiliyoruz,elementleri manipüle edebiliyrouz
// dom ile html elementleri js nin objeleri haline geliyor
/* DOM, web belgeleri için bir programlama arabirimidir. Programların belge yapısını, stilini ve içeriğini değiştirebilmesi için sayfayı temsil eder. DOM, belgeyi düğümler ve nesneler olarak temsil eder; bu şekilde, programlama dilleri sayfa ile etkileşime girebilir. */
/* domun bileşenleri :
window: html sayafasındaki görünen herşey
document */
// DOM accessing
/* document.getElementById(selector)
document.getElementsByClassName(selector)
document.getElementsByName(selector)
document.getElementsByTagName(selector)
document.querySelector(selector)
document.querySelectorAll(selector) */
let firstNameById = document.getElementById("first_name");
//html içinden first_name id sine sahip olana elemnti al ddiyoruz.
let lastNameById = document.getElementById("last_name");
console.log(firstNameById);
let firstNameByClassName = document.getElementsByClassName("input--style-4");
//html içinden first_name classına sahip olana elemntleri al ddiyoruz.birden fazla element dönebilir.genelde her zman html collection döner
console.log(firstNameByClassName);
let firstNameByClassName1 = document.getElementsByClassName("input--style-4")[0];
console.log(firstNameByClassName1);
// element ve elements arasında fark var.elementsle çağırıken indexleme yapabiliriz
let firstNameByName = document.getElementsByName("first_name");
console.log(firstNameByName);//bu şekilde çağırdımızda nodelist döner
let firstNameByName1 = document.getElementsByName("first_name")[0];
console.log(firstNameByName1);
// en mantıklı id ile yakalamak id yoksa query selector ile
//querySelector ile yakalama yaparken css teki gibi elementi id veya classa ait çağırırken . veya # ile yazmamız gerekir
//query şartları sağlayan ilk elemenı döndürür
let firstNameBySelectorId = document.querySelector("#first_name");
window.console.log(firstNameBySelectorId);
let firstNameBySelectorClass = document.querySelector(".input--style-4");
console.log(firstNameBySelectorClass);
let firstNameBySelectorName = document.querySelector("[name='first_name'");
console.log(firstNameBySelectorName);
let firstNameBySelectorInputName = document.querySelector("input[name=first_name");
console.log(firstNameBySelectorInputName);

let firstNameBySelectorAllClass = document.querySelectorAll(".input--style-4");
console.log(firstNameBySelectorAllClass);
// all ile elemanların tümünü yakalıyor

/* 
getElementsByClassName => html collections
getElementsByName => Nodelist
querySelectorAll => nodelist
-nodelist leri array gibi kullanabiliyrouz.array functionlari ile kullanılabiliyor
-for each ile direk kullanabiliyrouz
- collectionu da array from veya split ilee arraye dönüştürmemiz gerekiyor onadan sonra for each ile kullanabiliriz
 */
// render a göre öncelikli kullanmamız gereken sıra id, slector,class,allselector

//              property vs. attribute
//property -> Özellik
//Attributes -> Öznitelikler
console.log(firstNameById.getAttribute("id"));//first_name
console.log(firstNameById.getAttribute("class"));// input--style-4
//class ve id yi değiştirebiliriz
/* firstNameById.setAttribute("class","redColorClass");
firstNameById.setAttribute("type","radio");// manipüle edebiliyoruz */

// innerHTML, innerText, textContent, (input=>value) 
let headerDiv = document.getElementById("headerId");
console.log(headerDiv.innerHTML);//içindeki elemanları html taglari ile birlikte veriyor
console.log(headerDiv.innerText);//sadece taglerin içindeki text leri veriyor
console.log(headerDiv.textContent);// tagleri algılyor ama çıktıda tagler varmış gibi gösteriyor ona göre boşlukla çıkabiliyor

// htmle değer veriyoruz input kısmına
firstNameById.value = "Ryan";
lastNameById.value = "Daniel";
//🔥🔥🔥🔥🔥 FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥

// full name e RYAN DANIEL yazma ve Emaile de rayn.daniel@cw.com yazdırma
//benim çözümüm
/* let fullNameById = document.getElementById("full_name");
fullNameById.value = (firstNameById.value.toUpperCase() + " " + lastNameById.value.toUpperCase());
let mailNameById = document.getElementById("email");
mailNameById.value = (firstNameById.value.toLowerCase() + "." + lastNameById.value.toLowerCase()+"@cw.com"); */
// hocanın çözümü
let fullName =document.querySelector("#full_name");
fullName.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`;
let email = document.getElementById("email");
email.value = `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@cw.com`;

// HTmle eleman oluşturma
//create logo
let logo = document.createElement("img");//img tagi oluşturduk
logo.setAttribute("src","img/logo.png");//src sini verdik
logo.setAttribute("class","headerLogo");//class ını verdik
/* headerDiv.appendChild(logo);// oluşturduğumuz logo yu headerDiv e çocuk olarak ekle.
=>append() öğesinin dönüş değeri yoktur,  appendChild(), eklenen nesnesiyi döndürür
 */
// headerDiv.innerHTML = `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />`; bu şekilde yazarsak başlığı kaybederiz.eğer kaybetmek istemiyosak tüm tagleri eklememiz gerekiyor:
/* headerDiv.innerHTML = `<h2 class=“title”>Registration Page</h2>` + `<img src=“img/logo.png” alt=“Bank logo” class=“nav_logo” id=“logo” / >`; */

headerDiv.innerHTML += `<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />`;// bu şekilde kullanıyoruz ki child olarak ekle diyoruz

