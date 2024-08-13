import './SmallButton.css';

function SmallButton(props) {
    const { title = "Unknown" } =props
  return (
    <button className='small-button'>
        {title}
    </button>
  )
}

export default SmallButton