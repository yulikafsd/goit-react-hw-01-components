// Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.

export default function Statistics({ title, stats }) {
  //   const { id, label, percentage } = stats;
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li class="item" key={id}>
              <span class="label">{label}</span>
              <span class="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
