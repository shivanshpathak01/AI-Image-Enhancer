import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { enhancedImageAPI } from "../utils/enhanceImageApi" 

function Home() {
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
    <>
      <ImageUpload UploadImagehandler={UploadImagehandler}/>
      <ImagePreview 
      loading={loading} 
      upload={uploadImage}
      enhanced={enhancedImage?.image}
      
      />
    </>
  )
}

export default Home
