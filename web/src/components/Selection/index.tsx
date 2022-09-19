import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import axios from 'axios';
import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';

import { GameProps } from '../../@types/game';

const BASE_URL = 'http://localhost:3333';

export function Selection() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    axios(`${BASE_URL}/games`).then(res => setGames(res.data));
  }, []);
  return (
    <Select.Portal>
      <Select.Content className="flex flex-col gap-2">
        <Select.ScrollUpButton>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="bg-zinc-900 text-white px-6 py-2 rounded-md">
          {games.map(game => {
            return (
              <Select.Item value={game.id} key={game.id} className="flex items-center p-2 rounded hover:bg-zinc-800 transition-colors">
                <Select.ItemIndicator className="text-emerald-400 absolute left-2">
                  <Check />
                </Select.ItemIndicator>
                <Select.ItemText>{game.title}</Select.ItemText>
              </Select.Item>
            );
          })}
        </Select.Viewport>
        <Select.ScrollDownButton>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  );
}
