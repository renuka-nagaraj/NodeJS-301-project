const restaurant = require("../model/restaurant");
function restaurentBrand(req, res) {
  restaurant.create(
    {
      location: {
        latitude: 40.742051,
        longitude: -74.004821
      },
      distance: "5",
       rating: "5",
      restaurentName: "serwerw",
      cuisien_name: "Iwerere",
      budget: 150000,
      menu: "Panneerfry"
    //   menu: ["Panneerfry" , "Pepperfry"]
    },
    (error, postValue) => {
      if (error) throw Error(error.message);
      res.send({ data: postValue });
    }
  );
  // const brand = [{id: 1 , name: 'chiness food'}]
  // console.log(brand);
  // res.json(brand)
}

module.exports = restaurentBrand;
