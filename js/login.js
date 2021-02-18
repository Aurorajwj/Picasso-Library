const cards = document.querySelectorAll('.card');

/* View Controller
                                                  -----------------------------------------*/
const btns = document.querySelectorAll('.js-btn');
btns.forEach(btn => {
  btn.addEventListener('click', on_btn_click, true);
  btn.addEventListener('touch', on_btn_click, true);
});

function on_btn_click(e) {
  const nextID = e.currentTarget.getAttribute('data-target');
  //console.log(nextID);
  const next = document.getElementById(nextID);
  console.log(next);
  if (!next) return;
  bg_change(nextID);
  view_change(next);
  return false;
}

/* Add class to the body */
function bg_change(next) {
  document.body.className = '';
  document.body.classList.add('is-' + next);
}

/* Add class to a card */
function view_change(next) {
  cards.forEach(card => {card.classList.remove('is-show');});
  next.classList.add('is-show');
}

function bg_change(next) {
  document.body.className = '';
  document.body.classList.add('is-' + next);
}
function display_change(){
  var notice = document.getElementById("notice").innerText;
  if (notice=="用户名/手机号/邮箱错误"||notice=="密码错误"){
      var nextId2 = "login";
      var next2 = document.getElementById(nextID2);
      bg_change(nextID2);
      view_change(next2);
  }else if(notice=="注册失败"){
      var nextId2 = "register";
      var next2 = document.getElementById(nextID2);
      bg_change(nextID2);
      view_change(next2);
  }else if(notice=="管理员登陆失败"){
      var nextId2 = "admin_login";
      var next2 = document.getElementById(nextID2);
      bg_change(nextID2);
      view_change(next2);
  }
}
 
 //判断是否敲击了Enter键 
// $(document).keyup(function(event){ 
//     if(event.keyCode ==13){ 
//       $("#login").trigger("click"); 
//     } 
// });
