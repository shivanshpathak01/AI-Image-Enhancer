import React from 'react'

function Loading({ darkMode }) {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <div className="relative">
        <div className={`w-16 h-16 border-4 ${
          darkMode ? 'border-blue-500/20' : 'border-blue-400/20'
        } rounded-full`}></div>
        <div className={`w-16 h-16 border-4 ${
          darkMode 
            ? 'border-t-blue-500 border-r-purple-500 border-b-blue-500 border-l-purple-500' 
            : 'border-t-blue-400 border-r-purple-400 border-b-blue-400 border-l-purple-400'
        } rounded-full animate-spin absolute top-0 left-0`}></div>
        <div className={`w-16 h-16 border-4 border-t-transparent border-r-transparent ${
          darkMode ? 'border-b-blue-500/20' : 'border-b-blue-400/20'
        } border-l-transparent rounded-full animate-pulse absolute top-0 left-0`}></div>
      </div>
      <div className={`text-sm font-medium animate-pulse ${
        darkMode ? 'text-blue-400' : 'text-blue-600'
      }`}>
        Enhancing your image...
      </div>
    </div>
  )
}

export default Loading