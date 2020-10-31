export default class Service {
    async getAll(){
        const res = await fetch("https://boiling-refuge-66454.herokuapp.com/images");
        if(!res.ok) throw new Error();

        return res.json();
    }

    async getImage(id){
        const res = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
        if(!res.ok) throw new Error();

        return res.json()
    }

    async addComment(id, body){
        const res = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        if(!res.ok) throw new Error();

        return res.status;
    }
}