import './index.css'

const TabItem = props => {
  // console.log(props)
  const {tabDetails, isActive, onClickTabBtn} = props
  const {displayText, tabId} = tabDetails

  const activebtnClassName = isActive ? 'active-tab-btn' : ''
  const tabBtnChange = () => {
    onClickTabBtn(tabId)
  }

  return (
    <li>
      <button
        className={`tab-button ${activebtnClassName}`}
        type="button"
        onClick={tabBtnChange}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
