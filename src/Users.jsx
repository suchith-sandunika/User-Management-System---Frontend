import Userform from "./Userform";
import Userstable from "./Userstable";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                setUsers(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    }

    const addUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        axios.post('http://localhost:5000/api/createuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            name: data.name,
        }
        axios.put('http://localhost:5000/api/updateuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit(true);
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    }

    const deleteUser = (data) => {
        axios.delete('http://localhost:5000/api/deleteuser', { data })
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios Error:", error);
            });
    }

    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
                marginLeft: '100px',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Userform addUser={addUser} updateUser={updateUser} submitted={submitted} data={selectedUser} isEdit={isEdit}/>
            <Userstable
                rows={users}
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data => {
                    window.confirm('Are you sure you want to delete this user?') && deleteUser(data);
                }}
            />
        </Box>
    );
}

export default Users;

// import Userform from "./Userform";
// import Userstable from "./Userstable";
// import {Box} from "@mui/material";
// import axios from "axios";




// import {useEffect, useState} from "react";
//
// const Users = props => {
//     const [users, setUsers] = useState([]);
//     const [submitted, setSubmitted] = useState(false);
//     const [isEdit, setIsEdit] = useState(false);
//     const [selectedUser, setSelectedUser] = useState({});
//
//     useEffect(() => {
//         getUsers();
//     }, []);
//
//     const getUsers = () => {
//         axios.get('http://localhost:5000/api/users')
//             .then(response => {
//                 //console.log(response.data.response);
//                 setUsers(response?.data?.response || []);
//             })
//             .catch(error => {
//                 console.error("Axios Error:", error);
//             });
//     }
//
//     const addUser = (data) => {
//         setSubmitted(true);
//
//         const payload = {
//             id: data.id,
//             name: data.name,
//         }
//
//         axios.post('http://localhost:5000/api/createuser', payload)
//             .then(() => {
//                 //console.log(response.data.response);
//                 getUsers();
//                 setSubmitted(false);
//             })
//                 .catch(error => {
//                     console.error("Axios Error:", error);
//                 });
//         }
//
//         const UpdateUser = (data) => {
//             setSubmitted(true);
//             const payload = {
//                 id: data.id,
//                 name: data.name,
//             }
//             axios.put('http://localhost:5000/api/updateuser', payload)
//                 .then(() => {
//                     //console.log(response.data.response);
//                     getUsers();
//                     setSubmitted(false);
//                     isEdit(true);
//                 })
//                 .catch(error => {
//                     console.error("Axios Error:", error);
//                 });
//         }
//
//         const DeleteUser = (data) => {
//             axios.delete('http://localhost:5000/api/deleteuser', data)
//                 .then(() => {
//                     //console.log(response.data.response);
//                     getUsers();
//                 })
//                 .catch(error => {
//                     console.error("Axios Error:", error);
//                 });
//         }
//
//     return (
//         <Box sx={{width:'calc(100%-100px)', margin:'auto', marginTop:'100px', marginLeft:'100px'}}>
//             <Userform addUser={addUser} UpdateUser={UpdateUser} submitted={submitted} data={selectedUser} isEdit={isEdit}/>
//             <Userstable rows={users} selectedUser={data => {
//                 setSelectedUser(data);
//                 setIsEdit(true);
//             }}
//             DeleteUser={data => {
//                 window.confirm('Are you sure you want to delete this user?') && DeleteUser(data);
//             }}/>
//         </Box>
//     );
// }
//
// export default Users;