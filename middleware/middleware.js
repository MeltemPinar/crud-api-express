const fs = require("fs");
exports.loggerMiddleware = (req, r, next) => {
  console.log("Middleware çalıştı");
  console.log("METHOD:", req.method, "URL", req.url);
  next();
};

let tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
exports.controlMiddleware = (req, res, next) => {
  const found = tours.find((i) => i.id === req.params.id);
  if (!found)
    return next(
      res
        .status(404)
        .json({ status: "Gönderdiğiniz id'ye ait bir tur bulunamadı" })
    );
  req.tour = found;
  next();
};
