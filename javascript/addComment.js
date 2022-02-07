const commentInput = document.getElementById('comment__input')
const commentList = document.getElementById('comment__list')

export const addComment = () => {
    var comment = document.createElement('p')
    comment.textContent = commentInput.value
    commentList.appendChild(comment)
    //commentInput.value = ''
}