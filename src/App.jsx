import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Header from './components/Header'
import { skills, projects } from './data/portfolioData'

function App() {
  return (
    <div className="px-6 py-12 md:mx-8 md:py-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] ">
          <div className="flex flex-col max-h-screen md:sticky top-0 pt-0">
            <Header />
          </div>

          <main className="md:py-28">
            <Home />
            <Skills skills={skills} />
            <Projects projects={projects} />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
