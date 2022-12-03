import React from 'react'
import { Link } from 'react-router-dom';
import imageGusta from "../../assets/Gustavo.png"
import logo from '../../assets/logo-dio.png'; 
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/> 
                        </BuscarInputContainer>
                        <Menu>Live code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src={imageGusta} />
                ) : (
                    <> 
                        <MenuRight href="/">Home</MenuRight>
                        <Link to="/login">
                        <Button tittle="Entrar"/>
                        </Link>

                        <Link to="/register">
                        <Button tittle="Cadastrar" />
                        </Link>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }