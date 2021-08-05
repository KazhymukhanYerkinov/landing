import './block.scss';

const Block = ({ items }) => {
  return (
    <div className = 'block'>
      { items.map(item => (
        <div className = 'block__content' key = { item.id }>
          <img src = { item.image } alt = '' className = 'block_image'/>
          <div className = 'text text__guide block__text'> { item.text }</div>
        </div>
      )) }
    </div>
  )
}

export default Block;