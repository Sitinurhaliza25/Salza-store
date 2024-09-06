import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate,Link } from 'react-router-dom';

const EditBarang = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        imageUrl: ''
    });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                // Optional: Set an error state to display an error message to the user
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };
    const handleCancel = () => {
        navigate('/produkBarang'); // Redirects to the product list
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/products/${id}`, product);
            navigate('/'); // Redirect to the product list after successful update
        } catch (error) {
            console.error('Error updating product:', error);
            // Optional: Set an error state to display an error message to the user
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-rose-200 flex">
            <div className="w-64  bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-900">
                {/* <h1 className="text-2xl font-bold mb-4">Edit Product</h1> */}
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
                    <Link to="/tambahBarang" className="block py-2.5 px-4 rounded font-bold transition  duration-200 hover:bg-rose-400">
                        Tambah Barang
                    </Link>
                    <Link to="/login" className="block py-2.5 px-4 rounded font-bold transition  duration-200 hover:bg-rose-400">
                        Logout
                    </Link>
                </nav>
                </div>
                <div className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold">{id ? 'Edit Barang' : 'Tambah Barang'}</h1>

                </header>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                 
                    <div className="mb-4">
                        <label className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={product.imageUrl}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex ">
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
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBarang;
