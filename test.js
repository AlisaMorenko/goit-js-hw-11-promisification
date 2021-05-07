const makeTransaction = transaction => {
  const promise = new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, delay });
      } else {
        reject({ id: transaction.id });
      }
    }, delay);
  });
  return promise;
};
