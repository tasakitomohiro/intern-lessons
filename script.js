$(document).ready(function() {
  $('#umi-image').click(function() {
    $('#umi-modal').modal('show');
  });
  $('#syuri-image').click(function() {
    $('#syuri-modal').modal('show');
  });
  $('#hedo-image').click(function() {
    $('#hedo-modal').modal('show');
  });
  $('#kourijima-image').click(function() {
    $('#kourijima-modal').modal('show');
  });

  var corsOveride = "https://cors-anywhere.herokuapp.com/";
  var coreUrl = "https://api.darksky.net/forecast/";
  var apiKey = "5d37496152fc94336f98c7caa52ab5e1";/*gitに挙げる前に要変更*/
  var lat = 26
  var lon = 127
  var excluded = "exclude=Minutely,Hourly,Daily,Alerts,Flags"

  //それで+を使ってわけた部分を合併する
  var url = corsOveride + coreUrl + apiKey + '/' + lat + ',' + lon + '?' + excluded;

  //そこから.getJsonではurlだけを渡せばいい
  $.getJson(url, function (data) {
      console.log(data);
  });
});
