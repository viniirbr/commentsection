import { Comment } from "./Comment.js"
import { ReplyButton } from "./Comment.js"

const commentInput = document.getElementById('comment__input')
const commentList = document.getElementById('comment__list')

export const addComment = () => {
    fetch("../data.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            const user = jsondata.currentUser.username
            const score = 0
            const createdAt = 'Right now'
            const content = commentInput.value
            const currentComment = {
                'user': {
                    'username':user
                },
                'content':content,
                'score':score,
                'createdAt':createdAt,
                'replies':[]
            }
            const commentView = Comment(currentComment)
            const commentReplyBlock = document.createElement('section')
            commentReplyBlock.classList.add('comment-reply-block')
            commentReplyBlock.append(commentView)
            commentList.append(commentReplyBlock)
            commentInput.value = ''
            //Adicionar o botão reply ao ultimo comentario inserido
            const commentHeaders = document.querySelectorAll('.comment-item-header')
            const lastCommentHeader = commentHeaders[commentHeaders.length-1]
            const replyDiv = ReplyButton(commentHeaders.length-1)
            lastCommentHeader.append(replyDiv)
            
            commentList.scrollTop = commentList.scrollHeight
        })


}