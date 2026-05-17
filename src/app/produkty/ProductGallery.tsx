/**
 * J.OLI ORIGINS v3 — ProductGallery (client)
 *
 * Hlavní fotografie + pás miniatur pod ní.
 * Klikem na miniaturu se vymění hlavní fotka.
 */

"use client";

import { useState } from "react";
import s from "../styles.module.css";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const safeImages = images && images.length > 0 ? images : [];
  const [activeIdx, setActiveIdx] = useState(0);

  if (safeImages.length === 0) {
    return (
      <div className={s.galleryMain}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "var(--warm-ivory)",
          }}
        />
      </div>
    );
  }

  const active = safeImages[activeIdx];

  return (
    <div className={s.galleryWrap}>
      <div className={s.galleryMain}>
        <img src={active} alt={alt} key={active} />
      </div>

      {safeImages.length > 1 && (
        <div className={s.galleryThumbs}>
          {safeImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={`${s.galleryThumb}${
                i === activeIdx ? " " + s.galleryThumbActive : ""
              }`}
              aria-label={`Zobrazit fotografii ${i + 1} z ${safeImages.length}`}
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
