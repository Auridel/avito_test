import React from "react";
import loader from "../../assets/img/loader.svg";

import "./loader.scss";

const Loader = () => {
    return (
        <div className="loader"><img src={loader} alt="loader"/></div>
    )
};

export default Loader;