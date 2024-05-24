
import PropTypes from "prop-types";

const Form = ({type}) => {
    return (
      <>
     
     <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url('https://vistapointe.net/images/momo-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
  
    <div className="bg-transparent lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
      <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
        </svg>
      </div>
      <form  className="p-12 md:p-24">
        {type==='register' &&(
            <>
            {/* username here */}
             <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
          </svg>
          <input name="username" type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" />
        </div>

           {/* email here */}
           <div className="relative flex items-center mb-4">
    <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
      {/* SVG path for email icon */}
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5v2l8 5 8-5V8zM4 14v-2l8 5 8-5v2l-8 5-8-5z"/>
    </svg>
    <input name="email" type="email" id="email" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" />
  </div>
{/* Phone Input */}
<div className="relative flex items-center mb-4">
  <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
    {/* SVG path for phone icon */}
    <path d="M12 1c-1.839 0-3.681.469-5.321 1.407C4.431 2.345 3.076 3.532 2.176 4.767c-.896 1.238-1.388 2.64-1.388 4.067 0 2.893 1.775 6.66 5.611 11.166l.599.815a1 1 0 00.809.419c.347 0 .695-.184.882-.548l1.268-2.23a1 1 0 00-.271-1.276l-1.195-.964a8.148 8.148 0 01-2.186-2.201c-1.153-1.676-1.763-3.39-1.763-5.098 0-1.195.348-2.319 1.016-3.332.77-1.021 1.88-1.881 3.283-2.564C9.547 1.371 10.743 1 12 1zm0 2c-.936 0-1.886.264-2.835.803-.951.542-1.814 1.315-2.578 2.279a7.543 7.543 0 00-1.571 2.041c-.447.763-.691 1.63-.691 2.477 0 1.588.773 3.637 2.531 6.097l.082.113.024.033a76.03 76.03 0 013.324 4.576l.29.4c.153.21.366.322.607.322a.878.878 0 00.7-.35l1.334-2.35c.231-.408.074-.925-.336-1.153l-.987-.799a9.667 9.667 0 01-2.589-2.608c-1.365-1.983-2.093-4.03-2.093-6.027 0-1.279.344-2.499 1.021-3.591.677-1.092 1.646-2.001 2.869-2.727.672-.384 1.393-.576 2.114-.576.514 0 1.029.097 1.534.289.506.193 1.017.478 1.535.863a.998.998 0 001.332-.055c.327-.312.418-.792.231-1.2l-1.599-3.2c-.181-.362-.543-.598-.956-.598-.09 0-.183.013-.275.04a13.02 13.02 0 00-3.04 1.38A12.333 12.333 0 0012 3z"/>
  </svg>
  <input name="phone" type="tel" id="phone" pattern="[0-9]{10}" title="Please enter 10 digits" maxLength="10" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Phone (10 digits)" />
</div>



        {/* confirmPassword */}
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
          </svg>
          <input name="confirmPassword" type="password" id="confirmpassword" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="confirmPassword" />
        </div>
            </>
        )}
       
{/* password here */}
<div className="flex items-center text-lg mb-6 md:mb-8">
          <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
          </svg>
          <input name="password" type="password" id="password" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
        </div>
    

        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"> {type === "register" ? "Register" : "Login"}</button>


      </form>
    </div>
  
   </div>
      </>
    )
  }

  Form.propTypes = {
    type: PropTypes.oneOf(["login", "register"]),
  };
  
  export default Form