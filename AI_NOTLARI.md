
# AI Kullanım Notları

## 1. Kullanılan Yapay Zekâ Araçları

- Araç: GitHub Copilot
- Kullanım amacı: Web sitesi geliştirme, JavaScript arama özelliği, kod inceleme ve kod açıklamaları.

## 2. Kullanılan Promptlar

### Prompt 1: Arama özelliğini planlama

HTML ve JavaScript dosyalarını inceleyerek mevcut tasarımı koruyan etkinlik başlığı arama özelliği için plan önerilmesi istendi. Kodun değiştirilmemesi özellikle belirtildi.

**Amaç:** Geliştirmeye başlamadan önce hangi dosyalarda değişiklik yapılacağını ve test yöntemlerini öğrenmek.

### Prompt 2: Kod inceleme

JavaScript arama kodunun PDF'deki kabul ölçütlerine göre incelenmesi istendi.

**Amaç:** Arama, sayaç, boş sonuç mesajı ve Temizle düğmesinin doğru çalışıp çalışmadığını kontrol etmek.

### Prompt 3: Kod açıklama

JavaScript kodundaki event listener, filtreleme koşulu, trim() ve toLocaleLowerCase() fonksiyonlarının açıklanması istendi.

**Amaç:** Kodun çalışma mantığını anlamak ve kendi kodumu açıklayabilmek.

## 3. AI Önerisinin Değerlendirilmesi

Copilot'un arama özelliği için önerdiği yaklaşım incelendi.

Kabul edilen öneri:
- Kullanıcı yazdıkça input event listener ile arama yapılması.
- Etkinlik başlıklarının includes() yöntemiyle filtrelenmesi.
- Görünen kart sayısının hesaplanması.
- Sonuç bulunmadığında açıklayıcı mesaj gösterilmesi.

Değerlendirme:
Öneriler mevcut HTML yapısıyla karşılaştırıldı ve kabul ölçütlerine uygun olan kod kullanıldı. Kodun çalışması tarayıcıda test edildi.

## 4. Kod Açıklamaları

### Event listener

addEventListener("input", filterEvents) ifadesi, kullanıcı arama alanına her yazı yazdığında veya alanın içeriği değiştiğinde filterEvents fonksiyonunu çalıştırır. Böylece kullanıcı ayrıca bir arama düğmesine basmadan sonuçları görebilir.

### Filtreleme koşulu

title.includes(searchText) koşulu, etkinlik başlığının arama metnini içerip içermediğini kontrol eder. Sonuç doğruysa etkinlik kartı gösterilir, yanlışsa gizlenir.

### Büyük/küçük harf ve boşluk işlemleri

trim() metnin başındaki ve sonundaki boşlukları kaldırır. toLocaleLowerCase("tr-TR") metni Türkçe kurallarına göre küçük harfe dönüştürür. Böylece arama daha tutarlı çalışır.

### Temizle düğmesi

Temizle düğmesine basıldığında arama alanı boşaltılır ve filterEvents() tekrar çalıştırılır. Bu sayede tüm etkinlik kartları yeniden görünür.

## 5. Sonuç

Yapay zekâ önerileri geliştirme sürecinde yardımcı olarak kullanıldı. Önerilen kodlar incelendi, açıklamaları öğrenildi ve tarayıcıda test edildi.
