import React from 'react';
import '../css/Loading.css'

const Loading = () => {
  return (
    <div className='divFather'>
      <div className='divChildren'>
      <Spiner color="dark"/>
      </div>
    </div>
  );
};

export default Loading;