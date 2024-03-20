interface hitSlop {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

interface AppCheckboxStyle {
  bg1?: string;
  bg2?: string;
  size?: number;
  thickness?: number;
  hitSlop?: hitSlop;
}

interface AppCheckboxProps {
  style?: AppCheckboxStyle;
  isChecked: boolean;
  onPress: () => void;
}

export type {AppCheckboxProps, AppCheckboxStyle, hitSlop};
