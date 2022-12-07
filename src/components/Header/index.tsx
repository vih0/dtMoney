import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';


interface HeaderProps{
    onOpenNewTransaction: () => void;
}

export function Header({onOpenNewTransaction}:HeaderProps) {
    
    return (
        <Container>
            <Content>
                <img src={Logo} alt="Dt money" /> 
                <button type='button'onClick={onOpenNewTransaction}>Nova transação</button>

                
            </Content>
        </Container>
    );
}  