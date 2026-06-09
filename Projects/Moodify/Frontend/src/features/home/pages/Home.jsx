import FaceExpression from '../../Expression/components/FaceExpression';
import Player from '../components/Player';
import { useSong } from '../hooks/useSong.js';

export default function Home() {
  const { handleGetSong } = useSong();
  return (
    <>
      <FaceExpression
        onClick={(expression) => handleGetSong({ mood: expression })}
      />
      <Player />
    </>
  );
}
