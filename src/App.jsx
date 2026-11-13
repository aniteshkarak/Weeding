import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from './components/common/LoadingScreen';
import MusicPlayer from './components/common/MusicPlayer';
import { weddingData } from './data/weddingData';

// Lazy loaded page components for optimal performance
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      {/* Global Singleton Background Music Player */}
      <MusicPlayer youtubeId={weddingData.song.youtubeId} />

      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invitation" element={<Navigate to="/" replace />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

