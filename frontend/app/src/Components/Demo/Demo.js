import React from 'react'
import { useState,useEffect } from 'react'
import { BsLink } from 'react-icons/bs';import { FiCopy } from 'react-icons/fi';
import { useLazyGetSummaryQuery } from '../../ReduxToolKit/article';
import Loading from "../loading/Loading"
export default function Demo() {
  // const[input,setInput]=useState("")
const [article,setArticle]=useState({
  url:" ",
  summary:" ",
})
const[allArticles,setAllArticles]=useState([])

//========================================================
const[getSummary,{error,isFetching}]=
useLazyGetSummaryQuery();
//========================================================
useEffect(()=>{
const articleFromLocalStorage= JSON.parse(localStorage.getItem('articles'))
if(articleFromLocalStorage){setAllArticles(articleFromLocalStorage)}
},[])

//======================================================
const handleSubmit=async(e)=>{
  e.preventDefault();
const {data}=await getSummary({articleUrl:article.url})
if(data?.summary){
  const newArticle= {...article, summary:data.summary};
  const updatedAllArticles= [newArticle,...allArticles]
  setAllArticles(updatedAllArticles);
  setArticle(newArticle)
  // console.log(newArticle);
  localStorage.setItem("articles",JSON.stringify(updatedAllArticles))
}
}
// console.log(allArticles)
  return (
  <section className='mt-16 w-full max-w-xl'>
    <div className='flex flex-col w-full gap-2'>
      <form  onSubmit={handleSubmit} className='relative flex justify-center items-center'>
        <BsLink size={30} className='absolute ml-3 w-5 left-0 my-2'/> 
        <input type="url" value={article.url}  className='bg-gray-100 py-5 px-10 rounded-2xl w-full peer' placeholder='Enter a Url' onChange={(e)=>setArticle({...article,url:e.target.value})} required  />
        <button type='Submit' className='hover:bg-blue-300 font-bold absolute right-4 p-3 bg-gray-200 cursor-pointer rounded-xl peer-focus:border-gray-200 peer-focus:text-gray-700' > Click</button>
      </form> 
      {/* Browse URL History */}
      <div className='flex flex-col gap-1 max-h-60 overflow-y-auto mt-2 '>{allArticles.map((items,index)=>(
        <div key={`link-${index}`} onClick={()=>setArticle(items) }className='bg-gray-100 p-2 flex item-center'>
          <FiCopy className='absolute '/>
          <p className='flex px-6 font-satoshi  text-blue-700 font-medium text-sm  truncate'>
            {items.url}
          </p>
        </div>
      ))}</div>
    </div>
    {/* display result */}
    <div className='my-10 max-w-full flex justifiy-center items-center '>
      {isFetching?(<Loading className="justifiy-center"/>):error ?(<p className='font-inter font-bold text-black text-center' >Well that was not Suppose to happen.... <br/> <span className='font-satoshi font-normal text-grey-700'>{error?.data?.error}</span></p>):(
        article.summary &&(
          <div className='flex flex-col gap-3 '>
            <h2 className='font-satoshi font-bold text-gray-600 text-xl' > Article <span>Summery</span></h2>
            <div className="bg-gray-100 p-4">
              <p >
                {article.summary}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  </section>
  )
}
