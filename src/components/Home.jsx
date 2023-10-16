import "../App.css";
import Carausel from "./Carausel";
import Categories from "./Categories";
import Detailed_item from "./Detailed_item";
import Navbar from "./Navbar";
import React from "react";


const Home = () => {
    return (
        <div>
            <Carausel />
            <Categories />
            <Detailed_item />
        </div>
    )

}

export default Home;