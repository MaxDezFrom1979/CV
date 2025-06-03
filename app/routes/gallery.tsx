import { images } from "../assets";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-gray-200 h-64 flex items-center justify-center"
        >
          <img
            src={image}
            alt={`Image ${index}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
