import React, { Component } from "react";

export default class PageList extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light fixed-top bg-light">
                    <a class="color-black" href="../Website/Website-list.html">
                        <i class="fas fa-chevron-left" />
                    </a>
                    <a class="navbar-brand" href="Page-list.html">
                        Pages
                    </a>
                    <a class="color-black" href="Page-new.html">
                        <i class="fas fa-plus" />
                    </a>
                </nav>

                <div class="container">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="../Widget/Widget-list.html">Blog Post</a>
                            <a class="float-right" href="Page-edit.html">
                                <i class="fas fa-cog" />
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="../Widget/Widget-list.html">Blogs </a>
                            <a class="float-right" href="Page-edit.html">
                                <i class="fas fa-cog" />
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="../Widget/Widget-list.html">Home</a>
                            <a class="float-right" href="Page-edit.html">
                                <i class="fas fa-cog" />
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="../Widget/Widget-list.html">About</a>
                            <a class="float-right" href="Page-edit.html">
                                <i class="fas fa-cog" />
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href="../Widget/Widget-list.html">Contact Us</a>
                            <a class="float-right" href="Page-edit.html">
                                <i class="fas fa-cog" />
                            </a>
                        </li>
                    </ul>
                </div>

                <footer class="navbar navbar-light fixed-bottom bg-light">
                    <div class="full-width">
                        <a
                            class="color-black float-right"
                            href="../User/Profile.html"
                        >
                            <i class="fas fa-user" />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}
