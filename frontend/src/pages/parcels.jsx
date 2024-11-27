import {FaArrowLeft, FaTrash} from "react-icons/fa"
import {Link} from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';

const parcels = () => {

  const columns = [
    { field: 'id', headerName: ' ID', width: 90 },
    { field: 'Sendername', headerName: 'Sendername', width: 150 },
    { field: 'recipientname', headerName: 'recipientname', width: 130 },
    { field: 'from', headerName: 'from', width: 130 },
    { field: 'to', headerName: 'to', width: 150 },  
    { field: 'cost', headerName: 'cost ($)', type: 'number', width:150 },
    { 
      field: 'edit', 
      headerName: 'Edit',
       width:150 ,
      rendercell:()=>{
        return(
          <>
          <button className='bg-teal-500 text-white cursor-pointer w-[70px]'>Edit</button>
          </>
        )
      }
    },
    { 
      field: 'delete', 
      headerName: 'Delete',
       width:150 ,
      rendercell:()=>{
        return(
          <>
          < FaTrash />
          </>
        )
      }
    },

  ];
  const rows   = [
    { id: 1, 
      Sendername: 'John Doe',
       recipientname: 'Jane Smith', 
       from: 'NewYork',
        to: 'london',
         weight:2.5,
          cost:25
         },
    { id: 2,
       Sendername: 'Nathasha',
       recipientname: ' Wilson',
        from: 'chicago',
         to: 'Europe',
         weight:1.5,
          cost:15 
        },
    { id: 3,
       Sendername: 'Tony', 
      recipientname: ' Peter', 
      from: 'Paris',
       to: 'Finland',
        weight:5, 
          cost:30
         },
    { id: 4,
       Sendername: 'Diana', 
       recipientname: 'Jane ', 
       from: 'London',
        to: 'NewYork',
         weight:0.5,
          cost:50
         },
    { id: 5,
       Sendername: 'Stark', 
       recipientname: ' Thomas', 
       from: 'Switzerland', 
       to: 'Chicago',
        weight:4.5, 
        cost:60 
      },
    { id: 6,
       Sendername: ' Doe',
       recipientname: ' Alice', 
       from: 'NewYork', 
       to: 'london',
        weight:6.5,
         cost:55 
        },
    { id: 7,
       Sendername: 'John ', 
       recipientname: ' Scott',
        from: 'Africa', 
        to: 'Uganda',
         weight:3.5, 
         cost:40
         },
    { id: 8,
       Sendername: 'Prince',
        recipientname: 'Lang', 
        from: 'Oman',
         to: 'Dubai',
         weight:3.5,
          cost:40
         },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%] ">

    <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
      <Link to="/myparcels">
         <FaArrowLeft className="text-[#444] text-[1px] m-2 cursor-pointer" />
      </Link>


      <div className="flex justify-between p-[10px]">
        <span className="text-[18px] text-[#444]">All Parcels</span>
        <span className="font-semibold text-[#444]">Mariyam Safeeda</span>
      </div>   

      <div className="p-3">
      <DataGrid rows={rows} columns={columns}
      checkboxSelection
      />
      
       </div>    
      </div>
    </div>
  )
}

export default parcels;
