"use client";

import ProductModal from "@/components/dashboard/ProductModal";
import ProductsTable from "@/components/dashboard/ProductTable";
import Sidebar from "@/components/sidebar/Sidebar";

function Page() {
  return (
    <div>
       <div className="flex">
             <Sidebar />
             {/* <News news={news} /> */}
             <ProductModal />
             <ProductsTable />
           </div>
    </div>
  )
}

export default Page