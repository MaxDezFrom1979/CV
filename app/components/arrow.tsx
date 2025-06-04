import arrowImg from "app/assets/images/arrow.png";
import type { ArrowProps } from "~/types";
import { classNames } from "~/utils";

export default function Arrow({ direction = "right", visible = true }: ArrowProps) {
  return (
    <div
      className={classNames(
        "object-cover w-[400px]",
        direction === "left" && "-scale-x-100",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      <img src={arrowImg} alt="Flèche" />
    </div>
  );
}
