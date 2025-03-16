"use client";

import { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import News from "./News";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { io } from "socket.io-client";
import ProductsTable from "./ProductTable";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const fetchNews = async (): Promise<NewsItem[]> => {
  const response = await fetch("http://localhost:8000/news/api/news/");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function Dashboard() {
  const queryClient = useQueryClient();
  const { data: news, error, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 60000, // 1 daqiqa davomida cache saqlaydi
  });

  useEffect(() => {
    const socket = io("http://127.0.0.1:8000", {
      path: "/socket.io/",
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    socket.on("news_update", (newNews: NewsItem) => {
      queryClient.setQueryData<NewsItem[]>(["news"], (oldData) => {
        return oldData ? [newNews, ...oldData] : [newNews];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [queryClient]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex">
      <Sidebar />
      {/* <News news={news} /> */}
      <ProductsTable />
    </div>
  );
}

export default Dashboard;
