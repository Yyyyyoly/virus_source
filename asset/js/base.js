/* eslint-disable */
const app = new Vue({});

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

let now = moment();
let now_date = moment().format('YYYY-MM-DD');
$('#now_date').text(now_date);

