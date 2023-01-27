import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <nav className="flex p-8 ml-3 justify-between border-b md:border md:border-b-2 ">
        <img
          src="https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg"
          alt="Zoom Logo"
          className=""
        />
        <div className="flex md:flex-row">
          <button className=" hidden md:block border hover:bg-blue-100 border-zoom-blue rounded-full h-10 w-32 mr-4 text-zoom-blue font-bold text-lg ">
            Conntact
          </button>
          <button className="hidden md:block border hover:bg-blue-400 rounded-full h-10 w-32 py-px bg-zoom-blue text-blue-100 font-bold text-lg font-sans">
            Sign in
          </button>
        </div>
        <div className="text-4xl text-blue-500 hover:text-blue-200 md:hidden ">
          <RxHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
