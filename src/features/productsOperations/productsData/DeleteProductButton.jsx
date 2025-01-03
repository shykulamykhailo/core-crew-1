import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../services/apiProducts';
import { fetchProducts } from './productsSlice';

function DeleteProductButton({ productId }) {
    const dispatch = useDispatch();

    const { items, isLoading, error } = useSelector((store) => store.products);

    const handleDelete = async () => {
        const confirmDelete = window.confirm('are yous sure?');
        if (!confirmDelete) return;

        try {
            await deleteProduct(productId);
            dispatch(fetchProducts());
            alert('Product deleted succesfully!');
        } catch (error) {
            console.error('Error deleting product: ', error);
            alert('Failer delete product');
        }
    };

    return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteProductButton;
