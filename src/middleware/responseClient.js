//pass argument as object is better than normal, because they can be not in order.
export const responseClient = ({ req, res, message, statusCode = 200 }) => {
  //success response
  req.success = () => {
    return res.status(statusCode).json({
      status: "success",
      message,
    });
  };
  //error response

  req.error = () => {
    return res.status(statusCode).json({
      status: "error",
      message,
    });
  };
  //status code between 200 to 300 is success response, otherwise, is error response
  if (statusCode >= 200 && statusCode < 300) {
    return req.success();
  } else {
    return req.error();
  }
};
