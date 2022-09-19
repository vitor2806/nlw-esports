import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GameParams } from '../../@types/navigation';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';
import { Heading } from '../../components/Heading';
import { BASE_URL } from '../../libs/api';
import { THEME } from '../../theme';
import { styles } from './styles';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`${BASE_URL}/ads/${adsId}/discord`)
      .then(res => res.json())
      .then(data => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`${BASE_URL}/games/${game.id}/ads`)
      .then(res => res.json())
      .then(data => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20} />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />

        <Heading title={game.title} subtitle="Join and start playing!" />

        <FlatList data={duos} keyExtractor={item => item.id} renderItem={({ item }) => <DuoCard onConnect={() => getDiscordUser(item.id)} data={item} />} horizontal contentContainerStyle={styles.contentList} showsHorizontalScrollIndicator style={styles.containerList} ListEmptyComponent={() => <Text style={styles.emptyList}>No invites for this game yet.</Text>} />

        <DuoMatch visible={discordDuoSelected.length > 0} onClose={() => setDiscordDuoSelected('')} discord={discordDuoSelected} />
      </SafeAreaView>
    </Background>
  );
}
