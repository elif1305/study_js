

let days = prompt("gunu giriniz")

switch (days) {
    case "pazartesi":
    case "carsamba":
    case "cumartesi":
    case "persembe":
        text = "in class var"
        break;
    case "sali":
    case "cuma":
        text = "teamwork var"
        break;
    case "pazar":
        text = "tatil"
        break;

    default:
        console.log("yanlis gun girdiniz");
}