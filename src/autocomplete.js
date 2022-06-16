const autocomplete = (recArr, scrollMenu) => {
  recArr.forEach(search => {
    scrollMenu.innerHTML = `<option>${scrollMenu.innerHTML}`;
    scrollMenu.querySelector('option').innerText = search;
    console.log('autocomplete is working!');
  });
};

/* <div class='scrollMenu'>
   <option>cats</option>
   <option>dogs</option>
</div> */

export default autocomplete;
