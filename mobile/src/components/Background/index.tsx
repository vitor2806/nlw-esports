import { ImageBackground } from 'react-native';

// To solve png typing error, I must create @Types folder on src then declare module '*.png';
import backgroundImg from '../../assets/background-galaxy.png';
import { styles } from './styles';

interface BackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground source={backgroundImg} style={styles.container} defaultSource={backgroundImg}>
      {children}
    </ImageBackground>
  );
}
