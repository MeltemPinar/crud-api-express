const express = require("express");
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require("./controllers/tourControllers");
const {
  loggerMiddleware,
  controlMiddleware,
} = require("./middleware/middleware");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggerMiddleware);
app.route("/api/v1/tours").get(getAllTours).post(createTour);

app
  .route("/api/v1/tours/:id")
  .get(controlMiddleware, getTour)
  .patch(controlMiddleware, updateTour)
  .delete(controlMiddleware, deleteTour);
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});
