module.exports = function(app) {
  // Get all pages for this website
  app.get('/api/website/:wid/page', (req, res) => {
    const wid = req.params['wid'];
    let result = [];
    result = pages.filter(page => page.websiteId === wid);

    res.json(result);
  });

  // Adding new page
  app.post('/api/page', (req, res) => {
    const newPage = req.body;
    pages.push(newPage);
    res.json(newPage);
  });

  // Get page by given id
  app.get('/api/page/:pid', (req, res) => {
    const pid = req.params['pid'];
    const page = pages.find(page => page._id === pid);
    res.json(page);
  });

  // Delete page by given id
  app.delete('/api/page/:pid', (req, res) => {
    const pid = req.params['pid'];
    const page = pages.find(page => page._id === pid);
    const index = pages.indexOf(page);
    pages.splice(index, 1);
    res.json(page);
  });

  // Update page
  app.put('/api/page', (req, res) => {
    const newPage = req.body;
    pages = pages.map(page => {
      if (page._id === newPage._id) {
        page = newPage;
      }
      return page;
    });
    res.json(newPage);
  });
};
