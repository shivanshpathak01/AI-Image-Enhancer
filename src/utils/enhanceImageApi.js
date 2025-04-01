import axios from "axios"

const API_KEY = import.meta.env.VITE_PICWISH_KEY

const BASE_URL = "https://techhk.aoscdn.com/"
export const enhancedImageAPI = async (file) => {
    try {
        // const taskId = await uploadImage(file)
        // console.log("Image Uploaded Successfully, Task ID:",taskId)

        const enhancedImageData = await fetchEnhancedImage(taskId)
        console.log("Enhanced Image Data:",enhancedImageData)
        
        // return enhancedImageData
    } catch (error) {
        console.log("Error Enhancing Image",error.message)
    }
}

// Function to perform the task

const uploadImage = async(file) => {

    const formData = new FormData()
    formData.append("image_file",file)

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers:{
            "Content-Type": "multipart/form-data",
            "X-API-KEY":API_KEY
        },
    })

    if(!data?.data?.task_id){
        throw new Error("Failed to upload image! Task ID not found")
    }

    return data.data.task_id;
}
const fetchEnhancedImage = async(taskId) => {}