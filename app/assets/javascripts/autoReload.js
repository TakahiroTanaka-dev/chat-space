$(function(){
  function buildHTML(message){
    if (message.image){
      let html=`<div class="main-chat__center__box" data-message-id=${message.id}>
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
      let html=`<div class="main-chat__center__box" data-message-id=${message.id}>
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
      let reloadMessages=function(){
        let last_message_id = $('.main-chat__center__box:last').data("message-id");
        console.log(last_message_id);
        $.ajax({
          // ここのurl何でこんな短くできるの
          url: 'api/messages',
          type: 'GET',
          dataType: 'json',
          data: {id: last_message_id}
          
        })
        .done(function(messages){
  
          // このifの処理意味不明すぎるやろforeachじゃダメなの？
          if (messages.length !==0 ){
            let insertHTML='';
            // IDがあるからeach使って値とってる？
            $.each(messages, function(i,message){
              //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
              insertHTML += buildHTML(message)
            });
            $('.main-chat__center').append(insertHTML);
            $('.main-chat__center').animate({scrollTop: $('.main-chat__center')[0].scrollHeight});
          }
        })
        .fail(function(){
          alert('error');
        });
  
      }; 
      setInterval(reloadMessages, 7000);
  });