import { useState } from 'react'
import Navbar from '../components/Navbar.tsx'
import MemberCard from '../components/MemberCard.tsx'

function AboutUsPage() {
    return (
    <div>
        <Navbar crawled={false} page={"aboutus"}/>
        <div className='flex items-center flex-col p-4'>
            <div className='flex items-center flex-col p-4 gap-4 bg-floral-white w-[1335px]'>
                <h1 className='font-bold text-4xl'>ABOUT US</h1>
                <h2 className='text-md'>** HOVER TO SEE WHAT THEY ARE THINKING **</h2>
            </div>
            <div className='bg-floral-white w-[1335px] h-[683px] overflow-auto'>
                <div className='flex justify-center flex-wrap gap-10 pt-4 pb-4'>
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                    <MemberCard 
                        name="Peerawat Ingkhasantatikul" 
                        pictureUrl="https://gdb.voanews.com/EEA0B145-95D4-4532-9C69-D0FCD1833D53_w408_r0_s.jpg" 
                        studentId="66011442"
                        text="ขอเกรด A ครับ"
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutUsPage