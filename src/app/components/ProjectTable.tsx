import React from "react";

type Project = {
  name: string;
  manager: string;
  dueDate: string;
  status: "Completed" | "Delayed" | "At risk" | "On going";
  progress: number; // Progress as a percentage
};

const projects: Project[] = [
  {
    name: "Nelsa web development",
    manager: "Om Prakash Sao",
    dueDate: "May 25, 2023",
    status: "Completed",
    progress: 100,
  },
  {
    name: "Datascale AI app",
    manager: "Neilsan Mando",
    dueDate: "June 20, 2023",
    status: "Delayed",
    progress: 35,
  },
  {
    name: "Media channel branding",
    manager: "Truvelly Priya",
    dueDate: "July 13, 2023",
    status: "At risk",
    progress: 50,
  },
  {
    name: "Corlax iOS app development",
    manager: "Matte Hanney",
    dueDate: "Dec 20, 2023",
    status: "On going",
    progress: 75,
  },
  {
    name: "Website builder development",
    manager: "Sukumar Rao",
    dueDate: "Mar 15, 2024",
    status: "On going",
    progress: 65,
  },
];

const ProjectTable: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow mt-8">
      <h3 className="text-xl font-semibold mb-4">Project Summary</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Project Manager</th>
            <th className="py-2 px-4">Due Date</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Progress</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{project.name}</td>
              <td className="py-2 px-4">{project.manager}</td>
              <td className="py-2 px-4">{project.dueDate}</td>
              <td
                className={`py-2 px-4 ${
                  project.status === "Completed"
                    ? "text-green-500"
                    : project.status === "Delayed"
                    ? "text-red-500"
                    : project.status === "At risk"
                    ? "text-yellow-500"
                    : "text-blue-500"
                }`}
              >
                {project.status}
              </td>
              <td className="py-2 px-4">
                <div className="relative w-full bg-gray-200 h-2 rounded-md">
                  <div
                    className={`absolute top-0 left-0 h-full rounded-md ${
                      project.progress === 100
                        ? "bg-green-500"
                        : project.progress > 50
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
