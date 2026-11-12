# I-Rieltor.uz: taqdimot sayti (statik)

Investorlar uchun bir sahifali statik sayt. Backend, baza va build kerak emas. Dizayn: Claude Design handoff (`Presentation.dc.html`), shrift Onest (Google Fonts).

Ochish: `index.html` ni brauzerda oching. Docker bilan: ildizdagi `docker-compose.yml` dagi `presentation` xizmati (lokal `http://localhost:8083/`, serverda `https://PRESENTATION_SERVER_NAME/`).

Moslash:
- Matnlar `index.html` da (o'zbek tilida).
- Demo tugmasi: `#d-site` → `https://auksion.i-rieltor.uz/` (localhost'da ochilsa `script.js` uni `http://localhost:8081/` ga almashtiradi).
- Aloqa pochtasi: `invest@i-rieltor.uz` (haqiqiysiga almashtiring).
- Skrinshot o'rinlari (`.shot`, `.ph`): haqiqiy rasm bilan almashtirish mumkin.
- Ranglar va oraliqlar `styles.css` boshidagi `:root` da.
