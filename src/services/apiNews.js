import supabase from './supabase';

export const addPost = async (title, content, authorId, authorName) => {
    const { data, error } = await supabase
        .from('posts')
        .insert([
            { title, content, author_id: authorId, author_name: authorName },
        ]);

    if (error) {
        console.error('Error adding post', error.message);
        return null;
    }

    return data?.[0] || null;
};

// export const getPosts = async () => {
//     const { data, error } = await supabase
//         .from('posts')
//         .select('*')
//         .order('created_at', { ascending: false });

//     if (error) {
//         console.error('Error get post', error.message);
//         return [];
//     }

//     return data;
// };

export const addComment = async (postId, content, authorId, authorName) => {
    const { data, error } = await supabase
        .from('comments')
        .insert([
            {
                post_id: postId,
                content,
                author_id: authorId,
                author_name: authorName,
            },
        ])
        .select('*');

    if (error) {
        console.error('Error adding comment:', error.message);
        return null;
    }

    return { postId, comment: data[0] };
};

// export const getComments = async (postId) => {
//     const { data, error } = await supabase
//         .from('comments')
//         .select('*')
//         .eq('post_id', postId)
//         .order('created_at', { ascending: true });

//     if (error) {
//         console.error('Error fetching comments:', error.message);
//         return [];
//     }

//     return data;
// };

export const fetchPostsWithComments = async () => {
    const { data, error } = await supabase
        .from('posts')
        .select('*, comments(*)');

    if (error) throw new Error(error.message);
    return data;
};
