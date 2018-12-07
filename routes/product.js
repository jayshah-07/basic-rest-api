let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let Product = require("../models/Product");

/* Get all the products */
router.get("/", function(req, res, next){
    Product.find(function(err, products){
        if(err){
            return next(err);
        }
        res.json(products);
    });
});

/** Get Single product by ID */

router.get('/:id', function(req, res, next){
    Product.findById(req.params.id, function(err, post){
        if(err){
            return next(err);
        }
        res.json(post);
    });
});

/** Save Product */
router.post("/", function(req, res, next){
    Product.create(req.body, function(err, post){
        if(err){
            return next(err);
        }
        res.json(post);
    });
});

/** 
 * Update Post */

router.put("/", function(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err){
            return next(err);
        }
        res.json(post);
    });
});


/**
 * DELETE POST
 */

 router.delete("/", function(req, res, next){
     Product.findByIdAndRemove(req.params.id, req.body, function(err, post){
         if(err){
             return next(err);
         }
         res.json(post);
     });
 });

 module.exports = router;