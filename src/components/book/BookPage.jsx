import React, { forwardRef } from 'react';
import PageNumber from './PageNumber';

const BookPage = forwardRef(({
  children,
  pageNumber,
  isLeft = false,
  isCover = false,
  isBack = false,
  className = "",
  showBorders = true,
  pageTitle = ""
}, ref) => {
  // If it's a hardcover (Front Cover or Back Cover)
  if (isCover || isBack) {
    return (
      <div
        ref={ref}
        data-density="hard"
        className={`page relative w-full h-full overflow-hidden select-none bg-cover-leather text-cream ${
          isCover ? 'book-hardcover' : 'book-hardcover-back'
        } ${className}`}
      >
        {children}
      </div>
    );
  }

  // Inside Book Page
  return (
    <div
      ref={ref}
      data-density="soft"
      className={`page relative w-full h-full overflow-hidden bg-cream-soft text-brown flex flex-col justify-between select-none shadow-sm ${
        isLeft ? 'page-edge-left' : 'page-edge-right'
      } ${className}`}
      style={{
        backgroundImage: `radial-gradient(#81786B 0.5px, transparent 0.5px), linear-gradient(${
          isLeft ? 'to right, #FAF6EE 0%, #FFFDF8 15%, #FFFDF8 92%, #F1EADC 100%' : 'to right, #F1EADC 0%, #FFFDF8 8%, #FFFDF8 85%, #FAF6EE 100%'
        })`,
        backgroundSize: '24px 24px, 100% 100%',
      }}
    >
      {/* Spine crease shadow (left page has shadow on right; right page has shadow on left) */}
      {isLeft ? <div className="page-left-shadow" /> : <div className="page-right-shadow" />}

      {/* Fine Ornamental Gold Border */}
      {showBorders && (
        <div className="absolute inset-3 sm:inset-4 md:inset-5 pointer-events-none z-10 border border-gold/30 rounded-sm">
          {/* Inner hairline border */}
          <div className="absolute inset-1 border border-gold/15" />

          {/* Corner Flourishes */}
          <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-gold/60" />
          <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-gold/60" />
          <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-gold/60" />
          <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-gold/60" />
        </div>
      )}

      {/* Page Content */}
      <div className="relative z-10 w-full h-full p-6 sm:p-7 md:p-8 flex flex-col overflow-y-auto overflow-x-hidden">
        {children}
      </div>

      {/* Page Numbering */}
      {pageNumber && (
        <PageNumber number={pageNumber} isLeft={isLeft} text={pageTitle ? `${pageTitle} · ${pageNumber}` : null} />
      )}
    </div>
  );
});

BookPage.displayName = 'BookPage';
export default BookPage;

