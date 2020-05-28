export default () => (next) => (action) => {
  const { promise, types, ...rest } = action;
  if (!promise) {
    return next(action);
  }

  const [REQUEST, SUCCESS, FAILURE] = types;
  next({ ...rest, type: REQUEST });
  return promise.then(
    (response) => {
      next({ ...rest, response, type: SUCCESS });
      return response;
    },
    (error) => {
      next({ ...rest, error, type: FAILURE });
      return Promise.reject(error);
    }
  );
};
