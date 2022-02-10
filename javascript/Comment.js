export const Comment = (currentComment = '', currentUser) => { //Recebe um objeto contendo os dados do comentario e o usuário logado
  const article = document.createElement('article')
  if (currentComment == '') { //caixa de edição do comentário
    article.innerHTML = 
    `
    <img id='current-user-pic' src="images/avatars/image-juliusomo.png">
    <textarea id="comment__input" type="text" placeholder="Add a comment..."></textarea>
    <button class="button" id='addCommentButton'>SEND</button>
    `
    article.classList.add('comment-block')
    article.classList.add('comment-reply')
    article.id = 'comment__reply'

  } else {
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
    const reply = ReplyButton(currentComment, currentUser, commentItemContainer)
    commentItemHeader.append(reply)
  }

  return article
}

export const ReplyButton = (currentComment, currentUser, node) => { //recebe um objeto contendo a mensagem do qual ele faz parte
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
    const commentReplyBlock = node.parentNode.parentNode
    const article = Comment('', currentUser)
    console.log(article)
    commentReplyBlock.append(article)
  })
  return replyDiv
}

const sendButton = (currentComment, currentUser) => {
  const button = document.createElement('button')
  button.classList.add('button')
  button.addEventListener('click', (currentComment) => {
    
  })
}