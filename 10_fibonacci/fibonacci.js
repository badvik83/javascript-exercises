const fibonacci = function() {

  // Modified to use memory only up to the certain request
  function fibonacciSeq (fibSeqPos) {
    let a = 1;
    let b = 1;
    let theResult = 0;
    for (let i = 0; i < fibSeqPos; i++) {
        theResult = a;
        let previousA = a;
        a = b;
        b = previousA + b;
    }
    return theResult;
};

alert(fibonacciSeq(10));
  
};

// Do not edit below this line
module.exports = fibonacci;
