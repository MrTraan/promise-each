module.exports = (iterable, promisifier, initialValue = []) =>
  iterable.reduce(
    (chain, elem, index) =>
      chain.then(chainRes =>
        promisifier(elem, index, iterable, chainRes)
          .then(res => chainRes.concat(res))
      ),
    Promise.resolve(initialValue)
  );

// Alternative implementation with an array of function
// Not exported yet, I'm just leaving it there to think about it
const alterPromiseEach = (iterable, initialValue = []) =>
  iterable.reduce(
    (chain, elem, index) =>
      chain.then(chainRes => elem(res, index))
        .then(res => chainRes.concat(res)),
    Promise.resolve(initialValue)
  );
