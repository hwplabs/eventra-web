export default interface DropdownMenuProps {
    buttonLabel: string;
    menuItems: { label: string; href: string }[];
    onItemClick: (item: string) => void;
  }