export class Cart {
  produk = {};
  tambahProduk(kodeProduk: string, kuantitas: number) {
    if (!this.produk[kodeProduk]) {
      this.produk[kodeProduk] = kuantitas ;
    } else {
      this.produk[kodeProduk] = this.produk[kodeProduk] + kuantitas;
    }
  }

  hapusProduk(kodeProduk: string) {
    if (!!this.produk[kodeProduk]) {
      delete this.produk[kodeProduk];
    }
  }

  tampilkanCart() {
    Object.keys(this.produk).forEach(kodeProduk => {
        console.log(`${kodeProduk} (${this.produk[kodeProduk]})`);
    });
  }
}

const keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();
