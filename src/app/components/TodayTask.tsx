"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Task = {
  name: string;
  status: "Approved" | "In Review" | "Pending";
};

const tasks: Task[] = [
  { name: "Create a user flow of social application design", status: "Approved" },
  { name: "Landing page design for Fintech project of Singapore", status: "In Review" },
  { name: "Interactive prototype for app screens of detaMine project", status: "Pending" },
];

const TodayTask: React.FC = () => {
  const taskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (taskRef.current) {
      gsap.fromTo(
        taskRef.current,
        { opacity: 0, x: 50 }, // Starting state
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" } // Ending state
      );
    }
  }, []);

  return (
    <div ref={taskRef} className="bg-white p-6 rounded-md shadow h-full">
      <h3 className="text-xl font-semibold mb-4">Today Task</h3>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b pb-3 last:border-b-0"
          >
            <span className="text-sm text-gray-700">{task.name}</span>
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                task.status === "Approved"
                  ? "bg-green-100 text-green-600"
                  : task.status === "In Review"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayTask;
