
import { ButtonContainer } from './styles';
import { IButton} from "./types"

const Button = ({tittle, variant="primary", onClick}: IButton) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {tittle}
        </ButtonContainer>
    )
}

const Button2 = ({tittle, variant="primary", onClick}: IButton) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {tittle}
        </ButtonContainer>
    )
}


export { Button, Button2 }