import React, { Component } from "react";
import Footer from "../utility/Footer"
import Navbar from "../utility/Navbar";
import Websites from "./Websites";

export default class WebsiteList extends Component {

    state={
        uid: this.props.match.params.uid
    }

    async componentDidMount(){
        const isLoggedIn = await this.props.loggedIn();
        if(isLoggedIn === 0) {
            this.props.history.push("/login");
            return;
        }
    }


    render() {
        const {uid} = this.state
        return (
            <div>
                <Navbar 
                    backBtn={`/user/${uid}`} 
                    title="Websites" 
                    rightBtn="plus" 
                    rightBtnTo={`/user/${uid}/website/new`} 
                />
                <section className="container">
                    <Websites uid={uid}/>
                </section>
                <Footer uid={uid} />
            </div>
        );
    }
}
