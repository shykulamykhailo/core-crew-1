import supabase, { supabaseUrl } from './supabase';

export const loginUser = async (email, password) => {
    return supabase.auth.signInWithPassword({ email, password });
};

export const logoutUser = async () => {
    return supabase.auth.signOut();
};

export const getCurrentUser = async () => {
    const user = supabase.auth.getUser();

    if (!user) {
        console.log('User not authenticated');
        return null;
    }

    return user;
};

export const updateUserName = async (updateData) => {
    const { data, error } = await supabase.auth.updateUser({
        data: { fullName: updateData },
    });
    if (error) throw new Error(error.message);

    return data;
};

export const updateUserPosition = async (updateData) => {
    const { data, error } = await supabase.auth.updateUser({
        data: { position: updateData },
    });
    if (error) throw new Error(error.message);

    return data;
};

export const updateUserAvatar = async (avatarFile) => {
    //2. Upload the avatar iamge
    if (!avatarFile) throw new Error('Avatar file is required');

    try {
        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) throw new Error('Failed to get current user.');

        const fileName = `avatar-${user.id}-${Date.now()}`;

        const { error: storageError } = await supabase.storage
            .from('avatars')
            .upload(fileName, avatarFile);

        if (storageError) throw new Error(storageError.message);
        const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;

        const { data: updatedUser, error: updateError } =
            await supabase.auth.updateUser({
                data: {
                    avatar: avatarUrl,
                },
            });

        if (updateError) throw new Error(updateError.message);
        return updatedUser;
    } catch (error) {
        console.error('Error updating avatar:', error.message);
        throw error;
    }
};
