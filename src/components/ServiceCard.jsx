import React, { useState } from 'react'

const ServiceCard = ({service, index}) => {

    const [position, setPosition] = useState({x: 0, y: 0})
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

  return (
    <div
        className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 transition-all duration-300'
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {/* Animated background blur */}
        <div
            className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${isHovered ? 'opacity-70' : 'opacity-0'}`}
            style={{
                top: position.y - 150,
                left: position.x - 150,
                transform: isHovered ? 'scale(1)' : 'scale(0.8)'
            }}
        />

        {/* Main card content */}
        <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all duration-300 rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>
            <div className='bg-gray-100 dark:bg-gray-700 rounded-full p-2'>
                <img src={service.icon} alt={service.title} className='w-16 h-16 bg-white dark:bg-gray-900 rounded-full'/>
            </div>
            <div className='flex-1'>
                <h3 className='font-bold text-lg text-gray-900 dark:text-white'>{service.title}</h3>
                <p className='text-sm mt-2 text-gray-600 dark:text-gray-300'>{service.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard