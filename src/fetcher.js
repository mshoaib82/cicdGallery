/* Fetch API */
const fetcher =async (inputVal,imageDiv,pageNr) =>{
  const url = `https://api.unsplash.com/search/photos?query=${inputVal}&per_page=10&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k`;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.results.length===0) {
                return imageDiv.textContent='Image not found!'; 
            }
            for (let i = 0; i < data.results.length; i++) {
                let imageElement = document.createElement('img');
                imageElement.src = data.results[i].urls.thumb;
                imageDiv.append(imageElement);
                
            }
            console.log('The fetcher is working!');
            window.localStorage.setItem(pageNr+1,imageDiv.innerHTML); 
        });
}
export default fetcher;