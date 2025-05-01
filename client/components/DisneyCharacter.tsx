import { useParams } from 'react-router-dom'
import { useDisneyCharacter } from '../apiClient'
import LoadingPage from './LoadingPage'
import { useEffect, useState } from 'react'
import JSConfetti from 'js-confetti'

export default function DisneyCharacter() {
  // const disneyCollection = useDisneyCharacters()
  // const { index } = useParams()
  // const disneyCharacters = Array(disneyCollection)[Number(index)]
  const { id } = useParams()

  const disneyCharacters = useDisneyCharacter(Number(id))
  const name = disneyCharacters.data?.data.name

  //This is where the users input will be displayed
  const [guessingArr, setGuessingArr] = useState([])

  const [isReveal, setIsReveal] = useState(false)

  // const [funnyText, setFunnyText] = useEffect()

  if (disneyCharacters.isError) return <p data-testid="error">error</p>
  if (disneyCharacters.isPending) return <LoadingPage />

  // get current character image/name and place in  Disneycharacter

  //could't get the data.name. will solve tomorrow
  // if (disneyCharacters.data) {
  if (disneyCharacters.data) {
    const imageUrl = disneyCharacters.data.data.imageUrl

    // Keyboard inputs
    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ]

    //handle user input, add character to guessing Array
    const handleInputChange = (letter: string) => {
      setGuessingArr((prevGuessedLetter) => [...prevGuessedLetter, letter])

      // setGuessingArr(...letter.target.value)
    }
const jsConfetti = new JSConfetti()
    const checkForWin = () => {
      const arrayToString = guessingArr.join('')
      console.log(arrayToString)
      console.log(name)
      if (arrayToString === name?.toLowerCase()) {
        alert('YOU GOT THE DANNY BEEEEEEEEEE')
        setIsReveal(true)
        jsConfetti.addConfetti({
          emojis: ['🐝','🍯'],
          confettiNumber: 200
       })
      } else {
        alert('try again'!)
      }
    }

    return (
      <>
        <div className='gamePage'>
        <div>
          <h1>{isReveal ? name : 'Guess the character'}</h1>

          <img src={imageUrl} alt={name || 'Image'} />
        </div>
        <div className="flex flex-row">
          {guessingArr.map((item, index) => (
            <p
              id="answer"
              className="lg:text-xx1 sm:text-md px-2 md:text-xl"
              key={index}
            >{`${item}  `}</p>
          ))}
        </div>

        <div>
          <div className="keyBoard">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className="rbg-blue-500 text-blue rounded border border-blue-700 px-4 py-2 font-bold hover:bg-blue-700"
                id="alphabtn"
                onClick={() => handleInputChange(letter)}
              >
                {letter}
              </button>
            ))}

            <button
              className="rbg-blue-500 text-blue rounded border border-blue-700 px-4 py-2 font-bold hover:bg-blue-700"
              onClick={checkForWin}
            >
              Check 4 win!
            </button>
          </div>
        </div>
        </div>
      </>
    )
  }
}
