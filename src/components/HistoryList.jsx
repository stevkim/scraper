import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react'
import HistoryListItem from './HistoryListItem';

const HistoryList = () => {
  const list = useSelector(state => state.session.productHistory);
  const [page, setPage] = useState(1);
  const count = 10;

  const activeList = useMemo(() => {
    return list.slice((page * count - count), page * count);
  }, [page, list]);

  const pageCount = useMemo(() => {
    return Array.from(Array(Math.ceil(list.length / 10))).map((space, index) => {
      return {
        key: `page-number-${index + 1}`,
        page: index + 1
      }
    })
  }, [list]);

  const handlePage = (current) => {
    if (current === 0 || current > pageCount.length) return;
    setPage(current);
  };

  return (
    <>
      <table className='history-table'>
        <h2>Price History</h2>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Price</th>
          <th>Sale</th>
        </tr>
        {activeList.length > 0
          ? activeList.map(entry => <HistoryListItem key={entry._id} entry={entry} />)
          : <div>No previous price history!</div>
        }
      </table>
      {list.length > 10 &&
        <div className='history-pagination'>
          <button onClick={() => handlePage(page - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1em', height: '1em'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          {
            pageCount.map(pages => {
              return <div key={pages.key} onClick={() => handlePage(pages.page)} className={pages.page === page && 'active-page'}>{pages.page}</div>
            })
          }
          <button onClick={() => handlePage(page + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1em', height: '1em'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      }
    </>
  )
}

export default HistoryList;