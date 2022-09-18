import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { useEffect, useState } from 'react';

import logoImg from './assets/page-logo.svg';
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
        Your <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> is here.
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
              <Dialog.Content>
                <form action="">
                  <div>
                    <label htmlFor="game">Which is the game?</label>
                    <input type="text" id="game" name="game" placeholder="Choose the game you want to play" />
                  </div>

                  <div>
                    <label htmlFor="nick">Your name (or nickname)</label>
                    <input type="text" id="nick" name="nick" placeholder="How are you known ingame?" />
                  </div>

                  <div>
                    <div>
                      <label htmlFor="yearsPlaying">Your years playing</label>
                      <input type="number" id="yearsPlaying" name="yearsPlaying" placeholder="It's ok to be 0!" />
                    </div>

                    <div>
                      <label htmlFor="discord">Your discord tag</label>
                      <input type="text" id="discord" name="discord" placeholder="ExampleUser#0000" />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="weekDays">Week days you used to play</label>
                    </div>

                    <div>
                      <label htmlFor="hourStart">Hour you used to play</label>
                      <div>
                        <input type="time" id="hourStart" name="hourStart" placeholder="From" />
                        <input type="time" id="hourEnd" name="hourEnd" placeholder="To" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <input type="checkbox" />
                    I'm used to voice chat
                  </div>

                  <footer>
                    <button>Cancel</button>
                    <button type="submit">
                      <GameController />
                      Find duo
                    </button>
                  </footer>
                </form>
              </Dialog.Content>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
