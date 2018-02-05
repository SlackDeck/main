import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./components/app";

addEventListener("load", () => {
    var root = document.getElementById("root")
    ReactDOM.render(<App />, root)
})