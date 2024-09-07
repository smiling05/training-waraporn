import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 mb-5 text-center">หน้าหลัก</h1>
        <hr />
        <div className='flex justify-center'>
            <img src="https://static.wixstatic.com/media/b6f9ae_acba567d549048598dc0eb2edaa5ac70~mv2.jpg/v1/fill/w_634,h_357,q_90/b6f9ae_acba567d549048598dc0eb2edaa5ac70~mv2.webp" alt="Meeting" className='max-w-full' />
            <hr />
        </div>
    </Layout>
  );
};

export default Home;
