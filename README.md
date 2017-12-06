Usage:
```javascript
const promiseEach = require('promise-each');

const userIds = [1,2,3,4];

// perform async db call
const getUserById = (id) => User.findOne({ _id: id });

promiseEach(userIds, getUserById)
  .then(users => console.log(users))
  .catch(err => console.error(err));
```
