import axios from "axios";

const post = async(url, param) => {
    try{
        const response = await axios.post(url, param);
        return response.data;
    }catch(e){
        console.log("에러발생")
    }
}

export {post};