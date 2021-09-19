import Post from "./Post"
import "./styles/styles.css"
import React from 'react'
import {render} from "react-dom"
import "./babel"

const post = new Post("Webpack post title");

console.log(post.toString())

const App = () => (
    <div className="container">
        <h1>Webpack</h1>
    </div>
);

render(<App/>, document.getElementById("app"))