import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': 'fccdb00861msh1ca51422a14bc1bp1ccb19jsn1729c3931386',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const articleApi=createApi({

    reducerPath:"articleApi",
    baseQuery:fetchBaseQuery({
      baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
      prepareHeaders:(headers)=>{
          headers.set('X-RapidAPI-Key','fccdb00861msh1ca51422a14bc1bp1ccb19jsn1729c3931386')
          headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com')
      }
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
          query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        })
    })
})
export const {useLazyGetSummaryQuery}=articleApi;

