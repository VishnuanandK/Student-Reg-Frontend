import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getAllStudentsAPI } from '../../Services/allAPI'

function Allstudents() {
    const [allStudentsData,setAllStudentsData] = useState([])
    const getAllStudentsData = async() =>{
      try{
        const result = await getAllStudentsAPI()
        if(result.status===200){
          setAllStudentsData(result.data)
         }
      }catch(err){
        console.log(err);
      }
    }
    console.log(allStudentsData);
  
    useEffect(()=>{
      getAllStudentsData()
    },[])
  return (
    <> <h1 className='text-center'>All Students List</h1>
        
    <Table striped bordered hover className='text-white'>
    <thead className='text-white'>
      <tr>
        <th className='text-white'>#</th>
        <th className='text-white'>First Name</th>
        <th className='text-white'>Last Name</th>
        <th className='text-white'>Email</th>
        <th className='text-white'>Address</th>
        <th className='text-white'>Gender</th>
        <th className='text-white'>Phone No</th>
        <th className='text-white'>Password</th>
        <th className='text-white'>Date Of Birth</th>
        <th className='text-white'>Course</th>
      </tr>
    </thead>
    
    { allStudentsData.length>0?allStudentsData.map((student,index)=>(
            <tbody key={index}>
              <tr>
                <td className='text-white' >{index+1}</td>
                <td className='text-white'>{student?.firstName}</td>
                <td className='text-white'>{student?.lastName}</td>
                <td className='text-white'>{student?.email}</td>
                <td className='text-white'>{student?.address}</td>
                <td className='text-white'>{student?.gender}</td>
                <td className='text-white'>{student?.mobile}</td>
                <td className='text-white'>{student?.password}</td>
                <td className='text-white'>{student?.dateofBirth}</td>
                <td className='text-white'>{student?.course}</td>
              </tr>
              </tbody>
             
        )):
        <h2>No students have registered yet!!!</h2>
         }
        
     
</Table></>
  )
}

export default Allstudents