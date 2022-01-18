function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }


  function findOdd(A) {
    return A.reduce(function(c,v){return c^v;},0);
  }


  function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }


  function findOdd(A) {
    for(var i = 0; i < A.length; i++){  
      //Query the number of times that this 'i' element appears
      //then verify if that number of times is odd. If it is true, then return
      //that 'i' element
      if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
        return A[i];
      }
    }
    return 0;
  }

  function findOdd(A) {
    var trace = {};
    A.forEach(function(x) {
      if (trace[x]) delete trace[x];
      else trace[x] = true;
    });
    return parseInt(Object.keys(trace)[0]);
  }