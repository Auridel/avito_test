import React, {useState, useRef} from "react";

import "./addForm.scss";

const AddForm = ({id, service}) => {
    const [data, setData] = useState({name: "", comment: ""})
    const [status, setStatus] = useState(null);
    const [error, setError] = useState({name: false, comment: false});
    const nameRef = useRef();
    const commentRef = useRef();

    const sendData = () => {
        if(data.name.trim() && data.comment.trim()) {
            setError({name: false, comment: false});
            setStatus("loading");
            service.addComment(id, data)
                .then(() => {
                    setStatus("ok");
                    nameRef.current.value = "";
                    commentRef.current.value = "";
                })
                .catch(() => {
                    setStatus("fail");
                    setError({...error, load: true})
                });
        }
        else {
            if(!nameRef.current.value.trim()) setError(prev => {return {...prev, name: true}});
            if(!commentRef.current.value.trim()) setError(prev => {return {...prev, comment: true}});
        }
    }

    return (
        <div className="add-form">
            <div className="add-form__wrapper">
                <input
                    ref={nameRef}
                    onChange={(e) => {
                        if(!e.target.value.trim()) setError({...error, name: true});
                        setData({...data, name: e.target.value})
                    }}
                    type="text"
                    className={`add-form__input${error.name? " alert" : ""}`}
                    name="name" placeholder="Ваше имя"/>
                {error.name? <span className="add-form__alert">Введите имя</span> : ""}
            </div>
            <div className="add-form__wrapper">
                <input
                    ref={commentRef}
                    onChange={(e) => {
                        if(!e.target.value.trim()) setError({...error, comment: true});
                        setData({...data, comment: e.target.value})
                    }}
                    type="text"
                    className={`add-form__input${error.comment? " alert" : ""}`}
                    name="comment" placeholder="Ваш комментарий"/>
                {error.comment? <span className="add-form__alert">Введите комментарий</span> : ""}
            </div>
            <button
                onClick={sendData}
                className={`add-form__submit ${status}`}>Отправить комментарий</button>
        </div>
    )
};

export default AddForm;