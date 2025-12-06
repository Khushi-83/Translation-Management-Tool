import React from 'react'
export default function Card({ children }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border">
      {children}
    </div>
  )
}
