import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ item}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={item.image} alt={item.title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
        <p className="text-sm text-gray-500">{item.descriptions}</p>
        <p className="text-gray-700 mt-2 line-clamp-3">{'xaxasxs'}</p>
        <Link href={`/news/${item.id}`} className="mt-4 inline-block text-blue-600 hover:underline font-medium">
          Ko‘proq o‘qish →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
