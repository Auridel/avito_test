import React from "react";

import "./addForm.scss";

const AddForm = () => {
    return (
        <div className="add-form">
            <input type="text" className="add-form__input"/>
            <input type="text" className="add-form__input"/>
            <button className="add-form__submit">Отправить комментарий</button>
        </div>
    )
};

export default AddForm;