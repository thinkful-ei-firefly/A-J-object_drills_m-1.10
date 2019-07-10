'use strict';

let array = [

    {
        name: 'John',
        jobTitle: 'Programmer',
        boss : 'angela',
    },
    {
        name: 'Tom',
        jobTitle: 'Engineer',
        boss: 'angela',
    },
    {
        name: 'Dan',
        jobTitle: 'Doctor',
        boss: 'angela',
    },
    {
        name: 'Angela',
        jobTitle: 'founder'
    }

]

for (let i = 0; i < array.length; i++) {
    if (array[i].boss === undefined) {
      console.log(`${array[i].jobTitle} ${array[i].name} doesn't report to anybody.`)  
    } 
    else {
        console.log(`${array[i].jobTitle} ${array[i].name} reports to ${array[i].boss}.`)
    }
    
        
}