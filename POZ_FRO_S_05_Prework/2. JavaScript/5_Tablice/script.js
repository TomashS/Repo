//ZADANIE 1
var myTab = [3,4,5];
/*wynik: (myTab[0]);
3
(myTab[1]);
4
(myTab[2]);
5 */
//ZADANIE 2
var fruits = ["banana", "strawberry", "watermelon"];
/*
(fruits.length);
3
(fruits[2]);
"watermelon"
*/
for (var i=0; i < fruits.length; i++) {
  console.log( fruits[i] );
}
/*
banana
strawberry
watermelon

ZADANIE 3 */
var tab1 = [4,12,5,32,7,56,92,43,19,20];
var sum = 0;
  for (var i=0; i < tab1.length; i++) {
    sum = sum+(tab1[i]);
  }   console.log(sum);
  //wynik:   290
//ZADANIE 4
var sum1 =0;
var tab2 = [11,12,5,32,7,56,92,43,19,20];
  for (var i=0; i<tab2.length; i++) {
    if(tab2[i]%2===0) {
      sum1=sum1+(tab2[i]);
      console.log(tab2[i]);
    }
  } console.log(sum1);
  //wynik: 12,32,56,92,20, suma: 212
//ZADANIE 5
var max = 0;
var tab3 = [11,12,5,312,7,56,92,43,19,20];
    for (var i=0; i<tab3.length; i++) {
        if (max>tab3[i]) {
             max=max;
        } else {
          max = tab3[i];
        }
      } console.log(max);
//wynik: 312

//ZADANIE 6
var  firstIndex = 0;

var tabeNew = [9,5,6,1,9,1,3,4,7,8];

  for (var i=0; i<tabeNew.length; i++) {
      for (var j=i+1; j<tabeNew.length; j++) {
              if( tabeNew[i] ==  tabeNew[j]) {
                  firstIndex=i;
                 console.log(firstIndex);
             break;
    }
    }
    }
//wynik: 0, 3 nie wiem  gdzie wstawić breaka

//ZADANIE 7
var tab5 = [1,2,3,4,5,6,7,8,9,10];
  for (var i=tab5.length-1; i>=0; i--) {
      console.log(tab5[i]);
  }
