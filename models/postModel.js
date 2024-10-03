let posts = [];

const PostModel = {
    getAllPosts() {
        return posts;
    },
    getPostById(id) {
        return posts.find(post => post.id === id);
    },
    createPost(title, content) {
        const newPost = { id: Date.now(), title, content };
        posts.push(newPost);
        return newPost;
    }
};

module.exports = PostModel;
