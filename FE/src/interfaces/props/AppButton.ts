interface AppButtonStyle {
  button?: {
    width?: string;
    bg1?: string;
    bg2?: string;
    borderR?: string;
    padding?: string;
  };
  font?: {
    color?: string;
    size?: string;
  };
}

interface AppButtonProps {
  style?: AppButtonStyle;
  disabled?: boolean;
  text: string;
  onPress?: () => void;
}

export type {AppButtonProps, AppButtonStyle};
