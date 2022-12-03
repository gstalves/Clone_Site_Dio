export interface IButton {
    tittle: string;
    variant?: string;
    onClick?: () => void;
    type?: string;
}

export interface IButtonStyled {
    variant: string;
}