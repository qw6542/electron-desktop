async function getToken(){

  const param = {
     odsCode:  $('#odsCode-input').val(),
     username:  $('#username-input').val(),
     email:  $('#email-input').val(),
  }

  $('#email-input').text('FBBBB');
  const res = await API.invoke('getToken', param);
  $('#token-output').text(res);

  }

  