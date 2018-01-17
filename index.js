module.exports = (iterable, promisifier, initialValue = []) =>
  iterable.reduce(
    (chain, elem, index) =>
      chain.then(chainRes =>
        promisifier(elem, index, iterable, chainRes).then(
          res => (chainRes.push(res), chainRes)
        )
      ),
    Promise.resolve(initialValue)
  );

// Alternative implementation with an array of function
// Not exported yet, I'm just leaving it there to think about it
const alterPromiseEach = (iterable, initialValue) =>
  iterable.reduce(
    (chain, elem, index) => chain.then(res => elem(res, index)),
    Promise.resolve(initialValue)
  );
