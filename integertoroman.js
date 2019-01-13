// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
//Input is guaranteed to be within the range from 1 to 3999.
num=1234


var intToRoman = function(num) {
    //Convert Int => String
    var input =""+num;
    //reverse number
    var revNum="";
    var romNum="";
    for (i=input.length-1;i>=0;i--){
    revNum+=input[i];
    }
    //break up number into places
    var places={ones:revNum[0], tens:revNum[1], hundreds:revNum[2], thousands:revNum[3]};
    console.log(places);

    //Hash this out!!!
    //Thousands
    if (places.thousands>0 && places.thousands<=3){
        for (i=1;i<=places.thousands;i++){
            romNum+="M";
        }
    }
    //Hundreds
    if (places.hundreds>0 && places.hundreds<=3){
        for (i=1;i<=places.hundreds;i++){
            romNum+="C";
        }
    }
    else if (places.hundreds==4){
            romNum+="CD";
    }
    else if (places.hundreds==5){
            romNum+="D";
    }
    else if (places.hundreds>=6 && places.hundreds<=8){
        romNum+="D"
        for (i=5;i<=places.hundreds-1;i++){
            romNum+="C";
        }
    }
    else if (places.hundreds==9){
            romNum+="CM";
    }
    //Tens
    if (places.tens>0 && places.tens<=3){
        for (i=1;i<=places.tens;i++){
            romNum+="X";
        }
    }
    else if (places.tens==4){
            romNum+="XL";
    }
    else if (places.tens==5){
            romNum+="L";
    }
    else if (places.tens>=6 && places.tens<=8){
        romNum+="L"
        for (i=5;i<=places.tens-1;i++){
            romNum+="X";
        }
    }
    else if (places.tens==9){
            romNum+="XC";
    }

    //Ones
    if (places.ones>0 && places.ones<=3){
        for (i=1;i<=places.ones;i++){
            romNum+="I";
        }
    }
    else if (places.ones==4){
            romNum+="IV";
    }
    else if (places.ones==5){
            romNum+="V";
    }
    else if (places.ones>=6 && places.ones<=8){
        romNum+="V"
        for (i=5;i<=places.ones-1;i++){
            romNum+="I";
        }
    }
    else if (places.ones==9){
            romNum+="IX";
    }

    console.log(romNum);
    return romNum;
};
