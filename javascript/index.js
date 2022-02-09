import { addComment }  from './addComment.js'
import { loadComments } from './loadComments.js'

const button = document.querySelector('.button')
loadComments()
button.addEventListener('click', addComment)
