const mongoose = require("mongoose");
const WebsiteSchema = require("./website.schema");
const WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

// Find websites for user
WebsiteModel.findAllWebsitesForUser = (uid) => {
  return WebsiteModel.find({developerId: uid});
}

// Create website
WebsiteModel.createWebsite = (website) => {
  return WebsiteModel.create(website);
}

// Delete website
WebsiteModel.deleteWebsite = (wid) => {
  return WebsiteModel.deleteOne({_id: wid});
}

// Update website
WebsiteModel.updateWebsite = (website) => {
  return WebsiteModel.updateOne({_id: website._id}, website);
} 

module.exports = WebsiteModel;