const initeState = [
  {
    title: "Family Guy",
    id: 4,
    img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
  },

  {
    title: "The Croods",
    id: 5,
    img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
  },

  {
    title: "Friends",
    id: 6,
    img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
  }
];

const recommendation = (state = initeState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recommendation;
