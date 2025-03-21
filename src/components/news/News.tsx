"use client";

import { useQuery } from "@tanstack/react-query";
import NewsCard from "./NewsCard";


const fetchNews = async()=>{
  const query = await fetch('http://localhost:8000/news/api/news/')
  if(!query.ok){
    throw "Error"
  }

  return query.json()
}


function News() {
  const {data,error,isLoading} = useQuery({
    queryKey:["news"],
    queryFn:fetchNews
  })


  if (isLoading) return <p>Loading...</p>;


  return (
    <div>
        <h1 className="text-3xl text-center">
            Yangilliklar
        </h1>

        <div className="container mx-auto mt-5">
            <div className="row flex gap-5 flex-wrap justify-center">
              {
                data?.map((item,idx)=>{
  return <div className="col" key={item.id}>
                        <NewsCard item={item} />
                </div>
                })
              }
                
                
               
            </div>
        </div>
    </div>
  )
}

export default News