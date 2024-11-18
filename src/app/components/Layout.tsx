"use client";

import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-4">
        <h1 className="text-2xl font-bold mb-8">Promage</h1>
        <nav>
          <ul className="space-y-4">
            <li className="hover:text-orange-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-orange-500 cursor-pointer">Projects</li>
            <li className="hover:text-orange-500 cursor-pointer">Tasks</li>
            <li className="hover:text-orange-500 cursor-pointer">Time log</li>
            <li className="hover:text-orange-500 cursor-pointer">Resource mgmt</li>
            <li className="hover:text-orange-500 cursor-pointer">Users</li>
            <li className="hover:text-orange-500 cursor-pointer">Project template</li>
            <li className="hover:text-orange-500 cursor-pointer">Menu settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow px-8 py-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-1/3 p-2 border rounded-md focus:outline-none"
          />
          <div className="flex items-center gap-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
              Create new project
            </button>
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
                          className="w-10 h-10 rounded-full"
                         
            />
          </div>
        </header>

        {/* Content Area */}
        <main className="p-8 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
