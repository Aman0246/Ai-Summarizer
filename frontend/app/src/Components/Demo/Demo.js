import React from 'react'
import { useState,useEffect } from 'react'
import { BsLink } from 'react-icons/bs';
import { useLazyGetSummaryQuery } from '../../ReduxToolKit/article';
export default function Demo() {
  // const[input,setInput]=useState("")
const [article,setArticle]=useState({
  url:" ",
  summary:" ",
})
//========================================================
const[getSummary,{error,isFetching}]=
useLazyGetSummaryQuery();


//========================================================
const handleSubmit=async(e)=>{
  e.preventDefault();
const {data}=await getSummary({articleUrl:article.url})
if(data?.summary){
  const newArticle= {...article, summary:data.summary};
  setArticle(newArticle)
  console.log(newArticle);
}
}

  return (
  <section className='mt-16 w-full max-w-xl'>
    <div className='flex flex-col w-full gap-2'>
      <form  onSubmit={handleSubmit} className='relative flex justify-center items-center'>
        <BsLink size={30} className='absolute ml-3 w-5 left-0 my-2'/> 
        <input type="url" value={article.url}  className='bg-gray-100 py-5 px-10 rounded-2xl w-full peer' placeholder='Enter a Url' onChange={(e)=>setArticle({...article,url:e.target.value})} required  />
        <button type='Submit' className='hover:bg-blue-300 font-bold absolute right-4 p-3 bg-gray-200 cursor-pointer rounded-xl peer-focus:border-gray-200 peer-focus:text-gray-700' > Click</button>
      </form> 
      {/* Browse URL History */}
    </div>
    {/* display result */}
  </section>
  )
}
