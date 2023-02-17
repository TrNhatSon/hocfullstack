import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRouutes = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', homeController.getAbout);

    return app.use('/', router);
}

module.exports = initWebRouutes;