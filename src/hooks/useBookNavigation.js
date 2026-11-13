import { useState, useCallback, useEffect, useRef } from 'react';

export function useBookNavigation({ totalPages = 16, flipBookRef, onPageTurnSound }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Play page turn audio if provided
  const playPageTurnSound = useCallback(() => {
    if (typeof onPageTurnSound === 'function') {
      try {
        onPageTurnSound();
      } catch (err) {
        // silent fail
      }
    }
  }, [onPageTurnSound]);

  // Flip to Next Page
  const nextPage = useCallback(() => {
    if (isAnimating) return;
    if (flipBookRef?.current?.pageFlip) {
      flipBookRef.current.pageFlip().flipNext();
    }
  }, [flipBookRef, isAnimating]);

  // Flip to Previous Page
  const prevPage = useCallback(() => {
    if (isAnimating) return;
    if (flipBookRef?.current?.pageFlip) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  }, [flipBookRef, isAnimating]);

  // Flip to Specific Page
  const goToPage = useCallback((pageNum) => {
    if (isAnimating) return;
    const clamped = Math.max(0, Math.min(pageNum, totalPages - 1));
    if (flipBookRef?.current?.pageFlip) {
      flipBookRef.current.pageFlip().flip(clamped);
    }
  }, [flipBookRef, isAnimating, totalPages]);

  // Return to cover
  const goToCover = useCallback(() => {
    goToPage(0);
  }, [goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevPage();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToCover();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage, goToCover]);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
    playPageTurnSound();
  }, [playPageTurnSound]);

  const onChangeState = useCallback((e) => {
    setIsAnimating(e.data === 'flipping');
  }, []);

  return {
    currentPage,
    setCurrentPage,
    isAnimating,
    nextPage,
    prevPage,
    goToPage,
    goToCover,
    onFlip,
    onChangeState,
    isFirstPage: currentPage === 0,
    isLastPage: currentPage >= totalPages - 1,
  };
}

