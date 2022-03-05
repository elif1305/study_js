
// let liste = []
// let number = Math.floor(Math.random()*50)

// function must (){
//     for(let i = 0; i<7; i++){
//          if(number != liste){
//         liste.push(number);
//         }return;  
//     }
// }
// must()

// console.log(liste);

let liste = []


function lottery(){
    
    for(let i = 0; liste.length < 6 ; i++){
        let number = Math.floor(Math.random()*49+1)
        
        if (liste.includes(number)){
            continue;
        }
        else{
        liste.push(number);
        }

    }
    console.log(liste)
}

lottery();