import React, { useState } from 'react'

function ImageUpload({ UploadImagehandler, darkMode }) {
  const [isDragging, setIsDragging] = useState(false)

  const ShowImageHandler = (e) => {
    const file = e.target.files[0]
    if(file){
      UploadImagehandler(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if(file){
      UploadImagehandler(file)
    }
  }

  return (
    <div className='w-full max-w-2xl mx-auto'>
      <label 
        htmlFor="fileInput" 
        className={`block w-full cursor-pointer transition-all duration-300 ${
          isDragging 
            ? darkMode 
              ? 'border-blue-400 bg-blue-400/10' 
              : 'border-blue-500 bg-blue-500/10'
            : darkMode
              ? 'border-gray-600 hover:border-blue-400'
              : 'border-gray-300 hover:border-blue-500'
        } border-2 border-dashed rounded-2xl p-8 text-center group`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input type="file" id='fileInput' className='hidden' onChange={ShowImageHandler} accept="image/*"/>
        <div className="space-y-4">
          <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${
            darkMode ? 'from-blue-500 to-purple-600' : 'from-blue-400 to-purple-500'
          } rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
            </svg>
          </div>
          <div>
            <p className={`text-xl font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>Upload Your Image</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Drag and drop or click to browse</p>
          </div>
        </div>
      </label>
    </div>
  )
}

export default ImageUpload