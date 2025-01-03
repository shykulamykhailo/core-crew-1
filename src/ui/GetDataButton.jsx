import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsOperations/productsData/productsSlice';
import Button from './Button';

function GetDataButton() {
    const dispatch = useDispatch();

    const { isLoading, error } = useSelector((store) => store.products);

    const handleClick = async () => {
        dispatch(fetchProducts());
    };

    return (
        <div>
            <Button onClick={handleClick}>
                {isLoading ? 'Loading...' : 'Get data from database'}
            </Button>
        </div>
    );
}

export default GetDataButton;
