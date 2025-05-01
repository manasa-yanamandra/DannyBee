// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { renderRoute } from '../test/setup.tsx'
import nock from 'nock'

nock.disableNetConnect()

const EXAMPLE_CHARACTER = {
  info: {
    count: 1,
    totalPages: 1,
    previousPage: null,
    nextPage: null,
  },
  data: {
    _id: 112,
    films: ['Hercules (film)'],
    shortFilms: [],
    tvShows: ['Hercules (TV series)'],
    videoGames: ['Kingdom Hearts III'],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: 'https://disney.fandom.com/wiki/Achilles_(Hercules)',
    name: 'Achilles',
    imageUrl:
      'https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png',
    createdAt: '2021-04-12T01:31:30.547Z',
    updatedAt: '2021-12-20T20:39:18.033Z',
    url: 'https://api.disneyapi.dev/characters/112',
    __v: 0,
  },
}

describe('The game page', () => {
  it('shows a loading page', async () => {
    const scope = nock('https://api.disneyapi.dev')
      .get('/character/112')
      .reply(200, EXAMPLE_CHARACTER)

    const screen = renderRoute('/game/112')
    // const loadingIndicator = screen.getByText(/loading/i)
    const loadingIndicator = screen.getByTestId(/loading/i)

    // console.log('test loading:', loadingIndicator)
    expect(loadingIndicator).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })

  it('shows my data', async () => {
    const scope = nock('https://api.disneyapi.dev')
      .get('/character/112')
      .reply(200, EXAMPLE_CHARACTER)

    const screen = renderRoute('/game/112')
    const characterName = await screen.findByAltText('Achilles')

    expect(characterName).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
  it('got an error state', async () => {
    const scope = nock('https://api.disneyapi.dev')
      .get('/character/112')
      .reply(500)

    const screen = renderRoute('/game/112')
    const loadingIndicator = await screen.findByTestId('error')

    expect(loadingIndicator).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
