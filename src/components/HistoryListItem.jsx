const HistoryListItem = ({ entry }) => (
  <tr>
    <td>{new Date(entry.date).toLocaleDateString('en-US')}</td>
    <td>{new Date(entry.date).toLocaleTimeString('en', { timeStyle: 'short', hour12: true, timeZone: 'PST' })}</td>
    <td>{entry.price}</td>
    <td>{entry.sale ? 'Yes' : 'No' }</td>
  </tr>
);

export default HistoryListItem;