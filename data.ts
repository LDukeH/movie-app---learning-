const recipes = [
  {
    id: "1",
    name: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta with creamy sauce, eggs, cheese, and pancetta.",
    ingredients: [
      "spaghetti",
      "eggs",
      "parmesan cheese",
      "pancetta",
      "black pepper",
      "salt",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZuXvUPIs4I6w64PeRs1exfx0KO5xStab4w&s",
  },
  {
    id: "2",
    name: "Chicken Tikka Masala",
    description:
      "Tender chicken pieces cooked in a spicy, creamy tomato sauce.",
    ingredients: [
      "chicken",
      "yogurt",
      "garam masala",
      "tomato sauce",
      "onion",
      "garlic",
      "ginger",
      "cream",
    ],
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala.jpg",
  },
  {
    id: "3",
    name: "Caprese Salad",
    description:
      "Fresh salad with tomatoes, mozzarella, and basil drizzled with olive oil.",
    ingredients: [
      "tomatoes",
      "mozzarella cheese",
      "fresh basil",
      "olive oil",
      "salt",
      "black pepper",
    ],
    image:
      "https://hips.hearstapps.com/hmg-prod/images/caprese-salad-recipe-2-664ceea357d6f.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
  },
  {
    id: "4",
    name: "Beef Tacos",
    description:
      "Crispy taco shells filled with seasoned beef, lettuce, cheese, and salsa.",
    ingredients: [
      "ground beef",
      "taco shells",
      "lettuce",
      "cheddar cheese",
      "salsa",
      "onion",
      "garlic",
    ],
    image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
  },
  {
    id: "5",
    name: "Chocolate Chip Cookies",
    description: "Soft and chewy cookies loaded with chocolate chips.",
    ingredients: [
      "flour",
      "butter",
      "sugar",
      "brown sugar",
      "eggs",
      "vanilla extract",
      "baking soda",
      "salt",
      "chocolate chips",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDzo4HSwSyPpFkx6Dh9MWO-eMhkEHxdgvYw&s",
  },
  {
    id: "6",
    name: "Vegetable Stir Fry",
    description:
      "Quick and colorful stir-fried vegetables with a savory soy sauce glaze.",
    ingredients: [
      "broccoli",
      "carrot",
      "bell pepper",
      "snap peas",
      "garlic",
      "soy sauce",
      "sesame oil",
      "ginger",
    ],
    image:
      "https://s.lightorangebean.com/media/20240914144639/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger_done.png",
  },
  {
    id: "7",
    name: "Pancakes",
    description: "Fluffy breakfast pancakes served with syrup or fresh fruit.",
    ingredients: [
      "flour",
      "milk",
      "eggs",
      "baking powder",
      "sugar",
      "salt",
      "butter",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qwnzSyyXMbOoSwK-MzU5HjqQxjONWscO2w&s",
  },
  {
    id: "8",
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with tomato, mozzarella, and fresh basil.",
    ingredients: [
      "pizza dough",
      "tomato sauce",
      "mozzarella cheese",
      "fresh basil",
      "olive oil",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2w-6ljxAJtEImAJ4zBsRnou1CoSAVmgvQw&s",
  },
  {
    id: "9",
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with creamy Caesar dressing and croutons.",
    ingredients: [
      "romaine lettuce",
      "parmesan cheese",
      "croutons",
      "Caesar dressing",
      "lemon juice",
      "anchovy paste",
    ],
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg",
  },
  {
    id: "10",
    name: "Grilled Salmon",
    description:
      "Perfectly grilled salmon fillets served with lemon and herbs.",
    ingredients: [
      "salmon fillets",
      "olive oil",
      "lemon",
      "garlic",
      "salt",
      "pepper",
      "fresh herbs",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRselIznoijy1jIf1_klBW6iU6kpXZNOHwCCg&s",
  },
  {
    id: "11",
    name: "Banana Smoothie",
    description: "Creamy banana smoothie with milk and honey.",
    ingredients: ["banana", "milk", "honey", "ice cubes", "vanilla extract"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbDtsUBJwNWuARt4DBlcgn8OSvy91zK2ZNw&s",
  },
  {
    id: "12",
    name: "Shakshuka",
    description: "Eggs poached in a spicy tomato and pepper sauce.",
    ingredients: [
      "eggs",
      "tomatoes",
      "bell peppers",
      "onion",
      "garlic",
      "spices",
      "olive oil",
    ],
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/12/Shakshuka-main-1.jpg",
  },
  {
    id: "13",
    name: "Avocado Toast",
    description:
      "Toasted bread topped with mashed avocado, salt, and chili flakes.",
    ingredients: [
      "bread",
      "avocado",
      "salt",
      "pepper",
      "chili flakes",
      "olive oil",
      "lemon juice",
    ],
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/avocado-toast-500x375.jpg",
  },
  {
    id: "14",
    name: "Tom Yum Soup",
    description: "Hot and sour Thai soup with shrimp and mushrooms.",
    ingredients: [
      "shrimp",
      "mushrooms",
      "lemongrass",
      "lime juice",
      "fish sauce",
      "chili",
      "cilantro",
    ],
    image: "https://www.recipetineats.com/tachyon/2019/09/Tom-Yum-soup_2.jpg",
  },
  {
    id: "15",
    name: "Greek Yogurt Parfait",
    description: "Layers of yogurt, granola, and fresh berries.",
    ingredients: [
      "Greek yogurt",
      "granola",
      "strawberries",
      "blueberries",
      "honey",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Elu_v-dssdgX6hOszZxqttD3bRzOi2NIyA&s",
  },
];

export default recipes;
