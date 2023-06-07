export const screens = {
    home: 'home',
    gameOptions: 'gameOptions',
    trivia: 'trivia',
}

export const screenMapping = {
    [screens.home]: {
        title: 'Home',
        next: () => screens.gameOptions,
        back: () => null,
    },
    [screens.gameOptions]: {
        title: 'Game Options',
        next: () => screens.trivia,
        back: () => screens.home,
    },
    [screens.trivia]: {
        title: 'Trivia',
        start: () => screens.home,
        back: () => screens.gameOptions,
    },
}