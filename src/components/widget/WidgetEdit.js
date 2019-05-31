import React, { Component } from 'react';
import WidgetHeading from './WidgetHeading';
import WidgetImage from "./WidgetImage";
import WidgetYoutube from "./WidgetYoutube";
import Axios from 'axios';

export default class WidgetEdit extends Component {
    
    state={
        name: "",
        text: "",
        size: "",
        WidgetType: "",
        width: "",
        url: "",
        uid: "",
        wid: "",
        pid: ""
    }

    componentDidMount(){
        this.getWidget(this.props.match.params.wgid);
        this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            pid: this.props.match.params.pid
        })
    }

    getWidget = async (wgid) => {
        const res = await Axios.get(`/api/widget/${wgid}`);
        const currentWidget = res.data;
        this.setState({
            name: currentWidget.name? currentWidget.name : "",
            text: currentWidget.text,
            size: currentWidget.size,
            widgetType: currentWidget.widgetType,
            width: currentWidget.width,
            url: currentWidget.url
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {name, size, text, url, width, widgetType, uid, wid, pid} = this.state;
        const newWidget = {
            _id: this.props.match.params.wgid,
            pageId: pid,
            name,
            size: parseInt(size),
            text,
            url,
            width,
            widgetType
        }
        if(widgetType === "YOUTUBE") {
            // split url into array of strings
            const splited = newWidget.url.split("/");
            // count number of strings we have in splited url
            const length = splited.length;
            // get the last element in splited url --- video id
            const videoId = splited[length -1];
            // parse url into embeded version
            newWidget.url = "https://www.youtube.com/embed/" + videoId;
        }
        Axios.put("/api/widget", newWidget);
        this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget`)
    }

    onDelete = () => {
        const {uid, wid, pid} = this.state;
        Axios.delete(`/api/widget/${this.props.match.params.wgid}`)
        this.props.history.push(`/user/${uid}/website/${wid}/page/${pid}/widget`)
    }

    render() {
        const {name, text, size, width, widgetType, url , uid, wid, pid} = this.state;
        if(widgetType === "HEADING"){
            return (
                <WidgetHeading 
                    name={name}
                    text={text}
                    size={size} 
                    uid={uid} 
                    wid={wid} 
                    pid={pid} 
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onDelete={this.onDelete}
                />
            );
        } else if(widgetType==="IMAGE"){
            return (
                <WidgetImage 
                    name={name}
                    width={width}
                    url={url}
                    uid={uid} 
                    wid={wid} 
                    pid={pid} 
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onDelete={this.onDelete}
                />
            );
        } else {
            return (
                <WidgetYoutube 
                    name={name}
                    width={width}
                    url={url}
                    uid={uid} 
                    wid={wid} 
                    pid={pid} 
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    onDelete={this.onDelete}
                />
            );
        }
    }
}
