const movies  = {
    fakeDB: [],

    initdb(){
        
        this.fakeDB.push({
            id: 101,
            movieName: 'Tenet',
            about: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
            imdb: 7.5,
            length: '2h 30min',
            tags: 'Action, Sci-Fi, Thriller',
            releaseDate: '27 August 2020 (Canada)',
            poster: 'tenet.jpg',
            bigPoster: 'tenet.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,
        })

        this.fakeDB.push({
            id: 102,
            movieName: 'Extraction',
            about: 'A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.',
            imdb: 6.7,
            length: '1h 57min',
            tags: 'Action, Thriller',
            releaseDate: '24 April 2020 (Canada) ',
            director: 'Sam Hargrave',
            poster: 'exc.jpg',
            bigPoster: 'exc.jpg',
            featured: false,
            type: 'movie',
            Rprice: 4.49,
            Bprice: 11.49,
        })

        this.fakeDB.push({
            id: 103,
            movieName: 'The Fate of the Furious',
            about: 'With Dom and Letty married, Brian and Mia retired and the rest of the crew exonerated, the globe-trotting team has found some semblance of a normal life. They soon face an unexpected challenge when a mysterious woman named Cipher forces Dom to betray them all. Now, they must unite to bring home the man who made them a family and stop Cipher from unleashing chaos. ',
            imdb: 6.7,
            length: '2h 29min',
            tags: 'Action, Adventure, Crime',
            releaseDate: '14 April 2017 (Canada)',
            poster: 'F8.jpg',
            bigPoster: 'F8.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,
        })

        this.fakeDB.push({
            id: 104,
            movieName: 'Aquaman',
            about: 'Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures. He goes on a quest to retrieve the legendary Trident of Atlan and protect the water world.',
            imdb: 6.9,
            length: '1h 57min',
            tags: 'Action, Adventure, Fantasy',
            releaseDate: '21 December 2018 (Canada)',
            poster: 'aquaman.jpg',
            director: 'James Wan',
            bigPoster: 'aquaman.jpg',
            featured: false,
            type: 'movie',
            Rprice: 4.49,
            Bprice: 11.49,
        })

        this.fakeDB.push({
            id: 105,
            movieName: 'Bright',
            about: 'In an alternate present day, humans, orcs, elves and fairies have been coexisting since the beginning of time. Two police officers, one a human, the other an orc, embark on a routine night patrol that will alter the future of their world as they know it. Battling both their own personal differences as well as an onslaught of enemies, they must work together to protect a young female elf and a thought-to-be-forgotten relic, which, in the wrong hands, could destroy everything.',
            imdb: 6.3,
            length: '1h 58min',
            tags: 'Action, Fantasy, Thriller ',
            releaseDate: '22 December 2017 (Canada)',
            poster: 'bright.jpg',
            bigPoster: 'bright.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,
        })

        this.fakeDB.push({
            id: 106,
            movieName: 'Alpha',
            about: 'Keda, the son of a tribe chief, tries to survive alone in the wilderness after his tribe leaves him. Incidentally, he finds himself in the company of an injured wolf abandoned by its pack.',
            imdb: 6.7,
            length: '1h 36min',
            tags: 'Action, Adventure, Drama',
            releaseDate: '17 August 2018 (Canada)',
            poster: 'alpha.jpg',
            bigPoster: 'alpha.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,
        })

        this.fakeDB.push({
            id: 107,
            movieName: 'Game of Thrones',
            about: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
            imdb: 9.3,
            length: '8 Seasons',
            tags: 'Action, Adventure, Drama',
            releaseDate: 'TV Series (2011–2019)',
            directors: 'David Benioff, D.B. Weiss',
            poster: 'got.jpg',
            bigPoster: 'got.jpg',
            featured: true,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })

        this.fakeDB.push({
            id: 108,
            movieName: 'The Trial of the Chicago 7',
            about: 'The film is based on the infamous 1969 trial of seven defendants charged by the federal government with conspiracy and more, arising from the countercultural protests in Chicago at the 1968 Democratic National Convention. The trial transfixed the nation and sparked a conversation about mayhem intended to undermine the U.S. government.',
            imdb: 7.8,
            length: '2h 10min',
            tags: 'Drama, History, Thriller',
            releaseDate: '16 October 2020 (Canada)',
            poster: 'tc7.jpg',
            bigPoster: 'tc7.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,
        })

        this.fakeDB.push({
            id: 109,
            movieName: 'Ava',
            about: 'Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.',
            imdb: 5.4,
            length: '1h 36min',
            tags: ' Action, Crime, Drama',
            releaseDate: '27 August 2020 (Canada)',
            poster: 'ava.jpg',
            bigPoster: 'ava.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,
        })

        this.fakeDB.push({
            id: 110,
            movieName: 'Mission: Impossible - Fallout',
            about: 'A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.',
            imdb: 7.7,
            length: '2h 27min',
            tags: 'Action, Adventure, Thriller',
            releaseDate: '27 July 2018 (Canada)',
            poster: 'mi7.jpg',
            bigPoster: 'mi7.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,
        })

        this.fakeDB.push({
            id: 111,
            movieName: 'Brick Mansions',
            about: 'An undercover Detroit cop navigates a dangerous neighborhood that is surrounded by a containment wall with the help of an ex-con in order to bring down a crime lord and his plot to devastate the entire city. ',
            imdb: 5.7,
            length: '1h 30min',
            tags: ' Action, Crime, Drama',
            releaseDate: '25 April 2014 (Canada)',
            poster: 'brickmansions.jpg',
            bigPoster: 'brickmansions.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,
        })

        this.fakeDB.push({
            id: 112,
            movieName: 'Money Heist',
            about: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
            imdb: 8.3,
            length: '5 Seasons',
            tags: 'Action, Crime, Mystery',
            releaseDate: 'TV Series (2017– )',
            poster: 'moneyH.jpg',
            bigPoster: 'moneyH.jpg',
            featured: true,
            type: 'tv',
            Rprice: 13.49,
            Bprice: 25.49,
            
        })

        this.fakeDB.push({
            id: 113,
            movieName: 'Monster Hunter',
            about: 'Behind our world, there is another -- a world of dangerous and powerful monsters that rule their domain with deadly ferocity. When Lt. Artemis and her loyal soldiers are transported from our world to the new one, the unflappable lieutenant receives the shock of her life. In a desperate battle for survival against enormous enemies with incredible powers and unstoppable, terrifying attacks, Artemis teams up with a mysterious hunter who has found a way to fight back.',
            imdb: 5.3,
            length: '1h 44min',
            tags: 'Action, Adventure, Fantasy ',
            releaseDate: '30 December 2020 (Canada)',
            poster: 'monsterhunter.jpg',
            bigPoster: 'monsterhunter.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,

        })

        this.fakeDB.push({
            id: 114,
            movieName: 'Project Power',
            about: 'When a pill that gives its users unpredictable superpowers for five minutes hits the streets of New Orleans, a teenage dealer and a local cop must team with an ex-soldier to take down the group responsible for its creation. ',
            imdb: 6,
            length: '1h 53min',
            tags: 'Action, Crime, Sci-Fi',
            releaseDate: '14 August 2020 (Canada)',
            poster: 'prjpwr.jpg',
            bigPoster: 'prjpwr.jpg',
            featured: true,
            type: 'movie',
            Rprice: 3.49,
            Bprice: 10.49,

        })

        this.fakeDB.push({
            id: 115,
            movieName: 'The 100',
            about: 'Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanity is lone survivors sends one hundred juvenile delinquents back to Earth, in hopes of possibly re-populating the planet.',
            imdb: 7.6,
            length: '7 Seasons',
            tags: 'Drama, Mystery, Sci-Fi',
            releaseDate: 'TV Series (2014–2020)',
            directors: 'Jason Rothenberg',
            poster: '100.jpg',
            bigPoster: '100.jpg',
            featured: true,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })

        this.fakeDB.push({
            id: 116,
            movieName: 'Stranger Things',
            about: 'It is the fall of 1984, about a year after Will Byers was found, and he has been plagued by seeing visions of the Upside Down featuring a more dangerous monster. That leads the boy to see a suspiciously friendly new doctor, with the possibility that Will is visions are the result of suffering from PTSD. Nancy deals with survivors remorse over the death of best friend Barb. Meanwhile, a new sinister entity threatens the Hawkins residents who survived the year-earlier events. New to the town is tomboy Max, who befriends the boys and attracts the romantic interests of Dustin and Lucas.',
            imdb: 8.7,
            length: '4 Seasons',
            tags: 'Drama, Fantasy, Horror',
            releaseDate: 'TV Series (2016– )',
            directors: 'Matt Duffer, Ross Duffer',
            poster: 'st.jpg',
            bigPoster: 'st.jpg',
            featured: false,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })

        this.fakeDB.push({
            id: 117,
            movieName: 'Dark',
            about: 'When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town is troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. Dark represents the first German original series produced for Netflix.',
            imdb: 8.8,
            length: '4 Seasons',
            tags: 'Crime, Drama, Mystery',
            releaseDate: 'TV Series (2017–2020)',
            directors: 'Baran bo Odar, Jantje Friese',
            poster: 'dark.jpg',
            bigPoster: 'dark.jpg',
            featured: true,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })

        this.fakeDB.push({
            id: 118,
            movieName: 'Ozark',
            about: 'Created by Bill Dubuque ("The Accountant," "The Judge"), this drama series stars Jason Bateman as Marty Byrde, a financial planner who relocates his family from Chicago to a summer resort community in the Ozarks. With wife Wendy and their two kids in tow, Marty is on the move after a money-laundering scheme goes wrong, forcing him to pay off a substantial debt to a Mexican drug lord in order to keep his family safe. While the Byrdes fate hangs in the balance, the dire circumstances force the fractured family to reconnect.',
            imdb: 8.4,
            length: '4 Seasons',
            tags: 'Crime, Drama, Thriller',
            releaseDate: 'TV Series (2017– )',
            directors: 'Bill Dubuque, Mark Williams',
            poster: 'ozark.jpg',
            bigPoster: 'ozark.jpg',
            featured: false,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })

        this.fakeDB.push({
            id: 119,
            movieName: 'Lucifer',
            about: 'Lucifer, a demon, returns from hell to reside in Los Angeles and runs a club. He soon gets involved with the local police and assists them in solving tricky criminal cases.',
            imdb: 8.1,
            length: '5 Seasons',
            tags: 'Crime, Drama, Fantasy',
            releaseDate: 'TV Series (2016– )',
            directors: 'Tom Kapinos',
            poster: 'luc.jpg',
            bigPoster: 'luc.jpg',
            featured: true,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })

        this.fakeDB.push({
            id: 120,
            movieName: 'Narcos',
            about: 'Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late 80s in this raw, gritty original series. Also detailed are the actions taken by law enforcement as they battle in the war on drugs, targeting notorious and powerful figures that include drug lord Pablo Escobar. As efforts are made to control cocaine, one of the worlds most valuable commodities, the many entities involved -- legal, political, police, military and civilian -- find themselves in conflict.',
            imdb: 8.8,
            length: '3 Seasons',
            tags: 'Biography, Crime, Drama',
            releaseDate: 'TV Series (2015–2017) ',
            directors: 'Carlo Bernard, Chris Brancato, Doug Miro',
            poster: 'narcos.jpg',
            bigPoster: 'narcos.jpg',
            featured: false,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })

        this.fakeDB.push({
            id: 121,
            movieName: 'Bodyguard',
            about: 'War veteran David Budd finds work as a police sergeant with the Metropolitan Police Service in London, in the Royalty and Specialist Protection branch. He is assigned to protect the home secretary, the Rt Hon Julia Montague MP, a controversial and ambitious politician who is described as `the sociopath by one of her aides, and who has plans to introduce invasive new surveillance powers for security forces. Finding himself increasingly at odds with Montagues policies and personality, and dealing with physical and psychological scars from his time serving in Afghanistan, volatile Budd is torn between his beliefs and his duty to protect.',
            imdb: 8.1,
            length: '1 Seasons',
            tags: 'Crime, Drama, Thriller ',
            releaseDate: 'TV Series (2018)',
            directors: 'Jed Mercurio',
            poster: 'bg.jpg',
            bigPoster: 'bg.jpg',
            featured: true,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })

        this.fakeDB.push({
            id: 122,
            movieName: 'Peaky Blinders',
            about: 'Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.',
            imdb: 8.8,
            length: '6 Seasons',
            tags: 'Crime, Drama',
            releaseDate: 'TV Series (2013– )',
            directors: 'Steven Knight',
            poster: 'pb.jpg',
            bigPoster: 'pb.jpg',
            featured: true,
            type: 'tv',
            Rprice: 19.49,
            Bprice: 39.49,  
        })
    },

    getAllMoviesAndTV(){
        return this.fakeDB;
    },

    getAllMovies()  {
        const allMovies = this.fakeDB.filter(movies => movies.type === 'movie');
        return allMovies;
    },

    getAllTV()  {
        const allTV = this.fakeDB.filter(movies => movies.type === 'tv');
        return allTV;
    },

    getMovieByid(id)
    {

        // const foundMovie = this.getAllMoviesAndTV().find(movies.id = id);
         const foundMovie = this.fakeDB.find((movie) => {
             return movie.id == id;
         })
        return foundMovie;
    },

    getMovieNameByid(id)
    {
        const foundMovie = this.fakeDB.find((movie) => {
            return movie.id == id;
        })
        return foundMovie.movieName;
    },

    getFeaturedMovie()
    {
        const featuredMovie = this.getAllMovies().filter(movies => movies.featured);
        return featuredMovie;
    },

    getFeaturedTV()
    {
        const featuredTV = this.getAllTV().filter(movies => movies.featured);
        return featuredTV;
    },

    getAva()
    {
        const ava = this.getAllMovies().find((movies) => {
            return movies.movieName === "Ava";
        })
        return ava;
    }
}

movies.initdb();
module.exports = movies;