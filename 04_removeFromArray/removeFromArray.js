const removeFromArray = function(a, b, c) {
  
    let newArray = new Array(a.length-2);
    let newArrayCount = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] == b || a[i] == c)
        {
          continue;   
        }
      else {
        newArray[newArrayCount] = a[i];
        newArrayCount++;
      }
    }
    return(newArray);
  };  

  console.log(removeFromArray([1, 2, 3, 4], 3, 2));


// Do not edit below this line
module.exports = removeFromArray;
