
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
    const navigate=useNavigate();//Hook
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try{
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        }catch(err){
            console.log(err);
        }
        setLoading(false);

      };
      fetchData();
    }, []);

    const deleteEmployee = (e,id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then((res)=>{
            if(employees){
                setEmployees((prevElement)=>{
                   return prevElement.filter((employee) => employee.id!==id) 
                })
            }
        })

    }
    
    return (
        <div className='container mx-auto my-8'>
            <div className='h-12'>
                <button 
                    onClick={()=>{navigate("/addEmployee")}}
                    className='rounded bg-slate-600 text-white px-6 py-2 font-semibold '>
                    Add Employee
                </button>
            </div>
            <div className="flex shadow border-b">
                <table className='min-w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                <div>
                                    First Name
                                </div>
                            </th>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                <div>
                                    Last Name
                                </div>
                            </th>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                <div>
                                    Email Id
                                </div>
                            </th>
                            <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                                <div>
                                    Actions
                                </div>
                            </th>
                        </tr>
                    </thead>
                    {!loading  && (
                    <tbody className='bg-white'>
                        {employees.map((employee) =>(
                       
                       <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}/>
                         ))}
                    </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}

export default EmployeeList