function chet() {
    var obj = {
        mul: function(source,izm) {
            let result = [];
            for (let i = 0; i < source.length; i++) {
                result.push(source[i] * izm)
            }
            return result;
        },
        sum: function(source,izm) {
            let result = [];
            for (let i = 0; i < source.length; i++) {
                result.push(source[i] + izm)
            }
            return result;
        },
        div: function (source,izm) {
            let result = [];
            for (let i = 0; i < source.length; i++) {
               if (izm == 0){
                   throw new Error('Делитель равен нулю');
               } else{
                   result.push(source[i] / izm)
               }
            }
            return result;
        },
        dif: function (source,izm) {
            let result = [];
            for (let i = 0; i < source.length; i++) {
                result.push(source[i] - izm)
            }
            return result;
        }

    }
    return obj;
}


let array=[10,20,30,50];
console.log(chet().sum(array, 10));
console.log(chet().dif(array, 10));
try{
    console.log(chet().div(array, 10));
} catch(e){
    console.error(e.message);
}
console.log(chet().mul(array, 10));

