import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { Check, GameController } from 'phosphor-react';

import { Input } from '../Form/Input';
import { Selection } from '../Selection';

export function Modal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed flex items-center justify-center">
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">Publish an invite</Dialog.Title>

          <form className="mt-8 flex flex-col gap-4" action="">
            <Select.Root>
              <label htmlFor="game" className="font-semibold">
                Which is the game?
              </label>

              <Select.Trigger className="bg-zinc-900 py-3 px-4 rounded text-sm flex justify-between">
                <Select.Value className="placeholder::text-zinc-500" placeholder="Choose the game you want to play" />

                <Select.Icon>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>

              <Selection />
            </Select.Root>

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

            <div className="mt-2 flex gap-2 text-sm items-center">
              <Checkbox.Root className="w-6 h-6 p-1 rounded-sm bg-zinc-900">
                <Checkbox.Indicator className="text-emerald-400">
                  <Check size={16} />
                </Checkbox.Indicator>
              </Checkbox.Root>
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
  );
}
