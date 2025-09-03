import { useEffect, useState } from "react";
import { getImages } from "~/assets";
import { BackArrow } from "~/components/back-arrow";
import { GalleryEnum } from "~/types";
import { classNames } from "~/utils";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryEnum | "">(
    ""
  );

  useEffect(() => {}, [selectedCategory]);

  if (!selectedCategory)
    return (
      <div className="grid grid-cols-3 place-items-center pt-4">
        {Object.values(GalleryEnum).map((cat) => (
          <div
            className="cursor-pointer"
            onClick={() => setSelectedCategory(cat)}
          >
            <p>{cat}</p>
            <img className="h-48" src={getImages(cat)[0]} alt={cat} />
          </div>
        ))}
      </div>
    );

  return (
    <div
      className={classNames(
        "relative grid md:grid-cols-3 grid-cols-1 gap-4 place-items-center pt-4",
        selectedCategory === GalleryEnum.ALIVE_CULTURE && "md:grid-cols-6"
      )}
    >
      <BackArrow onClick={() => setSelectedCategory("")} />
      {getImages(selectedCategory).map((image, index) => (
        <img
          src={image}
          alt={`Image ${index}`}
          className=" h-48 max-h-full max-w-full object-contain"
        />
      ))}
    </div>
  );
}
