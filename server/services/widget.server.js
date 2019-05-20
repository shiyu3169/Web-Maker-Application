module.exports = function(app) {
    let widgets = [
        { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
        { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
        { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"},
        { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
        { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://www.youtube.com/embed/qttOFtpUSyc" },
      ];

    // Find all widgets by given page id
    app.get("/api/page/:pid/widget", (req, res)=>{
        const pid = req.params["pid"]
        const result = widgets.filter(
            (widget) => {
                return widget.pageId === pid
            }
        )
        res.json(result)
    })

    // Create new widget
    app.post("/api/widget", (req, res) => {
        const newWidget = req.body;
        widgets.push(newWidget);
        res.json(newWidget);
    })

    // Get widget by id
    app.get("/api/widget/:wgid", (req, res)=> {
        const wgid = req.params["wgid"];
        const widget = widgets.find(
            (widget) => (widget._id === wgid)
        )
        res.json(widget);
    })

    // update Widget
    app.put("/api/widget", (req, res) => {
        const newWidget = req.body;
        widgets = widgets.map(
            (widget) => {
                if(widget._id === newWidget._id){
                    widget = newWidget;
                }
                return widget;
            }
        )
        res.json(newWidget);
    })

    // Delete Widget by given id
    app.delete("/api/widget/:wgid", (req, res) => {
        const wgid = req.params["wgid"];
        const widget = widgets.find(
            (widget) => (widget._id === wgid)
        );
        const index = widgets.indexOf(widget);
        widgets.splice(index, 1);
        res.json(widget);
    })
}