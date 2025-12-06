import React from 'react'

export default function Navbar({ onNavigate }){
  return (
    <nav className="backdrop-blur-sm bg-white/80 border-b sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-semibold">MS</div>
          <div>
            <div className="font-semibold">ModernSite</div>
            <div className="text-xs text-gray-500">Sleek & Light</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={()=>onNavigate('home')} className="text-sm px-3 py-2 rounded hover:bg-gray-100">Home</button>
          <button onClick={()=>onNavigate('translations')} className="text-sm px-3 py-2 rounded hover:bg-gray-100">Translations</button>
          <a className="ml-4 inline-block px-3 py-2 rounded bg-primary text-white text-sm" href="#" onClick={(e)=>e.preventDefault()}>Contact</a>
        </div>
      </div>
    </nav>
  )
}
