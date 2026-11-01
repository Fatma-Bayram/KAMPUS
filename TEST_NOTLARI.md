
# Test Notları

**Proje:** Kampüs Yaşamı  
**Ders:** BPR201 - İnternet Tabanlı Programlama

## Test 1: Etkinlik başlığı arama

- **Girdi/İşlem:** Arama alanına `Konser` yazıldı.
- **Beklenen Sonuç:** Yalnızca eşleşen etkinlik kartı görünür ve sayaç doğru etkinlik sayısını gösterir.
- **Gerçekleşen Sonuç:** Arama sonucuyla eşleşen etkinlik kartı görüntülendi ve sayaç doğru sayıyı gösterdi.
- **Durum:** Geçti

## Test 2: Büyük/küçük harf kontrolü

- **Girdi/İşlem:** Arama alanına sırasıyla `konser` ve `KONSER` yazıldı.
- **Beklenen Sonuç:** Büyük/küçük harf farklılığı arama sonucunu değiştirmez.
- **Gerçekleşen Sonuç:** Her iki aramada da aynı etkinlik kartı görüntülendi.
- **Durum:** Geçti

## Test 3: Eşleşmeyen ifade

- **Girdi/İşlem:** Arama alanına `xyz123` yazıldı.
- **Beklenen Sonuç:** Sayaç 0 olur ve sonuç bulunamadığını belirten mesaj görünür.
- **Gerçekleşen Sonuç:** Hiçbir etkinlik kartı görüntülenmedi, sayaç 0 oldu ve sonuç bulunamadı mesajı gösterildi.
- **Durum:** Geçti

## Test 4: Boşluk ve Temizle düğmesi

- **Girdi/İşlem:** Arama alanına yalnızca boşluk yazıldı ve ardından Temizle düğmesine basıldı.
- **Beklenen Sonuç:** Arama boş kabul edilir ve tüm etkinlikler yeniden görüntülenir.
- **Gerçekleşen Sonuç:** Her iki işlemden sonra tüm etkinlik kartları görüntülendi.
- **Durum:** Geçti

## Test 5: Sayfa menü bağlantıları

- **Girdi/İşlem:** Ana Sayfa, Etkinlikler ve Hakkımızda menü bağlantıları kontrol edildi.
- **Beklenen Sonuç:** Her bağlantı ilgili sayfayı açar.
- **Gerçekleşen Sonuç:** Üç sayfanın menü bağlantıları doğru sayfalara yönlendirdi.
- **Durum:** Geçti

## Test 6: Mobil görünüm ve klavye erişilebilirliği

- **Girdi/İşlem:** Sayfa 390 px genişlikte görüntülendi ve Tab tuşuyla sayfadaki etkileşimli öğeler kontrol edildi.
- **Beklenen Sonuç:** Yatay taşma oluşmaz; arama alanına ve Temizle düğmesine klavyeyle erişilebilir.
- **Gerçekleşen Sonuç:** Sayfada yatay taşma oluşmadı ve arama alanı ile Temizle düğmesine Tab tuşuyla erişildi.
- **Durum:** Geçti

## Genel Sonuç

Altı test senaryosu da başarılı olarak sonuçlandı.
