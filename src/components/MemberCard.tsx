import React from 'react';

type MemberType = {
    name: string;
    pictureUrl: string;
    studentId: string;
}

const Member = ({ name, pictureUrl, studentId }: MemberType) => {
    return (
        <div className='w-[320px] h-[400px] bg-white flex flex-col items-center justify-center gap-6'>
            <img 
                src={pictureUrl} 
                alt={name} 
                className="w-64 h-64 object-cover"
            />
            <div>
                <h2 className="font-bold text-lg mt-4 self-start">{name}</h2>
                <div className="inline-block font-bold text-grey bg-[#FFEAE9] px-2 py-1 rounded-xl mt-1">{studentId}</div>
            </div>
        </div>
  );
}

export default Member