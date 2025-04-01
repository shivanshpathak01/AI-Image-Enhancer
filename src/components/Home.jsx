import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'

//29:18
function Home() {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setloading] = useState(false)


  const UploadImagehandler = (file) =>{} 

  return (
    <>
      <ImageUpload/>
      <ImagePreview 
      loading={loading} 
      upload={uploadImage}
      enhanced={enhancedImage}
      
      />
    </>
  )
}

export default Home
