import PropTypes from 'prop-types';
import './Statistics.css';
import { randomColor } from './randomColor';

export const Statistics = ({ title, data }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {data.map(e => (
          <li
            className="item"
            key={e.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{e.label}</span>
            <span className="percentage">{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
