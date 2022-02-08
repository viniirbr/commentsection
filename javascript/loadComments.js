import { Comment } from "./Comment.js";

const commentsList = document.getElementById('comment__list')

export const loadComments = () => {
    fetch("../data.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            var commentsJSON = jsondata['comments']
            for (var comment in commentsJSON) {
                var currentComment = commentsJSON[comment]
                var commentReplyBlock = document.createElement('section')
                commentReplyBlock.classList.add('comment-reply-block')
                const article = Comment(currentComment)
                var replies = currentComment.replies
                console.log(replies)
                
                for (var currentReply in replies) {
                    const reply = Comment(replies[currentReply])
                    console.log(replies[currentReply])
                    reply.classList.add('comment-reply')
                    reply.classList.add('comment-item')
                    reply.classList.add('comment-block')
                    commentReplyBlock.appendChild(reply)
                }


                commentReplyBlock.appendChild(article)
                commentsList.appendChild(commentReplyBlock)
            }
        })
}