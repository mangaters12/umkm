// pages/employees.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id_emp: '',
    name_emp: '',
    division_emp: '',
    role: '',
    address: '',
    notelp: '',
    description: '',
    join_date: '',
    status: ''
  });

  // Dummy data (replace with actual API fetch or database integration)
  useEffect(() => {
    // Simulating initial data load
    const initialData = [
      {
        no: 1,
        id_emp: '001',
        name_emp: 'John Doe',
        division_emp: 'IT',
        role: 'Developer',
        address: '123 Main St, City',
        notelp: '123-456-7890',
        description: 'Lorem ipsum dolor sit amet.',
        join_date: '2024-07-10',
        status: 'Active'
      },
      {
        no: 2,
        id_emp: '002',
        name_emp: 'Jane Smith',
        division_emp: 'HR',
        role: 'Manager',
        address: '456 Oak St, Town',
        notelp: '987-654-3210',
        description: 'Consectetur adipiscing elit.',
        join_date: '2024-07-11',
        status: 'Inactive'
      }
      // Add more dummy data as needed
    ];
    setEmployees(initialData);
  }, []);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle adding a new employee
  const handleAddEmployee = () => {
    const newEmp = {
      ...newEmployee,
      no: employees.length + 1 // Assigning a temporary 'no' value
    };
    setEmployees([...employees, newEmp]);
    setNewEmployee({
      id_emp: '',
      name_emp: '',
      division_emp: '',
      role: '',
      address: '',
      notelp: '',
      description: '',
      join_date: '',
      status: ''
    });
  };

  // Function to handle deleting an employee
  const handleDeleteEmployee = (no) => {
    const updatedEmployees = employees.filter(emp => emp.no !== no);
    setEmployees(updatedEmployees);
  };

  // Function to handle updating an employee
  const handleUpdateEmployee = (no, updatedEmployee) => {
    const updatedEmployees = employees.map(emp =>
      emp.no === no ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <Head>
              <title>List Employee - UMKM Dashboard</title>
              <meta name="description" content="List of Employees in UMKM Dashboard" />
            </Head>
            <div className="mt-4">
              {/* Form for adding new employee */}
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Add New Employee</h2>
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="id_emp"
                    value={newEmployee.id_emp}
                    onChange={handleInputChange}
                    placeholder="ID Employee"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="name_emp"
                    value={newEmployee.name_emp}
                    onChange={handleInputChange}
                    placeholder="Name Employee"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="division_emp"
                    value={newEmployee.division_emp}
                    onChange={handleInputChange}
                    placeholder="Division"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="role"
                    value={newEmployee.role}
                    onChange={handleInputChange}
                    placeholder="Role"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="address"
                    value={newEmployee.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="notelp"
                    value={newEmployee.notelp}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="description"
                    value={newEmployee.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="join_date"
                    value={newEmployee.join_date}
                    onChange={handleInputChange}
                    placeholder="Join Date"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="status"
                    value={newEmployee.status}
                    onChange={handleInputChange}
                    placeholder="Status"
                    className="p-2 border border-gray-300 rounded"
                  />
                  <button
                    onClick={handleAddEmployee}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Add Employee
                  </button>
                </div>
              </div>
              {/* Table to display employees */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">No</th>
                      <th className="border border-gray-300 px-4 py-2">ID Employee</th>
                      <th className="border border-gray-300 px-4 py-2">Name</th>
                      <th className="border border-gray-300 px-4 py-2">Division</th>
                      <th className="border border-gray-300 px-4 py-2">Role</th>
                      <th className="border border-gray-300 px-4 py-2">Address</th>
                      <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                      <th className="border border-gray-300 px-4 py-2">Description</th>
                      <th className="border border-gray-300 px-4 py-2">Join Date</th>
                      <th className="border border-gray-300 px-4 py-2">Status</th>
                      <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((emp, index) => (
                      <tr key={index} className="bg-white">
                        <td className="border border-gray-300 px-4 py-2">{emp.no}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.id_emp}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.name_emp}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.division_emp}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.role}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.address}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.notelp}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.description}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.join_date}</td>
                        <td className="border border-gray-300 px-4 py-2">{emp.status}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          <button
                            onClick={() => handleDeleteEmployee(emp.no)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleUpdateEmployee(emp.no, { ...emp, name_emp: 'Updated Name' })}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Employees;
