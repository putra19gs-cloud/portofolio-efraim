const form = document.getElementById("myForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let nama = document.getElementById("nama").value;

let alamat = document.getElementById("alamat").value;

let tempat = document.getElementById("tempat").value;

let tanggal = document.getElementById("tanggal").value;

let hp = document.getElementById("hp").value;

let email = document.getElementById("email").value;

let agama = document.getElementById("agama").value;

document.getElementById("hasil").innerHTML=`

<h3>Data Berhasil Dikirim</h3>

<p><b>Nama :</b> ${nama}</p>

<p><b>Alamat :</b> ${alamat}</p>

<p><b>Tempat Lahir :</b> ${tempat}</p>

<p><b>Tanggal :</b> ${tanggal}</p>

<p><b>No HP :</b> ${hp}</p>

<p><b>Email :</b> ${email}</p>

<p><b>Agama :</b> ${agama}</p>

`;

form.reset();

});