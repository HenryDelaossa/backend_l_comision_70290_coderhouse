exports.httpResponseOk = (res, data, message = "success", code = 200) => {
  const isArray = data && Array.isArray(data);
  res.status(code);
  res.send({
    message,
    records: isArray ? data : undefined,
    record: !isArray ? data : undefined,
  });
};

exports.httpResponseError = (res, code = 404, message) => {
  console.log({ errorMessage: message });
  res.status(code);
  res.send({ errors: { message } });
};
