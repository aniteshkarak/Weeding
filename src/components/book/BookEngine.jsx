import React, { useState, useEffect, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import BookPage from './BookPage';
import BookCover from './BookCover';
import BackCover from './BackCover';
import WelcomePage from '../invitation/WelcomePage';
import BridePage from '../invitation/BridePage';
import GroomPage from '../invitation/GroomPage';
import InvitationPage from '../invitation/InvitationPage';
import HaldiPage from '../invitation/HaldiPage';
import MehendiPage from '../invitation/MehendiPage';
import WeddingPage from '../invitation/WeddingPage';
import ReceptionPage from '../invitation/ReceptionPage';
import CountdownPage from '../invitation/CountdownPage';
import VenuePage from '../invitation/VenuePage';
import GalleryPage from '../invitation/GalleryPage';
import PresencePage from '../invitation/PresencePage';
import ClosingPage from '../invitation/ClosingPage';
import DigitalPassPage from '../invitation/DigitalPassPage';

export default function BookEngine({
  weddingData,
  flipBookRef,
  currentPage,
  setCurrentPage,
  onFlip,
  onChangeState,
  onPlayPageTurnSound,
}) {
  const [dimensions, setDimensions] = useState({
    width: 480,
    height: 640,
    isPortrait: false,
  });

  const [isReady, setIsReady] = useState(false);

  // Responsive dimensions calculation specifically optimized for mobile friendly screens
  const updateDimensions = useCallback(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (w < 768) {
      // Mobile Single Page Portrait
      const pageW = Math.min(w - 18, 400);
      const pageH = Math.min(h - 115, 600);
      setDimensions({
        width: Math.max(285, pageW),
        height: Math.max(450, pageH),
        isPortrait: true,
      });
    } else if (w < 1024) {
      // Tablet Two-Page Spread
      const spreadW = Math.min(w - 48, 860);
      const pageW = Math.floor(spreadW / 2);
      const pageH = Math.min(h - 130, 610);
      setDimensions({
        width: Math.max(340, pageW),
        height: Math.max(480, pageH),
        isPortrait: false,
      });
    } else {
      // Desktop Two-Page Spread
      const spreadW = Math.min(w - 80, 1080);
      const pageW = Math.min(Math.floor(spreadW / 2), 520);
      const pageH = Math.min(h - 130, 680);
      setDimensions({
        width: Math.max(380, pageW),
        height: Math.max(520, pageH),
        isPortrait: false,
      });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    setIsReady(true);
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // Page flip handler
  const handleFlipEvent = (e) => {
    if (onFlip) {
      onFlip(e);
    }
  };

  if (!isReady) return null;

  return (
    <div className="flip-book-wrapper relative flex items-center justify-center p-1 sm:p-2 select-none">
      {/* 3D Drop Shadow Underneath Book */}
      <div 
        className="absolute bottom-2 rounded-full bg-black/50 blur-2xl pointer-events-none"
        style={{
          width: dimensions.isPortrait ? `${dimensions.width * 0.9}px` : `${dimensions.width * 1.8}px`,
          height: '24px',
        }}
      />

      <HTMLFlipBook
        key={`${dimensions.width}-${dimensions.height}-${dimensions.isPortrait ? 'p' : 'l'}`}
        ref={flipBookRef}
        width={dimensions.width}
        height={dimensions.height}
        size="fixed"
        minWidth={280}
        maxWidth={600}
        minHeight={420}
        maxHeight={750}
        maxShadowOpacity={0.6}
        showCover={true}
        mobileScrollSupport={true}
        usePortrait={dimensions.isPortrait}
        startPage={currentPage || 0}
        drawShadow={true}
        flippingTime={700}
        useMouseEvents={true}
        swipeDistance={20}
        showPageCorners={true}
        onFlip={handleFlipEvent}
        onChangeState={onChangeState}
        className="book-element"
      >
        {/* PAGE 00: Hardcover Front */}
        <BookPage isCover={true} showBorders={false}>
          <BookCover
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
            datesSpan={weddingData.datesSpan}
            coverImage={weddingData.coverImage}
            isStandalone={false}
          />
        </BookPage>

        {/* PAGE 01: Welcome Message (Inside Left) */}
        <BookPage pageNumber={1} isLeft={true} pageTitle="Welcome">
          <WelcomePage
            welcome={weddingData.welcome}
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
          />
        </BookPage>

        {/* PAGE 02: Bride's Family (Inside Right) */}
        <BookPage pageNumber={2} isLeft={false} pageTitle="The Bride">
          <BridePage
            bride={weddingData.bride}
          />
        </BookPage>

        {/* PAGE 03: Groom's Family (Inside Left) */}
        <BookPage pageNumber={3} isLeft={true} pageTitle="The Groom">
          <GroomPage
            groom={weddingData.groom}
          />
        </BookPage>

        {/* PAGE 04: The Wedding Invitation (Inside Right) */}
        <BookPage pageNumber={4} isLeft={false} pageTitle="Invitation">
          <InvitationPage
            wedding={weddingData.wedding}
            venue={weddingData.venue}
          />
        </BookPage>

        {/* PAGE 05: Haldi Ceremony (Inside Left) */}
        <BookPage pageNumber={5} isLeft={true} pageTitle="Haldi">
          <HaldiPage
            event={weddingData.events[0]}
          />
        </BookPage>

        {/* PAGE 06: Mehendi Ceremony (Inside Right) */}
        <BookPage pageNumber={6} isLeft={false} pageTitle="Mehendi">
          <MehendiPage
            event={weddingData.events[1]}
          />
        </BookPage>

        {/* PAGE 07: Wedding Ceremony (Inside Left) */}
        <BookPage pageNumber={7} isLeft={true} pageTitle="Wedding">
          <WeddingPage
            event={weddingData.events[2]}
            venue={weddingData.venue}
          />
        </BookPage>

        {/* PAGE 08: Wedding Reception (Inside Right) */}
        <BookPage pageNumber={8} isLeft={false} pageTitle="Reception">
          <ReceptionPage
            event={weddingData.events[3]}
            venue={weddingData.venue}
          />
        </BookPage>

        {/* PAGE 09: Countdown & Add to Calendar (Inside Left) */}
        <BookPage pageNumber={9} isLeft={true} pageTitle="Countdown">
          <CountdownPage
            wedding={weddingData.wedding}
          />
        </BookPage>

        {/* PAGE 10: Venue & Google Maps (Inside Right) */}
        <BookPage pageNumber={10} isLeft={false} pageTitle="Venue">
          <VenuePage
            venue={weddingData.venue}
          />
        </BookPage>

        {/* PAGE 11: Photo Gallery (Inside Left) */}
        <BookPage pageNumber={11} isLeft={true} pageTitle="Gallery">
          <GalleryPage
            gallery={weddingData.gallery}
          />
        </BookPage>

        {/* PAGE 12: Heartfelt Request to Attend All Functions (Inside Right) */}
        <BookPage pageNumber={12} isLeft={false} pageTitle="All Functions">
          <PresencePage
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
          />
        </BookPage>

        {/* PAGE 13: Thank You & Closing (Inside Left) */}
        <BookPage pageNumber={13} isLeft={true} pageTitle="Thank You">
          <ClosingPage
            onGoToCover={() => {
              if (flipBookRef?.current?.pageFlip) {
                flipBookRef.current.pageFlip().flip(0);
              }
            }}
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
          />
        </BookPage>

        {/* PAGE 14: Digital Invitation Pass & QR (Inside Right) */}
        <BookPage pageNumber={14} isLeft={false} pageTitle="Digital Pass">
          <DigitalPassPage
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
            hashtag={weddingData.hashtag}
            venue={weddingData.venue}
          />
        </BookPage>

        {/* PAGE 15: Hardcover Back */}
        <BookPage isBack={true} showBorders={false}>
          <BackCover
            onGoToCover={() => {
              if (flipBookRef?.current?.pageFlip) {
                flipBookRef.current.pageFlip().flip(0);
              }
            }}
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
            hashtag={weddingData.hashtag}
          />
        </BookPage>
      </HTMLFlipBook>
    </div>
  );
}
