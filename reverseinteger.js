var x = 123;
// -2,147,483,648 to 2,147,483,647 is our range!
var test = ["1","2","3","4"];

var reverse = function(x) {
    var neg = false;
    var arr = [];
    var y = "";
    if (x<0){neg=true;}else{neg=false;}
    if (x >= -2147483648 && x<=2147483647){
        // console.log("Valid Number");
        // console.log(neg?"Negative Number":"Positive Number");
        //convert num to string
        var n = x.toString();
        //convert to and reverse array
        for (i=(n.length-1);i>=0;--i){
            arr.push(n[i]);
        }

        //Check negative relocate "-" to front
        if (neg){
            arr.pop();
            arr.unshift("-");
        }

        //reassemble to string
        for (ii=0;ii<arr.length;++ii){
            // console.log(arr[ii]);
            y+=arr[ii];
        }

        //parse string back to int!
        var xx = parseInt(y);
        console.log(xx)
        //Recheck -2,147,483,648 to 2,147,483,647 is our range!
        if (xx>= -2147483648 && xx<=2147483647){
        //Done
            return xx;
        }
        else{
        //And Done
            return 0;
        }
        //test

        // console.log(arr);
        // console.log(y);
        // console.log(xx);
    }
    else{
        return 0;
    }

};
