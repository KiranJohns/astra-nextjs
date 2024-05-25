import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'


const newpost = () => {
    const [message, setMessage] = useState()
    const [Loading, setLoading] = useState('');
    const  navigate= useRouter()
    // let check = false;
    // const accessToken = getCookie('accessToken');
    var UploadChange = 'Click to upload or drag and drop'
  
    const [imgUpload, setImgUpload] = useState('Click to upload or drag and drop')
  
  
  function check(){
    let access =localStorage.getItem('accessToken')
    let isLoggedIn = false;
    if (access !== null) {
      isLoggedIn = true;  
    
  }
  return isLoggedIn;
  }
  
  
  function goto(){
    navigate.push("/jobs-list");
  }
  
  //   function getCookie(cookieName) {
  //     const name = cookieName + "=";
  //     const decodedCookie = decodeURIComponent(document.cookie);
  //     const cookieArray = decodedCookie.split(';');
  //     for(let i = 0; i < cookieArray.length; i++) {
  //         let cookie = cookieArray[i];
  //         while (cookie.charAt(0) === ' ') {
  //             cookie = cookie.substring(1);
  //         }
  //         if (cookie.indexOf(name) === 0) {
  //             return cookie.substring(name.length, cookie.length);
  //         }
  //     }
  //     return "";
  // }
     
  
  
  
  useEffect(() => {
    let loginCheck= check()
   if (loginCheck == true) {
     navigate.push("/newpost");
   }
   else{
    navigate.push("/login")
   }
  }, []);
  
    useEffect(()=>{
    axios.get('https://api.astranova.co.in/login/checkAuth')
    .then(res => console.log(res))
     .catch(err =>console.log(err))
    //  console.log(document.cookie);
    },[])
  
   
    
    
    // const [title, setTitle] = useState('');
    // const [author, setAuthor] = useState('');
    // const [publishYear, setPublishYear] = useState('');
    // const [jobImage, setJobImage] = useState('')
    
  
      const [formData, setFormData] = useState({
          title: '',
          author: '',
          publishYear: '',
          jobImage: null
      });
  
      const handleChange = (e) => {
        if (e.target.name === 'jobImage') {
            setFormData({ ...formData, jobImage: e.target.files[0] });
            setImgUpload("Image Successful")
            console.log(formData.publishYear);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            setImgUpload("Image Failed")
            
        }
    };
    
  
    const handleSave = async (e) =>{
      e.preventDefault();
      console.log('dddd')
   
          const formDataToSend = new FormData();
          formDataToSend.append('title', formData.title);
          formDataToSend.append('author', formData.author);
          formDataToSend.append('description', formData.publishYear);
          formDataToSend.append('jobImage' , formData.jobImage);
          
    setLoading(true);
    console.log(formData)
  
  //   axios.post('http://localhost:5555/books',{
  //     method: 'POST',
  //     body: formDataToSend
  // })
  //   .then(()=>{
  //     setLoading(false);
  //     console.log('dfsfsdfdsfdsf');
  //     alert('success')
  //     // location.reload()
  //   })
  //   .catch(err=>
  //     console.log(err)
  //     )
  try {
    const response = await axios.post('https://api.astranova.co.in/books', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
  
    alert('Image uploaded successfully');
    // Reset form fields if needed
  } catch (error) {
    console.error('Error uploading image:', error);
    alert('Failed to upload image');
  }
    }
  
    function logout(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("logCheck");
    location.reload();
    }
  
    
  
    return (
      <div  key='uniqueKey'  className='bg-black text-white h-screen'>
        <div className='flex justify-end p-2'>
        <button  onClick={goto} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">All Posts</button>
        <button  onClick={logout} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
        </div>
        <div className='flex justify-center '>
          <h3  className='mt-16 font-extrabold'>New Post</h3>
        </div>
        <form className='bg-black' action="" onSubmit={handleSave} enctype="multipart/form-data">
        <div className="mb-6 mt-10 flex justify-center">
      <div className='flex justify-center flex-col items-center'><label for="default-input" className=" mb-2 text-sm font-medium dark:text-white">Designation</label>
      <input type="text" name="title" value={formData.title}  onChange={handleChange}  className="input-width bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
  </div>
  <div className="mb-6 mt-10 flex justify-center">
      <div className='flex justify-center flex-col items-center'><label for="default-input" className=" mb-2 text-sm font-medium   dark:text-white">Place</label>
      <input type="text" name='author' value={formData.author} onChange={handleChange} id="default-input"  className="input-width bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
  </div>
  
  <div className="mb-6 mt-10 flex justify-center">
      <div className='flex justify-center flex-col items-center'><label for="default-input" className=" mb-2 text-sm font-medium   dark:text-white">Description</label>
      <textarea type="text" name='publishYear' value={formData.publishYear} onChange={handleChange}  rows="5" className="input-width bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=''/></div>
      {/* <textarea id="message" rows="8" className=" p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea></div> */}
  </div>
  
     
  <div className=" mt-10 flex bg-black items-center justify-center ">
    
  <div className='flex justify-center bg-black flex-col items-center'>
  <label for="default-input" className=" text-sm font-medium   dark:text-white">Image</label>
      <label for="dropzone-file"  className="input-width flex flex-col items-center justify-center    border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{imgUpload}</span>  </p>
              <p className="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG or  (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" name="jobImage" type="file" className="hidden" onChange={handleChange}/>
      </label>
      </div>
  </div> 
  
  <div className='bg-black mt-10'>
  <div className=" flex justify-center">
  <button  type="submit" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
  </div>
  </div>
  
        </form>
  
      </div>
    )
  }

export default newpost