import React from 'react'
import Loading from './Loading'

function ImagePreview({ loading, upload, enhanced, darkMode }) {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto'>
      {/* Original Image */}
      <div className={`group relative bg-gradient-to-br ${
        darkMode 
          ? 'from-gray-800 to-gray-900' 
          : 'from-gray-100 to-gray-200'
      } rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}>
        <div className={`absolute inset-0 bg-gradient-to-t ${
          darkMode ? 'from-black/60' : 'from-black/30'
        } to-transparent z-10`} />
        <h2 className={`absolute top-0 left-0 right-0 z-20 text-xl font-semibold text-center ${
          darkMode 
            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
            : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-800'
        } backdrop-blur-sm py-3 border-b border-white/10`}>
          Original Image
        </h2>

        {upload ? (
          <img src={upload} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
        ) : (
          <div className={`flex items-center justify-center h-80 ${
            darkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'
          }`}>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>No Image Selected</p>
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className={`group relative bg-gradient-to-br ${
        darkMode 
          ? 'from-blue-900 to-purple-900' 
          : 'from-blue-100 to-purple-100'
      } rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}>
        <div className={`absolute inset-0 bg-gradient-to-t ${
          darkMode ? 'from-black/60' : 'from-black/30'
        } to-transparent z-10`} />
        <h2 className={`absolute top-0 left-0 right-0 z-20 text-xl font-semibold text-center ${
          darkMode 
            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white' 
            : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-800'
        } backdrop-blur-sm py-3 border-b border-white/10`}>
          Enhanced Image
        </h2>

        {enhanced && !loading ? (
          <img src={enhanced} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
        ) : loading ? (
          <div className={`h-80 flex items-center justify-center ${
            darkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'
          }`}>
            <Loading darkMode={darkMode} />
          </div>
        ) : (
          <div className={`flex items-center justify-center h-80 ${
            darkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'
          }`}>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>No Enhanced Image</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImagePreview