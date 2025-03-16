export default function Sidebar() {
    return (
      <div className="w-64 h-screen bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">
            <img src="/images/logo2.png" alt="" width={150} />
        </h2>
        <ul className="space-y-4 mt-8">
          <li>
            <a href="#" className="block hover:text-gray-400">Yangiliklar</a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-400">Moshinalar</a>
          </li>
         
        </ul>
      </div>
    );
  }
  