import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';

const BASE_URL = 'http://192.168.0.199:3333';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch(`${BASE_URL}/games`)
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading title="Find your duo!" subtitle="Choose the game..." />

        <FlatList contentContainerStyle={styles.contentList} data={games} keyExtractor={item => item.id} renderItem={({ item }) => <GameCard data={item} onPress={() => handleOpenGame(item)} />} horizontal showsHorizontalScrollIndicator={false} />
      </SafeAreaView>
    </Background>
  );
}
