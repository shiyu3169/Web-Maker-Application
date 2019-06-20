import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../utility/Navbar"
import Footer from "../utility/Footer"

export default class PageList extends Component {

    state = {
        uid: "",
        wid: "",
        pages: []
    }

    async componentDidMount() {

        await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid
        })

        this.filterPage(this.state.wid);
    }

    filterPage = async (wid) => {
        const res = await axios.get(`/api/website/${this.state.wid}/page`)
        this.setState({
            pages: res.data
        })
    }

    render() {
        const {uid, wid} = this.state;
        return (
            <div>
                <Navbar 
                    backBtn={`/user/${uid}/website`}
                    title="Pages"
                    rightBtn="plus"
                    rightBtnTo={`/user/${uid}/website/${wid}/page/new`}
                />
                <div className="container">
                    <ul className="list-group">
                        {
                            this.state.pages.map(
                                (page) => (
                                    <li key={page._id} className="list-group-item">
                                        <Link to={`/user/${uid}/website/${wid}/page/${page._id}/widget`}>{page.name}</Link>
                                        <Link className="float-right" to={`/user/${uid}/website/${wid}/page/${page._id}`}>
                                            <i className="fas fa-cog" />
                                        </Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                <Footer uid={uid} />
            </div>
        );
    }
}
