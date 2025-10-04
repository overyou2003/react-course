const dataCon = document.getElementById('data')


console.log(data)


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            console.log(post)
            const postElement = document.createElement('p')
            postElement.textContent = `
                Post ID ${post.id} >>> Title ${post.title}
            `;

            dataCon.appendChild(postElement)
        })
    })

    .catch(error => {
        console.log('error fetching data' , error)
    })