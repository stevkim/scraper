

const ProductList = ({ list, handleClick }) => {
  return (
    <div>
      <h1>Currently Tracking: </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      {
        list.map(link => {
          return <button key={link.name} onClick={() => handleClick(link)}>{link.name}</button>
        })
      }
      </div>
    </div>
  )
}

export default ProductList;