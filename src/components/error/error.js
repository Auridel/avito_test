import React from "react";
import error from "../../assets/img/error.svg";

import "./error.scss";

const Error = () => {
    return (
        <div className="error"><img className="error__img" src={error} alt="error"/></div>
    )
};

export default Error;