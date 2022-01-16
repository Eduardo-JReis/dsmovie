import './styles.css';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export const Pagination = () => {
  return (
    <div className="dsmovie-pagination-container">
        <div className="dsmovie-pagination-box">
            <button className="dsmovie-pagination-button" disabled={true} >
                <GrFormPrevious size={28} />
            </button>
            <p>{`${1} de ${3}`}</p>
            <button className="dsmovie-pagination-button" disabled={false} >
                <GrFormNext size={28} />
            </button>
        </div>
    </div>
  );
}