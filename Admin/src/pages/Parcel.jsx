import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import { publicRequest } from "../requestMethods";
const Parcel = () => {
  const [Parcel,setParcel] = useState({});
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];
  const [inputs, setInputs] = useState({});

const handleChange = (e) =>{
  setInputs((prev) =>{
     return {...prev, [e. target.name]:e.target.value}
  })
}
 
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
  },[parcelId]);

  const handleUpdate = async() =>{
    try {
      await publicRequest.put(`/parcels/${parcelId}`,inputs)
    } catch (error) {
    console.log(error);
  }

  }
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
    <h2 className="font-semibold">Parcel</h2>
    <div className="flex flex-col">
  
      <div className="flex flex-col my-[20px]">
       <label htmlFor="">From</label>
       <input
        type="text"  
       placeholder={Parcel.from}
       name="from"
       onChange={handleChange}
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">To</label>
       <input
        type="text"
        placeholder={Parcel.to}
        name="to"
       onChange={handleChange}
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Sender Name</label>
       <input
        type="text" 
       placeholder={Parcel.sendername}
       name="sendername"
       onChange={handleChange}
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Recipient Name</label>
       <input 
        type="text" 
        placeholder={Parcel.recipientname}
        name="recipientname"
       onChange={handleChange}
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Sender Email</label>
       <input
        type="text" 
        placeholder={Parcel.senderemail}
        name="senderemail"
       onChange={handleChange}
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Recipient Email</label>
       <input 
       type="text"  
       placeholder={Parcel.recipientemail}
       name="recipientemail"
       onChange={handleChange}
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       </div>
      </div>
     
      <div className="flex flex-col my-[20px]">
       <label htmlFor="">Weight</label>
       <input
        type="Number" 
        placeholder={Parcel.weight}
        name="weight"
       onChange={handleChange}
        className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Cost</label>
       <input
        type="cost"
        placeholder={Parcel.cost}
        name="cost"
       onChange={handleChange}
        className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
      />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Date</label>
       <input
        type="date"  
       placeholder={Parcel.delete}
       name="date"
       onChange={handleChange}
       className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
       </div>
       <div className="flex flex-col my-[20px]">
       <label htmlFor="">Note</label>
       <textarea 
        type="text" 
        placeholder={Parcel.note}
        name="note"
       onChange={handleChange}
        className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
       />
    

     <button className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px]" onClick={handleUpdate}>
         Update
     </button>
     </div> 
      
      <div className="flex flex-col ">
        <h2 className="font-semibold">Feedback</h2>
        <span>Goods received in good condition.</span>
      {parcelId.status === 1 || parcelId.status === 0  ? <span className="text-red-500 text-[18px]">Pending</span> :  <span className="text-blue-500 text-[18px]">Delivered</span> }
      </div>
     </div>    
     </div> 
 
      
    
  )
}

export default Parcel;
