import axios from "axios"
//set URL as backend PORT/ or address of xamp server
const URL=    dummyURL     ;

export const addContact=async(data)=>{

try {
    let res=await axios.post(`${URL}/addContact`,data);
    return res;
} catch (error) {
    console.log("error in addContact api",error);
}

}

export const addITF=async (data)=>{
    try {
        let res=await axios.post(`${URL}/addITF`,data);
        return res.data;
    } catch (error) {
        console.log("error in addITF api",error);
    }
}