import React, {Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Users
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
// Websites
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteEdit from "./components/website/WebsiteEdit";
// Pages
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// Widgets
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";

class App extends Component {

    state = {
        pages: [
            { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
            { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
            { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
        ],
        widgets: [
            { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
            { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
            { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"},
            { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
            { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://www.youtube.com/embed/qttOFtpUSyc" },
          ]
          
    }


    addPage = newPage => {
        const newPages = this.state.pages;
        newPages.push(newPage);
        this.setState({
            pages: newPages
        });
    }

    editPage = newPage => {
        const newPages = this.state.pages.map(
            (page) => {
                if(page._id === newPage._id) {
                    page = newPage
                }
                return page;
            }
        )
        this.setState({
            pages: newPages
        })
    }

    deletePage = pid => {
        const newPages = this.state.pages.filter(
            (page) => (
                page._id !== pid
            )
        )
        this.setState({
            pages: newPages
        })
    }

    editWidget = newWidget => {
        
        const newWidgets = this.state.widgets.map(
            (widget) => {
                if(widget._id === newWidget._id) {
                    widget = newWidget
                }
                return widget;
            }
        )
        this.setState({
            widgets: newWidgets
        })
    }

    addWidget = newWidget => {
        const newWidgets = this.state.widgets;
        newWidgets.push(newWidget);
        this.setState({
            widgets: newWidgets
        });
    }

    deleteWidget = (wgid) => {
        const newWidgets = this.state.widgets.filter(
            (widget) => (
                widget._id !== wgid
            )
        )
        this.setState({
            widgets: newWidgets
        })
    }

    render() {
        
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/user/:uid" component={Profile}/>
                    <Route exact path="/user/:uid/website" component={WebsiteList} />
                    <Route exact path="/user/:uid/website/new" component={WebsiteNew} />
                    <Route exact path="/user/:uid/website/:wid" component={WebsiteEdit} />
                    <Route exact path="/user/:uid/website/:wid/page" render={ props => (<PageList {...props} pages={this.state.pages} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/new" render={ props => (<PageNew {...props} pages={this.state.pages} addPage={this.addPage} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/:pid" render={ props => (<PageEdit {...props} pages={this.state.pages} editPage={this.editPage} deletePage={this.deletePage} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/:pid/widget" render={ props=>(<WidgetList {...props} widgets={this.state.widgets} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" render={props=>(<WidgetChooser {...props} addWidget={this.addWidget} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" render={ props=>(<WidgetEdit {...props} widgets={this.state.widgets} editWidget={this.editWidget} deleteWidget={this.deleteWidget} />)} />
                </Switch>
            </Router>
        );
    }
}

export default App;
