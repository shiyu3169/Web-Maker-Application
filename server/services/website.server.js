module.exports = function(app) {
  const websiteModel = require("../models/website/website.model");

  // Find all websites for given user id.
  app.get('/api/user/:uid/website', async (req, res) => {
    const uid = req.params['uid'];
    const websites = await websiteModel.findAllWebsitesForUser(uid);
    res.json(websites);
  });

  // Create new website
  app.post('/api/website', async (req, res) => {
    const newWeb = req.body;
    const data = await websiteModel.createWebsite(newWeb);
    res.json(data);
  });

  // Delete website with given wid
  app.delete('/api/website/:wid', async (req, res) => {
    const wid = req.params['wid'];
    const data = await websiteModel.deleteWebsite(wid);
    res.json(data);
  });

  // Update website
  app.put('/api/website', async (req, res) => {
    const newWeb = req.body;
    const data = await websiteModel.updateWebsite(newWeb);
    res.json(data);
  })
};
