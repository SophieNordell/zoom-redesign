import ZoomWheel from "./assets/zoom_wheel_big.png";

const MakeWorkLessWork = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row bg-blue-900 h-auto order-b-4 text-lg">
        <div className="flex">
          <img
            src={ZoomWheel}
            alt="Zoom-Wheel"
            className="flex justify-start p-5 md:mt-5 md:mb-5 "
          />
        </div>
        <div className=" flex flex-col p-20 self-center text-blue-300 md:p-15 md:ml-10 ">
          <h1 className=" text-4xl font-bold pb-10">Make work less work</h1>
          <p className="text-xl ">
            Securely connect and collaborate so you can work better together.{" "}
            <br />
            Simple to manage and delightful to use, Zoom powers the modern
            workforce. <br />
            <br />{" "}
            <button className="hover:text-blue-50 font-mono mt-10">
              Discover the Possibilities
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakeWorkLessWork;
