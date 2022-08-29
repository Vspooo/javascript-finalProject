let url = new URL(location.href)
let id = url.searchParams.get('id')


fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    .then(data=> data.json())
    .then(info =>{
        let div = document.createElement('div')
        div.classList.add('details')
        document.body.appendChild(div)

        function recursion(item){
            for (const itemElement in item) {
                if (typeof item[itemElement] !=='object'){
                    let p = document.createElement('p')
                    p.append(`${itemElement} - ${item[itemElement]}`)
                    div.appendChild(p)
                }else {
                    recursion(item[itemElement])
                }
            }
        }
        recursion(info)

        let btnDiv = document.createElement('div')
        btnDiv.classList.add('btnDiv')
        let btn = document.createElement("button")
        btn.classList.add('btnDetails')
        btn.innerText = 'post of current user'
        btnDiv.appendChild(btn)
        document.body.appendChild(btnDiv)

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(resp => resp.json())
                .then(coments =>{
                    let allDiv = document.createElement('div')
                    allDiv.classList.add('allDiv')
                    document.body.appendChild(allDiv)
                    for (const coment of coments) {
                        let div = document.createElement('div')
                        div.classList.add('divClass')
                        div.innerText = ` ID-${coment.id}, comment : ${coment.title}`
                        let btnPosts = document.createElement('button')
                        btnPosts.classList.add('btnPosts')
                        btnPosts.innerText = 'click'
                        btnPosts.onclick = function (){
                            location.href = `../post-details/post-details.html?id=${coment.id}`
                        }
                        div.append(btnPosts)
                        allDiv.appendChild(div)
                    }
                })
        }

    })