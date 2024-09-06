


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





