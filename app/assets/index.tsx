const images = Object.values(
  import.meta.glob("./images/*.{png,jpg,jpeg,svg}", { eager: true })
).map((module: any) => module.default);

export { images };