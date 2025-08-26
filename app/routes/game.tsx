import { useRef } from "react";
import fullscreenImg from "~/assets/images/icons/fullscreen.png";

export default function Game() {
  const gameRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="flex flex-col items-center justify-center text-xl h-[calc(100vh - 64px)] max-w-screen relative">
      <img
        src={fullscreenImg}
        className="size-16 absolute top-4 right-4 cursor-pointer"
        onClick={() => gameRef.current!.requestFullscreen()}
      />
      <iframe
        ref={gameRef}
        className="w-full h-full aspect-video"
        src="/game/index.html"
        title="Insane platformer"
      />
    </div>
  );
}
