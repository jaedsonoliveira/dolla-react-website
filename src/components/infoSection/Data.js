import carro from '../../images/carro.svg';
import saving from '../../images/saving.svg';
import paper from '../../images/paper.svg';
export const homeObjOne ={
    id: 'about',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transaction with zero fees',
    description: 'Get acess to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: carro,
    alt: 'Car',
    dark:true,
    primary:true,
    darkText:false
};

export const homeObjTwo ={
    id: 'discover',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine: 'Unlimited Acess',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: saving,
    alt: 'Piggybank',
    dark:false,
    primary:false,
    darkText:true
};

export const homeObjThree ={
    id: 'signup',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine: 'Join Our team',
    headline: 'Creating an account is extremly easy',
    description: 'Get everything set up and ready in under 18 minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: paper,
    alt: 'Paper',
    dark:false,
    primary:false,
    darkText:true
};