import React from 'react';
import  Icon1 from '../../images/carro.svg';
import  Icon2 from '../../images/saving.svg';
import  Icon3 from '../../images/paper.svg';
import  {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expanses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can acess our plataform online anywhere in yhe world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium Bebefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
