import { addComment } from './addComment.js'
import { loadComments } from './loadComments.js'


loadComments()

fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        const button = document.querySelector('.button')
        const currentUser = jsonData.currentUser.username
        const commentInput = document.getElementById('comment__input')
        //console.log(currentUser)
        button.addEventListener('click', () => {
            if (commentInput.value != '') { //verifica se a caixa nao esta vazia
                const commentList = document.getElementById('comment__list')
                const user = currentUser
                const score = 0
                const createdAt = 'Right now'
                const content = commentInput.value
                const currentComment = { //cria um objeto de comentario
                    'user': {
                        'username': user
                    },
                    'content': content,
                    'score': score,
                    'createdAt': createdAt,
                    'replies': []
                }
                addComment(currentComment, commentList)
                commentInput.value = ''
            } else {
                //avisa que a caixa de comentario tem que ser preenchida - 
                //essa verificação deveria ser feita no addComment pq é reutilizada no reply
                commentInput.style = 'border: red 2px solid'
            }
            })
    })



