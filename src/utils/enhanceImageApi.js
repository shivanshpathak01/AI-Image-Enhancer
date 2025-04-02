import axios from "axios"

const API_KEY = import.meta.env.VITE_PICWISH_KEY
const BASE_URL = "https://techhk.aoscdn.com/"
const MAXIMUM_RETRIES = 20;


export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file)
        console.log("Image Uploaded Successfully, Task ID:",taskId)

        const enhancedImageData = await PollForEnhancedImage(taskId)
        console.log("Enhanced Image Data:",enhancedImageData)

        return enhancedImageData
        
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

// These two functions are so fast that they aren't even waiting for the enhanced image so to stop them we are using Polling, this works as set timeout 
const PollForEnhancedImage = async(taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId)
    
    if(result.state === 4){
        console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

        if(retries>=MAXIMUM_RETRIES){
            throw new error ("Max retries reached.Please try again later.")
        }

        // 2 seconds delay
        await new Promise((resolve) => setTimeout(resolve,2000))

        return PollForEnhancedImage(taskId, retries + 1)
    }
    console.log("Enhanced Image URL:", result)
    return result
}

const fetchEnhancedImage = async(taskId) => {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers:{
            "X-API-KEY":API_KEY
        },
    })
    
    if(!data?.data){
        throw new Error("Failed to fetch Enhanced image! Image not found")
    }
    
    return data.data;

}

