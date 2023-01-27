import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import MakeWorkLessWork from "./WorkSection";
import CardsSection from "./CardsSection";
import Cards from "./Cards";
// icons
import { TbSchool } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { RiGovernmentLine } from "react-icons/ri";
import { GiHealing } from "react-icons/gi";
import { RiToolsLine } from "react-icons/ri";
import { BsTags } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <HeroSection />
      <MakeWorkLessWork />
      <div className="flex flex-1 justify-between text-lg mb-10 flex-col md:flex-row">
        <CardsSection />
        <div className="grid grid-cols-2 grid-rows-3 md:mr-10 text-center text-2xl gap-x-10  ">
          <Cards icon={<TbSchool size={50} />} title={"Education"} />
          <Cards
            icon={<TbReportMoney size={50} />}
            title={"Financial Services"}
          />
          <Cards icon={<RiGovernmentLine size={50} />} title={"Government"} />
          <Cards icon={<GiHealing size={50} />} title={"Healthcare"} />
          <Cards icon={<RiToolsLine size={50} />} title={"Manufacturing"} />
          <Cards icon={<BsTags size={50} />} title={"Retail"} />
        </div>
      </div>
    </div>
  );
}

export default App;
