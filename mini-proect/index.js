fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users =>{
        for (const user of users) {
            let div = document.createElement('div')
            div.innerText = `${user.id} - ${user.name}`
            div.classList.add('users')
            let btn = document.createElement('button')
            btn.classList.add('btn')
            btn.innerText = 'More info'
            btn.onclick = function (){
                location.href = `user-details.html?id=${user.id}`
            }
            div.appendChild(btn)
            document.body.appendChild(div)
        }
    })
