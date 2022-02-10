export const Comment = (currentComment, currentUser) => { //Recebe um objeto contendo os dados do comentario e o usuário logado
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
        `
  const commentItemContainer = document.createElement('div')
  commentItemContainer.classList.add('comment-item-container')
  commentItemContainer.innerHTML =
    `
  <p class="comment-item-text">
      ${currentComment.content}  
  </p> 
  `
  article.append(commentItemContainer)
  const commentItemHeader = document.createElement('div')
  commentItemHeader.classList.add('comment-item-header')
  commentItemHeader.innerHTML = 
  `
  <div class="container-author-date">
              <img class="author-profile" src="images/avatars/image-${currentComment.user.username}.png">
              <h3 class="author">
                ${currentComment.user.username}
              </h3>
              <h4 class="date">
                ${currentComment.createdAt}  
              </h4>
            </div>       
          </div>
  `
  commentItemContainer.insertBefore(commentItemHeader, commentItemContainer.firstChild)
  const reply = ReplyButton(currentComment)
  commentItemHeader.append(reply)

  return article
}

export const ReplyButton = (currentComment) => { //recebe um objeto contendo a mensagem do qual ele faz parte
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
    if (currentComment.replies == undefined) {
      console.log(currentComment)
    } else {
      console.log(currentComment)
    }
  })
  return replyDiv
}