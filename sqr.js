let squareRoot = function(num) {
    // TODO: Write - Your - Code 
    let start = 0;
    let end = num; 
    const precision = 1/Math.pow(10,6);
    
    while(start <= end) {
      const mid = start + (end - start)/2;
      const sqr = mid * mid; 
      const diff = Math.abs(sqr - num);
      console.log({precision, start, end, sqr, mid, diff}) 
      if( sqr === num || diff <= precision) {
        return mid;
      }
      // check for left zone
      if (sqr < num) {
        // move right
        start = mid; 
      } else {
        // right zone, move left
        end = mid;
      }
    }
  
    return end;
  };

  console.log(squareRoot(4.1))