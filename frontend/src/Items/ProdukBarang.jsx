

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const ProdukBarang = () => {
//   const [products, setProducts] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       // Optional: Set an error state to display an error message to the user
//     }
//   };

//   const confirmDelete = (id) => {
//     setProductToDelete(id);
//     setShowModal(true);
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(
//         `http://localhost:8080/api/products/${productToDelete}`
//       );
//       setShowModal(false);
//       setProductToDelete(null);
//       fetchProducts(); // Refresh the product list after deletion
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       // Optional: Set an error state to display an error message to the user
//     }
//   };

//   const handleEdit = (id) => {
//     navigate(`/editBarang/${id}`); // Correct the path format
//   };

//   return (
//     <div className="min-h-screen bg-rose-200 flex">
//       <div className="w-64 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900">
//         <div className="p-6 text-2xl font-bold">Daftar Produk</div>

//         <nav className="mt-6">
//           <Link
//             to="/"
//             className="block py-2.5 px-4 rounded font-bold transition duration-200 hover:bg-rose-400"
//           >
//             Home
//           </Link>
//           <Link
//             to="/tambahBarang"
//             className="block py-2.5 px-4 rounded font-bold transition duration-200 hover:bg-rose-400"
//           >
//             Tambah Barang
//           </Link>
//           <Link
//             to="/login"
//             className="block py-2.5 px-4 rounded  font-bold transition duration-200 hover:bg-rose-400"
//           >
//             Logout
//           </Link>
//         </nav>
//       </div>

//       <div className="flex-1 p-6">
//         {/* Grid Container */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white shadow-md rounded-lg p-4 flex flex-col"
//             >
//               <img
//                 src={product.imageUrl !== undefined && product.imageUrl !== null ? product.imageUrl : "https://via.placeholder.com/150"} // Fallback image
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//               <h2 className="text-lg font-bold text-center mb-2">{product.name}</h2>
//               <p className="text-gray-600 text-center mb-2">{product.category}</p>
//               <p className="text-green-500 text-center font-bold mb-2">
//                 Rp {product.price}
//               </p>
//               <p className="text-gray-500 text-center mb-4">Stok: {product.stock}</p>
//               <div className="flex justify-between">
//                 <button
//                   className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//                   onClick={() => handleEdit(product.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//                   onClick={() => confirmDelete(product.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {showModal && (
//           <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded shadow-md">
//               <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
//               <p>Apakah Anda yakin ingin menghapus produk ini?</p>
//               <div className="flex justify-end mt-4">
//                 <button
//                   className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Batal
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   onClick={handleDelete}
//                 >
//                   Hapus
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProdukBarang;




import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const ProdukBarang = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // New state for filtered products
  const [searchTerm, setSearchTerm] = useState(""); // New state for search input
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      setProducts(response.data);
      setFilteredProducts(response.data); // Set both products and filtered products initially
    } catch (error) {
      console.error("Error fetching products:", error);
      // Optional: Set an error state to display an error message to the user
    }
  };

  // Update the filtered products list based on the search term
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().startsWith(value)
    );
    setFilteredProducts(filtered);
  };

  const confirmDelete = (id) => {
    setProductToDelete(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/products/${productToDelete}`
      );
      setShowModal(false);
      setProductToDelete(null);
      fetchProducts(); // Refresh the product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
      // Optional: Set an error state to display an error message to the user
    }
  };

  const handleEdit = (id) => {
    navigate(`/editBarang/${id}`); // Correct the path format
  };

  
  return (
    <div className="min-h-screen bg-rose-200 flex ">
      <div className="w-64 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900">
        <div className="p-6 text-2xl font-bold">Daftar Produk
        </div>
        

        <nav className="mt-6">
      
          <Link
            to="/"
            className="block py-2.5 px-4 rounded font-bold transition duration-200 hover:bg-rose-400"
          >
            Home
          </Link>
          <Link
            to="/tambahBarang"
            className="block py-2.5 px-4 rounded font-bold transition duration-200 hover:bg-rose-400"
          >
            Tambah Barang
          </Link>
          <Link
            to="/login"
            className="block py-2.5 px-4 rounded  font-bold transition duration-200 hover:bg-rose-400"
          >
            Logout
          </Link>
        </nav>
      </div>

      <div className="flex-1 p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari produk berdasarkan inisial..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              <img
                src={
                  product.imageUrl !== undefined && product.imageUrl !== null
                    ? product.imageUrl
                    : "https://via.placeholder.com/150"
                } // Fallback image
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-lg font-bold text-center mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-center mb-2">{product.category}</p>
              <p className="text-green-500 text-center font-bold mb-2">
                Rp {product.price}
              </p>
              <p className="text-gray-500 text-center mb-4">
                Stok: {product.stock}
              </p>
              <div className="flex justify-between">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => confirmDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
              <p>Apakah Anda yakin ingin menghapus produk ini?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                  onClick={() => setShowModal(false)}
                >
                  Batal
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={handleDelete}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdukBarang;
