import React, {useState, useEffect} from "react";
import Service from "../../service";
import Loader from "../loader/loader";
import Image from "../image/image";
import Modal from "../modal/modal";

import "./app.scss";

const service = new Service();

const App = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(null);

    useEffect(() =>{
        if(!data.length){
            setLoading(true);
            service.getAll()
                .then(res => {
                    console.log(res)
                    setLoading(false);
                    setData(res);
                })
                .catch(() => {
                    setLoading(false);
                    setError(true)
                })
        }
    })


    const showModal = (id) => {
        setModal(id)
    }

    return (
        <main className="container">
            {modal? <Modal id={modal} trigger={setModal} service={service}/> : ""}
            <h1 className="main-header">Test App</h1>
            {loading? <Loader/> : ""}
            {error? "Error" : ""}
            <section className="content">
                {data.length? data.map(item =>
                    <a
                        key={item.id}
                        onClick={(e) => {
                        e.preventDefault();
                        showModal(item.id)
                    }}>
                        <Image
                            url={item.url}
                            />
                    </a>
                    ) : ""}
            </section>
            <footer className="main-footer">
                <span className="main-footer__copyright">© 2018-2019</span>
            </footer>
        </main>
    )
};

export default App;