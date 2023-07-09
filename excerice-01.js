function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [index0, , index2] = arr;
  
    return { name, age, index0, index2 };
  }

  
  const obj = { name: 'John', age: 30 };
  const arr = [10, 20, 30, 40];
  
  console.log(destructureExample(obj, arr));
  