import leftArrowImg from "~/assets/images/arrowleft.png";

export function BackArrow({
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="absolute top-0 left-4 size-12 flex-none text-3xl cursor-pointer"
      {...props}
    >
      <img
        className="animate-pulse rotate-30"
        src={leftArrowImg}
        alt="Go back img"
      />
    </button>
  );
}
