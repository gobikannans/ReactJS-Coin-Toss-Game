import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: 0, heads: 0, tails: 0, total: 0}

  onHeadOrTail = () => {
    const {toss} = this.state
    let imgEl
    if (toss === 0) {
      imgEl = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          className="img"
          alt="toss result"
        />
      )
    } else {
      imgEl = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          className="img"
          alt="toss result"
        />
      )
    }
    return imgEl
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({toss: tossResult})

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        total: prevState.total + 1,
      }))
    }
  }

  render() {
    const {heads, tails, total} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          {this.onHeadOrTail()}
          <button className="btn-style" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total:{total}</p>
            <p className="result">Heads:{heads}</p>
            <p className="result">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
