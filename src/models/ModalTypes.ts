export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  initialDropdownValue?: string;
  initialWeight?: string;
}
