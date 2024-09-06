// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function TambahBarang() {
//     const [namaBarang, setNamaBarang] = useState('');
//     const [hargaBarang, setHargaBarang] = useState('');
//     const [kodeBarang, setKodeBarang] = useState('');
//     const [stokBarang, setStokBarang] = useState('');
//     const [image, setImage] = useState(null);
//     const navigate = useNavigate();

// // In TambahBarang component
// const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('nama_barang', namaBarang);
//     formData.append('harga', hargaBarang);
//     formData.append('kode', kodeBarang);
//     formData.append('stok', stokBarang);
//     formData.append('image', image);

//     try {
//         const response = await fetch('/api/barang', {
//             method: 'POST',
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//             body: formData,
//         });

//         if (!response.ok) {
//             throw new Error('Failed to add item');
//         }

//         const data = await response.json();
//         console.log('Item added:', data);
//         navigate('/produkBarang'); // Redirect after successful addition
//     } catch (error) {
//         console.error('Error adding item:', error);
//     }
// };
//     return (
//         <div className="min-h-screen bg-gray-100 flex">
//             {/* Sidebar */}
//             <div className="w-64 bg-blue-900 text-white">
//                 <div className="p-6 text-2xl font-bold">
//                     Tambah Barang
//                 </div>
//                 <nav className="mt-6">
//                     <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800">
//                         Home
//                     </Link>
//                     <Link to="/produkBarang" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800">
//                         Produk Barang
//                     </Link>
//                     <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800">
//                         Settings
//                     </Link>
//                 </nav>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1  ">
//                 <header className="flex justify-between items-center">
//                     <h1 className="text-3xl font-semibold">Tambah Barang</h1>
//                     <Link to="/login" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800">
//                     <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
//                         Logout
//                     </button>
//                     </Link>
//                 </header>

//                 {/* Content Area */}
//                 <div >
//                     <form onSubmit={handleSubmit} className="bg-white p-9 rounded-lg shadow-md">
//                         {/* Input Fields */}
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">Nama Barang</label>
//                             <input type="text" value={namaBarang} onChange={(e) => setNamaBarang(e.target.value)}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan nama barang" required />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">Harga Barang</label>
//                             <input type="number" value={hargaBarang} onChange={(e) => setHargaBarang(e.target.value)}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan harga barang" required />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">Kode Barang</label>
//                             <input type="text" value={kodeBarang} onChange={(e) => setKodeBarang(e.target.value)}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan kode barang" required />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">Stok Barang</label>
//                             <input type="number" value={stokBarang} onChange={(e) => setStokBarang(e.target.value)}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Masukkan stok barang" required />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">Foto Barang</label>
//                             <input type="file" onChange={(e) => setImage(e.target.files[0])}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
//                         </div>
//                         <div className="flex items-center justify-between">
                       
//                             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Tambah Barang</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';

//  export default function ProductTambahBarang ()  {
//     const [product, setProduct] = useState({
//         name: '',
//         description: '',
//         price: '',
//         category: '',
//         stock: '',
//         imageUrl: '',
//     });

//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (id) {
//             fetchProduct(id);
//         }
//     }, [id]);

//     const fetchProduct = async (id) => {
//         try {
//             const response = await axios.get(`http://localhost:8080/api/products/${id}`);
//             setProduct(response.data);
//         } catch (error) {
//             console.error('Error fetching product:', error);
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setProduct({ ...product, [name]: value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             if (id) {
//                 await axios.put(`http://localhost:8080/api/products/${id}, product`);
//             } else {
//                 await axios.post('http://localhost:8080/api/products', product);
//             }
//             navigate('/');
//         } catch (error) {
//             console.error('Error saving product:', error);
//         }
//     };

//     // Function to handle cancel button click
//     const handleCancel = () => {
//         navigate('/editBarang'); // Redirects to the home page
//     };

//     return (
//         <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
//             <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Produk' : 'Tambah Produk'}</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Nama:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 {/* <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Deskripsi:</label>
//                     <textarea
//                         name="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded"
//                     ></textarea>
//                 </div> */}
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Harga:</label>
//                     <input
//                         type="number"
//                         name="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Kategori:</label>
//                     <input
//                         type="text"
//                         name="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">Stok:</label>
//                     <input
//                         type="number"
//                         name="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">URL Gambar:</label>
//                     <input
//                         type="text"
//                         name="imageUrl"
//                         value={product.imageUrl}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="flex justify-end">
//                     <button
//                         type="button"
//                         onClick={handleCancel}
//                         className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
//                     >
//                         Batal
//                     </button>
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                     >
//                         {id ? 'Update' : 'Tambah'}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };


import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams ,Link} from 'react-router-dom';

export default function ProductTambahBarang() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        imageUrl: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchProduct(id);
        }
    }, [id]);

    const fetchProduct = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (id) {
                await axios.put(`http://localhost:8080/api/products/${id}`, product);
            } else {
                await axios.post('http://localhost:8080/api/products', product);
            }
            navigate('/produkBarang'); // Redirect after successful addition/update
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    // Function to handle cancel button click
    const handleCancel = () => {
        navigate('/produkBarang'); // Redirects to the product list
    };

    return (
        <div className="min-h-screen bg-rose-200 flex">
            {/* Sidebar */}
            <div className="w-64  bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900">
                <div className="p-7 text-2xl font-bold">
                    {id ? 'Edit Barang' : 'Tambah Barang'}
                </div>
                <nav className="mt-6 ">
                    <Link to="/" className="block py-2.5 px-4 rounded  font-bold transition duration-200 hover:bg-rose-400">
                        Home
                    </Link>
                    <Link to="/produkBarang" className="block py-2.5 px-4 rounded font-bold transition duration-200 hover:bg-rose-400">
                        Produk Barang
                    </Link>
                    <Link to="/login" className="block py-2.5 px-4 rounded font-bold transition  duration-200 hover:bg-rose-400">
                        Logout
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold">{id ? 'Edit Barang' : 'Tambah Barang'}</h1>

                </header>

                {/* Content Area */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit}>
                        {/* Input Fields */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Nama Barang</label>
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Masukkan nama barang"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Harga Barang</label>
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Masukkan harga barang"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Kategori Barang</label>
                            <input
                                type="text"
                                name="category"
                                value={product.category}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Masukkan kategori barang"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Stok Barang</label>
                            <input
                                type="number"
                                name="stock"
                                value={product.stock}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Masukkan stok barang"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">URL Gambar</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={product.imageUrl}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Masukkan URL gambar barang"
                                required
                            />
                        </div>
                        <div className="flex items-center ">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                {id ? 'Update Barang' : 'Tambah Barang'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}





