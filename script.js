
"use strict";

// Arama alanı, etkinlik kartları ve sonuç mesajlarını seçiyoruz.
const searchInput = document.getElementById("eventSearch");
const clearButton = document.getElementById("clearSearch");
const eventCards = document.querySelectorAll(".event-card");
const eventCount = document.getElementById("eventCount");
const noResults = document.getElementById("noResults");

// Arama işlemi sırasında kaç kartın gösterildiğini tutar.
function filterEvents() {
    // Kullanıcının arama metnini alıp boşlukları temizliyoruz.
    const searchText = searchInput.value.trim().toLocaleLowerCase("tr-TR");

    let visibleCount = 0;

    eventCards.forEach(function (card) {
        // Her kartın etkinlik başlığını alıyoruz.
        const title = card.querySelector(".event-title").textContent
            .trim()
            .toLocaleLowerCase("tr-TR");

        // Başlık arama metnini içeriyorsa kartı göster.
        const isMatch = title.includes(searchText);

        card.hidden = !isMatch;

        if (isMatch) {
            visibleCount++;
        }
    });

    // Görünen etkinlik sayısını güncelle.
    eventCount.textContent =
        visibleCount + " etkinlik gösteriliyor.";

    // Hiç sonuç yoksa açıklayıcı mesajı göster.
    noResults.hidden = visibleCount !== 0;
}

// Kullanıcı yazdıkça arama yapılır.
searchInput.addEventListener("input", filterEvents);

// Temizle düğmesi aramayı sıfırlar.
clearButton.addEventListener("click", function () {
    searchInput.value = "";
    filterEvents();
    searchInput.focus();
});
