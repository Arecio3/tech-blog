const comment = async (e) => {
    console.log("Clicky click button");
    e.preventDefault();
    const userComment = document.getElementById('commentInput').value;
    const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            comment: userComment || ''
        })
    });
    if (response.ok) {
        console.log("Congratulations, you did it!")
    } else {
        alert('Failed to post comment');
    }
}

document.querySelector('#submitBtn').addEventListener('click', comment);