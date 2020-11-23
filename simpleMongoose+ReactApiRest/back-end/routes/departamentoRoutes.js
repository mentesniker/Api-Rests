const express = require('express');
const sample_airbnb = require('../models/departamento');
const app = express();

app.get('/departamentos', async (req, res) => {
  const deps = await sample_airbnb.find({"property_type":"Apartment","summary":{"$ne":""}}).limit(10);
  try {
    res.send(deps);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/casas', async (req, res) => {
  const deps = await sample_airbnb.find({"property_type":"House","summary":{"$ne":""}}).limit(10);
  try {
    res.send(deps);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/top', async (req, res) => {
  const deps = await sample_airbnb.find({"summary":{"$ne":""}}).sort({"$review_scores.review_scores_rating":1}).limit(10);
  try {
    res.send(deps);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/upload', async (req, res) => {
  const deps = new sample_airbnb(req.body);
  try {
    await deps.save();
    res.send(deps);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = app;