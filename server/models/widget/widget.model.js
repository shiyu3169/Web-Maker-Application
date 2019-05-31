const mongoose = require("mongoose");
const WidgetSchema = require("./widget.schema");
const WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

// Create Widget
WidgetModel.createWidget = (widget) => {
  return WidgetModel.create(widget);
}

// Find Widgets For Page
WidgetModel.findWidgetsForPage = (pid) => {
  return WidgetModel.find({ pageId: pid });
}

// Find widget by its id
WidgetModel.findWidget = (wgid) => {
  return WidgetModel.findById(wgid);
}

// Delete Widget
WidgetModel.deleteWidget = (wgid) => {
  return WidgetModel.deleteOne({ _id: wgid });
}

// Update Widget
WidgetModel.updateWidget = (widget) => {
  return WidgetModel.updateOne({_id: widget._id}, widget);
}

module.exports = WidgetModel;