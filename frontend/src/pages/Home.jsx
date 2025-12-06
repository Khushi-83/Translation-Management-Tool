import React from 'react'
import Card from '../components/Card'

export default function Home(){
  return (
    <div className="grid gap-8">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-3">Sleek, modern UI — light colours ✨</h1>
          <p className="text-gray-600 mb-6">A minimal, airy layout using soft backgrounds, rounded cards and subtle shadows. Built with React + Tailwind and a Node/Express backend.</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-primary text-white">Get started</button>
            <button className="px-4 py-2 rounded-lg border">Learn more</button>
          </div>
        </div>
        <div>
          <Card>
            <div className="text-gray-500">Quick preview</div>
            <div className="mt-4">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Fast backend</span><span className="text-sm text-gray-400">Express + Mongoose</span></li>
                <li className="flex justify-between"><span>Light UI</span><span className="text-sm text-gray-400">Tailwind</span></li>
                <li className="flex justify-between"><span>Searchable translations</span><span className="text-sm text-gray-400">REST API</span></li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
