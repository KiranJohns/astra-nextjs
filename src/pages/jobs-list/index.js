import React, {useEffect} from 'react';
import TableJob from '../../components/TableJob';
import { useRouter } from 'next/navigation'; 

const index = () => {
    const navigate=useRouter()

    const goto=()=>{
    navigate.push('/NewPost')
    }
  
    function check(){
      let access =localStorage.getItem('accessToken')
      let isLoggedIn = false;
      if (access !== null) {
        isLoggedIn = true;  
      
    }
    return isLoggedIn;
    }
  
    useEffect(() => {
      let loginCheck= check()
     if (loginCheck == true) {
       navigate.push("/jobs-list");
     }
     else{
      navigate.push("/login")
     }
    }, []);
  
    return (
      <div style={{padding:"2.2rem", background:"	#004c4c"}} className="h-fit">
          <button  onClick={goto} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">New Post</button>
          <TableJob/>
      </div>
    )
}

export default index