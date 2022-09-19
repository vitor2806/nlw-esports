import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

import { GameProps } from './@types/game';
import logoImg from './assets/page-logo.svg';
import { GameBanner } from './components/GameBanner';
import { InviteBanner } from './components/InviteBanner';
import { Modal } from './components/Modal';
import { api } from './libs/api';

export default function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    api.get('/games').then(res => setGames(res.data));
  }, []);

  return (
    <div className="max-w-[1344px] px-8 2xl:px-0 mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]">duo</span> is here.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return <GameBanner key={game.id} adsCount={game._count.ads} bannerUrl={game.bannerUrl} title={game.title} />;
        })}
      </div>

      <Dialog.Root>
        <InviteBanner />
        <Modal />
      </Dialog.Root>
    </div>
  );
}
