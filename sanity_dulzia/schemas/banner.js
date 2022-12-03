import { FcDiploma1 } from "react-icons/fc";
export default {
  name: "banner",
  title: "Banner",
  type: "document",
  icon: FcDiploma1,
  fields: [
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "product",
      title: "Producto",
      type: "string",
    },
    {
      name: "desc",
      title: "Descripción",
      type: "string",
    },
    {
      name: "smallText",
      title: "Texto Pequeño",
      type: "string",
    },
    {
      name: "midText",
      title: "Texto Medio",
      type: "string",
    },
    {
      name: "largeText1",
      title: "Texto Grande 1",
      type: "string",
    },
  ],
};
