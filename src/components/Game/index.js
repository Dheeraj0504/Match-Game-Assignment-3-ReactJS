import {Component} from 'react'

import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'

import './index.css'

class Game extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    const {tabsList, imagesList} = props
    this.state = {
      matchImageId: imagesList[0].id,
      activeTabId: tabsList[0].tabId,
    }
  }

  changeMatchImg = () => {
    const {imagesList} = this.props
    const totalNumberOfImg = imagesList.length
    // console.log(totalNumberOfImg)
    // console.log(Math.random() * totalNumberOfImg)
    const randomIndex = Math.floor(Math.random() * totalNumberOfImg)

    this.setState({matchImageId: imagesList[randomIndex].id})
  }

  checkMatchImage = id => {
    // console.log(id)
    const {matchImageId} = this.state
    // console.log(this.props)
    const {increaseScore, stopGame} = this.props

    if (matchImageId === id) {
      increaseScore()
      this.changeMatchImg()
    } else {
      stopGame()
    }
  }

  onClickTabBtn = tabId => {
    // console.log(tabId)
    this.setState({activeTabId: tabId})
  }

  getMatchImageUrl = () => {
    const {imagesList} = this.props
    const {matchImageId} = this.state
    const matchImg = imagesList.find(eachImg => eachImg.id === matchImageId)

    return matchImg.imageUrl
  }

  render() {
    const {tabsList, imagesList} = this.props
    const matchImageUrl = this.getMatchImageUrl()
    const {activeTabId} = this.state

    const filteredImgList = imagesList.filter(
      eachImg => eachImg.category === activeTabId,
    )

    return (
      <div className="game-container">
        <img className="match-image" src={matchImageUrl} alt="match" />
        <ul className="tabs-list">
          {tabsList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              isActive={eachTab.tabId === activeTabId}
              onClickTabBtn={this.onClickTabBtn}
            />
          ))}
        </ul>
        <ul className="thumbnails-list">
          {filteredImgList.map(eachImg => (
            <ThumbnailItem
              key={eachImg.id}
              thumbnailDetails={eachImg}
              checkMatchImage={this.checkMatchImage}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Game
