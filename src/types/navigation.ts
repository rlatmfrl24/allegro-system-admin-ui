export type NavigationItem = {
  label: string;
  id: string;
  index?: number;
  children?: NavigationItem[];
};
