import { Comment } from "./Comment.js"

export const addComment = (currentComment, node) => {//recebe os dados da mensagem e o node onde será publicada

    if (node == document.getElementById('comment__list')) {
        const commentReplyBlock = document.createElement('section')
        commentReplyBlock.classList.add('comment-reply-block')
        const commentView = Comment(currentComment, currentComment.user)
        commentReplyBlock.append(commentView)
        node.append(commentReplyBlock)
        node.scrollTop = node.scrollHeight
    } else {
        const commentView = Comment(currentComment, currentComment.user)
        commentView.classList.add('comment-reply')
        node.parentNode.append(commentView) //adiciona reply
        const children = node.parentNode.children
        children[children.length-2].remove() //remove a caixa de edição
    }

}