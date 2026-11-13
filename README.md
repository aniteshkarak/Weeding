# 💍 PRIYANKA WEDS REON — Luxury 3D Digital Wedding Invitation Book

A production-grade, interactive 3D digital wedding invitation website built with React, Vite, Tailwind CSS, Framer Motion, and the StPageFlip physics 3D page-flipping engine.

Emulates an authentic, expensive hardcover royal wedding invitation album, complete with natural page bending, hardcover opening animations, background melodies, RSVP management, and responsive support across desktop and mobile devices.

---

## 🕊️ Wedding Information

- **Wedding Title**: PRIYANKA WEDS REON
- **The Bride**: Priyanka (D/o Smt. Shashi Kala Biswas), Kharida, Kharagpur, Paschim Medinipur, West Bengal
- **The Groom**: Reon (S/o Mr. Abul Kashem Molla & Mrs. Fatema Molla), Puratan Bazar, Sanjoal, Kharagpur, Paschim Medinipur, West Bengal
- **Celebration Dates**: 25 – 27 November 2026
- **Main Wedding Ceremony**: 26 November 2026, 7:00 PM onwards
- **Venue**:
  - **Ashoka Lodge**
  - Near Bazar Kolkata, Malancha Road, Kharagpur, Paschim Medinipur, West Bengal – 721301
  - [Google Maps Location](https://maps.app.goo.gl/XzURPCksuPgBktre7)

---

## 📅 Wedding Event Schedule

1. **Haldi Ceremony**: 25 November 2026, Morning
   - *"An auspicious beginning filled with happiness, blessings, laughter and the warmth of family."*
   - Photograph: `public/images/events/haldi.jpg` (Integrated from uploaded assets)
2. **Mehendi Ceremony**: 25 November 2026, Evening
   - *"An evening of beautiful traditions, colours, music and unforgettable memories."*
   - Photograph: `public/images/events/mehendi.jpg` (Integrated from uploaded assets)
3. **The Wedding Ceremony**: 26 November 2026, 7:00 PM onwards
   - *"With the blessings of our families, we invite you to witness the beginning of our beautiful journey together."*
   - Photograph: `public/images/events/wedding.jpg`
4. **Wedding Reception**: 27 November 2026, 7:00 PM onwards
   - *"Join us for a beautiful evening of celebration, happiness, love and togetherness."*
   - Photograph: `public/images/events/reception.jpg` (Integrated from uploaded assets)

---

## 📖 Digital Book Structure (16-Page Balanced Spread)

- **Page 00 (Cover)**: Hardcover Front with actual cover photograph, gold typography & "Open Invitation" button
- **Page 01 (Spread 1 Left)**: Welcome Message & Sacred Blessings
- **Page 02 (Spread 1 Right)**: The Bride (Priyanka, D/o Smt. Shashi Kala Biswas)
- **Page 03 (Spread 2 Left)**: The Groom (Reon, S/o Mr. Abul Kashem Molla & Mrs. Fatema Molla)
- **Page 04 (Spread 2 Right)**: The Wedding Invitation (26 November 2026, 7:00 PM)
- **Page 05 (Spread 3 Left)**: Haldi Ceremony (25 November 2026, Morning)
- **Page 06 (Spread 3 Right)**: Mehendi Ceremony (25 November 2026, Evening)
- **Page 07 (Spread 4 Left)**: The Wedding Ceremony (26 November 2026, 7:00 PM onwards)
- **Page 08 (Spread 4 Right)**: Wedding Reception (27 November 2026, 7:00 PM onwards)
- **Page 09 (Spread 5 Left)**: Live Wedding Countdown (Asia/Kolkata timezone)
- **Page 10 (Spread 5 Right)**: Venue — Ashoka Lodge, Kharagpur with Google Maps & Get Directions
- **Page 11 (Spread 6 Left)**: Photo Gallery with Lightbox
- **Page 12 (Spread 6 Right)**: RSVP Form with local storage & confetti
- **Page 13 (Spread 7 Left)**: Thank You & Closing Gratitude
- **Page 14 (Spread 7 Right)**: Digital Invitation Pass & QR Code
- **Page 15 (Back Cover)**: Hardcover Back with Monogram & Return to Cover

---

## 🚀 How to Run the Website

```bash
cd wedding
npm install
npm run dev
```

Visit: `http://localhost:5173`

To build for production:

```bash
npm run build
npm run preview
```

---

## 🛠️ Technology Stack

- **Framework**: React 18, Vite
- **3D Page Flip**: `react-pageflip` & `page-flip` (StPageFlip physics engine)
- **Styling**: Tailwind CSS, Custom Luxury Book Shading & Embossing
- **Animations**: Framer Motion, GSAP, Canvas Confetti
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6)
- **Audio**: Local `/music/wedding.mp3` with Web Audio API harp/chords synthesizer fallback
