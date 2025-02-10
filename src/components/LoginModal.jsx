import image from "../assets/image.jpg";
import facebookIcon from "../assets/facebook.png"
import googleIcon from "../assets/google.png"
function LoginModal() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-xl rounded-2xl flex flex-col md:flex-row bg-white">
        <div className="flex flex-col p-6 md:p-20">
          <h2 className="text-4xl font-bold font-mono mb-5 ">Log In</h2>
          <p className="text-gray-600 max-w-sm mb-12">
            Log in to your account to upload or download pictures, videos or
            music.
          </p>
          <input
            className="p-6 border border-gray-300 rounded-xl font-serif"
            placeholder="Enter your email address"
          />
          <div className="flex flex-col mt-12 space-y-5 md:flex-row md:space-y-0 justify-between items-center">
            <div className="font-thin text-cyan-700">Forgot password</div>
              <button className="w-full justify-center md:w-auto flex  items-center px-10 py-4 space-x-4 font-sans font-bold text-white rounded-md  bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                Next
              </button>
          </div>
          <div className="mt-12 border-b border-b-gray-300"></div>
          <div className="py-6 text-sm font-thin text-center text-gray-400">
            or log in with
          </div>
          <div className="flex flex-col text-center space-y-5 md:flex-row md:space-y-0 justify-between">
            <div className="transition hover:-translate-y-0.5 justify-center flex flex-row space-x-2 px-8 py-1 items-center border-2 border-gray-300 rounded-sm">
              <img src={facebookIcon} className="w-10 h-10" />
              <div className="font-thin">Facebook</div>
            </div>
            <div className="transition hover:-translate-y-0.5 justify-center flex flex-row space-x-2 px-8 py-1 items-center border-2 border-gray-300 rounded-sm">
              <img srcSet={googleIcon} className="w-10 h-10"/>
              <div className="font-thin">Google</div>
            </div>
          </div>
        </div>
        <img src={image} className="w-[430px] hidden md:block" />
      </div>
    </div>
  );
}

export default LoginModal;
