import { useSelector } from 'react-redux';
import { useMemo, useState, useEffect } from 'react'
import HistoryListItem from './HistoryListItem';
import Modal from '../Utilities/Modal';
import DataChart from './DataChart';

const HistoryList = () => {
  const list = useSelector(state => state.session.productHistory);
  const [openChart, setOpenChart] = useState(false);
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

  useEffect(() => {
    if (openChart) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [openChart])

  return (
    <>
      <div className='table-title'>
        <h2>Price History</h2>
        <svg onClick={() => setOpenChart(true)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='icon'>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
        </svg>
      </div>
      <table className='history-table'>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Price</th>
          <th>Sale</th>
        </tr>
        {activeList.length > 0
          ? activeList.map(entry => <HistoryListItem key={entry._id} entry={entry} />)
          : <td colSpan='4' className='fallback-message'>No previous price history!</td>
        }
      </table>
      {list.length > 10 &&
        <div className='history-pagination flex-row'>
          <button onClick={() => handlePage(page - 1)}>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='icon'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          {
            pageCount.map(pages => {
              return <div key={pages.key} onClick={() => handlePage(pages.page)} className={pages.page === page && 'active-page'}>{pages.page}</div>
            })
          }
          <button onClick={() => handlePage(page + 1)}>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='icon'>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      }
      {openChart &&
        <Modal>
          <DataChart dataList={list} setOpenChart={setOpenChart} />
        </Modal>
      }
    </>
  )
}

export default HistoryList;