import { useState } from 'react'
import Navbar from '../components/Navbar.tsx'
import MemberCard from '../components/MemberCard.tsx'

const members = [
    {
        name: "Korawit\nSawasdee",
        studentId: "66010016",
        text: "อยากกินหมูปิ้ง"
    },
    {
        name: "Thuwanan\nPromwath",
        studentId: "66010393",
        text: "อะไรก็ได้ ได้เพ"
    },
    {
        name: "Manatsavin\nKunnantajiam",
        studentId: "66010660",
        text: "ไก่ number one"
    }, 
    {
        name: "Sitthiwat\nKulchanacharoen",
        studentId: "66010850",
        text: "อยากกินหมูกรอบป้านัยอีกแล้ว"
    },
    {
        name: "Sirima\nMookkaew",
        studentId: "66010853",
        text: "โกโก้หวานน้อย"
    },  
    {
        name: "Ananthachai\nJarnjuea",
        studentId: "66010898",
        text: "ชอบกินหมูครับ"
    }, 
    {
        name: "Issaree\nNissyan",
        studentId: "66010942",
        text: "พี่ว่าดีนุก้ว่าดี"
    }, 
    {
        name: "Emily\nChow",
        studentId: "66010948",
        text: "สวัสดีค่ะ"
    }, 
    {
        name: "Peerawat\nIngkhasantatikul",
        studentId: "66011442",
        text: "ขอเกรด A ครับ"
    }, 
    {
        name: "Supakarn\nTantichawa-ochanon",
        studentId: "66011490",
        text: "ไม่รู้เหมือนกันอ่ะ"
    },   
];

function AboutUsPage() {
    return (
    <div>
        <Navbar crawled={false} page={"aboutus"}/>
        <div className='pt-36'>
            <div className='flex items-center flex-col p-4 bg-[url("/assets/about-us-page.png")] bg-center bg-no-repeat'>
                <div className='flex items-center flex-col p-4 gap-4 w-[1335px]'>
                    <div className='flex justify-between w-full'>
                        <div className='flex flex-col gap-4'>
                        <img src="public/assets/movie.png" className="h-auto self-start" />
                            <a href='https://github.com/jueeeeeen/Movie-Web-Crawler-frontend' target="_blank" rel="noopener noreferrer">
                            <button className="px-4 h-14 self-end bg-sunglox text-main-red text-2xl rounded-full font-extrabold hover:cursor-pointer group relative overflow-hidden active:scale-[98%]">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                                        Frontend Source Code
                                    </span>
                            </button>
                            </a>
                        </div>
                        <div className='relative'>
                            <img src="public/assets/about-us-background.png" className="w-80 h-auto object-cover" />
                            <h1 className='font-bold text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>ABOUT US</h1>
                        </div>
                        <div className='flex flex-col gap-4'>
                        <img src="public/assets/movie.png" className="h-auto self-start" />
                            <a href='https://github.com/SrmxKub/TopMoviesCrawler_Backend' target="_blank" rel="noopener noreferrer">
                            <button className="px-4 h-14 self-end bg-sunglox text-main-red text-2xl rounded-full font-extrabold hover:cursor-pointer group relative overflow-hidden active:scale-[98%]">
                                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                                        Backend Source Code
                                    </span>
                            </button>
                            </a>
                        </div>
                    </div>
                    <h2 className='text-md'>** HOVER TO SEE WHAT THEY ARE THINKING **</h2>
                    <div className='flex justify-center flex-wrap gap-10 pt-4 pb-4'>
                        {members.map((member, index) => (
                            <MemberCard 
                            key={index}
                            name={member.name}
                            studentId={member.studentId}
                            text={member.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutUsPage