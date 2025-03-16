import React from 'react'
import NewsTable from './NewsTable'
import { Button } from '@radix-ui/themes'
import { Plus } from 'lucide-react'
import NewsModal from './NewsModal'

function News({news}) {
  return (
    <div className='w-full bg-white text-black flex-1'>
        <div className="shadow p-3 text-3xl flex justify-between">
        <h1>Yangiliklar</h1>
        {/* <Button className='hover:cursor-pointer'>
            <Plus />
            Qo'shish</Button> */}
            <NewsModal />
        </div>

        <div className="container">

            <div className="row">
                <div className="col">
                <NewsTable  news={news} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default News