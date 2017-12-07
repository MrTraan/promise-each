promiseEach(iterable: Array\<any\>, callback: (any, ...) => Promise\<any\>) => Promise\<Array\<any\>\>

## Parameters
### iterable
  The array to transform
### callback
  Function to execute on each element in the array, taking four arguments:
  #### currentValue
    The current element being processed in the array.
  #### currentIndex
    The index of the current element being processed in the array.
  #### array
    The array given in first argument.
  #### currentResults
    An array containing the results of the previous calls so far.

Usage:
```javascript
const promiseEach = require('promise-each');

const numbers = [1,2,3,4];

const asyncAdd = (num) => new Promise(resolve => setTimeout(() => resolve(num + 1), 2000));

promiseEach(numbers, asyncAdd)
  .then(users => console.log(users)) // [2, 3, 4, 5]
  .catch(err => console.error(err));
```
