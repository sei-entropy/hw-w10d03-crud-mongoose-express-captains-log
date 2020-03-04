const router = require("express").Router();
const Log = require("../models/log");

// GET /logs
router.get("/", (req, res) => {
    Log.find({}, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

// GET /logs/id
router.get("/:id", (req, res) => {
    Log.findById(req.params.id, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

// POST /logs
router.post("/", (req, res) => {
    Log.create(req.body, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        }
    });
});

// PUT /logs/id
router.put("/:id", (req, res) => {
    Log.findByIdAndUpdate(
        req.params.id,
        req.body,
        { useFindAndModify: true },
        (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        }
    );
});

// DELETE /logs/id
router.delete("/:id", (req, res) => {
    Log.findByIdAndRemove(
        req.params.id,
        { useFindAndModify: true },
        (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        }
    );
});

module.exports = router;
