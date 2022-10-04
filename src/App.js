import "./App.css";
import React, { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MediaCard from "./Components/MediaCard.js";
// import Slider from "./Components/Slider.js";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import img_Bike_1 from "./Images/Bike_1.jpg";
import img_Bike_2 from "./Images/Bike_2.jpg";
import img_Bike_3 from "./Images/Bike_3.jpg";
import img_Bike_4 from "./Images/Bike_4.jpg";
import img_Bike_5 from "./Images/Bike_5.jpg";
import img_iPhone_1 from "./Images/iPhone_1.jpg";
import img_iPhone_2 from "./Images/iPhone_2.jpg";
import img_iPhone_3 from "./Images/iPhone_3.jpg";
import img_iPhone_4 from "./Images/iPhone_4.jpg";
import img_Car_1 from "./Images/Car_1.jpg";
import img_Car_2 from "./Images/Car_2.jpg";
import img_Car_3 from "./Images/Car_3.jpg";
import img_Car_4 from "./Images/Car_4.jpg";
import img_Car_5 from "./Images/Car_5.jpg";
import img_Car_6 from "./Images/Car_6.jpg";

function App() {
  const details = [
    {
      id: 1,
      image: img_iPhone_1,
      category: "mobile",
      title: "IPhone",
      model: "X",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "30,000",
    },
    {
      id: 2,
      image: img_iPhone_2,
      category: "mobile",
      title: "IPhone",
      model: "12",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "40,000",
    },
    {
      id: 3,
      image: img_iPhone_3,
      category: "mobile",
      title: "IPhone",
      model: "13 Pro",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 4,
      image: img_iPhone_4,
      category: "mobile",
      title: "IPhone",
      model: "6 Plus",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 5,
      image: img_Bike_1,
      title: "Unique",
      category: "bike",
      model: "70",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 6,
      image: img_Bike_2,
      category: "bike",
      title: "Super Asia",
      model: "70",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 7,
      image: img_Bike_3,
      category: "bike",
      title: "Yamaha",
      model: "150",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 8,
      image: img_Bike_4,
      category: "bike",
      title: "Suzuki",
      model: "150",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 9,
      image: img_Bike_5,
      category: "bike",
      title: "Honda",
      model: "70",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 10,
      image: img_Car_1,
      category: "car",
      title: "Civic",
      model: "2018",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 11,
      image: img_Car_2,
      category: "car",
      title: "Freed",
      model: "2019",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 12,
      image: img_Car_3,
      category: "car",
      title: "Civic",
      model: "2021",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 13,
      image: img_Car_4,
      category: "car",
      title: "Vezel",
      model: "2022",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 14,
      image: img_Car_5,
      category: "car",
      title: "Vezel",
      model: "2019",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
    {
      id: 15,
      image: img_Car_6,
      category: "car",
      title: "Corolla",
      model: "2009",
      description:
        "The iPhone is a smartphone made by Apple with a touchscreen interface. The iPhone runs the iOS operating system",
      price: "50,000",
    },
  ];

  const [listData, setListData] = useState(details);
  const [allCategories, setAllCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [multiple, setMultiple] = useState([]);

  // extracting all categories from main product Array
  let getCategories = () => {
    let li = listData.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };

  // Render Item By DropDown  // For Select option
  let searchCategoryItem = (val) => {
    setSelectedCategory(val);
    let filteredList = listData.filter((x) => x.category == val);
    setFilterList([...filteredList]);
  };

  // search Item By DropDown and Input  // For text field
  let searchItem = (val) => {
    let filteredList = listData.filter(
      (x) =>
        (x.category == selectedCategory &&
          x.title.toLowerCase().includes(val.toLowerCase())) ||
        x.model.toLowerCase().includes(val.toLowerCase()) ||
        x.price.toLowerCase().includes(val.toLowerCase())
    );
    setFilterList([...filteredList]);
  };

  // it will run when component initialize ...
  useEffect(() => {
    getCategories();
  }, []);

  // Show filtered item of clicked category button

  // let searchCatg = (val) => {
  //   let a = setMultiple(val)
  //   console.log(val)
  //   let filteredList = listData.filter((x) => x.category === val);
  //   setFilterList([...filteredList]);
  // };
  let searchCatg = (val) => {
    let filteredList = listData.filter((x) => x.category === val);
    setFilterList([...filteredList]);
  };

  // Multi checkbox

  let getMultiple = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);

    if (checked) {
      // user checks the box
      setMultiple([...multiple, value]);
      let filteredList = listData.filter((x, i) => x.category === value);
      setFilterList([...filteredList]);
      console.log(filterList);
    } else {
      // user uncheck the box
      setMultiple(multiple.filter((e) => e !== value));
    }
  };

  // Show All categories
  let allCatg = () => {
    setFilterList([]);
  };

  return (
    <div>
      {/* Dropdown and searchfield in below grid */}
      <Grid container>
        <Grid item md={4} sm={5} xs={12}>
          <Box sx={{ padding: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Category"
                variant="standard"
                fullWidth={true}
                onChange={(e) => searchCategoryItem(e.target.value)}
                value={selectedCategory}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {allCategories.map((e, i) => (
                  <MenuItem key={i} value={e}>
                    {e}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item md={8} sm={7} xs={12}>
          <Box sx={{ padding: 2 }}>
            <TextField
              variant="standard"
              fullWidth={true}
              label="Search with title or model ..."
              onChange={(e) => searchItem(e.target.value)}
            />
          </Box>
        </Grid>
      </Grid>

      {/* <Slider /> */}

      {/* Horizontal Links */}
      <div
        className="bg-dark py-3"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <a className="ms-4 text-light fs-2" onClick={allCatg}>
          All
        </a>
        {allCategories.map((e, i) => (
          <a
            className="ms-4 text-light fs-2"
            key={i}
            onClick={() => {
              searchCatg(e);
            }}
          >
            {e.slice(0, 1).toUpperCase() + e.slice(1)}
          </a>
        ))}
      </div>

      {/* Multi checkbox */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop:'50px' }}>
        {allCategories.map((e, i) => (
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              value={e}
              label={e.slice(0, 1).toUpperCase() + e.slice(1)}
              onChange={(e) => {
                getMultiple(e);
              }}
            />
          </FormGroup>
        ))}
      </div>

      {/* Filtered item will appear below grid */}
      <Grid container spacing={4} px={12} py={4}>
        {filterList.map((e, i) => (
          <Grid item md={3} xs={12} sm={6} key={i} my={3}>
            <MediaCard
              src={e.image}
              title={e.title}
              model={e.model}
              price={`Rs: ${e.price}/-`}
              description={e.description}
              category={e.category}
            />
          </Grid>
        ))}
      </Grid>
      {/* <hr /> */}

      {/* All items of all category in below grid */}
      <Typography
        variant="h3"
        className="text-danger"
        sx={{
          textShadow: "2px 2px 10px grey",
          textAlign: "center",
          fontStyle: "oblique",
          fontWeight: "bold",
        }}
      >
        All Categories
      </Typography>
      <Grid container spacing={4} px={12} py={4}>
        {listData.map((e, i) => (
          <Grid item md={3} xs={12} sm={6} key={i} my={3}>
            <MediaCard
              src={e.image}
              title={e.title}
              model={e.model}
              price={`Rs: ${e.price}/-`}
              description={e.description}
              category={e.category}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
