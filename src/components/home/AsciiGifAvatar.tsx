"use client";

import { useEffect, useState } from "react";

import { decompressFrames, parseGIF } from "gifuct-js";

const CHARACTERS = " .:-=+*#%@";

type AsciiFrame = {
  ascii: string;
  delay: number;
};

type AsciiGifAvatarProps = {
  src: string;
  alt?: string;
  columns?: number;
  className?: string;
};

function imageDataToAscii(
  ctx: CanvasRenderingContext2D,
  columns: number,
  rows: number
): string {
  const { data } = ctx.getImageData(0, 0, columns, rows);
  const lines: string[] = [];
  for (let y = 0; y < rows; y++) {
    let line = "";
    for (let x = 0; x < columns; x++) {
      const i = (y * columns + x) * 4;
      if (data[i + 3] === 0) {
        line += " ";
        continue;
      }
      const brightness =
        0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      line +=
        CHARACTERS[Math.floor((brightness / 255) * (CHARACTERS.length - 1))];
    }
    lines.push(line.trimEnd());
  }
  return lines.join("\n");
}

function AsciiGifAvatar({
  src,
  alt = "Avatar",
  columns = 67,
  className = "",
}: AsciiGifAvatarProps) {
  const [currentFrame, setCurrentFrame] = useState("[ loading avatar ]");

  useEffect(() => {
    let isCancelled = false;
    let timeoutId: number | undefined;

    async function load() {
      try {
        const response = await fetch(src);
        const buffer = await response.arrayBuffer();
        const parsedGif = parseGIF(buffer);
        const frames = decompressFrames(parsedGif, true);
        if (frames.length === 0) return;

        const { width, height } = parsedGif.lsd;
        const rows = Math.max(1, Math.round((height / width) * columns * 0.93));

        const fullCanvas = document.createElement("canvas");
        fullCanvas.width = width;
        fullCanvas.height = height;
        const fullCtx = fullCanvas.getContext("2d");
        if (!fullCtx) return;

        const smallCanvas = document.createElement("canvas");
        smallCanvas.width = columns;
        smallCanvas.height = rows;
        const smallCtx = smallCanvas.getContext("2d");
        if (!smallCtx) return;

        const asciiFrames: AsciiFrame[] = [];
        let previousFrame: (typeof frames)[number] | null = null;

        for (const frame of frames) {
          if (previousFrame?.disposalType === 2) {
            fullCtx.clearRect(
              previousFrame.dims.left,
              previousFrame.dims.top,
              previousFrame.dims.width,
              previousFrame.dims.height
            );
          }
          const imageData = new ImageData(
            new Uint8ClampedArray(frame.patch),
            frame.dims.width,
            frame.dims.height
          );
          fullCtx.putImageData(imageData, frame.dims.left, frame.dims.top);
          smallCtx.drawImage(fullCanvas, 0, 0, columns, rows);
          asciiFrames.push({
            ascii: imageDataToAscii(smallCtx, columns, rows),
            delay: Math.max(60, frame.delay ?? 100),
          });
          previousFrame = frame;
        }

        if (isCancelled) return;

        let frameIndex = 0;
        const scheduleNextFrame = () => {
          if (isCancelled) return;
          const frame = asciiFrames[frameIndex];
          setCurrentFrame(frame.ascii);
          frameIndex = (frameIndex + 1) % asciiFrames.length;
          timeoutId = window.setTimeout(scheduleNextFrame, frame.delay);
        };
        scheduleNextFrame();
      } catch {
        if (!isCancelled) setCurrentFrame("[ avatar unavailable ]");
      }
    }

    load();

    return () => {
      isCancelled = true;
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [src, columns]);

  return (
    <div role="img" aria-label={alt} className={className}>
      <pre className="m-0 font-mono whitespace-pre">{currentFrame}</pre>
    </div>
  );
}

export { AsciiGifAvatar };
