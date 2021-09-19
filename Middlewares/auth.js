module.exports = (req, res, next) => {
  console.log("hello auth");
  console.log(req.cookies);
  if (req.cookies !== undefined && req.cookies.LogedIn === "true") {
    req.isAuthenticated = true;
    console.log("auth true");
    next();
  } else {
    console.log("auth false");
    req.isAuthenticated = false;
    next();
  }
};
