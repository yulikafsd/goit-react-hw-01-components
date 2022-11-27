import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactions}>
      <thead className={css.transactionsHead}>
        <tr>
          <th className={css.transactionsHeader}>Type</th>
          <th className={css.transactionsHeader}>Amount</th>
          <th className={css.transactionsHeader}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionsBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.transactionsRow}>
              <td className={css.transactionsCell}>{type}</td>
              <td className={css.transactionsCell}>{amount}</td>
              <td className={css.transactionsCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
