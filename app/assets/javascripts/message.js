$(function(){
function buildHTML(message){
  if (message.image){
    let html=`<div class="main-chat__center__box">
                <div class="main-chat__center__box__info">
                  <div class="main-chat__center__box__info__user">
                    ${message.user_name}
                  </div>
                  <div class="main-chat__center__box__info__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="main-chat__center__box__message">
                  <p class="main-chat__center__box__message__content">
                    ${message.text}
                  </p>
                <img class="main-chat__center__box__message__image" src="${message.image}">
                </div>
              </div>`
              return html;
  } else{
    let html=`<div class="main-chat__center__box">
                <div class="main-chat__center__box__info">
                  <div class="main-chat__center__box__info__user">
                    ${message.user_name}
                  </div>
                  <div class="main-chat__center__box__info__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="main-chat__center__box__message">
                  <p class="main-chat__center__box__message__content">
                    ${message.text}
                  </p>
                </div>
              </div>`
              return html;
  };
}

  $('.main-chat__bottom__form').on('submit', function(e){
    e.preventDefault();
    let formData =new FormData(this)
    let url =$(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      let html=buildHTML(data);
      console.log(html);
      $('.main-chat__center').append(html);
      $('form')[0].reset();
    })
  });
});