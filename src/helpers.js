// import './index.js'

// let pageNr = 0;
// const recArr = [];


// const searchHandler = () =>{

// }
// btnSearch.addEventListener('click', async () => {
//   // clear the imgs from before
//   const inputVal = searchBar.value;
//   if (inputVal) {
//     await fetcher(inputVal, photoBlock, pageNr);
//     // window.localStorage.setItem(pageNr+1,photoBlock.innerHTML);
//     // <section>img1 img2 img3</section>
    
//     photoBlock.innerHTML = '';
//     pageNr += 1;
//     // console.log('pageNr after one search '+pageNr);
//   }

//   if (recArr.length === 3) { recArr.shift(); }
//   recArr.push(inputVal);
//   // console.log('recArr:   '+recArr);
//   const recArrStr = JSON.stringify(recArr); // '['cats','dogs','birds']'
//   localStorage.setItem('recommandations', recArrStr); // {'pages': '{....}', 'recommandations':'['cats','dogs','birds']'}
// });

// // div with buttons for PREV AND NEXT
// // const paBtnContainer = document.createElement('div');

// prevBtn.addEventListener('click', () => {
//   if (pageNr > 1) {
//     pageNr -= 1;
//     const pagesObj = JSON.parse(window.localStorage.getItem('pages')); // {pages: '{1:dd, 2:ss, 3:aa}', recs: }
//     // console.log(`${JSON.parse(window.localStorage.getItem('pages'))[pageNr]} pageObj`);
//     const prevHtml = pagesObj[pageNr];
//     photoBlock.innerHTML = prevHtml;
//     // console.log(`pageNr after clicking prev ${pageNr}`);
//   }
// });


// nextBtn.addEventListener('click', () => {
//   const nextPageNr = Number(pageNr) + 1;
//   const pagesObj = JSON.parse(window.localStorage.getItem('pages')); // {pages: '{1:dd, 2:ss, 3:aa}', recs: }
//   const nextHtml = pagesObj[nextPageNr]; // ???
//   if (nextHtml) {
//     photoBlock.innerHTML = nextHtml;
//     // console.log('pageNr after clicking next: '+ nextPageNr);
//     pageNr += 1;
//   }
// });

// export default helpers