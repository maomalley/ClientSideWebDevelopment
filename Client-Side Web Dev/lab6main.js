'use strict';
/* Declare strict mode */

const allCards = [
    {
        cardType: 'bear',
        cardName: 'Bear',
        cardDescription: 'A fluffy pink bear.',
        faSymbol: 'fa-snowflake',
        faSymbolType: 'fas',
        cardArt: 'https://image.ibb.co/bxNtWp/card8.png',
    },
    {
        cardType: 'penguin',
        cardName: 'Penguin',
        cardDescription: 'A very fancy penguin.',
        faSymbol: 'fa-linux',
        faSymbolType: 'fab',
        cardArt: 'https://image.ibb.co/iap7rp/card9.png',
    },
    {
        cardType: 'koala',
        cardName: 'Koala',
        cardDescription: 'A happy koala.',
        faSymbol: 'fa-snowflake',
        faSymbolType: 'fas',
        cardArt: 'https://image.ibb.co/crgyxU/card10.png',
    },
    {
        cardType: 'sloth',
        cardName: 'Sloth',
        cardDescription: 'A happy sloth.',
        faSymbol: 'fa-coffee',
        faSymbolType: 'fas',
        cardArt: 'https://image.ibb.co/bBdBHU/card11.png',
    },
    {
        cardType: 'lion',
        cardName: 'Lion',
        cardDescription: 'A proud lion.',
        faSymbol: 'fa-coffee',
        faSymbolType: 'fas',
        cardArt: 'https://image.ibb.co/hKXSrp/card12.png',
    },
];

const data = {
  cardCount: 0,
  cards: [],
};

const vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        reshuffle: function() {

        }
    }
});

const filteredCards = allCards.filter((card, index) => index < 5);
data.cards.push(...filteredCards);