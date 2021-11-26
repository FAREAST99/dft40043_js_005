function funct () {
    let nama = prompt ('Siapa nama?');
    document.getElementById('tajuk').innerText = 'Selamat Datang ' + nama;
   }
   function mengesahkan () {
    let mengesahkan = confirm ('Adakah anda pasti?');
    if (mengesahkan) {
    return true;
    } else {
    alert ('Arahan simpan dibatalkan');
    return false;
    }
   }
   function focus () {
    document.getElementById('mesej').innerText = 'Sila klik butang Simpan';
   }
   function blur() {
    document.getElementById('mesej').innerText = 'Sila nyatakan keperluan anda';
   }