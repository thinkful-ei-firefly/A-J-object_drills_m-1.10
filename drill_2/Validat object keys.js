const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
    // your code goes here
    //let objKeys = Object.keys(object);
    if (Object.keys(object).length != expectedKeys.length){
      return false;
    } 
    for (let i = 0; i < expectedKeys.length; i++){
      if (!Object.keys(object).find(key => key === expectedKeys[i])) {
        return false;
      }
    }
    return true;
  }
  