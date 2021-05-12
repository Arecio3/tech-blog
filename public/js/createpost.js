const newPost = async (e) => {
    console.log("Hey there");
    e.preventDefault();
    const postTile = document.getElementById('titleInput').value;
    const blogPost = document.getElementById('postInput').value;

    if (postTile && blogPost) {
        const response = await fetch('/newpost', {
            method: 'POST',
            body: JSON.stringify({ postTile, blogPost }),
            headers: { 'Content-type': 'application/json' }
        });
        console.log('Please hit the route!!')
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('Failed to post a blog')
        }
    }
};

document.querySelector('#postBtn').addEventListener('click', newPost);