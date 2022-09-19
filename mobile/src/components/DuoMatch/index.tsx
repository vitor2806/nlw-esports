import { MaterialIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { CheckCircle } from 'phosphor-react-native';
import { useState } from 'react';
import { ActivityIndicator, Alert, Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';

import { THEME } from '../../theme';
import { Heading } from '../Heading';
import { styles } from './styles';

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordIdToClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert('Copied to clipboard!', 'Paste it into discord to find your new mate.');
    setIsCopping(false);
  }

  return (
    <Modal transparent statusBarTranslucent {...rest} animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name="close" size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <CheckCircle size={64} weight="bold" color={THEME.COLORS.SUCCESS} />

          <Heading title="Let's play!" subtitle="Now have fun with your mate!" style={{ alignItems: 'center', marginTop: 24 }} />

          <Text style={styles.label}>Add on Discord</Text>

          <TouchableOpacity disabled={isCopping} onPress={handleCopyDiscordIdToClipboard} style={styles.discordButton}>
            <Text style={styles.discord}>{isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
