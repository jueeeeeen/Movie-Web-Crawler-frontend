import { useState } from 'react'
import CrawlPage from './pages/CrawlPage.tsx'
import MemberPage from './pages/MemberPage.tsx'


function App() {
  let page = "crawl"
  return (
    <>
      {page === "member" ? <MemberPage />: <CrawlPage/>}
      <footer className="bg-[url('src/assets/footer.png')] w-full h-16 bg-cover bg-center absolute z-[-100]"></footer>
    </>
  )
}

export default App
