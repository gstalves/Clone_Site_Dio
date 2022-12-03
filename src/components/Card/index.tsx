import React from "react";
import imageGusta from "../../assets/Gustavo.png"
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles"; 

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture src={imageGusta} alt="Imagem Usuarios" />
                    <div>
                        <h4>Gustavo De Souza</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp Orange Tech + da Dio...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 15
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    ) 
}

export { Card }