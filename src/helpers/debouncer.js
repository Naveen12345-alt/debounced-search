const debouncer = (func, wait = 300) => {
  let timerId = null;

  return function (thisBinding, ...args) {
    const restParams = args;
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => func.apply(thisBinding, restParams), wait);
  };
};

export default debouncer;

//Logic:=>
// params => func, wait
// body:=>
//
