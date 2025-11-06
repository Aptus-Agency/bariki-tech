'use client'

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

export default function VideoHero() {
    const playerRef = useRef<any>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(50);
    const [isVideoReady, setIsVideoReady] = useState(false);

    useEffect(() => {
        // Load YouTube IFrame API
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player("youtube-player", {
                videoId: "Z4F3AXvrLKo",
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    showinfo: 0,
                    loop: 1,
                    playlist: "Z4F3AXvrLKo",
                    playsinline: 1,
                    rel: 0,
                    modestbranding: 1,
                },
                events: {
                    onReady: (event: any) => {
                        event.target.playVideo();
                        setIsVideoReady(true);
                    },
                },
            });
        };
    }, []);

    const toggleMute = () => {
        if (playerRef.current) {
            if (isMuted) {
                playerRef.current.unMute();
                playerRef.current.setVolume(volume);
            } else {
                playerRef.current.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (value: number[]) => {
        const newVolume = value[0];
        setVolume(newVolume);
        if (playerRef.current) {
            playerRef.current.setVolume(newVolume);
            if (newVolume > 0 && isMuted) {
                playerRef.current.unMute();
                setIsMuted(false);
            }
        }
    };
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Image Background - Shown while video loads */}
            <div
                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                    isVideoReady ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                    backgroundImage: 'url(https://res.cloudinary.com/zurri-cloud/image/upload/v1761834481/bariki/nlg8xybmeq7dcximos5f.webp)'
                }}
            />

            {/* YouTube Video Background */}
            <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                isVideoReady ? 'opacity-100' : 'opacity-0'
            }`}>
                <div
                    id="youtube-player"
                    className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

            {/* Volume Controls */}
            <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4 rounded-lg bg-black/40 border border-primary backdrop-blur-sm px-4 py-3">
                <button
                    onClick={toggleMute}
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <Icon icon="mynaui:volume-x-solid" className="w-12 h-12 text-primary" /> : <Icon icon="mynaui:volume-high-solid" className="w-12 h-12 text-primary" />}
                </button>
                {/* <Slider
                    value={[volume]}
                    onValueChange={handleVolumeChange}
                    max={100}
                    step={1}
                    className="w-24"
                /> */}
            </div>
        </div>
    )
}