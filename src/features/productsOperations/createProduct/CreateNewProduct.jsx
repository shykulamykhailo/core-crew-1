import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { createProductInSupabase } from '../../../services/apiProducts';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../productsData/productsSlice';
import Button from '../../../ui/Button';
import toast from 'react-hot-toast';

const FormContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 40rem;
    padding: 2rem;
    justify-content: center;
    border: solid 1px var(--color-grey-100);
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

function CreateNewProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        const { id, ...dataWithoutId } = data;

        try {
            await createProductInSupabase(dataWithoutId);
            dispatch(fetchProducts());
            toast.success('Product successfully created');
            reset();
        } catch (error) {
            console.error('Error adding product');
            toast.error('Error created product');
        }
    };

    return (
        <FormContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('productName')}
                    placeholder="Product Name"
                    required
                />
                <input
                    {...register('category')}
                    placeholder="Category"
                    required
                />
                <input
                    type="number"
                    {...register('quantity')}
                    placeholder="Quantity"
                    required
                />
                <input {...register('unit')} placeholder="Unit" required />
                <input
                    type="number"
                    {...register('price_per_unit')}
                    placeholder="Price per Unit"
                    required
                />
                <input
                    {...register('supplier')}
                    placeholder="Supplier"
                    required
                />
                <input type="date" {...register('date_created')} required />
                <input
                    {...register('added_by')}
                    placeholder="Added By"
                    required
                />
                <select {...register('status')} required>
                    <option value="is used">Is Used</option>
                    <option value="not used">not used</option>
                </select>
                <textarea {...register('notes')} placeholder="Notes" />

                <Button type="submit">Add Product</Button>
            </StyledForm>
        </FormContainer>
    );
}

export default CreateNewProduct;
