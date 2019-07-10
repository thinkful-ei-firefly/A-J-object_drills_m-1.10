'use strict';

let obj = {
    foo : 78,
    bar : 4,
    fum : 30,
    quux : 12,
    spam : "test"

}

for (let key in obj){
    console.log(key, obj[key])
}