import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, QrCode, X } from 'lucide-react';
import { copyToClipboard, generateWhatsAppLink, triggerNativeShare, generateQuickQRCodeDataUrl } from '../../utils/shareUtils';

export default function ShareButton({ brideName, groomName, date, venue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://wedding.example.com';

  const handleCopy = async () => {
    const success = await copyToClipboard(currentUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const link = generateWhatsAppLink({
      brideName,
      groomName,
      date,
      venue,
      url: currentUrl
    });
    window.open(link, '_blank');
  };

  const handleNativeShare = async () => {
    const shared = await triggerNativeShare({
      title: `${brideName} & ${groomName}'s Wedding Invitation`,
      text: `Join us in celebrating the wedding of ${brideName} and ${groomName}!`,
      url: currentUrl
    });
    if (shared) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Share trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-brown-dark/80 backdrop-blur-md border border-gold/40 text-gold hover:text-white hover:border-gold transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-105"
        title="Share Invitation"
      >
        <Share2 className="w-4 h-4 md:w-5 md:h-5" />
      </button>

      {/* Share Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm bg-[#221B16] border border-gold/50 rounded-2xl p-6 text-cream shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => {
                setIsOpen(false);
                setShowQR(false);
              }}
              className="absolute top-4 right-4 text-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-gold block mb-1">
                Pass Along The Joy
              </span>
              <h3 className="font-serif-luxury text-2xl text-cream font-bold">
                Share Invitation
              </h3>
              <p className="text-xs text-muted mt-1 font-sans">
                Invite friends and family to witness our special day
              </p>
            </div>

            {/* Action buttons */}
            {!showQR ? (
              <div className="space-y-3">
                {/* WhatsApp button */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-emerald-800/60 hover:bg-emerald-700/80 border border-emerald-500/30 text-white font-medium text-sm transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Share on WhatsApp</span>
                </button>

                {/* Copy Link */}
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-gold/30 text-white font-medium text-sm transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-green-300">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 text-gold-light" />
                      <span>Copy Invitation Link</span>
                    </>
                  )}
                </button>

                {/* QR Code view toggle */}
                <button
                  onClick={() => setShowQR(true)}
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-muted-light font-medium text-sm transition-all"
                >
                  <QrCode className="w-5 h-5 text-gold" />
                  <span>View QR Code</span>
                </button>

                {/* Native Share button if supported */}
                {typeof navigator !== 'undefined' && navigator.share && (
                  <button
                    onClick={handleNativeShare}
                    className="w-full py-2.5 text-xs text-gold/80 hover:text-gold uppercase tracking-wider underline transition-colors"
                  >
                    Open Device Share Menu
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="p-3 bg-white rounded-xl shadow-lg border border-gold/30 mb-4">
                  <img
                    src={generateQuickQRCodeDataUrl(currentUrl)}
                    alt="Invitation QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-xs text-muted text-center mb-4 font-sans">
                  Scan with any camera or QR scanner to open on mobile
                </p>
                <button
                  onClick={() => setShowQR(false)}
                  className="text-xs text-gold hover:text-white underline uppercase tracking-widest"
                >
                  Back to sharing options
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

