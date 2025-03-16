import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, image, date, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={'http://127.0.0.1:8000/media/category/%D0%90%D0%B2%D1%82%D0%BE%D0%B1%D1%83%D1%81_SAZ_HD50-_edge.png'} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{'title'}</h2>
        <p className="text-sm text-gray-500">{'descrt'}</p>
        <p className="text-gray-700 mt-2 line-clamp-3">{'xaxasxs'}</p>
        <Link href={''} className="mt-4 inline-block text-blue-600 hover:underline font-medium">
          Ko‘proq o‘qish →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
