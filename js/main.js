'use strict';

$(function () {
  const formInput = $('.js-form-input');
  $(formInput).change(function () {
    console.log('changeされたよ');
    let formValu = $(this).val();
    if (formValu) {
      $(this).css({ 'background-color': '#ffffff' });
    } else {
      $(this).css({ 'background-color': 'lightyellow' });
    }
  });
});

