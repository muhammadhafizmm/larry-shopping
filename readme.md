# How to run 🏃💨
Already create a unit test and feature for cart. You need to install node before start, you check the link [here](https://www.google.com/search?q=how+to+install+node+like+a+pro&rlz=1C5CHFA_enID994ID994&oq=how+to+install+node+like+a+pro&aqs=chrome..69i57j33i160l4j33i22i29i30l4j33i15i22i29i30.7675j0j7&sourceid=chrome&ie=UTF-8).

Install all package.json to run the code easily.
```sh
npm install
```
after installing npm, you can start the code with
```sh
npm start
```
You will see the result of my code from the testing scenario. I also put unit-test for cart (except `tampilkanCart()`) on `shoppingCart.test.ts` so that you can run the coverage report with
```sh
npm run test
```
✨Happy coding ✨

# Data Structure - Shopping Cart #

Buat sebuah `Software Library` Shopping Cart yang harus memilik fungsi:

1. `void tambahProduk(string kodeProduk, int kuantitas)`
 - Menambahkan produk dengan kuantitas yang ditentukan.
 - Apabila produk sudah ada di dalam Cart, tambahkan kuantitasnya.

2. `void hapusProduk(string kodeProduk)`
 - Menghapus produk dari Cart.

3. `void tampilkanCart()`
 - Menampilkan isi Cart dengan format `{kodeProduk}` (`{kuantitas}`)

Buatlah class `Cart` berikut feature code dan unit testnya.

---
Sebagai contoh gunakan skenario di bawah:

```
Cart keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();
```

Output:
```
Pisang Hijau (2)
Apel Merah (7)
```
