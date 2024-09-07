/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const param = useParams();
  return (
    <Layout>
      <h1 className="font-bold text-5xl text-blue-950 text-center mb-2">ติดต่อ</h1>
      <hr />
      <div className="flex justify-evenly mt-10">
        <div className="flex flex-col  space-y-6">
          <p className="text-2xl">Email: bubpawaraporn01@gmail.com</p>
          <p className="text-2xl">Tel: 0625432549</p>
          <p className="text-2xl">Address: 999 example example</p>
        </div>
        
      </div>
    </Layout>
    
  )
}

export default Contact