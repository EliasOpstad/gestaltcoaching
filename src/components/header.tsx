import React from 'react'



const header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        {/* Left header "Gestalcoach" */}
        <h1><a href="/">Gestaltcoach</a></h1>

        <nav>
            <ul className='flex space-x-4'>
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