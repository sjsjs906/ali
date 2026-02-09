function hitungpenjumlahan(){
  var angkapertama=document.getElementById('angkapertama').value;
  var angkakedua=document.getElementById('angkakedua').value;
  var hasil=parseInt(angkapertama)+parseInt(angkakedua);
  document.getElementById(hasil).innerHTML="hasil penjumlahan:"+hasil;
}