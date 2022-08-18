import {Image} from 'react-native';

export const LogoRed = (props) => {
    return (
        <Image 
        source = {require('C:/Users/kaiak/ComeBackSzn/app/assets/logored.png')}
        style = {props.style}
        />
    );
}