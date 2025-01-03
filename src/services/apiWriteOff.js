import supabase from './supabase';

export const insetWriteOffListInSupabse = async (items) => {
    if (items.length === 0) {
        return { error: 'No items to submit.' };
    }

    const { data, error } = await supabase.from('write-off-lists').insert([
        {
            products_list: items,
        },
    ]);

    if (error) {
        console.error('Error inserting write-off data:', error);
    } else {
        console.log('Write-off data inserted succesfully', data);
    }

    return { data, error };
};
