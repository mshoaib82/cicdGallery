import fetcher from './fetcher';
import autocomplete from './autocomplete';

window.localStorage.clear();

const nav= document.createElement('nav')
const divSearch = document.createElement('div')

const searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.className='searchBar';
searchBar.placeholder='Search for';
divSearch.append(searchBar);

const btnSearch = document.createElement('button');
btnSearch.textContent = "Search";
btnSearch.className="searchBtn";
divSearch.append(btnSearch);

// let state = { 
//     keywords: []
// };

const photoBlock = document.createElement('section');

//searchBar.addEventListener('click',autocomplete(state.keywords));

let pageNr = 0;
const recArr = [];
btnSearch.addEventListener('click',async ()=>{
    //clear the imgs from before
    const inputVal = searchBar.value;
    console.log('test!!!');
    if (inputVal) {
        await fetcher(inputVal,photoBlock,pageNr);
        //window.localStorage.setItem(pageNr+1,photoBlock.innerHTML); //<section>img1 img2 img3</section>
        
        photoBlock.innerHTML='';
        pageNr++;
        console.log('pageNr after one search '+pageNr);
    }

    if (recArr.length===3) {recArr.shift(); } 
    recArr.push(inputVal);
    console.log('recArr:   '+recArr);
});


// div with buttons for PREV AND NEXT
//const paBtnContainer = document.createElement('div');
const prevBtn = document.createElement('button');
prevBtn.textContent='prev';

prevBtn.addEventListener('click', ()=>{
    if (pageNr>1) {
        pageNr--;
        const prevHtml = window.localStorage.getItem(pageNr);
        photoBlock.innerHTML = prevHtml;
        
        console.log('pageNr after clicking prev '+pageNr);
    }
});


const nextBtn = document.createElement('button');
nextBtn.textContent='next';

nextBtn.addEventListener('click', ()=>{
    const nextPageNr = Number(pageNr)+1;
    const nextHtml = window.localStorage.getItem(nextPageNr);
    if (nextHtml) {
        photoBlock.innerHTML = nextHtml;
        console.log('pageNr after clicking next: '+ nextPageNr);
        pageNr++;
    }
});

// FOOTER with GITHUB 
//!!!!!!  link to github,  SPA ???
const githubLink = 'https://github.com/saltsthlm/jsfs-summer-22-lab-cicdGallery/blob/main/README-step-1.md'
const footer = document.createElement('footer');
footer.innerHTML = `<a href= ${githubLink}>Github logo link</a>`;

// Append heading node to the DOM
const app = document.querySelector('body')
app.append(nav);
app.append(divSearch);
app.append(photoBlock);
app.append(prevBtn);
app.append(nextBtn);
app.append(footer);



//localStorage:  {pages:'{1:ddd,2:sss,...}', recommendation: '[r1,r2,r3]'}

