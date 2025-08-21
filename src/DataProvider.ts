import { type DataProvider } from "react-admin";
import localStorageDataProvider from "ra-data-local-storage";
import { NAV_ITEMS } from "./constants/navigation";

const initialData = {
  chunks: [
    {
      id: 1,
      name: "Chunk 1",
    },
  ],
  navMenu: NAV_ITEMS,
};

export const dataProvider: DataProvider = localStorageDataProvider({
  defaultData: initialData,
});
