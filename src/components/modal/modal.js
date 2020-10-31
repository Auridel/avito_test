import React, {useEffect, useState} from "react";
import AddForm from "../addForm/addForm";
import Loader from "../loader/loader";

import "./modal.scss";

const Modal = ({id, trigger, service}) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!item) service.getImage(id)
            .then(res => {
                setItem(res)
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true)
            });
    })

    return (
        <>
            <div className="modal">
                {loading? <Loader/> : ""}
                {error? "Error" : ""}
                {item?
                    <>
                        <button
                            onClick={() => trigger(null)}
                            className="modal__close"/>

                        <div className="modal__content">
                            <img src={item.url} alt="image" className="modal__img"/>
                        </div>
                        <div className="modal__comments">
                            {item.comments? item.comments.map(elem => {
                                    return (
                                        <div key={elem.id} className="comment">
                                            <span className="comment__title">{new Intl.DateTimeFormat({
                                                day: "2-digit", month:"2-digit", year: "numeric"
                                            }).format(elem.date)}</span>
                                            <span className="comment__text">{elem.text}</span>
                                        </div>
                                    )
                                }
                            ) : ""}
                        </div>
                        <AddForm/>
                </>
                : ""}
            </div>

            <div
                onClick={() => trigger(null)}
                className="overlay"/>
        </>
    )
};

export default Modal;