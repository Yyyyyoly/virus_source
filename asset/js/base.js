/* eslint-disable */
const app = new Vue({
  methods: {
    comingSoon: function () {
      alert('暂未开放!');
    }
  }
});

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
xhr.setRequestHeader('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));

let now = moment();
let now_date = moment().format('YYYY-MM-DD');
$('.now_date').text(now_date);

$("a[href='/user/commission/withdraw'],a[href='/user/advice']").click(function (e) {
  e.preventDefault();
  alert('暂未开放！')
});

$(".fixed-bottom a[href='/" + window.location.pathname.split('/')[1] + "']").addClass('active');


