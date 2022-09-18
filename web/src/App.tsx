import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { useEffect, useState } from 'react';

import logoImg from './assets/page-logo.svg';
import { Input } from './components/Form/Input';
import { GameBanner } from './components/GameBanner';
import { InviteBanner } from './components/InviteBanner';

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

const BASE_URL = 'http://localhost:3333';

export default function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/games`)
      .then(res => res.json())
      .then(data => setGames(data));
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

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed flex items-center justify-center">
            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl font-black">Publish an invite</Dialog.Title>

              <form className="mt-8 flex flex-col gap-4" action="">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">
                    Which is the game?
                  </label>
                  <Input type="text" id="game" name="game" placeholder="Choose the game you want to play" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="nick">Your name (or nickname)</label>
                  <Input type="text" id="nick" name="nick" placeholder="How are you known ingame?" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Your years playing</label>
                    <Input type="number" id="yearsPlaying" name="yearsPlaying" placeholder="It's ok to be 0!" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Your discord tag</label>
                    <Input type="text" id="discord" name="discord" placeholder="ExampleUser#0000" />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Days you used to play</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button title="Sunday" className="w-8 h-8 rounded bg-zinc-900">
                        S
                      </button>
                      <button title="Monday" className="w-8 h-8 rounded bg-zinc-900">
                        M
                      </button>
                      <button title="Tuesday" className="w-8 h-8 rounded bg-zinc-900">
                        T
                      </button>
                      <button title="Wednesday" className="w-8 h-8 rounded bg-zinc-900">
                        W
                      </button>
                      <button title="Thursday" className="w-8 h-8 rounded bg-zinc-900">
                        T
                      </button>
                      <button title="Friday" className="w-8 h-8 rounded bg-zinc-900">
                        F
                      </button>
                      <button title="Saturday" className="w-8 h-8 rounded bg-zinc-900">
                        S
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Hour you used to play</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="time" id="hourStart" name="hourStart" placeholder="From" />
                      <Input type="time" id="hourEnd" name="hourEnd" placeholder="To" />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" />
                  I'm used to voice chat
                </div>

                <footer className="mt-4 flex justify-end items-center gap-4">
                  <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-colors" type="button">
                    Cancel
                  </Dialog.Close>
                  <button className="flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600 transition-colors" type="submit">
                    <GameController size={24} />
                    Find duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
