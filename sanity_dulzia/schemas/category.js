import { FcParallelTasks } from "react-icons/fc";

export default {
  name: "category",
  title: "Categoria",
  type: "document",
  icon: FcParallelTasks,
  fields: [
    {
      name: "title",
      title: "Tìtulo",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
};
