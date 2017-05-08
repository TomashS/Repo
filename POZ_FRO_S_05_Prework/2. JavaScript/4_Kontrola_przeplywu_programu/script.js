//ZADANIE 1
var num1 = 8;
var num2 = 5;

if(num1 > num2){
        console.log("number 1 is grater then number 2");
    } else if(num1 < num2) {
        console.log("number 1 is lower then number 2");
    } else {
        console.log("number 1 and 2 are equal or it is fugazi");
}
//wynik: number 1 is grater then number 2
//ZADANIE 2
var num3 = 25;
var num4 = 12;
var num5 = 89;

if(num3 > num4 && num3 > num5){
        console.log("number 1 is the gratest");
    } else if(num4 > num5 && num4 > num3) {
        console.log("number 2 is the gratest");
    } else if(num5 > num3 && num5 > num4) {
        console.log("number 3 is the gratest");
    } else {
        console.log("fugazi");
}
//wynik: number 3 is the gratest
//ZADANIE 3
for(var i=0; i<=9; i=i+1) {
    console.log(i+"Lubie JavaScript");
}
//wynik: 10 razy Lubie JavaScript
//ZADANIE 4
var result = 0;
for(var i=1; i<=10; i=i+1) {
    console.log(result + i);
}
//zrobione
//ZADANIE 5
var n = 5;
for (var i=n; i>=0; i=i-1) {
if(i % 2 == 0) {
        console.log(i+"-parzysta");
    } else {
        console.log(i+"-nieparzysta");
}
}
//no i fajnie
//ZADANIE 6
for(var i=0; i<3; i++) {
    for(var j=0; j<4; j++) {
        console.log("i=" + i + ", j=" + j);
    }
}
// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
  }
  //ZADANIE 8
  var stars = "";
  for(var i=0; i<5; i++){
      stars = "";
    for(var j=i; j>=0; j--){
      stars = stars+"*";
    }
    console.log(stars);
  }
