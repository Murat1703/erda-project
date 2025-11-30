import { useState } from 'react'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Routes, Route} from 'react-router-dom'
import { Header } from './components/Header'
import { ContactsPage } from './pages/ContactsPage'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'

function App() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mainMenuOpen, setMainMenuOpen] = useState(false);

  const handleProjectsOpen = () =>{
    setProjectsOpen(!projectsOpen)
    console.log("ProjectOpenClicked")
  }

  const handleProjectsClose = () =>{
    setProjectsOpen(false)
  }

  const handleOpenMainMenu  = () =>{
    setMainMenuOpen(!mainMenuOpen);
  }

  const handleCloseMainMenu = () =>{
    setMainMenuOpen(false)
  }

  return (
    <>
    <Cursor />
    <div onClick={()=>{handleProjectsClose(); handleCloseMainMenu()}}>
      <Header 
        onClick={handleProjectsOpen}
        onCloseProjects={handleProjectsClose}
        projectsOpen={projectsOpen}
        onOpenMainMenu={handleOpenMainMenu}
        isOpenMainMenu={mainMenuOpen}
        onCloseMainMenu={handleCloseMainMenu}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />

      </Routes>

      <Footer />

    </div>
    </>

  )
}

export default App
