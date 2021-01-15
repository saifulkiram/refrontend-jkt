import React from "react";

import { Navbar,  } from "react-bootstrap"


class Navigationbar extends React.Component {
    render() {
        return (
        <Navbar
        style={{ backgroundColor: "#0C405E", height: "60px" }}
        expand="lg"
        fixed='top'
        className="justify-content-end">
            <Navbar.Brand  style={{
            color: "white",
            width: "270px"
          }} >Inventory</Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Text >
                    Total Product: 
                </Navbar.Text>
        </Navbar>)
    }
}

export default Navigationbar;
