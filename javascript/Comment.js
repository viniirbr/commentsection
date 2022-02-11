import { addComment } from "./addComment.js"

export const Comment = (currentComment = '', currentUser) => { //Recebe um objeto contendo os dados do comentario e o usuário logado
  const article = document.createElement('article')
  if (currentComment == '') { //caixa de edição do comentário
    article.innerHTML =
      `
    <img id='current-user-pic' src="images/avatars/image-juliusomo.png">
    `
    article.classList.add('comment-block')
    article.classList.add('comment-reply')
    article.id = 'comment__reply'

    const textArea = document.createElement('textarea')
    textArea.id = "comment__input"
    textArea.placeholder = "Add a comment..."
    article.append(textArea)

    const sendButton = SendButton(textArea, currentUser)
    sendButton.classList.add('button')
    article.append(sendButton)

  } else { //é um comentario feito

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

    // if (currentComment.user.username == currentUser.username) {
    //   const deleteButtom
    // }
    commentItemHeader.append(reply)
  }

  return article
}

export const ReplyButton = (currentComment, currentUser, node) => { //recebe um objeto contendo a mensagem do qual ele faz parte
  var isReplying = false
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
    commentReplyBlock.append(article)
  })
  return replyDiv
}

const SendButton = (textAreaElement, currentUser) => {
  const button = document.createElement('button')
  button.textContent = 'SEND'
  button.classList.add('button')
  button.addEventListener('click', () => {
    const currentComment = {
      'user': {
        "image": {
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        'username': currentUser.username
      },
      'content': textAreaElement.value,
      'score': 0,
      'createdAt': "Right now",
      'replies': []
    }
    addComment(currentComment, textAreaElement.parentNode)
  })
  return button
}