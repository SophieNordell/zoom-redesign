const CardsSection = () => {
  return (
    <div className="p-10">
      <section className="flex flex-col ml-10 ">
        <h1 className="font-semibold text-4xl mt-10 mb-10 ">
          Powering organizations across <br /> industries and geographies
        </h1>
      </section>
      <section className="flex ml-10">
        <h3 className="flex flex-col">
          Zoom helps consolidate communications, connect people, <br /> and
          collaborate better together in the boardroom, classroom, operating
          room, <br /> and everywhere in between.
        </h3>
      </section>
      <div className="flex flex-col">
        <button className="border h-14 w-60 text-center box-content rounded-full hover:bg-teal-200 bg-teal-300 font-medium text-teal-700 mt-10 ml-10">
          Explore Industry Solutions
        </button>
      </div>
    </div>
  );
};

export default CardsSection;
