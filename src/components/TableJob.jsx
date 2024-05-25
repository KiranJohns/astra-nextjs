import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const TableJob = () => {
    const [books, setBooks] = useState([]);
    const  [loading, setLoading] = useState(false)

    const handleDelete = (id) => {
     axios.delete('https://api.astranova.co.in/books/' + id)
     .then(res =>{ 
        console.log(res)
        window.location.reload()
        alert('Post Deleted')
          })
     .catch(err=>console.error(err));
}
    
    useEffect(()=>{
        setLoading(true);
        axios.get('https://api.astranova.co.in/books').then((response)=>{
            setBooks(response.data.data);
            setLoading(false)
            console.log(response.data.data);
        }).catch((error) => {console.log(error)
        setLoading(false)
    })
    },[])

     

    
  return (
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
        <thead className="text-xs text-green-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-center">
                    Title
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Place
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    Description
                </th> 
                <th scope="col" className="px-6 py-3 text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            { books.map((book)=>(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                   {book.title}
                </th>
                <td className="px-6 py-4 text-center">
                {book.author}
                </td>
                <td className="px-6 py-4 text-center">
                   {book.publishYear.slice(0,45)+'...'}
                </td>
                <td className="px-6 py-4 text-center">
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e)=>handleDelete(book._id)}>Delete</button>
                </td>
            </tr>))}

           
      
        </tbody>
    </table>
</div>

  )
}

export default TableJob