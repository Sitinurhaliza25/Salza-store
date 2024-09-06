// export default function CardClothes({ clothe, handleDelete, setEditClothe }) {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-1 mb-2 text-center mx-auto">
//         <h1 className="text-xl font-bold mb-2">{clothe.name}</h1>
//         <p className="text-x1 mb-2">{clothe.price}</p>
//         <button
//           onClick={() => {
//             setEditClothe(clothe);
//           }}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 mr-2"
//         >
//           Update
//         </button>
//         <button
//           onClick={() => handleDelete(clothe.id)}
//           className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }
  


import PropTypes from 'prop-types';

function CardClothes({ clothe, handleDelete, setEditClothe }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-2 text-center mx-auto">
      <h1 className="text-xl font-bold mb-2">{clothe.name}</h1>
      <p className="text-lg mb-2">Price: ${clothe.price}</p>
      <button
        onClick={() => setEditClothe(clothe)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 mr-2"
      >
        Update
      </button>
      <button
        onClick={() => handleDelete(clothe.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
      >
        Delete
      </button>
    </div>
  );
}

CardClothes.propTypes = {
  clothe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  setEditClothe: PropTypes.func.isRequired,
};

export default CardClothes;
