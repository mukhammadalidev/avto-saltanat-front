"use client";

import NewsCard from "./NewsCard";

function News() {
  return (
    <div>
        <h1 className="text-3xl text-center">
            Yangilliklar
        </h1>

        <div className="container mx-auto mt-5">
            <div className="row flex gap-5 flex-wrap justify-center">
                
                <div className="col">
                        <NewsCard />
                </div>
                <div className="col">
                        <NewsCard />
                </div>
                <div className="col">
                        <NewsCard />
                </div>
                <div className="col">
                        <NewsCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default News