import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewUsers = () => {
    const [data,changeData]=useState(
        {
        "page": 1,
        "per_page": 6,
        "total": 12,
        "total_pages": 2,
        "data": [{}],
        }
    )
    const fetchDataFromApi=()=>{
       axios.get("https://reqres.in/api/users?page=1").then(
        (response)=>{
            changeData(response.data)
        }
       ).catch()
    }
    useEffect(()=>{fetchDataFromApi()},[])
  return (
       <div>
        <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-body">
                                < table class="table" >
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Firstname</th>
                                            <th scope="col">Lastname</th>
                                            <th scope="col">Avatar</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                        data.data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{value.id}</th>
                                                <td>{value.email}</td>
                                                <td>{value.first_name}</td>
                                                <td>{value.last_name}</td>
                                                <td>{value.avatar}</td>
                                            </tr>
                                            }
                                        )
                                       }
                                    </tbody>
                                </table >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ViewUsers