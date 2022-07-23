import { Cart } from ".";

describe('testing cart', () => {
    let keranjang:Cart ;
    beforeEach(() => {
        keranjang = new Cart;
    })
    test('create empty cart', () => {
        expect(keranjang.produk).toStrictEqual({})
    })
    test('tambah cart with product not in cart', () => {
        keranjang.tambahProduk("test", 1)
        expect(keranjang.produk["test"]).toBe(1)
    })
    test('tambah cart with product in cart', () => {
        keranjang.tambahProduk("test", 1)
        keranjang.tambahProduk("test", 2)
        keranjang.tambahProduk("test", 5)
        expect(keranjang.produk["test"]).toBe(8)
    })
    test('hapus product cart', () => {
        keranjang.tambahProduk("test", 1)
        expect(keranjang.produk["test"]).toBe(1)
        keranjang.hapusProduk("test")
        expect(keranjang.produk["test"]).toBeUndefined()
    })
})