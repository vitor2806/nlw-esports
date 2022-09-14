import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, TouchableOpacityProps, ImageSourcePropType, TouchableOpacity, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface InternalProps extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: InternalProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data.ads} invites</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
