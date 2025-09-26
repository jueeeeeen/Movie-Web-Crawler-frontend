import { useState } from 'react'
import Navbar from '../components/Navbar.tsx'
import MemberCard from '../components/MemberCard.tsx'

function AboutUs() {
    return (
    <div>
        <Navbar crawled={false} page='aboutus'/>
        <div className='flex justify-center p-15'>
            <div className='bg-floral-white w-[1335px] h-[683px]'> 
                <div className='flex justify-center'>
                    <h1 className='font-bold text-4xl p-10'>ABOUT US</h1>
                </div>
                <div className='flex justify-center gap-10'>
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutUs