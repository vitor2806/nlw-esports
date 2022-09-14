import { MagnifyingGlassPlus } from 'phosphor-react';
import logoImg from './assets/page-logo.svg';

export default function App() {
  return (
    <div className="max-w-[1344px] px-8 2xl:px-0 mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Your <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> is here.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game</strong>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game</strong>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game</strong>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game</strong>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game</strong>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Game</strong>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Didn't find your duo?</strong>
            <span className="text-zinc-400 block">Post an invite to find new mates!</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-colors text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Post invite
          </button>
        </div>
      </div>
    </div>
  );
}
