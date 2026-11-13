import React from 'react';
import { generateQuickQRCodeDataUrl } from '../../utils/shareUtils';

export default function QRCodeComponent({ url, className = "" }) {
  const targetUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://wedding.example.com');
  const qrDataUrl = generateQuickQRCodeDataUrl(targetUrl);

  return (
    <div className={`flex flex-col items-center justify-center p-3 bg-white/95 rounded-xl border border-gold/40 shadow-sm ${className}`}>
      <img
        src={qrDataUrl}
        alt="Wedding Invitation QR Code"
        className="w-36 h-36 sm:w-44 sm:h-44 object-contain rounded-lg"
      />
      <span className="text-[10px] text-muted font-sans tracking-widest uppercase mt-2">
        Scan to Open On Mobile
      </span>
    </div>
  );
}

