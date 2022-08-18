import {Image} from 'react-native';

export const LogoBlack = (props) => {
    return (
        <Image 
        source = {require('C:/Users/kaiak/ComeBackSzn/app/assets/logoblack.png')}
        style = {props.style}
        />
    );
}