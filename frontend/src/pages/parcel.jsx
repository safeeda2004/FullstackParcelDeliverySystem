import {FaArrowLeft} from "react-icons/fa"
import {Link} from "react-router-dom"

const parcel = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml[5%] ">
      <div className="bg-white h-[80vh] w-[60vw] rounded-md">

      <Link to="/myparcels">
         <FaArrowLeft className="text-[#444] text-[1px] m-2 cursor-pointer" />
      </Link>
       
       <div className="flex justify-between">

        <div className="flex-1">
          <ul className="m-3 text-[#444]">
            <li className="mt-3">From: 101 pine St, Seattle, WA 98101</li>
            <li className="mt-3">Weight: 200g</li>
            <li className="mt-3">Date: 20/09/2024</li>
            <li className="mt-3">Sender: 1James Doe</li>
            <li className="mt-3">To: Ontario, USA</li>
            <li className="mt-3">Cost: $200</li>
            <li className="mt-3">Recipient: Jane Doe</li>
            <li className="mt-3">Track ID: 199839</li>
            <li className="mt-3">Note: Perishable Goods</li>
          </ul>

          <button className="bg-[#555] text-white w-[200px] cursor-pointer p-[10px] m-[20px]">
            Pending
          </button>

          <div className="flex-1">
          <ul className="m-3 text-[#444]">
          <li className="mt-3">Sender Email: jamesdoe@gmail.com</li>
          <li className="mt-3">Recipient Email: janedoe@gmail.com</li>

          </ul>

          <textarea
           name=""
           cols={50}
           rows={7}
           className="outline-none p-[50px] m-[20px] bg-[#d9d977] text-[#555] "
           placeholder="Leave a feedback"
          id="">

          </textarea>

          <button className="bg-[#1e1e1e] w-[200px] p-[10px] text-white cursor-pointer m-[20px]">Submit</button>

          </div>
        </div>
       </div>
      </div>     
    </div>
  )
}

export default parcel;
