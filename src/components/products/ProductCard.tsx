import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image?: string;
    description: string;
    link: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const defaultImage = "/placeholder.jpg";
  const router = useRouter();

  return (
    <Card className="shadow-lg hover:shadow-2xl transition-all rounded-2xl overflow-hidden bg-white border border-gray-200">
      <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image || defaultImage}
          alt={product.title}
          width={500}
          height={500}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <Button
          className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-2 rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition-all"
          onClick={() => router.push(`/detail-cars/${product.id}`)}
        >
          Batafsil
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;