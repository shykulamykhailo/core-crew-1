import supabase from './supabase';

export async function getProducts() {
    let query = supabase.from('products').select('*');

    console.log(query);

    const { data, error } = await query;

    if (error) {
        console.log(error);
        throw new Error('Products could not be a loaded');
    }

    return data;
}

export async function createProductInSupabase(productData) {
    const { data, error } = await supabase
        .from('products')
        .insert([productData]);

    if (error) {
        console.error('Error inserting product:', error);
        throw new Error('Could not add the product');
    }

    return data;
}

export async function getProductQuantity(productId) {
    const { data, error } = await supabase
        .from('products')
        .select('quantity')
        .eq('id', productId)
        .single();

    if (error) {
        console.error(
            `Error fetching quantity for product ${productId}:`,
            error
        );
        throw new Error('Could not fetch product quantity');
    }

    return data.quantity;
}

export async function updateProductQuantity({ count, id }) {
    const { data, error } = await supabase
        .from('products')
        .update({ quantity: count })
        .eq('id', id)
        .select();

    if (error) {
        console.error(error);
        throw new Error('Product could not be updated');
    }

    return data;
}

export async function deleteProduct(id) {
    const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

    if (error) {
        console.error(error);
        throw new Error('Product could not be deleted');
    }

    return data;
}
