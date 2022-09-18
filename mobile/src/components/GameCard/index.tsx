import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, TouchableOpacityProps, ImageSourcePropType, TouchableOpacity, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  title: string;
  _count: { ads: number };
  bannerUrl: string;
}

interface InternalProps extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: InternalProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads >= 1 ? data._count.ads + ' invite(s)' : 'No invites'}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
