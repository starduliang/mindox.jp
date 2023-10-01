import React from 'react'

const HoverMask = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group">
    {children}
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300 rounded hover:cursor-pointer" />
  </div>
)

export default HoverMask
