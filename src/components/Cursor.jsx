/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react';
import { useSnapshot } from "valtio";
import { GoArrowRight } from "react-icons/go";


import state from "../store";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: "20px" });
    const snap = useSnapshot(state);

    // Event handler for mouse movement
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
  
    // Use useEffect to add and remove the event listener
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
  
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []); // Empty dependency array means this effect runs once on mount
  
    return (
        <>
            {snap.isVisible && (
                <div
                    style={{
                        position: 'fixed',
                        left: position.x,
                        top: position.y,
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        width: '6rem',
                        height: '6rem',
                        borderRadius: '50%',
                        backgroundColor: '#f0e9d5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <GoArrowRight className='text-3xl' />
                </div>
            )}
        </>
    );
  };

export default Cursor;