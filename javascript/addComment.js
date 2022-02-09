import { Comment } from "./Comment.js"

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
            commentList.scrollTop = commentList.scrollHeight
        })


}