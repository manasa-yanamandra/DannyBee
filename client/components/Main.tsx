import { Link } from 'react-router-dom'
import DannyBeeImage from '../image/DannyBee.png'
import { Container } from 'postcss'
// import DannyBeeImage from './assets/DannyBee.png' // Import the image

export default function Main() {
  function handleClick(e) {
    if (e.target.id === 'btn') {
      console.log('you clicked')
    }
  }

  const id = randomNumberGeneraton(1, 100)

  return (
    <div className="mainContainer">
      <div className="title">
        <h1>DannyBee...</h1>
      </div>
      <div className="welcomeMain">
        <img src={DannyBeeImage} alt="Danny Bee" />
        {/* Use the imported image */}
        <div className="welcomeContainer">
          <p>
            Danny DeVito, as a surprisingly supportive coach, helps a nervous
            young contestant prepare for the national spelling bee. The
            contestant's secret weapon? They visualize Disney characters to help
            them spell tricky words. For example, "onomatopoeia" becomes "Olaf,
            Nemo, Owl, Mickey, Ariel, Tigger, or Eeyore, I suppose?" He created
            a unique method of helping... which is DannyBee app to help relax.
            With this app and Danny's gruff encouragement lead them to an
            unexpected victory
          </p>
          <button id="btn" onClick={handleClick} className="button">
            <Link to={`/game/${id}`}>Play Now</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

//utilities
function randomNumberGeneraton(min: number, max: number) {
  return Math.floor(Math.random() * max - min + 1) + min
}
