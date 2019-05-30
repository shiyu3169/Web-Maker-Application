const mongoose = require("mongoose");
const PageSchema = require("./page.schema");
const PageModel = mongoose.model("PageModel", PageSchema);

// Find pages for website
PageModel.findAllPagesForWebsite = (wid) => {
  return PageModel.find({websiteId: wid});
}

// Create page
PageModel.createPage = (page) => {
  return PageModel.create(page);
}

// Find page by its id
PageModel.findPageById = (pid) => {
  return PageModel.findById(pid);
}

// Delete page
PageModel.deletePage = (pid) => {
  return PageModel.deleteOne({_id: pid});
}

// Update page
PageModel.updatePage = (page) => {
  return PageModel.updateOne({_id: page._id}, page);
}

module.exports = PageModel;