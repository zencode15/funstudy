async function loadPosts() {
    const response = await fetch('/api/posts');
    const posts = await response.json();
    const app = document.getElementById('app');

    app.innerHTML = posts.map(post => `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadPosts);
