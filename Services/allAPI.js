import SERVER_URL from "./baseUrl"
import { commonAPI } from "./commonAPI"


export const addStudentAPI =async (student)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,student,"")
}

export const getAllStudentsAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/all-student`,"","")
}