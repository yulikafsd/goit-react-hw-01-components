import css from './Statistics.module.css';

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
}

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.statItem}
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
