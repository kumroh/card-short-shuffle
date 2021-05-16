class Card {
    constructor() {
        const cardList = document.querySelectorAll('.card');
        this.cards = Array.from(cardList);

        const shuffleButton = document.querySelector('.shuffle');
        shuffleButton.addEventListener('click', this.shuffle.bind(this));

        const shortButton = document.querySelector('.short');
        shortButton.addEventListener('click', this.short.bind(this));
    }



    shuffle() {
        const shuffledCards = this.cards.sort(() => Math.random() > Math.random() ? 1 : -1);
        shuffledCards.forEach((card, i) => {
            card.style.order = `${i + 1}`;
        });
    }

    short() {
        this.cards.forEach((card) => {
            card.removeAttribute('style');
        });
    }
}

new Card();
