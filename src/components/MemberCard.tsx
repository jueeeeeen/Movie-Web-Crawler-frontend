import React from 'react';
import { useState } from 'react';

type MemberCardType = {
    name: string;
    studentId: string;
    text: string;
}

const MemberCard = ({ name, studentId, text }: MemberCardType) => {
    const [flip, setFlip] = useState(false);

    return (
        <div
            className="w-[260px] h-[360px] [perspective:1000px]"
            onMouseEnter={() => setFlip(true)}
            onMouseLeave={() => setFlip(false)}
        >
            <div
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                flip ? "[transform:rotateY(180deg)]" : ""
                }`}
            >
            <div className='absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-white rounded-2xl shadow-md'>
                <img 
                    src={`../../public/member/${studentId}.jpg`} 
                    alt={name} 
                    className="w-48 h-48 object-cover rounded-2xl"
                />
                <div className='px-4 py-4 self-start'>
                    <h2 className="font-bold text-lg mt-4 whitespace-pre-line px-1">{name}</h2>
                    <div className="inline-block font-bold text-grey bg-[#FFEAE9] px-2 py-1 rounded-xl mt-1">{studentId}</div>
                </div>
                </div>
                <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden flex items-center justify-center bg-main-red text-white rounded-2xl p-4">
                    <p className="text-center">{text}</p>
                </div>
            </div>
        </div>
  );
}

export default MemberCard