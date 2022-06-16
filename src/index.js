import fetcher from './fetcher';
import './style.scss';

window.localStorage.clear();

const nav = document.createElement('nav');
nav.innerHTML = '<h1>This is the LOGO...<h1>';

const divSearch = document.createElement('div');

const searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.className = 'searchBar';
searchBar.placeholder = 'Search for';
divSearch.append(searchBar);

const btnSearch = document.createElement('button');
btnSearch.textContent = 'Search';
btnSearch.className = 'searchBtn';
divSearch.append(btnSearch);

const photoBlock = document.createElement('section');

let pageNr = 0;
const recArr = [];
btnSearch.addEventListener('click', async () => {
  // clear the imgs from before
  const inputVal = searchBar.value;
  if (inputVal) {
    await fetcher(inputVal, photoBlock, pageNr);
    // window.localStorage.setItem(pageNr+1,photoBlock.innerHTML);
    // <section>img1 img2 img3</section>

    photoBlock.innerHTML = '';
    pageNr += 1;
    // console.log('pageNr after one search '+pageNr);
  }

  if (recArr.length === 3) { recArr.shift(); }
  recArr.push(inputVal);
  // console.log('recArr:   '+recArr);
  const recArrStr = JSON.stringify(recArr); // '['cats','dogs','birds']'
  localStorage.setItem('recommandations', recArrStr); // {'pages': '{....}', 'recommandations':'['cats','dogs','birds']'}
});

// div with buttons for PREV AND NEXT
// const paBtnContainer = document.createElement('div');
const prevBtn = document.createElement('button');
prevBtn.textContent = 'prev';

prevBtn.addEventListener('click', () => {
  if (pageNr > 1) {
    pageNr -= 1;
    const pagesObj = JSON.parse(window.localStorage.getItem('pages')); // {pages: '{1:dd, 2:ss, 3:aa}', recs: }
    // console.log(`${JSON.parse(window.localStorage.getItem('pages'))[pageNr]} pageObj`);
    const prevHtml = pagesObj[pageNr];
    photoBlock.innerHTML = prevHtml;
    // console.log(`pageNr after clicking prev ${pageNr}`);
  }
});

const nextBtn = document.createElement('button');
nextBtn.textContent = 'next';

const btnContainer = document.createElement('div');
btnContainer.className = 'btn-container';
btnContainer.append(prevBtn);
btnContainer.append(nextBtn);

nextBtn.addEventListener('click', () => {
  const nextPageNr = Number(pageNr) + 1;
  const pagesObj = JSON.parse(window.localStorage.getItem('pages')); // {pages: '{1:dd, 2:ss, 3:aa}', recs: }
  const nextHtml = pagesObj[nextPageNr]; // ???
  if (nextHtml) {
    photoBlock.innerHTML = nextHtml;
    // console.log('pageNr after clicking next: '+ nextPageNr);
    pageNr += 1;
  }
});

const scrollMenu = document.createElement('div');
scrollMenu.innerHTML = '<h1>Scrol menu</h1>';
// searchBar.addEventListener('click', autocomplete(recArr, scrollMenu));

// FOOTER with GITHUB
//! !!!!!  link to github,  SPA ???
const githubLink = 'https://github.com/saltsthlm/jsfs-summer-22-lab-cicdGallery/blob/main/README-step-1.md';
const footer = document.createElement('footer');
footer.innerHTML = `<a href= ${githubLink}>Github logo link</a>`;

// Append heading node to the DOM
const app = document.querySelector('body');
app.append(nav);
app.append(divSearch);
// app.append(autoForm);
app.append(photoBlock);
app.append(btnContainer);
app.append(footer);

// localStorage:  {pages:'{1:ddd,2:sss,...}', recommendation: '[r1,r2,r3]'}
