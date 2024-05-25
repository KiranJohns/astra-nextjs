import React, {useState, useEffect} from 'react'
import { Boxes } from "../components/ui/background-boxes"
import Loading from '../components/Loading'
import axios from 'axios';
import {EB_Garamond} from '@next/font/google'
import {Rye, Poppins} from '@next/font/google'


const rye = Rye({
  subsets: ['latin'],
  weight: [ '400']
})


const eb = EB_Garamond({
    subsets: ['latin'],
    weight: [ '700']
  })
  

const vacancies = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    let x;
  
    useEffect(() => {
      setLoading(true);
      axios.get('https://api.astranova.co.in/books').then((response) => {
        setBooks(response.data.data.reverse());
        x = books.length;
        setLoading(false)
        setIsLoading(false);
  
        // console.log(response.data.data);
      }).catch((error) => {
        console.log(error)
        setLoading(false)
      })
    }, [])
  
    return (
      <div>
  
        {isLoading ? (
          <Loading />
        ) : (
  
          <div className=" relative w-full  overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-3">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,transparent)] pointer-events-none" />
  
            <Boxes />
            <div style={{ display: 'flex', justifyContent: "space-around", width: "100%", flexWrap: "wrap" }}>
  
  
              {books.slice(0, 20).map((book, index) => (
                <div key={index} style={{ margin: "10px 4px" }} className="col-sm">
  
                  <div className="card" >
                    <div className="face front-face">
  
                      <img style={{ width: "14.9rem", maxHeight: "8rem", marginTop: "1rem", borderRadius: ".8rem", position: "fixed", top: "0" }} src={`http://api.astranova.co.in/${book.jobImage}`} alt="" sizes="" />
                      <div style={{}} className={`pt-3 text-uppercase name mt-40 text-center ${eb.className}`}>
                        {book.title}
                      </div>
                      <div style={{}} className={`designation mt-1 mb-48 text-center ${eb.className}`}>{book.author}</div>
                      <div style={{ backgroundColor: "#00ffff", height: "8rem", width: "8rem", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8rem", position: "fixed", bottom: "0", marginBottom: "1rem" }}>
                        <div style={{ marginBottom: "1rem" }}><a aria-label="Chat on WhatsApp" href="https://wa.me/918943292908"> <button className={`apply-button apply-visible font-extrabold ${rye.className}`}>Apply</button> </a></div>
                      </div>
                    </div>
                    <div className="face back-face">
                      <span className="fas fa-quote-left"></span>
                      <div className="testimonial mb-40" >
                        {book.publishYear && (
                          <ul className=" text-start ml-4 custom-list">
                            {book.publishYear.split('\n').map((line, index) => (
                              line.trim() && <li key={index}>{line.trim()}</li>
                            ))}
                          </ul>
                        )}
                     
                      </div>
                      <div style={{ backgroundColor: "#00ffff", height: "8rem", width: "8rem", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8rem", marginTop: "1.3rem", position: "fixed", bottom: "0", marginBottom: "1rem" }}>
                        <div style={{ marginBottom: "1rem" }}> <a aria-label="Chat on WhatsApp" href="https://wa.me/918943292908"><button className={`apply-button apply-visible rubik-gemstones-regular ${rye.className}`}>Apply</button></a></div>
                      </div>
                      <span className="fas fa-quote-right"></span>
  
                    </div>
                  </div>
  
                </div>
  
              ))}
            </div>
          </div>
        )}
  
      </div>
    )
  }

export default vacancies