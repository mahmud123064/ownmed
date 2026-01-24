import React, { useEffect, useState } from 'react';
import { FiMail } from "react-icons/fi";
import { MdAddLocation } from "react-icons/md";

const TopNavbar = () => {

    const [location, setLocation] = useState("Detecting...");

    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                setLocation(`${data.city}, ${data.country_name}`);
            })
            .catch(() => {
                setLocation("Location unavailable");
            });
    }, []);

    return (
        <div>
            <div className='flex justify-between items-center px-4 py-2 bg-secondary text-white'>
                <div className='flex gap-2 items-center'><FiMail className='text-xl' /> mail@ownmed.com</div>
                <div className='flex gap-2 items-center'><MdAddLocation className='text-xl'/> {location}</div>
            </div>
        </div>
    );
};

export default TopNavbar;