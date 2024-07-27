const fs = require("fs");
const crypto = require("crypto");

let tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    tours: tours,
  });
};
exports.getTour = (req, res) => {
  res.status(200).json({
    status: "Aradığınız tur bulundu",
    tour: req.tour,
  });
};
exports.updateTour = (req, res) => {
  const updatedData = req.body;
  const id = req.params.id;
  const index = tours.findIndex((i) => i.id === id);
  const updateTour = { ...req.tour, ...updatedData };
  tours.splice(index, 1, updateTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        res.status(404).json({
          status: "Güncelleme işlemi başarısız oldu",
        });
      } else {
        res.status(200).json({
          status: "Tur Başarıyla Güncellendi",
          tour: updateTour,
        });
      }
    }
  );
};
//Yeni tur oluştur
exports.createTour = (req, res) => {
  const newTour = Object.assign({ id: crypto.randomUUID() }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    () => {
      res.status(201).json({
        status: "Başarıyla oluşturuldu",
        newTour: newTour,
      });
    }
  );
};
//Turu kaldır
exports.deleteTour = (req, res) => {
  const newTours = tours.filter((i) => i.id === req.params.id);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(newTours),
    () => {
      res.status(204).send();
    }
  );
};
