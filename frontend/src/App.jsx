import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Translations from './pages/Translations'

export default function App(){
  const [route, setRoute] = React.useState('home');
  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setRoute} />
      <main className="max-w-6xl mx-auto px-6 py-10">
        {route === 'home' && <Home />}
        {route === 'translations' && <Translations />}
      </main>
      <footer className="text-sm text-center py-8 text-gray-500">© {new Date().getFullYear()} Modern Site</footer>
    </div>
  )
}
