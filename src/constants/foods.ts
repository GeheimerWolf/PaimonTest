export const foods = new Map([
  [
    "adeptustemptation",
    {
      name: "Adeptus' Temptation",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5e/Item_Adeptus%27_Temptation.png/revision/latest/scale-to-width-down/310?cb=20201028045529",
      description:
        "A complex, famous type of Liyue cuisine, in which specially selected ingredients are submerged and slowly bowled into soup stock. The recipe scribbled from memory alone was enough to urge the adepti to once again return to the world of men.",
      color: "RANDOM",
      stars: "⭐⭐⭐⭐⭐",
      recipe: "4x Ham, 3x Crab, 3x Shrimp Meat, 3x Matsutake",
      dishType: "Warrior's Dish",
      proficiency: "25",
      obtainable:
        "1) Opening a Chest on the floating island above Qingyun Peak.\n2) Reward from the Nine Pillars of Peace quest.",
      effect:
        "Increases all party members' ATK by **260/316/372** and CRIT Rate by **8/10/12%** for 300s.",
    },
  ],
  [
    "jadeparcels",
    {
      name: "Jade Parcels",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Jade_Parcels.png/revision/latest/scale-to-width-down/247?cb=20201104072417",
      description:
        "An exquisite-looking dish. The ham's sweetness is locked inside the fresh vegetables, drizzled with a spicy broth. Delicious is an understatement.",
      color: "RANDOM",
      stars: "⭐⭐⭐⭐",
      recipe: "3x Lotus Head, 2x Jueyun Chili, 2x Cabbage, 1x Ham",
      dishType: "Warrior's Dish",
      proficiency: "20",
      obtainable: "Cooking Showdown quest",
      effect:
        "Increases all party members' ATK by **224/272/320** and CRIT Rate by **6/8/10%** for 300s.",
    },
  ],
  [
    "goldencrab",
    {
      name: "Golden Crab",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Golden_Crab.png/revision/latest/scale-to-width-down/247?cb=20201226191138",
      description:
        "A crab dish cooked in the ancient ways. The crab has been chopped into pieces and battered with flour, before being stir-fried till golden and rich with flavor. It is worthy of the word 'gold', whether in terms of appearance or quality.",
      color: "RANDOM",
      stars: "⭐⭐⭐⭐",
      recipe: "5x Bird Egg, 5x Flour, 4x Crab, 2x Salt",
      dishType: "Sage's Dish",
      proficiency: "20",
      obtainable: "Mona's Story Quest",
      effect:
        "Increases all party members' DEF by **242/261/308** and healing effects by **6/8/10%** for 300s.",
    },
  ],
  [
    "moonpie",
    {
      name: "Moon Pie",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/38/Item_Moon_Pie.png/revision/latest/scale-to-width-down/247?cb=20201226064510",
      description:
        "A traditional staple from Mondstadt. Not only is the pickled meat within deeply flavorful, but the meringue has also maintained its sweetness and moisture through the baking process. This dish is not to be missed at any festival in Mondstadt.",
      color: "RANDOM",
      stars: "⭐⭐⭐⭐",
      recipe: "4x Raw Meat, 4x Bird Egg, 3x Butter, 2x Flour",
      dishType: "Sage's Dish",
      proficiency: "20",
      obtainable: "From Hertha for reaching Reputation Level 7 in Mondstadt.",
      effect:
        "Increases all party members' Shield Strength by **25/30/35%** and DEF by **165/200/235** for 300s.",
    },
  ],
  [
    "tianshumeat",
    {
      name: "Tianshu Meat",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/f3/Item_Tianshu_Meat.png/revision/latest/scale-to-width-down/247?cb=20201226185520",
      description:
        "A braised meat dish. The cut of meat is a happy medium between lean and fatty, and has been braised to smoking perfection. The ingredients glisten, and are soft but not greasy. Word has it that the Tianshu of a certain generation of the Liyue Qixing invented this dish after much painstaking development.",
      color: "RANDOM",
      stars: "⭐⭐⭐⭐",
      recipe: "4x Raw Meat, 2x Sugar, 1x Qingxin, 1x Matsutake",
      dishType: "Warrior's Dish",
      proficiency: "20",
      obtainable: "From Ms. Yu for reaching Reputation Level 7 in Liyue.",
      effect:
        "Increases all party members' Physical DMG by **25/35/45%** and CRIT Rate by **6/8/10%** for 300 seconds.",
    },
  ],
  [
    "crabhamandveggiebake",
    {
      name: "Crab, Ham & Veggie Bake",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/af/Item_Crab%2C_Ham_%26_Veggie_Bake.png/revision/latest/scale-to-width-down/247?cb=20201104203154",
      description:
        "A luxurious bake. Cracks through the golden outer skin reveal a medley of rosy ham and bright vegetables. How tantalizing!",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "1x Crab Roe, 1x Ham, 1x Cream, 1x Cabbage",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable:
        "Completing a certain version of the commission Food Delivery",
      effect:
        "Revives the selected character and restores **900/1200/1500** HP.",
    },
  ],
  [
    "holywater",
    {
      name: "Holy Water",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Item_Holy_Water.png/revision/latest/scale-to-width-down/256?cb=20201126234926",
      description:
        "A bottle of clear, colorless, and contaminant-free liquid. Indistinguishable from ordinary spring water. May or may not be worth putting all of one's hopes into.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "None",
      dishType: "Guardian's Dish",
      proficiency: "None",
      obtainable:
        "From Hopkins the Marvelous (located in Springvale, Mondstadt)",
      effect: "Regenerates **1** HP every second for 20 seconds.",
    },
  ],
  [
    "puppy-pawhashbrown",
    {
      name: "Puppy-Paw Hash Brown",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Puppy-Paw_Hash_Brown.png/revision/latest/scale-to-width-down/256?cb=20201210060857",
      description:
        "Razor's specialty. Carefully shaped to resemble a wolf's paw. You can really feel the effort he has put into trying human cooking.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "2x Pinecone, 1x Potato, 1x Jam",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Mondstadt Hash Brown with Razor.",
      effect: "Restores **40%** of Max HP and an additional **2.350** HP.",
    },
  ],
  [
    "wanminrestaurantsboiledfish",
    {
      name: "Wanmin Restaurant's Boiled Fish",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_Wanmin_Restaurant%27s_Boiled_Fish.png/revision/latest/scale-to-width-down/256?cb=20201210062546",
      description:
        "Xiangling's specialty. This is the signature dish of the Wanmin Restaurant, combining Xiangling's heartfelt passion for cuisine. Anyone who tastes it will gain a pure appreciation for gourmet food amid the hearty and addictive blend of flavors.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Fish, 1x Jueyun Chili, 1x Salt, 1x Violetgrass",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Black-Back Perch Stew with Xiangling.",
      effect:
        "Restores **34%** of Max HP to the selected character and regenerates **980** HP every 5s for 30s.",
    },
  ],
  [
    "onceuponatimeinmondstadt",
    {
      name: "Once Upon a Time in Mondstadt",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Item_%22Once_Upon_a_Time_in_Mondstadt%22.png/revision/latest/scale-to-width-down/256?cb=20201210061034",
      description:
        "Diluc's specialty. Feast your eyes and then your stomach upon this delicacy as the soft ribs melt in your mouth. Who knew Dliuc was able to cook this well?",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Meat, 3x Potato, 1x Small Lamp Grass, 1x Cheese",
      dishType: "Special Warrior's Dish",
      proficiency: "None",
      obtainable: "Cook Pile 'Em Up with Diluc.",
      effect:
        "Increases all party members' CRIT Rate by **20%** and CRIT DMG by **20%** for 300s.",
    },
  ],
  [
    "dieheiligesinfonie",
    {
      name: "Die Heilige Sinfonie",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Die_Heilige_Sinfonie.png/revision/latest/scale-to-width-down/256?cb=20201210061227",
      description:
        "Fischl's specialty. The exquisite presentation doth seem to communicate some incomprehensible enigma. When partaking, if one were to gaze upon Fischl, one might see her expectant gaze peek though the gaps of her fingers, which she is using to cover half her face... Is this also part of the mystery?",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "1x Ham, 1x Bacon, 1x Sausage, 1x Mint",
      dishType: "Special Warrior's Dish",
      proficiency: "None",
      obtainable: "Cook Cold Cut Platter with Fischl.",
      effect: "Increases all party members' Physical DMG by **55%** for 300s.",
    },
  ],
  [
    "invigoratingpizza",
    {
      name: "Invigorating Pizza",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Invigorating_Pizza.png/revision/latest/scale-to-width-down/256?cb=20201210061826",
      description:
        "Jean's specialty. This pizza almost seems more art than food. Just one slice is enough to have you raring to go. Is this what keeps Jean working so hard?",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Mushroom, 3x Flour, 2x Cabbage, 1x Cheese",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Mushroom Pizza with Jean",
      effect:
        "Restores **34%** of Max HP to the selected character and regenerates **980** HP every 5s for 30s.",
    },
  ],
  [
    "abuoyantbreeze",
    {
      name: "A Buoyant Breeze",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/8e/Item_A_Buoyant_Breeze.png/revision/latest/scale-to-width-down/256?cb=20201210060105",
      description:
        "Venti's specialty. Other than the Cecilia flowers used for decoration, the ingredients are no different from normal. But if you taste it carefully, you can taste the flavor of 'a wind that brings hope and tiny twists of fate.' Perhaps...this is exactly what he wants.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Carrot, 4x Potato, 4x Onion",
      dishType: "Special Adventurer's Dish",
      proficiency: "None",
      obtainable: "Cook Barbatos Ratatouille with Venti.",
      effect:
        "Decreases all party members' gliding and sprinting Stamina consumption by **25%** for 1800s.",
    },
  ],
  [
    "notomorrow",
    {
      name: "No Tomorrow",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Item_No_Tomorrow.png/revision/latest/scale-to-width-down/256?cb=20201210062627",
      description:
        "Qiqi's specialty. The neat rows of ingredients seem at once exotic and delicious, and Baizhu says that Qiqi has spent a long time creating this dish. Still, once one considers that Qiqi has no sense of taste, just putting chopsticks to the food is going to take some courage.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Meat, 3x Fish, 3x Rice, 1x Tofu",
      dishType: "Special Warrior's Dish",
      proficiency: "None",
      obtainable: "Cook Come and Get It with Qiqi.",
      effect:
        "Increases all party members' CRIT Rate by **20%** and CRIT DMG by **20%** for 300s.",
    },
  ],
  [
    "nutritiousmeal",
    {
      name: "Nutritious Meal (V. 593)",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/51/Item_Nutritious_Meal_%28V._593%29.png/revision/latest/scale-to-width-down/256?cb=20201210062741",
      description:
        "Sucrose's specialty. It looks like some strange alchemical product at first, but Sucrose insists that it is a healthy and nutritious meal, the result of many experiments and painstaking improvements. Its healthy green color comes from a mix of cream and natural vegetable juices... Wait, vegetable juices?",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "1x Crab Roe, 1x Ham, 1x Cream, 1x Cabbage",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Crab, Ham & Veggie Bake with Sucrose.",
      effect:
        "Revives a character and restores **20%** of Max HP and an additional **1.500** HP.",
    },
  ],
  [
    "black-backperchstew",
    {
      name: "Black-Back Perch Stew",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/31/Item_Black-Back_Perch_Stew.png/revision/latest/scale-to-width-down/247?cb=20201104211134",
      description:
        "A poached fish dish. The fresh and tasty fish fillets are tender and juicy. The secret to this recipe is adding powdered Violetgrass into the heated oil to give the dish that aromatic scent. It's spicy, but not too spicy.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Fish, 1x Jueyun Chili, 1x Salt, 1x Violetgrass",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable:
        "Chef Mao in Wanmin Restaurant (located in Liyue Harbor, Liyue) for 5.000 Mora after reaching Adventure Rank 30.",
      effect:
        "Restores **28%** of Max HP to the selected character and regenerates **620** HP every 5s for 30s.",
    },
  ],
  [
    "callalilyseafoodsoup",
    {
      name: "Calla Lily Seafood Soup",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Item_Calla_Lily_Seafood_Soup.png/revision/latest/scale-to-width-down/247?cb=20201104081556",
      description:
        "A balanced combination of seafood. The delicacy of crab and mint make for a clear soup, and the calla lily brings it a refreshing taste.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Crab, 1x Calla Lily, 2x Mint",
      dishType: "Sage's Dish",
      proficiency: "15",
      obtainable:
        "From Sara in Good Hunter (located in Mondstadt (City)) for 5.000 Mora after reaching Adventure Rank 30.",
      effect: "Increases all party members' DEF by **200** for 300s.",
    },
  ],
  [
    "coldcutplatter",
    {
      name: "Cold Cut Platter",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Cold_Cut_Platter.png/revision/latest/scale-to-width-down/247?cb=20201104201821",
      description:
        "A plate of cold cut meat. An equal balance of bacon, ham and sausage keeps everyone happy.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "1x Ham, 1x Bacon, 1x Sausage, 1x Mint",
      dishType: "Warrior's Dish",
      proficiency: "15",
      obtainable:
        "Completing the domain Eagle's Gate after reaching Adventure Rank 21.",
      effect: "Increases all party members' Physical DMG by **30%** for 300s.",
    },
  ],
  [
    "mondstadthashbrown",
    {
      name: "Mondstadt Hash Brown",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Item_Mondstadt_Hash_Brown.png/revision/latest/scale-to-width-down/247?cb=20201104194110",
      description:
        "A fried cake of mashed potatoes. A little bit of pinecone helps give it a nice crunch, and great with a bit of jam. Loved by people of all ages.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "2x Pinecone, 1x Potato, 1x Jam",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable:
        "Completing the domain Temple of the Wolf after reaching Adventure Rank 15.",
      effect:
        "Restores **30/32/34%** of Max HP and an additional **600/1.250/1.900** HP.",
    },
  ],
  [
    "mushroompizza",
    {
      name: "Mushroom Pizza",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e2/Item_Mushroom_Pizza.png/revision/latest/scale-to-width-down/310?cb=20201029235126",
      description:
        "A pizza covered in cheese and mushrooms. When still warm the cheese stretches out long, making it extremely satisfying to eat.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Mushroom, 3x Flour, 2x Cabbage, 1x Cheese",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable:
        "Inside a Precious Chest at Stormterror's Lair, just north of the tower, on top of the o in terror.",
      effect:
        "Restores **26/28/30%** of Max HP to the selected character, and regenerates **450/620/790** HP every 5 seconds for 30 seconds.",
    },
  ],
  [
    "stickyhoneyroast",
    {
      name: "Sticky Honey Roast",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/85/Item_Sticky_Honey_Roast.png/revision/latest/scale-to-width-down/247?cb=20201104055610",
      description:
        "A meat dish in a sweet honey sauce. The carrots take the gamey edge off the meat, and the sauce brings it all together sweetly. The perfect warm dish for a cold winter night.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Meat, 2x Carrot, 2x Sugar",
      dishType: "Adventurer's Dish",
      proficiency: "15",
      obtainable:
        "During the Master's Day Off questline after reaching Adventure Rank 34.",
      effect:
        "Decreases all party member's climbing and sprinting Stamina consumption by **15/20/25%** for 900s.",
    },
  ],
  [
    "zhongyuanchopsuey",
    {
      name: "Zhongyuan Chop Suey",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/8c/Item_Zhongyuan_Chop_Suey.png/revision/latest/scale-to-width-down/247?cb=20201104060716",
      description:
        "A seasoned and cooked meat dish. Though it contains animal organ meat and bits and scraps of other things, the strong-flavored seasonings have masked the stench of the meat. Many have had this dish for the entirety of their lives without knowing 'chop suey' is actually a swear word in the local language.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Meat, 3x Fish, 2x Flour, 2x Salt",
      dishType: "Adventurer's Dish",
      proficiency: "15",
      obtainable: "Completing the Old Tastes Die Hard quest.",
      effect:
        "Decreases all party members' climbing and sprinting Stamina consumption by **15/20/25%** for 900s.",
    },
  ],
  [
    "sauteedmatsutake",
    {
      name: "Sautéed Matsutake",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Saut%C3%A9ed_Matsutake.png/revision/latest/scale-to-width-down/256?cb=20201113104232",
      description:
        "Sautéed slices of Matsutake. Cooked in butter, it's crisp outside yet tender inside. Eat it before someone steals it from you.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Matsutake, 3x Flour, 3x Pinecone, 2x Butter",
      dishType: "Warrior's Dish",
      proficiency: "15",
      obtainable:
        "From Good Hunter for 5.000 Mora after reaching Adventure Rank 35.",
      effect: "Increases all party members' ATK by **160/194/228** for 300s.",
    },
  ],
  [
    "pileemup",
    {
      name: "Pile 'Em Up",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Item_%22Pile_%27Em_Up%22.png/revision/latest/scale-to-width-down/247?cb=20201209045533",
      description:
        "A rich, meaty dish. Originally a Mondstadt dish made of steaks, potatoes, and cheese, it has since become synonymous with Ludi Harpastum.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Meat, 3x Potato, 1x Small Lamp Grass, 1x Cheese",
      dishType: "Warrior's Dish",
      proficiency: "15",
      obtainable:
        "From Good Hunter for 5000 Mora after reaching Adventure Rank 40.",
      effect:
        "Increases all party members' CRIT Rate by **10/15/20%** for 300s.",
    },
  ],
  [
    "barbatosratatouille",
    {
      name: "Barbatos Ratatouille",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Item_Barbatos_Ratatouille.png/revision/latest/scale-to-width-down/310?cb=20201105065903",
      description:
        "A simple chowder with a long history. The ingredients are similarly traditional and simple. No matter where you are, a piping-hot chowder of this sort can always give you a sense of real and unsurpassed satisfaction.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Carrot, 4x Potato, 4x Onion",
      dishType: "Adventurer's Dish",
      proficiency: "15",
      obtainable: "By talking to Vind at Stormbearer Point.",
      effect:
        "Decreases all party members' gliding and sprinting Stamina consumption by **15/20/25%** for 900s.",
    },
  ],
  [
    "squirrelfish",
    {
      name: "Squirrel Fish",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/ce/Item_Squirrel_Fish.png/revision/latest/scale-to-width-down/247?cb=20201209232935",
      description:
        "A hard-to-prepare fish dish. The fish is first completely deboned before crisscross cuts are made on the skin. The fish is then coated in flour and deep-fried to a golden-brown color, then served with ketchup drizzled on top. It is tender and juicy on the inside and crispy on the outside. The dish resembles a squirrel's tail to a certain degree, hence the name.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Fish, 2x Tomato, 2x Flour, 1x Sugar",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable:
        "Purchase at Adventure Rank 35 from Wanmin Restaurant in Liyue Harbor for 5.000 Mora.",
      effect:
        "Restores 32% of Max HP and an additional **600/1.250/1.900** HP.",
    },
  ],
  [
    "comeandgetit",
    {
      name: "Come and Get It",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Come_and_Get_It.png/revision/latest/scale-to-width-down/247?cb=20201226193400",
      description:
        "A dish made out of a luxurious variety of ingredients. There is no great refinement in the making of this food, and it appears in Liyue often during festival season. Whenever this dish is served up, the person at the head of the table will invite everyone to dig in, saying 'Come on, eat, eat,' hence the name.'",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Meat, 3x Fish, 3x Flour, 1x Tofu",
      dishType: "Warrior's Dish",
      proficiency: "15",
      obtainable:
        "From Chef Mao in Wanmin Restaurant (located in Liyue Harbor, Liyue) for 5.000 Mora after reaching Adventure Rank 40.",
      effect:
        "Increases all party members' CRIT Rate by **10/15/20%** for 300s.",
    },
  ],
  [
    "northernapplestew",
    {
      name: "Northern Apple Stew",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Item_Northern_Apple_Stew.png/revision/latest/scale-to-width-down/247?cb=20201226185933",
      description:
        "A dish with braised meat and apples. The meat goes down smooth, its flavor dense, and when cut open, the meat juice that flows out bears traces of apple flavoring. An eye-popping, refreshing dish indeed.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Meat, 3x Apple, 1x Butter, 1x Pepper",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable:
        "As a reward from Hertha after raising your Mondstadt Reputation Level to 1.",
      effect:
        "Restores **30/32/34%** of Max HP and an additional **600/1.250/1.900** HP.",
    },
  ],
  [
    "goldenshrimpballs",
    {
      name: "Golden Shrimp Balls",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Golden_Shrimp_Balls.png/revision/latest/scale-to-width-down/247?cb=20201226191309",
      description:
        "A deep-fried shrimp dish. The aroma assaults your senses, while the crispy potatoes bring out the light sweetness of the shrimp meat. This, in tandem with its cute, small shape, makes it very enticing indeed.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "5x Shrimp, 4x Potato, 3x Flour",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable: "From reaching level 1 Reputation in Liyue.",
      effect: "Revives a character and restores **1.200** HP.",
    },
  ],
  [
    "triple-layeredconsomme",
    {
      name: "Triple-Layered Consommé",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/be/Item_Triple-Layered_Consomm%C3%A9.png/revision/latest/scale-to-width-down/247?cb=20201226193608",
      description:
        "A neatly arranged dish. The ham, fowl, and bamboo shoots have been sliced into threads of equal length, and they've been laid out neatly in the soup bowl after being steamed at high heat, before being covered in consommé. The layers are distinct, and the mouthfeel is salty yet fresh.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "2x Ham, 2x Fowl, 1x Bamboo Shoot, 1x Mushroom",
      dishType: "Sage's Dish",
      proficiency: "15",
      obtainable:
        "Purchasable from Chef Mao at Wanmin Restaurant after reaching Adventure Rank 40.",
      effect: "Increases all party members' Shield strength by **20/25/30%**.",
    },
  ],
  [
    "lotusflowercrisp",
    {
      name: "Lotus Flower Crisp",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Lotus_Flower_Crisp.png/revision/latest/scale-to-width-down/247?cb=20201226185732",
      description:
        "One of Liyue's traditional snacks. Sweet stuffed lotus wrapped in a crispy, deep-fried crust. Its layers of flower petals unravel perfectly in the palm of your hand.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Almond, 2x Flour, 2x Butter, 1x Sugar",
      dishType: "Sage's Dish",
      proficiency: "15",
      obtainable:
        "From Ms. Yu in Liyue Harbor as a Reputation Reward after reaching Reputation Level 4.",
      effect: "Increases all party members' DEF by **165/200/235** for 300s.",
    },
  ],
  [
    "aprizecatch",
    {
      name: "A Prize Catch",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_A_Prize_Catch.png/revision/latest/scale-to-width-down/256?cb=20201210062849",
      description:
        "Tartaglia's specialty. It looks like a trapped beast floundering in an ocean of blood, its death throes an inaudible scream... But Tartaglia smiles and explains that this is something he fished out of the sea, with some products from his homeland on the side.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Crab, 1x Calla Lily, 2x Mint",
      dishType: "Special Sage's Dish",
      proficiency: "None",
      obtainable: "Cook Calla Lily Seafood Soup with Tartaglia",
      effect: "Increases all party members' DEF by **282** for 300s.",
    },
  ],
  [
    "qingcestirfry",
    {
      name: "Qingce Stir Fry",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Qingce_Stir_Fry.png/revision/latest/scale-to-width-down/247?cb=20201226190732",
      description:
        "A dish cooked over a roaring fire. They say it was originally just a rustic dish that everyone in Qingce Village knew how to make. But quite unexpectedly, its crispy and spicy dishes gained the recognition of people from elsewhere, and thus began to spread thoughout the Liyue region.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Mushroom, 2x Lotus Head, 1x Jueyun Chili, 1x Cabbage",
      dishType: "Warrior's Dish",
      proficiency: "15",
      obtainable: "From Ms. Bai in Qingce Village for 5.000 Mora.",
      effect: "Increases all party members' ATK by **160/194/228** for 300s.",
    },
  ],
  [
    "lotusflowercrisp",
    {
      name: "Lotus Flower Crisp",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b7/Item_Lotus_Flower_Crisp.png/revision/latest/scale-to-width-down/247?cb=20201226185732",
      description:
        "One of Liyue's traditional snacks. Sweet stuffed lotus wrapped in a crispy, deep-fried crust. Its layers of flower petals unravel perfectly in the palm of your hand.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Almond, 2x Flour, 2x Butter, 1x Sugar",
      dishType: "Sage's Dish",
      proficiency: "15",
      obtainable:
        "From Ms. Yu in Liyue Harbor as a Reputation Reward after reaching Reputation Level 4.",
      effect: "Increases all party members' DEF by **165/200/235** for 300s.",
    },
  ],
  [
    "adventurersbreakfastsandwich",
    {
      name: "Adventurer's Breakfast Sandwich",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c4/Item_Adventurer%27s_Breakfast_Sandwich.png/revision/latest/scale-to-width-down/247?cb=20201226193029",
      description:
        "A nutritious egg dish. Luxurious mayonnaise sits atop a lining of ham and poached egg toast. The smooth mouthfeel fills you with energy for the long road ahead, and is one of the Adventurers' Guild's top-rated breakfasts.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Bird Egg, 3x Flour, 1x Ham",
      dishType: "Warrior's Dish",
      proficiency: "15",
      obtainable: "From Hertha for reaching Reputation level 4 in Mondstadt.",
      effect: "Increases all party members' ATK by **160/194/228** for 300s.",
    },
  ],
  [
    "jueyunguoba",
    {
      name: "Jueyun Guoba",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Item_Jueyun_Guoba.png",
      description:
        "One of Liyue's specialty snacks.\nStir-fried ham and Jueyun Chili sprinkled on a crispy crust made from Rice and Horsetail create a refined, meaty snack that transforms humble Rice into a hot delicacy.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "2x Horsetail, 2x Rice, 2x Ham, 2x Jueyun Chili",
      dishType: "Warrior's Dish",
      proficiency: "15",
      obtainable: "Ms. Bai at Qingce Village.",
      effect:
        "Increases all party members' Physical DMG by **20/30/40%** for 300s",
    },
  ],
  [
    "woodlanddream",
    {
      name: "Woodland Dream",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/68/Item_Woodland_Dream.png",
      description:
        "Albedo's specialty.\nThe fruits and vegetables are laid out like grass, and they stand tall like trees.\nIn this miniature world-in-a-plate, you circle the mottled city wall, follow brown alleys, and enter the light orange castle.\nA sweet, tender taste then bursts forth like a blooming flower. You open your eyes.\nThere is a smile in the white-haired prince's eyes.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "2x Butter, 2x Fish, 1x Salt, 1x Small Lamp Grass",
      dishType: "Special Sage's Dish",
      proficiency: "15",
      obtainable: "Cooking Sunshine Sprat‎ with Albedo.",
      effect:
        "Increases all party members' Shield strength by **35%** for 300s.",
    },
  ],
  [
    "bambooshootsoup",
    {
      name: "Bamboo Shoot Soup",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Item_Bamboo_Shoot_Soup.png",
      description:
        "A soup dish that's been stewed for a good long while.\nThe meat and ham have been diced into small pieces, and the soup has been kept on low heat till it turned milky white.\nThe process has brought out the distinct flavors of both kinds of meat, making for an especially tasty soup.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "2x Raw Meat, 2x Ham, 2x Bamboo Shoot",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable: "Verr Goldet at the Wangshu Inn.",
      effect:
        "Restores **26/28/30%** of Max HP to the selected character. Regenerates **450/620/790** HP every 5s for 30s.",
    },
  ],
  [
    "slow-cookedbambooshootsoup",
    {
      name: "Slow-Cooked Bamboo Shoot Soup",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Slow-Cooked_Bamboo_Shoot_Soup.png/revision/latest/scale-to-width-down/256?cb=20201210062930",
      description:
        "Zhongli's specialty. The ham is a butt end selected according to Yuehai Pavilion's gourmet standards. The fresh meat is pork belly, freshly hunted in Springvale, while the bamboo shoots are the densest you'll find in Qingce Village. It is then heated, slowly, gently, and with the utmost care and technique... Such a 'particular' taste may only be shared with those who know how to appreciate it.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "1x Bamboo Shoot, 2x Ham, 2x Raw Meat",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Bamboo Shoot Soup with Zhongli",
      effect:
        "Restores **34**% of Max HP to the selected character and regenerates **980** HP every 5s for 30s.",
    },
  ],
  [
    "sunshinesprat",
    {
      name: "Sunshine Sprat",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5a/Item_Sunshine_Sprat.png/revision/latest/scale-to-width-down/247?cb=20201226193455",
      description:
        "Gently fried fish dish. Cooked with the right heat and duration to maintain freshness for a long time. Tender and flaky, delicately browned thanks to the layer of aromatic butter on top, which creates a multi-layered and unique flavor.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "3x Butter, 3x Fish, 1x Salt, 1x Small Lamp Grass",
      dishType: "Sage's Dish",
      proficiency: "15",
      obtainable:
        "From Albedo during the The Second Experiment: The World quest of Princeps Cretaceus Chapter Act I: Traveler Observation Report.",
      effect:
        "Increases all party members' Shield strength by **20/25/30%** for 300s.",
    },
  ],
  [
    "universalpeace",
    {
      name: "Universal Peace",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Item_Universal_Peace.png/revision/latest/scale-to-width-down/247?cb=20201226194856",
      description:
        "Colorful staple food. Maintains perfect balance between soft and fragrant rice and all kinds of carefully selected sweet ingredients. This dish is mainly known for its meaning as a symbol of prosperity and peace, and less so for its taste. However, with such noble ideals behind it, its flavor should not disappoint.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Flour, 2x Lotus Head, 2x Carrot, 2x Berry",
      dishType: "Guardian's Dish",
      proficiency: "15",
      obtainable:
        "Purchased from Wanmin Restaurant (in Liyue Harbor, Liyue) for 5.000 Mora.",
      effect:
        "Restores **30/32/34%** of Max HP and an additional **600/1.250/1.900** HP to the selected character.",
    },
  ],
  [
    "prosperouspeace",
    {
      name: "Prosperous Peace",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d3/Item_Prosperous_Peace.png/revision/latest/scale-to-width-down/256?cb=20210113023429",
      description:
        "Ganyu's specialty. The image of a resting Qilin is by itself enough to calm a person down. Ganyu has put her well-wishes for all that is lovely in this world into this dish -- and she's saved some of her favorite Qingxin flowers for you, too.",
      color: "RANDOM",
      stars: "⭐⭐⭐",
      recipe: "4x Flour, 2x Lotus Head, 2x Carrot, 2x Berry",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Universal Peace with Ganyu",
      effect: "Restores **40%** of Max HP and an additional **2.350** HP.",
    },
  ],
  [
    "friedradishballs",
    {
      name: "Fried Radish Balls",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Item_Fried_Radish_Balls.png/revision/latest/scale-to-width-down/247?cb=20201104075840",
      description:
        "Fried Radish Balls. Fragrant and crispy. Make sure to eat them while they're hot! Said to be a recipe from Liyue.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Flour, 2x Radish, 1x Pepper",
      dishType: "Warrior's Dish",
      proficiency: "10",
      obtainable: "Available from the start of the game.",
      effect: "Increases all party members' ATK by **66/81/95** for 300s.",
    },
  ],
  [
    "jewelrysoup",
    {
      name: "Jewelry Soup",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Item_Jewelry_Soup.png/revision/latest/scale-to-width-down/310?cb=20201029232349",
      description:
        "A simple vegetable soup. Snapdragon, tofu, and lotus seeds are put into boiling water and simmered. Jewelry Soup earned its luxurious name from the look of the ingredients used, but contrary to its name, the soup is commonly prepared and served in ordinary households.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Snapdragon, 2x Tofu, 1x Lotus Head",
      dishType: "Sage's Dish",
      proficiency: "10",
      obtainable:
        "From Mt. Aozang during the Custodian of Clouds quest. The regular version of the dish is also sold by Harris at the Dragonspine camp.",
      effect: "Increases all party members' DEF by **88/107/126** for 300s.",
    },
  ],
  [
    "jueyunchilichicken",
    {
      name: "Jueyun Chili Chicken",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Item_Jueyun_Chili_Chicken.png/revision/latest/scale-to-width-down/310?cb=20201029233230",
      description:
        "Cold chicken mixed in dressings. The finesse technique used in mixing the dish retained the freshness of the delightful juice contained within the chicken. The glowing gold chicken skin hides a mildly hot flavor underneath.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Fowl, 1x Jueyun Chili, 1x Pepper",
      dishType: "Warrior's Dish",
      proficiency: "10",
      obtainable:
        "From Wanmin Restaurant for 2.500 Mora after reaching Adventure Rank 20.",
      effect: "Increases all party members' CRIT Rate by **6/9/12%** for 300s.",
    },
  ],
  [
    "matsutakemeatrolls",
    {
      name: "Matsutake Meat Rolls",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/15/Item_Matsutake_Meat_Rolls.png/revision/latest/scale-to-width-down/310?cb=20201029233842",
      description:
        "A pan-fried meat dish. Ground meat is put on the Matsutake and gently pan-fried on low heat so the Matsutake can fully take in the aromatic juice of the meat. It's a mouthwatering delicacy in all of its glory.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Matsutake, 2x Raw Meat",
      dishType: "Guardian's Dish",
      proficiency: "10",
      obtainable: "From Mt. Aozang during the Custodian of Clouds quest.",
      effect:
        "Restores **20/22/24%** of Max HP and an additional **900/1.200/1.500** HP.",
    },
  ],
  [
    "sweetmadame",
    {
      name: "Sweet Madame",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Item_Sweet_Madame.png",
      description:
        "Honey-roasted fowl.\nThe honey and sweet flowers come together to compliment the tender fowl meat.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Foul, 2x Sweet Flower",
      dishType: "Guardian's Dish",
      proficiency: "10",
      obtainable: "Available from the start of the game.",
      effect:
        "Restores **20/22/24%** of Max HP and an additional **900/1.200/1.500** HP.",
    },
  ],
  [
    "satisfyingsalad",
    {
      name: "Satisfying Salad",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Satisfying_Salad.png",
      description:
        "A vegetable salad.\nNot just steamed potatoes and fresh vegetables, but also a hard-boiled egg to top it off.\nSatisfying to both the eyes and stomach.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Cabbage, 2x Apple, 1x Bird Egg, 1x Potato",
      dishType: "Warrior's Dish",
      proficiency: "10",
      obtainable: "Available from the start of the game.",
      effect: "Increases all party members' CRIT rate by **6/9/12%** for 300s.",
    },
  ],
  [
    "creamstew",
    {
      name: "Cream Stew",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Item_Cream_Stew.png",
      description:
        "A meat and vegetable stew.\nThe thick juices taste great with the tender meat and vegetables.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Raw Meat, 2x Cream, 2x Snapdragon",
      dishType: "Adventurer's Dish",
      proficiency: "10",
      obtainable: "Good Hunter in Mondstadt after reaching Adventure Rank 25.",
      effect:
        "Decreases Stamina depleted by sprinting for all party members by **15/20/25%** for 900s.",
    },
  ],
  [
    "fishermansstoast",
    {
      name: "Fisherman's Toast",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Item_Fisherman%27s_Toast.png",
      description:
        "Onion-covered toast.\nA favorite amongst fishermen, they will stuff a bag with it and sit by the river all day.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Flour, 2x Tomato, 1x Onion, 1x Milk",
      dishType: "Sage's Dish",
      proficiency: "10",
      obtainable: "Available from the start of the game.",
      effect: "Increases all party members' DEF by **88/107/126** for 300s",
    },
  ],
  [
    "flamingredbolognese",
    {
      name: "Flaming Red Bolognese",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Item_Flaming_Red_Bolognese.png",
      description:
        "Bolognese covered with a meat sauce.\nThe meaty, herby aroma really gets your appetite going.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Flour, 2x Raw Meat, 1x Tomato",
      dishType: "Guardian's Dish",
      proficiency: "10",
      obtainable: "Good Hunter in Mondstadt after reaching Adventure Rank 20.",
      effect:
        "Restores **18/20/22%** of Max HP to the selected character. Regenerates **300/390/470** HP every 5s for the next 30s.",
    },
  ],
  [
    "northernsmokedchicken",
    {
      name: "Northern Smoked Chicken",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/03/Item_Northern_Smoked_Chicken.png/revision/latest/scale-to-width-down/310?cb=20201029235332",
      description:
        "Smoked fowl paired with vegetables. A staple for Northerners, often made for honored guests.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "1x Smoked Fowl, 1x Onion, 1x Cabbage",
      dishType: "Adventurer's Dish",
      proficiency: "10",
      obtainable:
        "Inside a Chest near the top of the central tower at Stormterror's Lair.",
      effect: "Restores **40/50/60** Stamina.",
    },
  ],
  [
    "teacreakpancake",
    {
      name: "Tea Break Pancake",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/25/Item_Tea_Break_Pancake.png/revision/latest/scale-to-width-down/247?cb=20201104092714",
      description:
        "A stack of round pancakes. A staple originating from afternoon tea in manors. Only the best berries should be picked for this dish.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Berry, 2x Flour, 1x Bird Egg",
      dishType: "Guardian's Dish",
      proficiency: "10",
      obtainable:
        "From Good Hunter for 2.500 Mora after reaching Adventure Rank 15.",
      effect: "Revives a character and restores **250/400/550** HP.",
    },
  ],
  [
    "crystalshrimp",
    {
      name: "Crystal Shrimp",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Item_Crystal_Shrimp.png/revision/latest/scale-to-width-down/247?cb=20201226190520",
      description:
        "One of Liyue's traditional snacks. The stuffing is taken from whole fresh shrimp, and the glistening quality of the flour can be guessed at from the translucence of the outer skin. Has a springy, tasty chew.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Flour, 3x Shrimp, 2x Carrot",
      dishType: "Guardian's Dish",
      proficiency: "10",
      obtainable:
        "From Wanmin Restaurant for 2.500 Mora after reaching Adventure Rank 25.",
      effect:
        "Restores **18/20/22%** of Max HP to the selected character and regenerates **300/390/470** HP every 5s for 30s.",
    },
  ],
  [
    "lotusseedandbirdeggsoup",
    {
      name: "Lotus Seed and Bird Egg Soup",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/53/Item_Lotus_Seed_and_Bird_Egg_Soup.png/revision/latest/scale-to-width-down/247?cb=20201226190433",
      description:
        "A steaming egg dish. The clear, gold colors of the egg custard have been embellished with several lotus roots. Regardless of whether it is breakfast or a post-meal snack, its superior nutritional value can greatly nourish the body.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "1x Lotus Head, 1x Bird Egg, 1x Sugar",
      dishType: "Adventurer's Dish",
      proficiency: "10",
      obtainable: "From Bubu Pharmacy for 2.500 Mora.",
      effect:
        "Decreases all party member's sprinting Stamina consumption by **15/20/25%** for 900s.",
    },
  ],
  [
    "almondtofu",
    {
      name: "Almond Tofu",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Item_Almond_Tofu.png/revision/latest/scale-to-width-down/247?cb=20201103111414",
      description:
        "A dessert made out of almond. It has a silky-smooth texture with a long-lasting aroma of almond. It's named tofu only because of its tofu-like shape.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Milk, 1x Sugar, 1x Almond",
      dishType: "Warrior's Dish",
      proficiency: "10",
      obtainable:
        "Investigate the kitchen table in Wangshu Inn's kitchen located in Dihua Marsh, Liyue.",
      effect: "Increases all party members' ATK by **66/81/95** for 300s.",
    },
  ],
  [
    "wolfhookjuice",
    {
      name: "Wolfhook Juice",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Item_Wolfhook_Juice.png/revision/latest/scale-to-width-down/256?cb=20201126235131",
      description:
        "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. Iced Wolfhook juice mixed with a pinch of other ingredients, forming a dreamy shade of violet.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "None",
      dishType: "Warrior's Dish",
      proficiency: "10",
      obtainable:
        "Purchase from Charles in Angel's Share (located in Mondstadt (City), Mondstadt) for 1.500 Mora (max 2 per day).",
      effect: "Increases all party members' ATK by **114** for 300s.",
    },
  ],
  [
    "berrymintburst",
    {
      name: "Berry & Mint Burst",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Item_Berry_%26_Mint_Burst.png/revision/latest/scale-to-width-down/256?cb=20201126235056",
      description:
        "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. A refreshing burst of Mint with Berries to sweeten the deal, it has an exquisite aroma",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "None",
      dishType: "Warrior's Dish",
      proficiency: "10",
      obtainable:
        "Purchase from Charles in Angel's Share (located in Mondstadt (City), Mondstadt) for 1.500 Mora (max 2 per day).",
      effect: "Increases all party members' CRIT Rate by **16%** for 300s.",
    },
  ],
  [
    "applecider",
    {
      name: "Apple Cider",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Apple_Cider.png/revision/latest/scale-to-width-down/256?cb=20201126235210",
      description:
        "A freshly squeezed, fashionable, and fruity non-alcoholic beverage. Said to have a strong sobering effect, tavern patrons often order this as the last drink of the night.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "None",
      dishType: "Guardian's Dish",
      proficiency: "10",
      obtainable:
        "Purchase from Charles in Angel's Share (located in Mondstadt, Mondstadt) for 1.500 Mora (max 2 per day).",
      effect:
        "Restores **26%** of Max HP to the selected character and regenerates **570** HP every 5s for 30s.",
    },
  ],
  [
    "lighter-than-airpancake",
    {
      name: "Lighter-Than-Air Pancake",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3b/Item_Lighter-Than-Air_Pancake.png",
      description:
        "Noelle's specialty.\nThese thick pastries are the special afternoon snacks of the Knights of Favonius.\nThey give people the sense that they have fallen upon a layer of fluffy clouds, and seeing Noelle's smile makes the feeling all the sweeter!",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Berry, 2x Flour, 1x Bird Egg",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Good Hunter after reaching Adventure Rank 15.",
      effect:
        "Revives a character and restores **15%** of Max HP, then restores an additional **550** HP.",
    },
  ],
  [
    "mysteriousbolognese",
    {
      name: "Mysterious Bolognese",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/16/Item_Mysterious_Bolognese.png",
      description:
        "Lisa's specialty.\nWith an inexplicable aurora, this bolognese is so exotic that you can never have enough.\nDid she actually enchant it with some kind of magic?",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Flour, 2x Raw Meat, 1x Tomato",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Good Hunter after reaching Adventure Rank 20.",
      effect:
        "Restores **26%** of Max HP to the selected character and regenerates **570** HP every 5s for 30s",
    },
  ],
  [
    "derweisheitletzterschluss",
    {
      name: "Der Weisheit Letzter Schluss (Life)",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Item_Der_Weisheit_Letzter_Schluss_%28Life%29.png",
      description:
        "Mona's specialty.\nA great work from a great astrologer.\nIts greatest aspect lies with its cost-effectiveness in filling one's stomach.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Cabbage, 2x Apple, 1x Bird Egg, 1x Potato",
      dishType: "Special Warrior's Dish",
      proficiency: "10",
      obtainable: "Available from the start of the game.s",
      effect: "Increases all party members' CRIT Rate by **16%** for 300s.",
    },
  ],
  [
    "rockinriffinchicken!",
    {
      name: "Rockin' Riffin' Chicken!",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/dc/Item_Rockin%27_Riffin%27_Chicken%21.png",
      description:
        "Xinyan's specialty.\nIts demonic appearance hides an absolutely demonic spiciness. Eat it, tear up, eat some more, and don't stop till you drop!\nSurely only a demon could have invented such a dish!",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "1x Pepper, 2x Fowl, 1x Jueyun Chili",
      dishType: "Special Warrior's Dish",
      proficiency: "10",
      obtainable: "Wanmin Restaurant after reaching Adventure Rank 20.",
      effect: "Increases all party members' CRIT Rate by **16%** for 300s",
    },
  ],
  [
    "goulash",
    {
      name: "Goulash",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2f/Item_Goulash.png",
      description:
        "A steaming-hot stew.\nHot stew made from Chilled Meat and vegetables chopped into small pieces.\nSlow-boiled tomatoes give this dish a rich and thick texture.\nFilling one's stomach with this comforting mixture has a warming effect.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Chilled Meat, 2x Carrot, 1x Tomato",
      dishType: "Adventurer's Dish",
      proficiency: "10",
      obtainable: "Completing the Dragonspine quest 'Ah, Fresh Meat!'.",
      effect:
        "**Somewhat decreases** the rate of Sheer Cold accumulation for all party members for 900s.",
    },
  ],
  [
    "noodleswithmountaindelicacies",
    {
      name: "Noodles with Mountain Delicacies",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Noodles_with_Mountain_Delicacies.png",
      description:
        "Noodles in a meat-and-vegetable sauce.\nThe sauce has a rustic flavor, and there's a generous amount of it mixed in with the noodles.\nA humble but enduringly popular dish.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Mushroom, 2x Raw Meat, 2x Flour",
      dishType: "Adventurer's Dish",
      proficiency: "10",
      obtainable: "Ms. Bai in Qingce Village.",
      effect: "Restores **40/50/60** Stamina.",
    },
  ],
  [
    "spicystew",
    {
      name: "Spicy Stew",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Item_Spicy_Stew.png",
      description:
        "Barbara's specialty.\nCarrots cut into cute little stars make this dish...\nWait, AHH, where did this spiciness come from!?",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "2x Raw Meat, 2x Cream, 1x Snapdragon",
      dishType: "Special Adventurer's Dish",
      proficiency: "10",
      obtainable: "Good Hunter after reaching Adventure Rank 25.",
      effect:
        "Decreases Stamina depleted by sprinting for all party members by **25%** for **1500s**.",
    },
  ],
  [
    "coldnoodleswithmountaindelicacies",
    {
      name: "Cold Noodles with Mountain Delicacies",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/10/Item_Cold_Noodles_with_Mountain_Delicacies.png",
      description:
        "Chongyun's specialty.\nThough these springy noodles would be irresistible in the sweltering summer, Chongyun insists on dining on them even in the chattering cold of winter.\nWhat a guy.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Mushroom, 2x Raw Meat, 2x Flour",
      dishType: "Special Adventurer's Dish",
      proficiency: "10",
      obtainable: "Ms. Bai in Qingce Village.",
      effect: "Restores **80** stamina.",
    },
  ],
  [
    "all-delicacyparcels",
    {
      name: "All-Delicacy Parcels",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Item_All-Delicacy_Parcels.png",
      description:
        "Xingqiu's specialty.\nThis dish's almost artisan appearance makes one almost reluctant to tuck in.\nBut once you get a taste, its fresh, light and lovely sweetness will make the dish hard to put down....\nHang on a moment.\nDid he throw the carrots out, by any chance?",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Rice, 3x Shrimp Meat, 2x Carrot",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Wanmin Restaurant after reaching Adventure Rank 25.",
      effect:
        "Restores **26%** of Max HP to the selected character and regenerates **570** HP every 5s for 30s.",
    },
  ],
  [
    "fish-flavoredtoast",
    {
      name: "Fish-Flavored Toast",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Item_Fish-Flavored_Toast.png",
      description:
        "Klee's specialty.\nBy way of apology for wantonly using her bombs to scare away the fish, Jean instructed Klee to make this toast for the fishermen.\nIt's filling and tasty.\nKlee will never starve again, even after a whole day of blast fishing.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "3x Flour, 2x Tomato, 1x Onion, 1x Milk",
      dishType: "Special Sage's Dish",
      proficiency: "10",
      obtainable: "Available from the start of the game.",
      effect: "Increases all party members' DEF by **151** for 300s.",
    },
  ],
  [
    "flash-friedfilet",
    {
      name: "Flash-Fried Filet",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Item_Flash-Fried_Filet.png/revision/latest/scale-to-width-down/256?cb=20201119190559",
      description:
        "Beidou's specialty. They say that Beidou once learned some tricks from Xiangling, making some refinements and adding more flavor to this dish. If you can clean it out in one go, perhaps you might impress her.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Raw Meat, 1x Jueyun Chili",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Stir-Fried Filet with Beidou",
      effect:
        "Revives a character and restores **10%** of Max HP, then restores an additional **150** HP.",
    },
  ],
  [
    "teyvatcharredegg",
    {
      name: "Teyvat Charred Egg",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c5/Item_Teyvat_Charred_Egg.png/revision/latest/scale-to-width-down/256?cb=20201210062454",
      description:
        "Bennett's specialty. For some reason, every single fried egg is a little burnt around the edges. That said, the burnt crisp does lend a whole new flavor to the dish.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Bird Egg",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Teyvat Fried Egg with Bennett",
      effect:
        "Revives a character and restores **10%** of Max HP, then restores an additional **150** HP.",
    },
  ],
  [
    "chicken-mushroomskewer",
    {
      name: "Chicken-Mushroom Skewer",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Item_Chicken-Mushroom_Skewer.png/revision/latest/scale-to-width-down/256?cb=20210109214805",
      description:
        "A skewer of mushrooms and poultry. Fresh poultry is complimented by fragrant mushrooms. Don't be picky, chow down!",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Mushroon, 1x Fowl",
      dishType: "Guardian's Dish",
      proficiency: "5",
      obtainable: "Available from the start of the game.",
      effect:
        "Restores **8/9/10%** of Max HP and **800/1.000/1.200** HP to the selected character.",
    },
  ],
  [
    "mondstadtgrilledfish",
    {
      name: "Mondstadt Grilled Fish",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Item_Mondstadt_Grilled_Fish.png/revision/latest/scale-to-width-down/247?cb=20201104071842",
      description:
        "Fish grilled thoroughly with moderate fire, making it completely dry and crispy. The sprinkled pepper on top brings out the freshness of the fish.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Fish, 1x Pepper",
      dishType: "Guardian's Dish",
      proficiency: "5",
      obtainable: "Available from the start of the game.",
      effect: "Revives a character and restores **50/100/150** HP.",
    },
  ],
  [
    "morameat",
    {
      name: "Mora Meat",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/8f/Item_Mora_Meat.png/revision/latest/scale-to-width-down/247?cb=20201226191357",
      description:
        "A large hunk of minced meat packaged inside of a pastry. When you split the pastry in two, minced meat spills out. The taste of meat grease is all but gone, and the baking process has brought out the sweetness of the pastry. Such pastries are usually stamped with the word 'Mora,' all the better to represent wealth and fortune.",
      color: "RANDOM",
      stars: "⭐⭐",
      recipe: "1x Raw Meat, 1x Flour",
      dishType: "Guardian's Dish",
      proficiency: "5",
      obtainable:
        "From Mt. Aozang during the Custodian of Clouds quest, as well as looking around Liyue.",
      effect: "Revives a character and restores **50/100/150** HP.",
    },
  ],
  [
    "radishveggiesoup",
    {
      name: "Radish Veggie Soup",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Item_Radish_Veggie_Soup.png/revision/latest/scale-to-width-down/310?cb=20201030054109",
      description:
        "Radish-based vegetable soup. Its flavor is delicately between tart and sweet. With luscious radish, it's a well-balanced dish.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Radish, 1x Mint",
      dishType: "Guardian's Dish",
      proficiency: "5",
      obtainable: "Available from the start of the game.",
      effect:
        "Restores **8/9/10%** of Max HP to the selected character. Regenerates **210/260/300** HP every 5s for the next 30s.",
    },
  ],
  [
    "steak",
    {
      name: "Steak",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Item_Steak.png/revision/latest/scale-to-width-down/247?cb=20201104082737",
      description:
        "A grilled steak. High heat has locked the juices in, giving one high expectations for when the meat is cut open.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "2x Raw Meat",
      dishType: "Guardian's Dish",
      proficiency: "5",
      obtainable: "Available from the start of the game.",
      effect: "Revives a character and restores **50/100/150** HP.",
    },
  ],
  [
    "teyvatfriedegg",
    {
      name: "Teyvat Fried Egg",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/20/Item_Teyvat_Fried_Egg.png/revision/latest/scale-to-width-down/247?cb=20201103130602",
      description:
        "An egg fried on one side. The yolk flows out nicely when broken. So satisfying.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Bird Egg",
      dishType: "Guardian's Dish",
      proficiency: "5",
      obtainable: "Available from the start of the game.",
      effect: "Revives a character and restores **50/100/150** HP.",
    },
  ],
  [
    "grilledtigerfish",
    {
      name: "Grilled Tiger Fish",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Item_Grilled_Tiger_Fish.png/revision/latest/scale-to-width-down/256?cb=20210109215631",
      description:
        "A fish kebab grilled over an open flame. The fish is a fresh catch straight from the harbor, lightly picked and swiftly grilled. Its aroma attracts the street cats. Indeed, freshness is the secret of flavor.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Fish, 1x Pepper",
      dishType: "Guardian's Dish",
      proficiency: "5",
      obtainable:
        "From Wanmin Restaurant for 1.250 Mora after reaching Adventure Rank 15.",
      effect:
        "Restores **8/9/10%** of Max HP and an additional **800/1.000/1.200** HP.",
    },
  ],
  [
    "stir-friedfilet",
    {
      name: "Stir-Fried Filet",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0f/Item_Stir-Fried_Filet.png/revision/latest/scale-to-width-down/247?cb=20201104212719",
      description:
        "Sliced meat flash-fried in a wok. The mild Jueyun Chili adds just the right amount of kick to the delicious aroma of the meat. Perfect as an appetizer and also goes well with rice.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Raw Meat, 1x Jueyun Chili",
      dishType: "Guardian's Dish",
      proficiency: "5",
      obtainable: "From a chest on top of the Mt Tianheng chest.",
      effect: "Revives a character and restores **50/100/150** HP.",
    },
  ],
  [
    "qiankunmorameat",
    {
      name: "Qiankun Mora Meat",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0d/Item_Qiankun_Mora_Meat.png/revision/latest/scale-to-width-down/256?cb=20201210061102",
      description:
        "Ningguang's specialty. The pastry is perfectly soft and waxy, as is the consistency of the meat, and the honey-like meat juices ooze out as you squeeze it. Wherever did the high and mighty Tianquan Lady Ningguang learn to make this dish?",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Raw Meat, 1x Flour",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Mora Meat with Ningguang",
      effect:
        "Revives a character and restores **10%** of Max HP, then restores an additional **150** HP.",
    },
  ],
  [
    "fruityskewers",
    {
      name: "Fruity Skewers",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ea/Item_Fruity_Skewers.png/revision/latest/scale-to-width-down/256?cb=20201210061733",
      description:
        "Kaeya's specialty. A chewy skewer with a rich sweet aftertaste.Wait...Is this really the smell of fruit?",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Mushroom, 1x Fowl",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Chicken-Mushroom Skewer with Kaeya",
      effect: "Restores **16%** of Max HP and an additional **1.350** HP.",
    },
  ],
  [
    "outriderschampionsteak",
    {
      name: "Outrider's Champion Steak!",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/95/Item_Outrider%27s_Champion_Steak%21.png/revision/latest/scale-to-width-down/256?cb=20201210061922",
      description:
        "Amber's specialty. One side is obviously uncooked. The other side gives off a subtle scent of something burnt. Close your eyes and have a big mouthful, just to keep Amber happy if nothing else.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "2x Raw Meat",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Steak with Amber",
      effect:
        "Revives a character and restores **10%** of Max HP, then restores an additional **150** HP.",
    },
  ],
  [
    "survivalgrilledfish",
    {
      name: "Survival Grilled Fish",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Item_Survival_Grilled_Fish.png/revision/latest/scale-to-width-down/256?cb=20201210062642",
      description:
        "Keqing's specialty. This dish was not grilled. Instead, it was fried from within through the delicate application of Electro. A gentle bite reveals fragrant fish under the lightly-charred skin, its taste perfectly balanced. So, is this how she survives in the wild? You really can't judge a book by its cover.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Fish, 1x Pepper",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Grilled Tiger Fish with Keqing",
      effect: "Restores **16%** of Max HP and an additional **1.350** HP.",
    },
  ],
  [
    "popsteas",
    {
      name: "Pop's Teas",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/52/Item_Pop%27s_Teas.png/revision/latest/scale-to-width-down/256?cb=20201210063332",
      description:
        "Tea from Liyue. After a grueling trek around the vast region of Liyue, there's nothing more rejuvenating than a big swig of tea from Pop's Teas.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "None",
      dishType: "Guardian's Dish",
      proficiency: "None",
      obtainable:
        "Purchase from Pops Kai (located in Qingce Village, Liyue), Pops Zhou, or Mr. Zhu for 1.000 Mora (max 10 per day).",
      effect:
        "Restores **14%** of Max HP to the selected character and regenerates **350** HP every 5s for 30s.",
    },
  ],
  [
    "definitelynotbarfood",
    {
      name: "Definitely Not Bar Food!",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/14/Item_Definitely_Not_Bar_Food%21.png/revision/latest/scale-to-width-down/256?cb=20201210062814",
      description:
        "Diona's specialty. The fish skin is crisp, and the meat is sumptuous. Only someone with a sufficiently great love for fish would be able to bring out such lovely flavors. Now, if only there were something to drink to go with it... Uh-oh, she's looking this way!",
      color: "RANDOM",
      stars: "⭐",
      recipe: "1x Fish, 1x Pepper",
      dishType: "Special Guardian's Dish",
      proficiency: "None",
      obtainable: "Cook Mondstadt Grilled Fish with Diona",
      effect:
        "Revives a character and restores **10%** of Max HP, then restores an additional **150** HP.",
    },
  ],
  [
    "apple",
    {
      name: "Apple",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/8a/Item_Apple.png/revision/latest/scale-to-width-down/256?cb=20210113032853",
      description: "Crisp and fragrant. Delicious raw or made into wine.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "None",
      dishType: "Guardian's Dish",
      proficiency: "None",
      obtainable: "Explore the wild.",
      effect: "Restores **300** HP.",
    },
  ],
  [
    "sunsettia",
    {
      name: "Sunsettia",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/45/Item_Sunsettia.png/revision/latest/scale-to-width-down/256?cb=20210109214706",
      description:
        "A plump fruit, beautiful like the sunset, that is abundant across all of Teyvat. It has a curious, sweet aroma and is able to energize an individual.",
      color: "RANDOM",
      stars: "⭐",
      recipe: "None",
      dishType: "Guardian's Dish",
      proficiency: "None",
      obtainable: "Explore the wild.",
      effect: "Restores **300** HP.",
    },
  ],
]);
