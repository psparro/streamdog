const movies  = {
    fakeDB: [],

    initdb(){
        this.fakeDB.push({
            id: 111,
            movieName: 'Money Heist',
            about: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
            imdb: 8.3,
            length: '5 Seasons',
            tags: 'Action, Crime, Mystery',
            releaseDate: 'TV Series (2017– )',
            poster: 'moneyH.jpg',
            bigPoster: 'moneyH.jpg',
            featured: true,
            tv: true,
        })
    }
}
