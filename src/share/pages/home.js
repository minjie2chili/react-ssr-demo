import React from 'react';
import { Link } from 'react-router-dom';

const page = () => {
  return (
    <>
    <div onClick={() => console.log('click')}>Home</div>
    <Link to="/list">List</Link>
    </>
  )
}

export default page;