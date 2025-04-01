export interface MenuItem {
  label: string;
  dropdownItems?: string[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Demos",
    dropdownItems: ["Demo 1", "Demo 2", "Demo 3"],
  },
  {
    label: "Post",
    dropdownItems: [
      "Post Header",
      "Post Layout",
      "Share Buttons",
      "Gallery Post",
      "Video Post",
    ],
  },
  {
    label: "Features",
    dropdownItems: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    label: "Categories",
    dropdownItems: ["Category 1", "Category 2", "Category 3"],
  },
  { label: "Shop" },
  { label: "Buy Now" },
];
