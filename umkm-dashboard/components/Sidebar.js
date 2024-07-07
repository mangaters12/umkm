// components/Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar bg-gray-800 text-white w-64">
      <div className="sidebar-header p-4 text-xl font-semibold">
        Sidebar
      </div>
      <ul className="sidebar-menu mt-4">
        <li className="sidebar-menu-item">
          <a href="/" className="sidebar-menu-link block p-3 hover:bg-gray-700">Home</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/employees" className="sidebar-menu-link block p-3 hover:bg-gray-700">List Employee</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/employee-work" className="sidebar-menu-link block p-3 hover:bg-gray-700">Employee Work</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/out-employee" className="sidebar-menu-link block p-3 hover:bg-gray-700">Out Employee</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
