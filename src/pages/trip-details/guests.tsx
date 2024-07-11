import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participant {
  id: number;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}
export function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((respose) => setParticipants(respose.data.participants));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between"
          >
            <div className="space-y-1.5 flex-1">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate lowercase">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CheckCircle2 className="text-green-400-400 size-5" />
            ) : (
              <CircleDashed className="text-zinc-400 size-5" />
            )}
          </div>
        ))}
      </div>

      <button className="bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all duration-300">
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
