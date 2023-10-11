import { useLoaderData } from "react-router-dom";

const Updata = () => {
    const loadedUser = useLoaderData()
    console.log(loadedUser);
    const handleUpdate = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const user = {name,email}
        console.log(user);
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(date => {
            console.log(date);
        })
    }
    return (
        <div>
            <h2>This is update</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUser.email} id="" />
                <br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};

export default Updata;