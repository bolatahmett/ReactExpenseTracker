import React from "react";
import { Jumbotron } from "reactstrap";
import Logo from "../logo.svg";

export const Header = (props) => {

    return (<>
        <Jumbotron fluid>
            <h3 className={"display-6"}>
                Expense Tracker React App
            </h3>
            <img src={Logo} style={{ height: "50px", width: "50px" }} alt={"react-logo"}></img>
        </Jumbotron>

    </>);
}