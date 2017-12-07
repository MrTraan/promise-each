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
