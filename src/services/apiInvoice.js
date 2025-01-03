import supabase from './supabase';

export const insetInvoiceInSupabse = async (items) => {
    if (items.length === 0) {
        return { error: 'No items to submit.' };
    }

    const { data, error } = await supabase.from('invoices').insert([
        {
            products_list: items,
        },
    ]);

    if (error) {
        console.error('Error inserting order data:', error);
    } else {
        console.log('Order data inserted succesfully', data);
    }

    return { data, error };
};
