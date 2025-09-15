import { useState } from 'react'
import CrawlPage from './pages/CrawlPage.tsx'
import MemberPage from './pages/MemberPage.tsx'
import PaperBackground from './components/Background.tsx'


function App() {
  let page = "crawl"
  return (
    <div className="relative min-h-screen overflow-hidden" id="page-container">
      <PaperBackground />
      {page === "member" ? <MemberPage />: <CrawlPage/>}
      <footer className="bg-[url('src/assets/footer.png')] w-full h-16 bg-cover bg-center"></footer>
    </div>
  )
}

export default App
