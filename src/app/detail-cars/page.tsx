"use client";
import CarProductCard from '@/components/card/CardProduct';
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { Item } from '@radix-ui/react-dropdown-menu';
import { Button } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React from 'react'


const fetchDetailCars=  async()=>{
  const query = await fetch('http://localhost:8000/pro/api/products/')
  return query.json()
}


function Page() {

  const {data,error,isLoading} = useQuery({queryKey:["data"],queryFn:fetchDetailCars})



  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  
  return (
    <div>
        <Navbar />


        <div className="">
            <div className="conainer">
                <div className="row">
                  <div className="col">
                   
                  </div>
                  <div className="col"></div>
                </div>
                <div className="row grid gap-3 grid-cols-2 md:grid-cols-4 mt-10">
                  {
                    data?.map((Item,id)=>(
                      <CarProductCard key={Item.id} items={Item} />
                    ))
                  }
              
               
                </div>
            </div>
        </div>



        <Footer />
    </div>
  )
}

export default Page