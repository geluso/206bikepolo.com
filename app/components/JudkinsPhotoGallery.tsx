"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const PHOTO_DIRECTORY = "/img/photos-judkins-2026-11-08";
const PHOTO_PREFIX = "Judkins_Polo_11.08.26_";

const photos = Array.from({ length: 58 }, (_, index) => {
  const photoNumber = index + 1;
  const filename =
    photoNumber === 1
      ? `${PHOTO_PREFIX}.jpg`
      : `${PHOTO_PREFIX}-${photoNumber}.jpg`;

  return `${PHOTO_DIRECTORY}/${filename}`;
});
const photographer = "Chris, Eastern house";

export default function JudkinsPhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);

  const showPhoto = useCallback((nextIndex: number) => {
    setCurrentIndex((current) => {
      if (current === null) return nextIndex;

      setPreviousIndex(current);
      setIsFading(false);
      return (nextIndex + photos.length) % photos.length;
    });
  }, []);

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * photos.length));
  }, []);

  useEffect(() => {
    if (currentIndex === null) return;

    const timer = window.setTimeout(() => {
      showPhoto(currentIndex + 1);
    }, 6020);

    return () => window.clearTimeout(timer);
  }, [currentIndex, showPhoto]);

  useEffect(() => {
    if (!isFading || previousIndex === null) return;

    // Also completes the change when reduced-motion removes the CSS transition.
    const timer = window.setTimeout(() => setPreviousIndex(null), 1100);
    return () => window.clearTimeout(timer);
  }, [isFading, previousIndex]);

  if (currentIndex === null) {
    return <div className="-mx-4 mt-4 aspect-[3/2] bg-gray-900" />;
  }

  const isTransitioning = previousIndex !== null;

  return (
    <div
      className="relative -mx-4 mt-4 aspect-[3/2] overflow-hidden bg-gray-900"
      aria-roledescription="carousel"
      aria-label="Bike polo at Judkins Park"
    >
      {previousIndex !== null && (
        <Image
          src={photos[previousIndex]}
          alt="Bike polo players at Judkins Park"
          fill
          sizes="100vw"
          className="object-cover"
        />
      )}

      <Image
        key={currentIndex}
        src={photos[currentIndex]}
        alt="Bike polo players at Judkins Park"
        fill
        sizes="100vw"
        priority={previousIndex === null}
        onLoad={() => setIsFading(true)}
        onTransitionEnd={() => setPreviousIndex(null)}
        className={`object-cover motion-safe:transition-opacity motion-safe:duration-1000 ${
          isTransitioning && !isFading ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-black/65 to-transparent px-5 pb-4 pt-12 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
        <a href="/photos" aria-label="View all photos" className="pointer-events-auto text-sm font-medium text-white hover:text-white underline underline-offset-2">{currentIndex + 1} of {photos.length}</a>
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium">
          206 Bike Polo
        </span>
        <span className="text-right text-sm font-medium"><span aria-hidden="true" className="mr-1 text-xl align-[-2px]">📷</span>{photographer}</span>
      </div>

      <button
        type="button"
        aria-label="Previous photo"
        disabled={isTransitioning}
        onClick={() => showPhoto(currentIndex - 1)}
        className="absolute inset-y-0 left-0 z-10 flex w-20 items-center justify-start pl-3 text-6xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] transition-colors hover:bg-black/20 focus-visible:bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white disabled:cursor-default"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <button
        type="button"
        aria-label="Next photo"
        disabled={isTransitioning}
        onClick={() => showPhoto(currentIndex + 1)}
        className="absolute inset-y-0 right-0 z-10 flex w-20 items-center justify-end pr-3 text-6xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] transition-colors hover:bg-black/20 focus-visible:bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white disabled:cursor-default"
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
