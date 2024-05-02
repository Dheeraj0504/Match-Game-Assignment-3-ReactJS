import './index.css'

const ThumbnailItem = props => {
  // console.log(props)
  const {thumbnailDetails, checkMatchImage} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnail = () => {
    checkMatchImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailItem
