import { addComment }  from './addComment.js'
import { loadComments } from './loadComments.js'

fetch('../data.json')
.then(response => {
    return response.json()
})
.then (jsonData => {
    const button = document.querySelector('.button')
    const currentUser = jsonData.currentUser.username
    //console.log(currentUser)
    button.addEventListener('click', () => {
        addComment(button.id, currentUser)})
})

loadComments()

