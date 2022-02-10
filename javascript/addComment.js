import { Comment } from "./Comment.js"
import { ReplyButton } from "./Comment.js"

export const addComment = (buttonId, currentUser) => {//precisa saber se é um comentario novo ou um reply
    const commentInput = document.getElementById('comment__input')
    if (commentInput.value != '') {
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
    const commentView = Comment(currentComment, currentUser)
    if (buttonId == 'addCommentButton') { //é um novo comentario
        const commentReplyBlock = document.createElement('section')
        commentReplyBlock.classList.add('comment-reply-block')
        commentReplyBlock.append(commentView)
        commentList.append(commentReplyBlock)
    } else { //é um reply
        console.log(buttonId)
    }
    commentInput.value = ''
    //Adicionar o botão reply ao ultimo comentario inserido
    // const commentHeaders = document.querySelectorAll('.comment-item-header')
    // const lastCommentHeader = commentHeaders[commentHeaders.length - 1]
    // const replyDiv = ReplyButton(commentHeaders.length - 1)
    // lastCommentHeader.append(replyDiv)
    // const headers = [...document.querySelectorAll('.comment-item-header')]
    // const lastHeader = headers[headers.length-1]
    // lastHeader.appendChild(ReplyButton(currentComment))
    commentList.scrollTop = commentList.scrollHeight
    } else {
        //avisa que a caixa de comentario tem que ser preenchida
    }
}