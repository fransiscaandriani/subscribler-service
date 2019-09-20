var request = require("request");

const BASE_URL = "http://localhost:8082";

const items = [
  {
    id: "184d716b-5299-4e55-811d-f10532202a6f",
    name: "Pancake",
    description: `A flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.`,
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/184d716b-5299-4e55-811d-f10532202a6f.jpg"
  },
  {
    id: "61ec68e1-f8cd-41c6-8c4c-d3accacc823d",
    name: "Maple Syrup",
    description: `Made from the xylem sap of sugar maple, red maple, or black maple trees, although it can also be made from other maple species.`,
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/61ec68e1-f8cd-41c6-8c4c-d3accacc823d.jpg"
  },
  {
    id: "c73c557b-94e2-44b1-9431-8deda0df0975",
    name: "Strawberry Jam",
    description: `Jam, jelly and preserves are all made from a combination of fruit and pectin, but jelly uses just the juice, jam uses crushed fruit and preserves use entire chunks of fruit. Use your strawberry jam in one of these tasty recipes.`,
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/c73c557b-94e2-44b1-9431-8deda0df0975.jpg"
  },
  {
    id: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
    name: "Coffee",
    description: `Brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa and Madagascar, the Comoros, Mauritius, and Réunion in the Indian Ocean.`,
    unit: "cup",
    imageUrl:
      "http://localhost:4200/assets/images/40db326c-aa8b-4297-9dc7-0d366320e6a7.jpg"
  },
  {
    id: "4eb138ec-ac9b-467b-b4cf-019319ce04e1",
    name: "Peanut Butter",
    description: `Food paste or spread made from ground dry-roasted peanuts. It often contains additional ingredients that modify the taste or texture, such as salt, sweeteners, or emulsifiers. Peanut butter is popular in many countries.`,
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/4eb138ec-ac9b-467b-b4cf-019319ce04e1.jpg"
  },
  {
    id: "2327f694-e14d-4cad-b2d5-668e456fc8c9",
    name: "Toast",
    description: `Bread that has been browned by exposure to radiant heat. This browning is the result of a Maillard reaction, altering the flavor of the bread and making it firmer so that it is easier to spread toppings on it.`,
    unit: "slice",
    imageUrl:
      "http://localhost:4200/assets/images/2327f694-e14d-4cad-b2d5-668e456fc8c9.jpg"
  },
  {
    id: "0e886426-d289-4446-a6b7-96229188ae71",
    name: "Cheese Toast",
    description: `Melty mozzarella, white cheddar, gruyere and parmesan cheese are layered on toasty bread to create this cheesy breakfast goodness.`,
    unit: "slice",
    imageUrl:
      "http://localhost:4200/assets/images/0e886426-d289-4446-a6b7-96229188ae71.jpg"
  },
  {
    id: "6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Turkey Ham & Omelette Sandwich",
    description: `A delicious reason to get out of bed - turkey ham, egg omelette and cream cheese between two soft buns.`,
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Egg Mayo Multigrain Croissant",
    description:
      "Bite into a soft, flaky multigrain croissant that is overflowing with flavorful egg mayo and cheese.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "6cc23388-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Chicken Ham & Cheese Panwich",
    description:
      "Two breakfast favorites unite in one scrumptious panwich. Black pepper chicken ham and egg sits between two fluffy buttery pancakes.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/6cc23388-d09a-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "6cc234c8-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Egg White, Roasted Pepper, Mushroom & Cheddar Wrap",
    description:
      "A soft tortilla wrap filled with sautéed mushrooms, caramelized pepper and egg white.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/6cc234c8-d09a-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "6cc23694-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Turkey Ham, Egg White and Cheddar Sandwich",
    description:
      "A fluffy egg white patty served simply with turkey ham and aged cheddar cheese in a lightly toasted wholegrain bun. A breakfast classic.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/6cc23694-d09a-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Rosemary Chicken & Emmental Cheese Croissant",
    description:
      "This buttery flaky croissant is filled with chicken mayo and aromatic rosemary with emmental cheese, coupled with celery bits for that extra crunch in every bite.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4.jpg"
  }
];

const sbucks_packages = [
  {
    id: "b018400d-a81a-4a7e-8d1c-3dae05d062f6",
    name: "Breakfast Pancakes with Coffee",
    description:
      "Slice into three golden brown and perfectly round discs of fluffy, buttery pancakes. Top it off with a drizzle of maple syrup or strawberry jam.",
    imageUrl:
      "http://localhost:4200/assets/images/b018400d-a81a-4a7e-8d1c-3dae05d062f6.jpg",
    cycle: "D",
    items: [
      {
        itemId: "184d716b-5299-4e55-811d-f10532202a6f",
        quantity: 3
      },
      {
        itemId: "61ec68e1-f8cd-41c6-8c4c-d3accacc823d",
        quantity: 1
      },
      {
        itemId: "c73c557b-94e2-44b1-9431-8deda0df0975",
        quantity: 1
      },
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "1b73589f-6783-449d-904f-50346a180561",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "03b7566f-e6f4-41cf-b21a-4aef97339bdc",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "b75ef953-fa3f-4fdf-9658-33203e748746",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  },
  {
    id: "f35c3a92-1197-4889-b084-977c1f4dba3b",
    name: "Peanut Butter & Jelly Toast with Coffee",
    description:
      "An irresistible spin on a breakfast classic – your favorite toast now comes cloaked in crushed biscuit.",
    imageUrl:
      "http://localhost:4200/assets/images/f35c3a92-1197-4889-b084-977c1f4dba3b.jpg",
    cycle: "D",
    items: [
      {
        itemId: "2327f694-e14d-4cad-b2d5-668e456fc8c9",
        quantity: 2
      },
      {
        itemId: "4eb138ec-ac9b-467b-b4cf-019319ce04e1",
        quantity: 1
      },
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      },
      {
        itemId: "c73c557b-94e2-44b1-9431-8deda0df0975",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "3d202d5b-9748-4261-906c-4149ed101105",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "bf0a905e-7da6-4708-98a0-94e4462b4c6b",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "5dd35f3b-a0dd-4648-a280-ba5ec6da6d07",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  },
  {
    id: "c5fd2f6f-3ba3-4fe9-bbc9-8435d76a46c3",
    name: "Four Cheese Toast with Coffee",
    description:
      "Melty mozzarella, white cheddar, gruyere and parmesan cheese are layered on toasty bread to create this cheesy breakfast goodness.",
    imageUrl:
      "http://localhost:4200/assets/images/c5fd2f6f-3ba3-4fe9-bbc9-8435d76a46c3.jpg",
    cycle: "D",
    items: [
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      },
      {
        itemId: "0e886426-d289-4446-a6b7-96229188ae71",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "078e45ba-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "078e4790-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "078e49a2-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  },
  {
    id: "078e4aec-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Turkey Ham & Omelette Sandwich with Coffee",
    description:
      "A delicious reason to get out of bed - turkey ham, egg omelette and cream cheese between two soft buns.",
    imageUrl:
      "http://localhost:4200/assets/images/078e4aec-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "D",
    items: [
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      },
      {
        itemId: "6cc22d02-d09a-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "ad387c9c-d09a-11e9-826f-2a2ae2dbcce4",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "ad387ff8-d09a-11e9-826f-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "ad388174-d09a-11e9-826f-2a2ae2dbcce4",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  },
  {
    id: "7f928620-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Egg Mayo Multigrain Croissant with Coffee",
    description:
      "Bite into a soft, flaky multigrain croissant that is overflowing with flavorful egg mayo and cheese.",
    imageUrl:
      "http://localhost:4200/assets/images/7f928620-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "D",
    items: [
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      },
      {
        itemId: "6cc22fc8-d09a-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "ad3889d0-d09a-11e9-826f-2a2ae2dbcce4",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "ad388b38-d09a-11e9-826f-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "ad388c64-d09a-11e9-826f-2a2ae2dbcce4",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  },
  {
    id: "ad388d9a-d09a-11e9-826f-2a2ae2dbcce4",
    name: "Chicken Ham & Cheese Panwich with Coffee",
    description:
      "Two breakfast favorites unite in one scrumptious panwich. Black pepper chicken ham and egg sits between two fluffy buttery pancakes.",
    imageUrl:
      "http://localhost:4200/assets/images/ad388d9a-d09a-11e9-826f-2a2ae2dbcce4.jpg",
    cycle: "D",
    items: [
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      },
      {
        itemId: "6cc23388-d09a-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "d156a766-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "d156abda-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "d156ad56-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  },
  {
    id: "d156af5e-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Egg White, Roasted Pepper, Mushroom & Cheddar Wrap with Coffee",
    description:
      "A soft tortilla wrap filled with sautéed mushrooms, caramelized pepper and egg white.",
    imageUrl:
      "http://localhost:4200/assets/images/d156af5e-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "D",
    items: [
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      },
      {
        itemId: "6cc234c8-d09a-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "d156b38c-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "d156b4ea-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "d156b6ac-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  },
  {
    id: "d156b7d8-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Turkey Ham, Egg White and Cheddar Sandwich with Coffee",
    description:
      "A fluffy egg white patty served simply with turkey ham and aged cheddar cheese in a lightly toasted wholegrain bun. A breakfast classic.",
    imageUrl:
      "http://localhost:4200/assets/images/d156b7d8-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "D",
    items: [
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      },
      {
        itemId: "6cc23694-d09a-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "ee764fcc-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "ee765224-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "ee76581e-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  },
  {
    id: "ee7659b8-d09a-11e9-bb65-2a2ae2dbcce4",
    name: "Rosemary Chicken & Emmental Cheese Croissant with Coffee",
    description:
      "This buttery flaky croissant is filled with chicken mayo and aromatic rosemary with emmental cheese, coupled with celery bits for that extra crunch in every bite.",
    imageUrl:
      "http://localhost:4200/assets/images/ee7659b8-d09a-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "D",
    items: [
      {
        itemId: "40db326c-aa8b-4297-9dc7-0d366320e6a7",
        quantity: 1
      },
      {
        itemId: "7f927f9a-d09a-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "ee765c24-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Weekly",
        cycles: 7,
        price: 82.45,
        description: ""
      },
      {
        id: "ee765d50-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 31,
        price: 360.95,
        description: ""
      },
      {
        id: "ee765e7c-d09a-11e9-bb65-2a2ae2dbcce4",
        name: "Annual",
        cycles: 365,
        price: 4199,
        description: ""
      }
    ]
  }
];

shave_items = [
  {
    id: "f11aeb74-d523-11e9-bb65-2a2ae2dbcce4",
    name: "Executive Cartridge",
    description: "Sharp and safe. 4 in each pack.",
    unit: "pk",
    imageUrl:
      "http://localhost:4200/assets/images/f11aeb74-d523-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "f11aeca0-d523-11e9-bb65-2a2ae2dbcce4",
    name: "Prep Scrub",
    description: "Properly prepare for shave greatness. 3 oz.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/f11aeca0-d523-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "f11aedcc-d523-11e9-bb65-2a2ae2dbcce4",
    name: "Shave Butter Travel",
    description: "For effortless and deflightful shaving. 3 oz.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/f11aedcc-d523-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "30636d06-d524-11e9-bb65-2a2ae2dbcce4",
    name: "Post Shave Dew",
    description: "A light & soothing finish. 3.4 oz.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/30636d06-d524-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "30636f86-d524-11e9-bb65-2a2ae2dbcce4",
    name: "Hair Scalp Shampoo. ",
    description: "10 fl oz",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/30636f86-d524-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "306370da-d524-11e9-bb65-2a2ae2dbcce4",
    name: "Daily Face Cleanser",
    description: "3 fl oz",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/306370da-d524-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "3063742c-d524-11e9-bb65-2a2ae2dbcce4",
    name: "Bogy Cleanser",
    description: "10 lf oz",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/3063742c-d524-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "3063758a-d524-11e9-bb65-2a2ae2dbcce4",
    name: "Toothbrush",
    description: "Brush",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/3063758a-d524-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "9a3c35de-d527-11e9-bb65-2a2ae2dbcce4",
    name: "Toothpaste",
    description: "5 oz.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/9a3c35de-d527-11e9-bb65-2a2ae2dbcce4.jpg"
  }
];

const shave_packages = [
  {
    id: "f11ae26e-d523-11e9-bb65-2a2ae2dbcce4",
    name: "Ultimate Shave Set",
    description: "A entire set for shaving",
    imageUrl:
      "http://localhost:4200/assets/images/f11ae26e-d523-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "f11aeb74-d523-11e9-bb65-2a2ae2dbcce4",
        quantity: 2
      },
      {
        itemId: "f11aeca0-d523-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "f11aedcc-d523-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "30636d06-d524-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "cec9abe0-d524-11e9-bb65-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 1,
        price: 15,
        description: ""
      },
      {
        id: "cec9af96-d524-11e9-bb65-2a2ae2dbcce4",
        name: "Quarterly",
        cycles: 3,
        price: 42,
        description: ""
      },
      {
        id: "cec9b0ea-d524-11e9-bb65-2a2ae2dbcce4",
        name: "Semiannually",
        cycles: 6,
        price: 80,
        description: ""
      },
      {
        id: "cec9b22a-d524-11e9-bb65-2a2ae2dbcce4",
        name: "Annually",
        cycles: 12,
        price: 150,
        description: ""
      }
    ]
  },
  {
    id: "f11ae520-d523-11e9-bb65-2a2ae2dbcce4",
    name: "The Shower Set",
    description: "A entire set for showering",
    imageUrl:
      "http://localhost:4200/assets/images/f11ae520-d523-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "30636f86-d524-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "306370da-d524-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "3063742c-d524-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "3e64bbe6-d527-11e9-bb65-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 1,
        price: 10,
        description: ""
      },
      {
        id: "3e64be5c-d527-11e9-bb65-2a2ae2dbcce4",
        name: "Quarterly",
        cycles: 3,
        price: 28,
        description: ""
      },
      {
        id: "3e64bfa6-d527-11e9-bb65-2a2ae2dbcce4",
        name: "Semiannually",
        cycles: 6,
        price: 52,
        description: ""
      },
      {
        id: "3e64c32a-d527-11e9-bb65-2a2ae2dbcce4",
        name: "Annually",
        cycles: 12,
        price: 100,
        description: ""
      }
    ]
  },
  {
    id: "f11ae8fe-d523-11e9-bb65-2a2ae2dbcce4",
    name: "The Oral Care Set",
    description: "A entire set for oral care",
    imageUrl:
      "http://localhost:4200/assets/images/f11ae8fe-d523-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "3063758a-d524-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "9a3c35de-d527-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "9a3c2404-d527-11e9-bb65-2a2ae2dbcce4",
        name: "Monthly",
        cycles: 1,
        price: 8,
        description: ""
      },
      {
        id: "9a3c28f0-d527-11e9-bb65-2a2ae2dbcce4",
        name: "Quarterly",
        cycles: 3,
        price: 22,
        description: ""
      },
      {
        id: "9a3c2a76-d527-11e9-bb65-2a2ae2dbcce4",
        name: "Semiannually",
        cycles: 6,
        price: 40,
        description: ""
      },
      {
        id: "9a3c2bd4-d527-11e9-bb65-2a2ae2dbcce4",
        name: "Annually",
        cycles: 12,
        price: 75,
        description: ""
      }
    ]
  }
];

const bark_items = [
  {
    id: "07256f3a-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Squirrel Lancelot",
    description:
      "Pups of different needs and play styles can always find a BarkBox toy to their liking. This BARK original is stuffed with fluff and classic squeakers, and features a long furry tail for pups who love to snuggle or shred!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/07256f3a-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "07257066-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Ye Olde Ball & Chain",
    description:
      "If your pup loves to sink their teeth into tougher toys, our Heavy Chewer toys have got you covered! Pups can tug, chew, and thrash this BARK original, made with a soft and stretchy T-shirt rope and a bouncy, squeaky spiky ball!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/07257066-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "07257192-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Sherwyn the Dragon",
    description:
      "Thanks to our innovative toy constructions and array of dog-delighting materials, the perfect playtime is no myth! This soft plush BARK original features our full-body tube squeaker inside and crinkly wings for your dog to grip and thrash.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/07257192-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a5d66-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Skin and Coat War Dogs",
    description: `Made in the USA, these natural, grain-free bites are built to support healthy fur and skin on your pup. They're perfect for a treat or reward, and for every bag we ship, a donation has been made to nonprofit War Dogs Making It Home.`,
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a5d66-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a5fc8-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Banquet Feast",
    description:
      "BarkBox’s full sized bags of treats are always made in the USA or Canada, with delicious, all-natural recipes! Banquet Feast is made in the USA with savory turkey, hearty brown rice, and a sweet dollop of honey. A treat fit for a King!",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a5fc8-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a61d0-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Dozers Dental Chew",
    description:
      "Our chews are always made in the USA, like this scrumptious Dental Chew from the folks at Dozers. The unique shape helps clean away your pup’s plaque and tartar while they enjoy a tasty treat!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a61d0-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a6306-d519-11e9-bb65-2a2ae2dbcce4",
    name: `Hatchin' Harry`,
    description:
      "BARK’s multi-part toys give your dog more playtime fun and variety! Hatchin’ Harry pairs an adorable, squeaky plush dinosaur with a crinkly egg shell. Whatever your dog’s mood or play style, there’s something to love in Hatchin’ Harry.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a6306-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a6536-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Herbert the Herbivore",
    description:
      "We use unique materials to create the best toys your pup has ever tugged! This Heavy Chewer BARK original has a super-durable spiky ball bonus toy inside. And of course, a pull-through stomach-safe T-shirt rope for the ideal game of tug.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a6536-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a666c-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Airborne Archie",
    description:
      "Every dog has that special sound that brings them the most joy, whether it’s a squeak or a rattle or a crinkly paper. With unique materials in every toy—like this dino’s crinkly mat body and huge plush head—we design to please every dog.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a666c-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a6798-d519-11e9-bb65-2a2ae2dbcce4",
    name: "T-Rex Bone",
    description:
      "Your Chew-asaurus Rex (or Spot) deserves quality toys too! All our durable chew toys are nontoxic and made with great attention to detail. Our T-Rex Bone is made with tough, all-natural nylon, and comes with a tasty smoky flavor.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a6798-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a6ad6-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Jurassic Pork",
    description:
      "We have tasty snack options available for allergy-sensitive pups. Jurassic Pork is made in the USA (like all of our snacks) with pork, sweet potatoes, and pumpkin. Wheat, corn, and soy free, these snacks are easy on any puppy’s tummy.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a6ad6-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "4c7a6cca-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Dinosaur Meat, Basically",
    description:
      "Not every pup has teeth like a T-Rex! We make tons of our snacks with a soft & chewy texture, for easy chompin’. Our Dinosaur Meat (okay, chicken) is dried for maximum chewiness and, like all of our snacks, made & sourced in the USA.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/4c7a6cca-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "8261009c-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Verne the Vulture",
    description:
      "We make toys to make your dog go hog wild, with a dog-dazzling array of materials. This Vulture features many of our faves: crinkly wings, a body stuffed with plush and squeakers, and long feathery hair for gripping, tearing and thrashing.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/8261009c-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "826102fe-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Consuela the Cactus",
    description:
      "We craft our original toys with a sense of humor, to surprise and delight your dog—and you! This durable, smiling cactus toy is squeaky, bouncy, and endlessly fun. Underneath, there’s a spiky ball bonus toy—and a not-so-happy cactus!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/826102fe-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "82610542-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Dyn-o-bite",
    description:
      "Our tugging toys are made with tummy-safe T-shirt ropes, so that your dog can chomp, chew, and tug with less worry for pup-parents. This BARK TNT toy has a tenacious rope pull, which features T-shirt rope and a squawkin’ giggle stick.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/82610542-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "82610696-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Cowboy Cut Steak",
    description: `We offer mouth watering morsels, made and sourced in the USA. Like many BARK Snacks, our small-batch Cowboy Cut Steak snacks are baked with a grain-free, soy-free, filler-free recipe; they're super-soft and totally craveable.`,
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/82610696-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "82610894-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Pork and Beans",
    description:
      "Our very own office dogs, like Noodle the nine-year-old Pug, are the best taste-testers we have on staff. This hearty, high-protein pork snack is made in the USA without wheat, corn, or soy—and Noodle loves ‘em. We bet your pup will too.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/82610894-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "826109d4-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Frank’s Flank Steak",
    description:
      "A top-grade dog deserves top-grade chews. That’s why we partner with folks like Butcher’s Block, who hand trim and slow roast their steak chew for 3 days, with top-grade beef from Angus cows born and raised in America.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/826109d4-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "82610bf0-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Way Rad Rollerblade",
    description:
      "Our dogs want playtime with staying power, so our toys take durability TO THE EXTREME! This rollerblade toy is tailor-made for heavy chewers, with durable ballistic nylon. The squeaky tennis ball “wheels” and soft plush are fun for any pup.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/82610bf0-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "82610d3a-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Ko Gnaw Mi Code Controllers",
    description:
      "We make the toys our own dogs want to play with, because we know your dog will love them too! 7 different materials, double-stitched, and double-fluffed, with T-shirt rope for tummy-safe tug-of-war. And yeah—epic squeakers.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/82610d3a-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "82610ef2-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Pete the Frankly Fantastic Unicorn",
    description:
      "We’ve got the stuff your dog can’t get enough of. Pete the Unicorn has a soft, flowing mane for tearing, gripping, and shredding, and his head is magically packed with plush and squeakers. The perfect playtime isn’t a myth anymore!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/82610ef2-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "82611032-d519-11e9-bb65-2a2ae2dbcce4",
    name: "B’nana & Coco",
    description:
      "Our soft-n-chewy, all-natural snacks are made in the USA with wholesome ingredients. These snacks from our friends at Uptown Pup Scene are made with peanut butter, brown rice, and coconut.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/82611032-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "a412fd30-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Duck Treats",
    description:
      "Our BARK original snacks give your pup their meal’s worth. No rubber duckies here—these duck snacks are all-natural, brimming with wholesome ingredients like potatoes, barley, and oatmeal. Our snacks are all they’re quacked up to be!",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/a412fd30-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "a412ff92-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Full Pig Ear",
    description:
      "We don’t have to travel far to find the best chews—they’re all made right here in the USA and come in all our BarkBoxes! Like this delicious (to your dog) Pig’s Ear, sourced and made in the USA by the folks at Sawmill Creek.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/a412ff92-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "a413029e-d519-11e9-bb65-2a2ae2dbcce4",
    name: "JoJo Dreams of Sushi",
    description:
      "Our BARK original tugs are tantalizing toys for any playtime palate. This stretchy sushi tug rope is stuffed with three of BARK’s classic squeakers and all-over crinkle, and the seaweed features our super-durable ballistic nylon.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/a413029e-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "a41303f2-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Rubber Lucky Cat",
    description:
      "Super Chewers deserve awesome playtimes, too! We design our durable toys with plenty of perks. This cat is made in the USA with non-toxic rubber. It’s one of our treat-dispensing toys built to stuff hidden treats. Lucky Cat? No, lucky dog!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/a41303f2-d519-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "198624b0-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Edna’s Edamame",
    description:
      "We make multi-part toys to multiply your dog’s joy! Every pup-pleasing part has their own texture, sound, and play style. These soft & squeaky edamame beans are a delight to fetch, and for a curious pup, hide treats in the crinkly shell.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/198624b0-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "19862802-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Mr. Sakay Salmon and Rice Treat",
    description:
      "Our snacks are always made in the USA and Canada, and always all-natural, just like this soft and chewy snack made from fresh salmon and hearty brown rice. No fillers or preservatives—just wholesome ingredients and a savory flavor.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/19862802-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "19862974-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Hello Ducky!",
    description:
      "We make snacks ourselves to ensure that everything in them is all-natural, and farmed and produced in the USA. These delicious BARK-made duck snacks are made with farm-raised duck, with no corn, soy, grain, or gluten.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/19862974-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "beae1c54-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Chicky Twizzie",
    description:
      "We make delicious, long-lasting chews that your dog can chew… and chew… and chew. Chicky Twizzies are made in the USA in small batches, without grain, gluten, dairy, or soy. They’re even odor-free, for the sake of pup parents!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/beae1c54-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "19862bea-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Chewfasa the Lion",
    description:
      "We make original toys with a variety of materials and fabric lengths for all play styles, like this soft and long tear-able hair! Chewfasa the Lion’s flowing hair is ideal for thrashing, or just being your pup’s mane squeeze.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/19862bea-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "19862d7a-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Hangry Hangry Hippo",
    description:
      "Our BarkMade tug toys are built with exciting mixes of materials and distinct features for dynamic playtimes. Hangry Hangry Hippo is made with a stomach-safe T-shirt rope, a bonus toy spiky ball core, and a soft plush covering.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/19862d7a-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "198632de-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Cooper’s Candig Camera",
    description:
      "BARK designs our toys with your dog’s delight in mind, with bonus features that turn toys like this bouncy, squeaky, Heavy Chewer Camera toy into a surprise treat-dispenser! The Camera toy is made in the USA with 100% natural rubber.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/198632de-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "1986341e-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Charlie’s Heart of Cheesiness Nuggets",
    description:
      "All our snacks are made in the USA or Canada, and we strive to find the best ingredients. These grain-free soft treats are made in the USA, with none of the gross preservatives, wacky colorings, or weird fillers you might find elsewhere.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/1986341e-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "1986354a-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Banana Bacon Safari Snacks",
    description:
      "We partner with the highest quality small vendors in the USA and Canada, and only work with folks who take canine nutrition super seriously. Like Lazy Dog Cookie Co, who make these all natural, allergy-friendly snacks with banana and bacon.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/1986354a-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "370591d8-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Lamb Nik-Knacks Chews",
    description:
      "Our chews are naturally and responsibly sourced for hours of great chew, like these lamb ear pieces from our friends at Superior Farms. This captivating treat is all-natural (like all of our chews!) and sourced from the USA and New Zealand.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/370591d8-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "37059494-d520-11e9-bb65-2a2ae2dbcce4",
    name: `Andi’s Famous Plush Dumplings`,
    description:
      "Our multi-part toys create multiple ways to delight your dog, whether they love to fetch, tug, or cuddle. These adorable plush dumplings (filled with our classic squeakers) come with a crinkly plush container, perfect for hiding treats!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/37059494-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "370595f2-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Pretzel Rope Plush",
    description:
      "If your dog’s a heavy chewer, you’re all set! For playtimes that last, we use safe and durable materials with innovative construction, like our ballistic-nylon covered pretzel, which is stuffed with our standard stomach-safe T-shirt rope.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/370595f2-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "37059732-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Lady Liberty Ball",
    description:
      "Dogs go absolutely nuts for our bouncy, squeaky, spiky ball toys! That’s why many of our toys are built with a spiky ball core as a bonus delight for your determined dog. This Lady Liberty squeaker ball keeps playtime going!",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/37059732-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "3705987c-d520-11e9-bb65-2a2ae2dbcce4",
    name: "",
    description: "",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/3705987c-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "370599c6-d520-11e9-bb65-2a2ae2dbcce4",
    name: `Chester's Pigeon`,
    description:
      "Our BarkMade team never misses a detail, even if it means testing 29 squeakers to find the perfect sound. Chester’s Pigeon is built with long feathery tearable hair, packed with fluffy stuffing and equipped with a unique grunting squeak.",
    unit: "pc",
    imageUrl: "http://localhost:4200/assets/images/.jpg"
  },
  {
    id: "37059b06-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Central Pork Pizza",
    description:
      "Our BARK original snacks are always made in the USA, with all-natural ingredients, for your little city sniffer. Pork is the first ingredient in Central Pork Pizza, a moist and chewy snack that’s all the rage with the dogs on 5th Avenue.",
    unit: "pkg",
    imageUrl:
      "http://localhost:4200/assets/images/37059b06-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  },
  {
    id: "37059c50-d520-11e9-bb65-2a2ae2dbcce4",
    name: "Deer Chew",
    description:
      "We offer a tasty, nutritious variety of chews, including options for picky chewers or pups with allergies. For example, we’ve got Etta Says Deer Chews! Made from American deer, they’re easily digestible and great for teeth and gums.",
    unit: "pc",
    imageUrl:
      "http://localhost:4200/assets/images/37059c50-d520-11e9-bb65-2a2ae2dbcce4.jpg"
  }
];

const bark_packages = [
  {
    id: "072561e8-d519-11e9-bb65-2a2ae2dbcce4",
    name: "The Knights of the Round Table",
    description:
      "In this BarkBox, we took thy dog on an incredible journey to the age of King Arfur! Every toy leads to epic adventure, every treat is a merry feast, and rolling in the mud totally counts as a bath! Fuzzah!",
    imageUrl:
      "http://localhost:4200/assets/images/072561e8-d519-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "07256f3a-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "07257066-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "07257192-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "4c7a5d66-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "4c7a5fc8-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "4c7a61d0-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "c7c85880-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "1 Month",
        cycles: 1,
        price: 30,
        description: ""
      },
      {
        id: "c7c85ace-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "3 Month",
        cycles: 3,
        price: 80,
        description: ""
      },
      {
        id: "c7c85d62-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "6 Months",
        cycles: 6,
        price: 150,
        description: ""
      },
      {
        id: "c7c85eb6-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "12 Months",
        cycles: 12,
        price: 180,
        description: ""
      }
    ]
  },
  {
    id: "0725645e-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Chewrassic Bark",
    description: `We headed back to the land before barks in this BarkBox! These delightful dinosaurs waited 65 million years to tussle with your tail-eontologist. That's 455 million dog years! And the treats? Fresh, never fossilized.`,
    imageUrl:
      "http://localhost:4200/assets/images/0725645e-d519-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "4c7a6306-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "4c7a6536-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "4c7a666c-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "4c7a6798-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "4c7a6ad6-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "4c7a6cca-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "c7c85fe2-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "1 Month",
        cycles: 1,
        price: 30,
        description: ""
      },
      {
        id: "c7c8610e-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "3 Month",
        cycles: 3,
        price: 80,
        description: ""
      },
      {
        id: "c7c8623a-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "6 Months",
        cycles: 6,
        price: 150,
        description: ""
      },
      {
        id: "c7c86528-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "12 Months",
        cycles: 12,
        price: 180,
        description: ""
      }
    ]
  },
  {
    id: "072565b2-d519-11e9-bb65-2a2ae2dbcce4",
    name: "The Good, The Bad, And the Pugly",
    description:
      "This Barkbox came loaded with toys and treats for the quickest paws in the Wild Wild Woof!",
    imageUrl:
      "http://localhost:4200/assets/images/072565b2-d519-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "8261009c-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "826102fe-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "82610542-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "82610696-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "82610894-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "826109d4-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "c7c86686-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "1 Month",
        cycles: 1,
        price: 30,
        description: ""
      },
      {
        id: "c7c867a8-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "3 Month",
        cycles: 3,
        price: 80,
        description: ""
      },
      {
        id: "e886c17e-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "6 Months",
        cycles: 6,
        price: 150,
        description: ""
      },
      {
        id: "e886c444-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "12 Months",
        cycles: 12,
        price: 180,
        description: ""
      }
    ]
  },
  {
    id: "072566fc-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Throwbark Thursday",
    description:
      "Each box includes 2-3 tubular original toys, chosen to suit your dog's size and needs. Add 2 full-size bags of treats and a scrumptious chew, and you've got a rad recipe for extreme dog joy.",
    imageUrl:
      "http://localhost:4200/assets/images/072566fc-d519-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "82610bf0-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "82610d3a-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "82610ef2-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "82611032-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "a412fd30-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "a412ff92-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "e886c5a2-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "1 Month",
        cycles: 1,
        price: 30,
        description: ""
      },
      {
        id: "e886c6d8-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "3 Month",
        cycles: 3,
        price: 80,
        description: ""
      },
      {
        id: "f7d3e314-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "6 Months",
        cycles: 6,
        price: 150,
        description: ""
      },
      {
        id: "f7d3e5e4-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "12 Months",
        cycles: 12,
        price: 180,
        description: ""
      }
    ]
  },
  {
    id: "07256b52-d519-11e9-bb65-2a2ae2dbcce4",
    name: "Bento & Blossoms",
    description:
      "Every year, pups and their families in Japan celebrate the blooming of the cherry blossoms by picnicking together! We loaded this box with toys and snacks to give your dog their very own hanami bento, because tradition is delicious.",
    imageUrl:
      "http://localhost:4200/assets/images/07256b52-d519-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "a413029e-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "a41303f2-d519-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "198624b0-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "19862802-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "19862974-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "beae1c54-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "f7d3e742-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "1 Month",
        cycles: 1,
        price: 30,
        description: ""
      },
      {
        id: "f7d3e8fa-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "3 Month",
        cycles: 3,
        price: 80,
        description: ""
      },
      {
        id: "f7d3eab2-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "6 Months",
        cycles: 6,
        price: 150,
        description: ""
      },
      {
        id: "f7d3ebf2-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "12 Months",
        cycles: 12,
        price: 180,
        description: ""
      }
    ]
  },
  {
    id: "876c8722-d51a-11e9-bb65-2a2ae2dbcce4",
    name: `Sniffin' Safari`,
    description:
      "Answer the call of the wild! This BarkBox brought people and their pups closer to nature, from the African savanna to Savannah, GA. With toys and treats to keep your hound howling, this box was made for pups to get lost in a jungle of fun.",
    imageUrl:
      "http://localhost:4200/assets/images/876c8722-d51a-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "19862bea-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "19862d7a-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "198632de-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "1986341e-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "1986354a-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "370591d8-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "f7d3f016-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "1 Month",
        cycles: 1,
        price: 30,
        description: ""
      },
      {
        id: "f7d3f1b0-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "3 Month",
        cycles: 3,
        price: 80,
        description: ""
      },
      {
        id: "f7d3f3cc-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "6 Months",
        cycles: 6,
        price: 150,
        description: ""
      },
      {
        id: "f7d3f50c-d51c-11e9-bb65-2a2ae2dbcce4",
        name: "12 Months",
        cycles: 12,
        price: 180,
        description: ""
      }
    ]
  },
  {
    id: "876c8ac4-d51a-11e9-bb65-2a2ae2dbcce4",
    name: "New York City",
    description:
      "Take a bite of the Big Apple with our classic New York City BarkBox! Packed with at least 2 delightful toys, 2 high-quality treats, and one tasty chew, this box captures the sights, sounds, and… smells of New York. (Except the weird ones.)",
    imageUrl:
      "http://localhost:4200/assets/images/876c8ac4-d51a-11e9-bb65-2a2ae2dbcce4.jpg",
    cycle: "M",
    items: [
      {
        itemId: "37059494-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "370595f2-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "37059732-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "3705987c-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "37059b06-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      },
      {
        itemId: "37059c50-d520-11e9-bb65-2a2ae2dbcce4",
        quantity: 1
      }
    ],
    subscriptionPlans: [
      {
        id: "1fcb2b20-d51d-11e9-bb65-2a2ae2dbcce4",
        name: "1 Month",
        cycles: 1,
        price: 30,
        description: ""
      },
      {
        id: "1fcb2e2c-d51d-11e9-bb65-2a2ae2dbcce4",
        name: "3 Month",
        cycles: 3,
        price: 80,
        description: ""
      },
      {
        id: "1fcb2f94-d51d-11e9-bb65-2a2ae2dbcce4",
        name: "6 Months",
        cycles: 6,
        price: 150,
        description: ""
      },
      {
        id: "1fcb30ca-d51d-11e9-bb65-2a2ae2dbcce4",
        name: "12 Months",
        cycles: 12,
        price: 180,
        description: ""
      }
    ]
  }
];

const putin = {
  id: "1",
  firstName: "Putin",
  lastName: "Vladimir",
  email: "putin@gmail.com",
  phoneNumber: "29583265",
  imageUrl:
    "https://specials-images.forbesimg.com/imageserve/5d766e5b44f2b20008040867/960x0.jpg?fit=scale",
  type: "merchant",
  password: "hello",
  deliveryAddresses: []
};

const putin_profile = (({ id, firstName, lastName, email, password }) => ({
  id,
  firstName,
  lastName,
  email,
  password
}))(putin);

const donald = {
  id: "25",
  firstName: "Donald",
  lastName: "Trump",
  email: "donald@mymail.com",
  phoneNumber: "29583265",
  password: "hello",
  imageUrl:
    "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg",
  type: "subscriber",
  deliveryAddresses: [
    {
      address: "1 Thomson Center \n #05-23 \n 9123563",
      note: "",
      label: "home"
    },
    {
      address: "8 Jalan Kakatua \n  addressLine2: \n 173411",
      note: "",
      label: "work"
    }
  ],
  subscriptionList: [
    {
      merchantId: "3",
      packageId: "f11ae26e-d523-11e9-bb65-2a2ae2dbcce4", 
      subscriptionPlanId: "cec9abe0-d524-11e9-bb65-2a2ae2dbcce4"
    },
    {
      merchantId: "1",
      packageId: "b018400d-a81a-4a7e-8d1c-3dae05d062f6", 
      subscriptionPlanId: "03b7566f-e6f4-41cf-b21a-4aef97339bdc"
    }
  ]
};

const donald_profile = (({ id, firstName, lastName, email, password }) => ({
  id,
  firstName,
  lastName,
  email,
  password
}))(donald);

const xi_profile = {
  id: "2",
  firstName: "Jinping",
  lastName: "Xi",
  email: "jinping@mymail.com",
  password: "password"
};

const xi = {
  ...xi_profile,
  imageUrl:
    "https://specials-images.forbesimg.com/imageserve/5aecccdf31358e612fb80afa/416x416.jpg?background=000000&cropX1=1234&cropX2=3554&cropY1=348&cropY2=2667",
  itemList: items,
  packageList: sbucks_packages
};

const justin = {
  id: "3",
  password: "password",
  firstName: "Justin",
  lastName: "Trudeau",
  email: "justin@outlook.com",
  phoneNumber: "29583268",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Justin_Trudeau_in_Lima%2C_Peru_-_2018_%2841507133581%29_%28cropped%29.jpg",
  itemList: shave_items,
  packageList: shave_packages
};

const justin_profile = (({ id, firstName, lastName, email, password }) => ({
  id,
  firstName,
  lastName,
  email,
  password
}))(justin);

function make_put_request(path, body) {
  request.put(
    {
      url: BASE_URL + path,
      body: body,
      json: true
    },
    function(error, response, body) {
      if (error) console.log(error);
      return;
      console.log(body);
    }
  );
}

function createMerchant(profile, fullProfile) {
  request.post(
    {
      url: BASE_URL + "/merchants",
      body: profile,
      json: true
    },
    function(error, response, body) {
      const { id } = body;
      make_put_request("/merchants/" + id, fullProfile);
    }
  );
}

function createJustin() {
  createMerchant(justin_profile, justin);
}

function createXi() {
  createMerchant(xi_profile, xi);
}

function createPutin() {
  createMerchant(putin_profile, putin);
}

function createDonald() {
  request.post(
    {
      url: BASE_URL + "/subscribers",
      body: donald_profile,
      json: true
    },
    function(error, response, body) {
      const { id } = body;
      make_put_request("/subscribers/" + id, donald);
    }
  );
}

createXi();
createPutin();
createJustin();
createDonald();
