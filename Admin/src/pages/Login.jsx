import Footer from "../components/Footer"
const Login = () => {
  return (
    <div>

      <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-grey-300">

        <div>
          <h2 className="text-[#c2c1ca] font-semibold text-[35px]">SendIT Admin</h2>
          <img src="hero.png"/>
        </div>
              
        <div className="h-[400px] w-[450px] bg-[#dee75d] rounded-md">
             
           <input type="text"
             placeholder="Enter your email"
             className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none"
           />
            <input type="password"
             placeholder="Enter your password"
             className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none"
            />

              <button className="bg-[#637265] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%] ">
                  Login
              </button>
           </div>        
      </div>

      <Footer />
     </div>
      

  )
}

export default Login
