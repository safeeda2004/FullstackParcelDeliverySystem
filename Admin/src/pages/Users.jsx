
import { DataGrid  } from '@mui/x-data-grid';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Users  = () => {
  const columns = [
    { field: 'id', headerName: ' ID', width: 90 },
    { field: 'fullName', headerName: 'Full Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'age', headerName: 'Age', type:'Number', width: 100 }, 
    { field: 'address', headerName: 'Address', width:300 },

    {
      field: "delete", 
      headerName : "Delete",
       width: 150 ,
      rendercell: ()=>{
        return(
          <>
          < FaTrash />
          </> 
        );
      },
    },
  ]; 

  const rows   = [
    { id: 1, fullName: 'John Doe', email:'johndoe@example.com',age:30, country:'USA', address:'st.NewYork',},
    { id: 2, fullName: 'Nathasha', email:'nathasha@example.com',age:25, country:'Uganda', address:'Magin ave.CN',},
    { id: 3, fullName: 'Tony',     email:'tony@example.com',age:45, country:'America', address:'Cardar.MA',},
    { id: 4, fullName: 'Diana',    email:'diana@example.com',age:29, country:'Finland', address:'st.philomena.AZ',},
    { id: 5, fullName: 'Stark',    email:'stark@example.com',age:32, country:'Iran', address:'Maryland.AZ',},
    { id: 6, fullName: ' Doe',     email:'doe@example.com',age:20, country:'Paris', address:'st.NewYork',},
    { id: 7, fullName: 'John ',    email:'john@example.com',age:45, country:'Africa', address:'Far Ave.CA',},
    { id: 8, fullName: 'Prince',   email:'prince@example.com',age:37, country:'London', address:'NewYork.NY',},
  ];
  
  
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Users </h1>
        <Link to="/newuser">
        <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
          New Users 
          </button>
        </Link>
        </div>
          <DataGrid 
          rows={rows} 
          columns={columns}
          checkboxSelection
           />
         </div>        
  )
}

export default Users;

