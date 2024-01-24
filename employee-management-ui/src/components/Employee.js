
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee,deleteEmployee}) => {

    const {id,firstName,lastName,emailId} = employee;
    const navigate = useNavigate();

    const editEmployee = (e,id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }
    

  return (
    <>
    <tr key={id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>
            {firstName}
        </div>
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>
        {lastName}
        </div>
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>
        {emailId}
        </div>
    </td>
    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
        {/* <div className='text-sm text-gray-500'> */}
        {/* eslint-disable-next-line */}
            <a 
                onClick={(e,id) => editEmployee(e,employee.id)}
                className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'> Edit</a>
        {/* eslint-disable-next-line */}
            <a 
            onClick={(e,id)=>deleteEmployee(e,employee.id)}
            className='text-indigo-600 hover:text-indigo-800  hover:cursor-pointer'> Delete</a>
        {/* </div> */}
    </td>
</tr>
</>
  )
}

export default Employee;