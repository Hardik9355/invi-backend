import axios from 'axios';

export const axioshandler:any= async(event: any, context: any)=>{
  const response = await axios.get('https://invi-frontend-ox42.vercel.app/');
  console.log(response.data);
}
