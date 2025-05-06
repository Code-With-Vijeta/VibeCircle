import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">
        <div style={{ '--i': 1, '--inset': '44%' }} className="box">
          <div className="logo">
            <h1 className='bold text-white underline'>VC</h1>
          </div>
        </div>
        <div style={{ '--i': 2, '--inset': '40%' }} className="box"></div>
        <div style={{ '--i': 3, '--inset': '36%' }} className="box"></div>
        <div style={{ '--i': 4, '--inset': '32%' }} className="box"></div>
        <div style={{ '--i': 5, '--inset': '28%' }} className="box"></div>
        <div style={{ '--i': 6, '--inset': '24%' }} className="box"></div>
        <div style={{ '--i': 7, '--inset': '20%' }} className="box"></div>
        <div style={{ '--i': 8, '--inset': '16%' }} className="box"></div>
      </div>
    </div>
  );
}

export default Loader;
