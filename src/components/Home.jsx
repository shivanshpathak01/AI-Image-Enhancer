import React from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'

function Home() {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  return (
    <>
      <ImageUpload/>
      <ImagePreview/>
    </>
  )
}

export default Home
