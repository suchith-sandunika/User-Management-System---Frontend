import { Button, Grid, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Userform = ({ addUser, updateUser, submitted, data, isEdit }) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: "#ffffff",
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography
                    component={'h1'}
                    sx={{
                        color: '#333333',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}
                >
                    User Form
                </Typography>
            </Grid>
            <Grid item xs={12} sw={6} sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px', marginLeft:'350px'}}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#666666',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                        textAlign: 'right',
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id='id'
                    name="id"
                    sx={{
                        width: '400px',
                        padding: '10px',
                        border: '1px solid #cccccc',
                        borderRadius: '5px',
                        fontSize: '14px',
                    }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sw={6} sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px', marginLeft:'350px'}}>
                <Typography
                    component={'label'}
                    htmlFor="name"
                    sx={{
                        color: '#666666',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                        textAlign: 'right',
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id='name'
                    name="name"
                    sx={{
                        width: '400px',
                        padding: '10px',
                        border: '1px solid #cccccc',
                        borderRadius: '5px',
                        fontSize: '14px',
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Button
                sx={{
                    display: 'block',
                    margin: '20px auto',
                    backgroundColor: '#00c6e6',
                    color: '#ffffff',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    '&:hover': {
                        opacity: '0.8',
                        backgroundColor:'#00a5c6',
                    }
                }}
                onClick={() => isEdit ? updateUser({ id, name }) : addUser({ id, name })}
            >
                {isEdit ? 'Update' : 'Add'}
            </Button>
        </Grid>
    )
}

export default Userform;


































// import {Button, Grid, Input, Typography} from "@mui/material";
// import {useEffect, useState} from "react";
//
//
// const Userform = ({ addUser,updateUser, submitted,data,isEdit }) => {
//
//     const [id, setId] = useState(0);
//     const [name, setName] = useState('');
//
//     useEffect(() => {
//         if(!submitted){
//             setId(0);
//             setName('');
//         }
//     }, [submitted]);
//
//     useEffect(() => {
//         if(data?.id && data.id !== 0){
//             setId(data.id);
//             setName(data.name);
//         }
//     }, [data]);
//
//     return (
//         <Grid container spacing={2} sx={{
//             backgroundColor: "white",
//             marginBottom: '30px',
//             display: 'block',
//         }}>
//             <Grid item xs={12}>
//                 <Typography component={'h1'} sx={{color: '#000000'}}>
//                     {/*like <p></p> tag ...*/}
//                     User Form
//                 </Typography>
//             </Grid>
//             <Grid item xs={12} sw={6} sx={{display: 'flex'}}>
//                 <Typography component={'label'} htmlFor="id" sx={{color: '#000000', marginRight: '20px', fontSize: '16px', width: '100px', display: 'block'}}>
//                     ID
//                 </Typography>
//                 <Input type="number" id='id' name="id" sx={{width: '400px'}} value={'id'} onChange={e => setId(e.target.value)}/>
//             </Grid>
//             <Grid item xs={12} sw={6} sx={{display: 'flex'}}>
//                 <Typography component={'label'} htmlFor="id" sx={{color: '#000000', marginRight: '20px', fontSize: '16px', width: '100px', display: 'block'}}>
//                     Name
//                 </Typography>
//                 <Input type="text" id='name' name="name" sx={{width: '400px'}} value={'name'} onChange={e => setName(e.target.value)}/>
//             </Grid>
//             <Button sx={{margin: 'auto', marginBottom: '20px', backgroundColor:'#00c6e6', color: '#000000', marginLeft: '15px', marginTop: '20px', '&:hover':{opacity:'0.7', backgroundColor:'#00c6e6'}}} onClick={() => isEdit ? updateUser : addUser({id,name})}>
//                 {
//                     isEdit ? 'Update' : 'Add'
//                 }
//             </Button>
//         </Grid>
//     )
// }
//
// export default Userform;