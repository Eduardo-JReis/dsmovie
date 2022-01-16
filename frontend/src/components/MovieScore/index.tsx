import { MoviStars } from '../MovieStars';
import './styles.css';

export const MovieScore = () => {

  const score: number = 3.5;
  const count: number = 13;

  return (
    <div className="dsmovie-score-container">
        <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <MoviStars />
        <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}