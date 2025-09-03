import { GalleryEnum } from "~/types";

const getImages = (category: GalleryEnum) => {
  switch (category) {
    case GalleryEnum.ALIVE_CODE:
      return Object.values(
        import.meta.glob("./images/gallery/ALIVEcode/*.{png,jpg,jpeg,svg}", {
          eager: true,
        })
      ).map((module: any) => module.default);
    case GalleryEnum.ALIVE_CULTURE:
      return Object.values(
        import.meta.glob("./images/gallery/ALIVEculture/*.{png,jpg,jpeg,svg}", {
          eager: true,
        })
      ).map((module: any) => module.default);
    case GalleryEnum.AUTRES:
      return Object.values(
        import.meta.glob("./images/gallery/Autres/*.{png,jpg,jpeg,svg}", {
          eager: true,
        })
      ).map((module: any) => module.default);
    case GalleryEnum.CRTP:
      return Object.values(
        import.meta.glob("./images/gallery/CRTP/*.{png,jpg,jpeg,svg}", {
          eager: true,
        })
      ).map((module: any) => module.default);
    case GalleryEnum.LAST_SESSION:
      return Object.values(
        import.meta.glob("./images/gallery/LastSession/*.{png,jpg,jpeg,svg}", {
          eager: true,
        })
      ).map((module: any) => module.default);
    case GalleryEnum.LEANE:
      return Object.values(
        import.meta.glob("./images/gallery/Leane/*.{png,jpg,jpeg,svg}", {
          eager: true,
        })
      ).map((module: any) => module.default);
    default:
      return Object.values(
        import.meta.glob("./images/gallery/*.{png,jpg,jpeg,svg}", {
          eager: true,
        })
      ).map((module: any) => module.default);
  }
};

export { getImages };
