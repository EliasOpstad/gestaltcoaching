import React from 'react'

const header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50 h-[100px]'>
        {/* Left header "Gestalcoach" */}
        <h1><a href="/">Gestaltcoach</a></h1>

        <nav>
            <ul className='flex space-x-8'>
        {/* Right header (Hyperlenker til andre pages) => HJEM, BESTILL TIME, KONTAKT, PRISER, OM MEG*/}
                <li><a href="/">Hjem</a></li>
                <li><a href="/bestillTime">Bestill Time</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
                <li><a href="/priser">Priser</a></li>
                <li><a href="/om">Om Meg</a></li>
            </ul>
        </nav>
    
    </div>
  )
}

export default header