import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface VideoItem {
  id: string;
  src: string;
}

const VideoCarousel = () => {
  const videos: VideoItem[] = [
    {
      id: "1",
      src: "/Videos/bike_edit.mp4",
    },
    {
      id: "2",
        src: "/Videos/Fuzzie5.mp4",
    },
    {
      id: "3",
      src: "/Videos/comp 1_6.mp4",
    },
    {
      id: "4",
      src: "/Videos/Estu_ad.mp4",
    },
    {
      id: "5",
      src: "/Videos/Konster_4.mp4",
    },
    {
      id: "6",
      src: "/Videos/AI therepist reel - voiceover_2.mp4",
    },
  ];

  const duplicatedVideos = [...videos, ...videos,]; 

  return (
    <div
      className="overflow-hidden bg-background py-16 relative bg-gray-6969"
    >
      <motion.div
        className="flex will-change-transform gap-6 w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60, 
            ease: "linear",
          },
        }}
      >
        {duplicatedVideos.map((video, index) => (
          <VideoCard key={`${video.id}-${index}`} video={video} />
          
        ))}
      </motion.div>
    </div>
  );
}


export default VideoCarousel;

interface CardProps {
  video: VideoItem;
}

function VideoCard({ video }: CardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = () => {
    if (!videoRef.current) return;

    if (soundOn) {
      // turn sound OFF
      videoRef.current.muted = true;
      setSoundOn(false);
    } else {
      // turn sound ON
      videoRef.current.muted = false;
      videoRef.current.play(); // play() to be safe; click counts as gesture
      setSoundOn(true);
    }
  };

  return (
    <motion.div
      className="flex-shrink-0 w-auto h-96 rounded-lg overflow-hidden group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Show “Tap for sound” button only when hovered and sound is off */}
      {isHovered && (
        <button
          onClick={toggleSound}
          className="absolute inset-0 flex items-center justify-center
                     bg-black/40 text-white font-semibold rounded-lg"
        >
          {soundOn ? "🔇 Click to mute" : "🔊 Click for sound"}
        </button>
      )}
    </motion.div>
  );
}
