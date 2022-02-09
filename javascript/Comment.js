export const Comment = (currentComment) => {
    var currentUser = currentComment['user']
    const article = document.createElement('article')
        article.classList.add('comment-item')
        article.classList.add('comment-block')
        article.innerHTML = 
        `
        <div class="like-count-container">
          <div class="like-control-component">
            <img src="images/icon-plus.svg" class="add-remove-like">
            <p class="like-count">${currentComment.score}</p>
            <img src="images/icon-minus.svg" class="add-remove-like">
          </div>
        </div>
        <div class="comment-item-container">
          <div class="comment-item-header">
            <div class="container-author-date">
              <img class="author-profile" src="images/avatars/image-${currentUser.username}.png">
              <h3 class="author">
                ${currentUser.username}
              </h3>
              <h4 class="date">
                ${currentComment.createdAt}  
              </h4>
            </div>
            
          </div>
          <p class="comment-item-text">
            ${currentComment.content}  
          </p>  
        </div>
        `
        return article
}

export const ReplyButton = (id) => {
    const replyDiv = document.createElement('div')
    replyDiv.classList.add("comment-item-header-reply")
    
    const replyImg = document.createElement('img')
    replyImg.classList.add('reply-icon')
    replyImg.src = '../images/icon-reply.svg'

    const replyTitle = document.createElement('p')
    replyTitle.classList.add('reply-text')
    replyTitle.textContent = 'Reply'
    
    replyDiv.append(replyImg)
    replyDiv.append(replyTitle)

    replyDiv.addEventListener('click', () => {
        console.log(id)
    })
    return replyDiv
}