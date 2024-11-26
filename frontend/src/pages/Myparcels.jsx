import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Add this for navigation

const Myparcels = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  // Navigation hook to redirect to other pages
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to logout, and then navigate back to the login page
    navigate("/login"); // Adjust the route based on your login page path
  };

  return (
    <div>
      {/* User Profile Dropdown */}
      <div className="relative flex items-end justify-end mr-[20%] mt-[5%] text-white font-semibold cursor-pointer">
        <div className="flex items-center text-white" onClick={handleOpen}>
          <FaUser className="mr-[10px]" />
          Mariyam Safeeda
        </div>
        {open && (
          <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#d9d9d9] z-[999] shadow-xl">
            <ul className="flex flex-col items-center justify-center mt-[10px] text-[#555]">
              <li
                className="hover:text-[#fff] my-[5px] cursor-pointer"
                onClick={() => navigate("/all-parcels")}
              >
                All Parcels
              </li>
              <li
                className="hover:text-[#fff] my-[5px] cursor-pointer"
                onClick={() => navigate("/statements")}
              >
                Statements
              </li>
              <li
                className="hover:text-[#fff] my-[5px] cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* My Parcels Content */}
      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[18px] text-[#d9d9d9] p-[20px]">My Parcels</h2>

        {/* Parcel #1 */}
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[60w] m-[20px] p-[20px]">
          <div>
            <ul>
              <li>from: Ontario, USA</li>
              <li>Weight: 200g</li>
              <li>Date: 26/9/2024</li>
              <li>Sender: James Doe</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Sydney, Australia</span>
            <button className="bg-[#555] text-white w-[100px] cursor-pointer p-[5px]">
              Pending
            </button>
          </div>
        </div>

        {/* Parcel #2 */}
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[60w] m-[20px] p-[20px]">
          <div>
            <ul>
              <li>from: Ontario, USA</li>
              <li>Weight: 200g</li>
              <li>Date: 26/9/2024</li>
              <li>Sender: James Doe</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Sydney, Australia</span>
            <button className="bg-[#555] text-white w-[100px] cursor-pointer p-[5px]">
              Pending
            </button>
          </div>
        </div>

        {/* Parcel #3 */}
        <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[60w] m-[20px] p-[20px]">
          <div>
            <ul>
              <li>from: Ontario, USA</li>
              <li>Weight: 200g</li>
              <li>Date: 26/9/2024</li>
              <li>Sender: James Doe</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Sydney, Australia</span>
            <button className="bg-[#287a14] text-white w-[100px] cursor-pointer p-[5px]">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myparcels;
