import toast from 'react-hot-toast';
import supabase from './supabase';

export async function fetchWorkSchedule(month) {
    const { data, error } = await supabase
        .from('work_schedule')
        .select('*')
        .eq('month', month)
        .order('user_id', { ascending: true });

    if (error) throw error;
    return data;
}

export async function updateWorkSchedule(updatedSchedule) {
    try {
        const promises = updatedSchedule.map((item) =>
            supabase
                .from('work_schedule')
                .update({ schedule: item.schedule })
                .eq('user_id', item.user_id)
                .eq('id', item.id)
        );

        const results = await Promise.all(promises);

        toast.success('Schedule updated!');

        results.forEach(({ data, error }, index) => {
            if (error) {
                console.error(`err updating`, error);
            } else {
                console.log(`updated successfully`, data);
            }
        });
    } catch (error) {
        toast.error('Error in updateWorkSchedule', error);
    }
}
