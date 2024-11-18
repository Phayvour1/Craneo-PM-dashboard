import OverviewCard from "./components/OverviewCard";
import { FaDollarSign, FaClock, FaProjectDiagram, FaUsers } from "react-icons/fa";
import ProjectTable from "./components/ProjectTable";
import TodayTask from "./components/TodayTask";


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Revenue */}
      <OverviewCard
        title="Total Revenue"
        value="$53,009.89"
        icon={<FaDollarSign />}
        change="12% increase from last month"
      />

      {/* Projects */}
      <OverviewCard
        title="Projects"
        value="95 / 100"
        icon={<FaProjectDiagram />}
        change="10% decrease from last month"
      />

      {/* Time Spent */}
      <OverviewCard
        title="Time Spent"
        value="1022 / 1300 Hrs"
        icon={<FaClock />}
        change="8% increase from last month"
      />

      {/* Resources */}
      <OverviewCard
        title="Resources"
        value="101 / 120"
        icon={<FaUsers />}
        change="2% increase from last month"
      />

      
      <div className="flex flex-col lg:flex-row gap-6">
       {/* Project Summary Table */}
       <div className="overflow-x">
  <table className="w-full ...">
  <ProjectTable />
  </table>
      </div>
      
       {/* Today Task Section */}
      <div className=" m-2 mt-8">
  <TodayTask />
      </div>
      </div>

    </div>
  );
}
