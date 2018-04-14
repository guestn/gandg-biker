
var u = 'guestn'
var p = 'zl1381newbie'
var a = 'nicholas.guest@gmail.com'
var s = 'subject line'
var b = 'this is a test';
var f = 'nicholas.guest@gmail.com'

var str = 'api_user='+u+'&api_key='+p+'&to='+a+'&toname=Destination&subject='+a+'&text='+b+'&from='+f;


function sendMail() {

  var url = "//api.sendgrid.com/api/blocks.get.json";
  var url = url+str;
  //var xhr = new XMLHttpRequest();


  var request = new XMLHttpRequest();
  if("withCredentials" in request) {
   // Firefox 3.5 and Safari 4
   request.open('POST', url, true);

   request.setRequestHeader('Access-Control-Allow-Origin', '*');

   request.setRequestHeader('Access-Control-Allow-Methods', 'GET');


   request.onreadystatechange = handler;
   request.send();
   //xhr.send(params);

  } else if (XDomainRequest) {
   // IE8
   var xdr = new XDomainRequest();
   xdr.open("post", url);
   xdr.send();
  }


  //xhr.open("POST", url, true);

  //Send the proper header information along with the request
  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
}

var sendButton = document.getElementById('send');
//sendButton.addEventListener('click',sendMail)

function handler() {
  console.log('sent')
}

  //
  //
  // var request = new XMLHttpRequest();
  // if("withCredentials" in request) {
  //  // Firefox 3.5 and Safari 4
  //  request.open('POST', url, true);
  //  request.onreadystatechange = handler;
  //  request.send();
  // } else if (XDomainRequest) {
  //  // IE8
  //  var xdr = new XDomainRequest();
  //  xdr.open("post", url);
  //  xdr.send();
  // }
