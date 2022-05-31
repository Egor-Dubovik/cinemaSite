import { getVideo } from "./services.js";

const listCards = document.querySelector('.other-films__list');

const randerCards = (data, type) => {
  listCards.textContent = '';
  Promise.all(data.map(async (item) => {
    // console.warn(item);
    const mediaType = item.media_type ? item.media_type : type;

    const video = await getVideo(item.id, mediaType);
    const key = video.results[0]?.key;

    const card = document.createElement('li');
    card.className = 'other-films__item';

    const link = document.createElement('a');
    if (key) link.href = `https://youtu.be/${key}`;
    link.className = 'other-films__link';
    if (item.vote_average) link.dataset.rating = item.vote_average;


    const img = document.createElement('img');
    img.className = 'other-films__img';
    img.alt = `постер:${item.name ?? item.title}`;
    if (!item.poster_path) {
      img.src = "img/no_poster.jpg";
    } else {
      img.src = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    }


    const cardInfo = document.createElement('a');
    cardInfo.className = 'other-films__card-info tube';


    const title = item.title ? item.title : ' ';
    const cardTitle = document.createElement('h3');
    cardTitle.className = 'other-films__card-title';
    cardTitle.textContent = `${title}`

    const cardOverview = document.createElement('span');
    cardOverview.className = 'other-films__card-overview';
    cardOverview.textContent = `${item.overview}`

    cardInfo.append(cardTitle);
    cardInfo.append(cardOverview);

    if (key) {
      const cardBtn = document.createElement('a');
      cardBtn.className = 'other-films__card-btn';
      cardBtn.href = `https://youtu.be/${key}`;
      cardInfo.href = `https://youtu.be/${key}`;
      cardInfo.append(cardBtn);
    }

    card.append(cardInfo);
    card.append(link);
    link.append(img);

    return card;
  })).then(cards => listCards.append(...cards))
}



export default randerCards;