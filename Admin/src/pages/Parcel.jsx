import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import { publicRequest } from "../requestMethods";
const Parcel = () => {
  const [Parcel,setParcel] = useState({});
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];
 

  useEffect(()=>{
   const getParcel = async() =>{
    try {
      const res = await publicRequest.get(".parcels/find/" + parcelId);
      setParcel(res.data)
    } catch (error) {
      console.log(error)     
    }
  };
    getParcel()
  },[parcelId])


  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
    <h2 className="font-semibold">Parcel</h2>
    <div className="flex flex-col">
  
      <div className="flex flex-col my-[20px]">
       <label htmlFor="">From</label>
       <input
        type="text"  
       placeholder={Parcel.from}
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">To</label>
       <input type="text" 
        placeholder="michigan, USA"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Sender Name</label>
       <input type="text" 
       placeholder="James Doe"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Recipient Name</label>
       <input type="text" 
        placeholder="Jane Doe"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Sender Email</label>
       <input type="text" 
        placeholder="jamesdoe@gmail.com"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Recipient Email</label>
       <input type="text"  
       placeholder="janedoe @gmail.com"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       </div>
      </div>
     
      <div className="flex flex-col my-[20px]">
       <label htmlFor="">Weight</label>
       <input type="Number" 
        placeholder="200g"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Cost</label>
       <input type="cost"
         placeholder="$200"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Date</label>
       <input type="date"  
       placeholder="James Doe"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Note</label>
       <textarea 
        type="text" 
         placeholder="Perishable goods"
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
    

     <button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] ">
         Update
     </button>
     </div> 
      
      <div className="flex flex-col ">
        <h2 className="font-semibold">Feedback</h2>
        <span>Goods received in good condition.</span>
        <span className="text-red-500 text-[18px]">Delivered</span>
      </div>
     </div>    
     </div> 
 
      
    
  )
}

export default Parcel;
