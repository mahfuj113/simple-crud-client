import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const personsData = useLoaderData()
    const [users, setUsers] = useState(personsData)
    const handleDelete = _id => {
        console.log("deleted",_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert("Deleted successfully")
                const user = users.filter(user => user._id !== _id)
                setUsers(user)
            }
        })
    }
    return (
        <div>
            <h1>This is user {users.length}</h1>
            {
                users.map(user => <p 
                    key={user._id}>{user.name}: {user.email} : {user._id}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                    <button onClick={() => handleDelete(user._id)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Users;