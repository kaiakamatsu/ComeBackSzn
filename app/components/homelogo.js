import {Image} from 'react-native';

export const LogoHome = (props) => {
    return (
        <Image 
        source = {require('C:/Users/kaiak/ComeBackSzn/app/assets/home.png')}
        style = {props.style}
        />
    );
}