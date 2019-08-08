'use strict';

////__ reserve：空欄のフォーム色変え
$(function () {
  const formInput = $('.js-form-input');
  $(formInput).change(function () {
    // console.log('changeされたよ');
    let formValu = $(this).val();
    if (formValu) {
      $(this).css({ 'background-color': '#ffffff' });
    } else {
      $(this).css({ 'background-color': 'lightyellow' });
    }
  });
});

////__ reserve：モーダルウィンドウ処理
$(function () {
  //「席を決定する」ボタン押下されたら、
  //選択されている席Noを取得し、フォームに値をセット
  $('#seat_submit').click(function () {
    let seatValue = $('#select_seat').val();
    $('#seat').val(seatValue).css({ 'background-color': '#ffffff' });
    $('#myModal').modal('hide');
  });
});
