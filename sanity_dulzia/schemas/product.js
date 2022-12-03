import { FcShop } from "react-icons/fc";
export default {
  name: "product",
  title: "Producto",
  type: "document",
  icon: FcShop,
  fields: [
    {
      name: "image",
      title: "Imagen",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Nombre",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      title: "Categoria",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
    },
    {
      name: "details",
      title: "Detalles",
      type: "string",
    },
  ],
};
