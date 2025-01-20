"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { ProductImage } from ".";

interface Props {
  thumbnailUrl: ProductImage;
}

const VideoPlayer = ({ thumbnailUrl }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowControls(false);
  };

  return (
    <div className="relative w-full">
      {/* Container do vídeo com aspect ratio 16:9 */}
      <div className="relative w-full pt-[45.25%]" onClick={handleVideoPlay}>
        {isPlaying ? (
          // Renderiza o iframe do YouTube quando está em reprodução
          <iframe
            src="https://www.youtube.com/embed/MEH8Q-DLjTg?autoplay=1&rel=0&showinfo=0"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            allow="autoplay; encrypted-media"
          ></iframe>
        ) : (
          // Renderiza a thumbnail quando carrega a pagina
          <img
            src={thumbnailUrl.src}
            alt="Video Thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
        )}

        {/* Botão de play customizado */}
        {showControls && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-20 h-20 bg-white rounded-full shadow-lg 
                       flex items-center justify-center
                       transition-transform hover:scale-110"
          >
            <Play className="w-10 h-10 text-[#EC933A] ml-1" fill="#EC933A" />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
