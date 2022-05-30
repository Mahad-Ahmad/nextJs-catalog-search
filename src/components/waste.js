// const itemsUpdate = backendData.filter((item) => {
//   var filterCategory =
//     item.category.toLowerCase().indexOf(_searchInput.toLowerCase()) > -1;
// var filterYear =
//   item.ano.toLowerCase().indexOf(this.state.filterYear.toLowerCase()) >
//   -1;
// var filterReso =
//   item.reso.toLowerCase().indexOf(this.state.filterReso.toLowerCase()) >
//   -1;
// return filterTitle && filterYear && filterReso;
// console.log(filterCategory);
// return filterCategory;
// });
// console.log(filterList());
// function filterItems(items, price) {
//   return items.filter((item) => {
//     return item.price >= price[0] && item.price <= price[1];
//   });
// }
// const filteredRange =
//   !start && !end
//     ? backendData
//     : backendData.filter((data) => data.price >= start && data.price <= end);

// const filtered1 = !_searchBoolean
//   ? backendData
//   : backendData.filter(
//       (data) => data.completed === _searchBoolean,
//       console.log(data)
//     );

{
  /* <Slider
        sx={{ ml: 3, maxWidth: 300 }}
        color="secondary" */
}
{
  /* // max="400" */
}
{
  /* getAriaLabel={() => "Price Range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      /> */
}

<Switch
  checked={checked}
  onChange={handleChange}
  inputProps={{ "aria-label": "controlled" }}
/>;

// const filtered = !_searchInput
//   ? backendData
//   : backendData.filter(
//       (data) =>
// data.category.toLowerCase().includes(_searchInput.toLowerCase())
// data.price.toLowerCase().includes(_searchInput.toLowerCase())
// );

const [checked, setChecked] = useState();

// const filterList = () => {
//   if (_searchInput && _searchRange && _searchBoolean) {
//     return backendData.filter(
//       (data) =>
//         data.title.toLowerCase().includes(_searchInput.toLowerCase()) &&
//         data.id >= _searchRange[0] &&
//         data.id <= _searchRange[1]
//     );
//   } else if (_searchInput) {
//     return backendData.filter((data) =>
//       data.title.toLowerCase().includes(_searchInput.toLowerCase())
//     );
//   } else if (_searchRange) {
//     return backendData.filter(
//       (data) => data.id >= _searchRange[0] && data.id <= _searchRange[1]
//     );
//   } else if (_searchBoolean) {
//     return backendData.filter(
//       (data) => data.completed === _searchBoolean
//       // console.log(data)
//     );
//   } else {
//     return backendData;
//   }
// };

// else if (_searchRange) {
//   return backendData.filter(
//     (data) => data.id >= _searchRange[0] && data.id <= _searchRange[1]
//   );
// }

// const filteredRange = !_searchRange
//   ? backendData
//   : backendData.filter(
//       (data) => data.price >= _searchRange[0] && data.price <= _searchRange[1]
//     );

// const button = () => {
//     setStart(value[0]);
//     setEnd(value[1]);
//   };
//   console.log(start,

//     <Slider
//     sx={{ ml: 3, maxWidth: 300 }}
//     color="secondary"
//     max={400}
//     getAriaLabel={() => "Price Range"}
//     value={value}
//     onChange={handleRange}
//     valueLabelDisplay="auto"
//     getAriaValueText={valuetext}
//   />

//   const [start, setStart] = useState(0);
//   const [end, setEnd] = useState(0);
//   const [value, setValue] = React.useState([20, 400]);

//   <Button onClick={button} variant="fill">
//   search
// </Button>
