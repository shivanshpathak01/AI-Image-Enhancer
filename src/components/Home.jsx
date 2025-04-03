import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { enhancedImageAPI } from "../utils/enhanceImageApi" 

function Home({ darkMode }) {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setloading] = useState(false)

  const UploadImagehandler = async(file) =>{
    setUploadImage(URL.createObjectURL(file));
    setloading(true)
    try{
      const enhancedURL = await enhancedImageAPI(file)
      setEnhancedImage(enhancedURL)
      setloading(false)
    }catch(error){
      console.log(error)
      alert("Error while enhancing the Image. Please try again later")
    }
  } 

  return (
    <div className={`w-full max-w-6xl mx-auto backdrop-blur-lg ${
      darkMode ? 'bg-white/10' : 'bg-white/80'
    } rounded-3xl p-8 shadow-2xl transition-all duration-300`}>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* <div className="text-center mb-5">
          
        </div> */}
        
        <ImageUpload UploadImagehandler={UploadImagehandler} darkMode={darkMode} />
        <ImagePreview 
          loading={loading} 
          upload={uploadImage}
          enhanced={enhancedImage?.image}
          darkMode={darkMode}
        />
      </div>
    </div>
  )
}

export default Home
