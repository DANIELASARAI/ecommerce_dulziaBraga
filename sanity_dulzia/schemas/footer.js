import { FcDiploma2 } from "react-icons/fc";
export default {
  name: "footer",
  title: "Footer",
  type: "document",
  icon: FcDiploma2,
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
      name: "largeText1",
      title: "Texto 1",
      type: "string",
    },
    {
      name: "largeText2",
      title: "Texto 2",
      type: "string",
    },
    {
      name: "discount",
      title: "Descuentos",
      type: "string",
    },
    {
      name: "saleTime",
      title: "Temporada",
      type: "string",
    },
  ],
};
