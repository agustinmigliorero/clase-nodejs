function catchAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}

function tryCatch(fn) {
  return (req, res, next) => {
    try {
      fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}

module.exports = {
  catchAsync,
  tryCatch,
};
