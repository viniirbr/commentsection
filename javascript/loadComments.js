import { Comment } from "./Comment.js";
import { ReplyButton } from "./Comment.js";

const commentsList = document.getElementById('comment__list')

export const loadComments = () => {
    fetch("../data.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => {
            var commentsJSON = jsondata['comments']
            var currentUser = jsondata.currentUser
            for (var comment in commentsJSON) {
                var currentComment = commentsJSON[comment]
                var commentReplyBlock = document.createElement('section')
                commentReplyBlock.classList.add('comment-reply-block')
                const article = Comment(currentComment, currentUser)
                var replies = currentComment.replies
                commentReplyBlock.appendChild(article)
                
                for (var currentReply in replies) {
                    const reply = Comment(replies[currentReply], currentUser)
                    reply.classList.add('comment-reply')
                    reply.classList.add('comment-item')
                    reply.classList.add('comment-block')
                    commentReplyBlock.appendChild(reply)
                }
                commentsList.appendChild(commentReplyBlock)
            }
            //   const commentHeader = document.querySelectorAll('.comment-item-header')
            //   commentHeader.forEach((header,id) => {
            //      const replyDiv = ReplyButton(currentComment)
            //      header.append(replyDiv)
            //   })
            // const commentReplyBlocks = document.querySelectorAll('.comment-reply-block')
            // commentReplyBlocks.forEach((block) => {
            //     //console.log(block.childNodes.)
            // })

        })
}