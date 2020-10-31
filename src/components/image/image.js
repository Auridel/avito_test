import React from "react";

import "./image.scss";

const Image = ({url}) => {
    return (
        <div className="image__wrapper">
            <img src={url} className="image__img" alt="small image"/>
        </div>
    )
};

export default Image;