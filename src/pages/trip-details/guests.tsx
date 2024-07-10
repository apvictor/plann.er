import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Armando</span>
            <span className="block text-sm text-zinc-400 truncate lowercase">
              Armando@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Amanda</span>
            <span className="block text-sm text-zinc-400 truncate lowercase">
              Amanda@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
      </div>

      <button className="bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all duration-300">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
