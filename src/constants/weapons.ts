export const weapons = new Map([
  [
    "coolsteel",
    {
      name: "Cool Steel",
      description:
        "A reliable steel-forged weapon that serves as a testament to the great adventures of its old master.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Weapon_Cool_Steel.png/revision/latest/scale-to-width-down/256?cb=20201119233444",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "ATK%",
      secondaryStatValue: "7,7%",
      specialAbility: "Bane of Water and Ice",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Cool_Steel",
      refinement:
        "Increases DMG against opponents affected by Hydro or Cryo by **12/15/18/21/24%**.",
    },
  ],
  [
    "skyridersword",
    {
      name: "Skyrider Sword",
      description:
        "A reliable steel sword. The legendary Skyrider once tried to ride it as a flying sword...",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Weapon_Skyrider_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116035206",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "38",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "11,3%",
      specialAbility: "Determination",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Skyrider_Sword",
      refinement:
        "Using an Elemental Burst grants a **12/15/18/21/24%** increase in ATK and Movement SPD for 15s.",
    },
  ],
  [
    "filletblade",
    {
      name: "Fillet Blade",
      description:
        "A sharp filleting knife. The blade is long, thin, and incredibly sharp.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/f7/Weapon_Fillet_Blade.png/revision/latest/scale-to-width-down/256?cb=20201116033941",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "ATK%",
      secondaryStatValue: "7,7%",
      specialAbility: "Gash",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Fillet_Blade",
      refinement:
        "On hit, has 50% chance to deal **240/280/320/360/400%** ATK DMG to a single enemy. Can only occur once every **15/14/13/12/11s**.",
    },
  ],
  [
    "travelershandysword",
    {
      name: "Traveler's Handy Sword",
      description:
        "A handy steel sword which contains scissors, a magnifying glass, tinder, and other useful items in its sheath.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c9/Weapon_Traveler%27s_Handy_Sword.png/revision/latest?cb=20201116035456",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "40",
      secondaryStat: "DEF",
      secondaryStatValue: "6,4%",
      specialAbility: "Journey",
      moreInfo:
        "https://genshin-impact.fandom.com/wiki/Traveler%27s_Handy_Sword",
      refinement:
        "Each Elemental Orb or Particle collected restores **1/1,25/1,5/1,75/2%** HP.",
    },
  ],
  [
    "harbingerofdawn",
    {
      name: "Harbinger of Dawn",
      description:
        "A sword that once shone like the sun. The wielder of this sword will be blessed with a 'feel-good' buff. The reflective material on the blade has long worn off.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Weapon_Harbinger_of_Dawn.png/revision/latest/scale-to-width-down/256?cb=20201119233056",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "10,2%",
      specialAbility: "Vigorous",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Harbinger_of_Dawn",
      refinement:
        "When HP is above 90%, increases CRIT Rate by **14/17,5/21/24,5/28%**.",
    },
  ],
  [
    "darkironsword",
    {
      name: "Dark Iron Sword",
      description:
        "A perfectly ordinary iron sword, just slightly darker than most.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Weapon_Dark_Iron_Sword.png/revision/latest/scale-to-width-down/256?cb=20201119235556",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "31",
      specialAbility: "Overloaded",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Dark_Iron_Sword",
      refinement:
        "Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, ATK is increased by **20/25/30/35/40%** for 12s.",
    },
  ],
  [
    "blackclifflongsword",
    {
      name: "Blackcliff Longsword",
      description:
        "A sword made of blackstone. It has a dark crimson glow on its black blade.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/6f/Weapon_Blackcliff_Longsword.png/revision/latest?cb=20201116033216",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "8%",
      specialAbility: "Press the Advantage",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Blackcliff_Longsword",
      refinement:
        "After defeating an opponent, ATK is increased by **12/15/18/21/24%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    },
  ],
  [
    "sacrificialsword",
    {
      name: "Sacrificial Sword",
      description:
        "A ceremonial sword that has become petrified over time. The trinkets on it are still visible. It grants the wielder the power to withstand the winds of time.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Weapon_Sacrificial_Sword.png/revision/latest?cb=20201120010840",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "13,3%",
      specialAbility: "Composed",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Sacrificial_Sword",
      refinement:
        "After damaging an opponent with an Elemental Skill, the skill has a **40/50/60/70/80%** chance to end its own CD. Can only occur once every **30/26/22/19/16s**.",
    },
  ],
  [
    "swordofdescension",
    {
      name: "Sword of Descension",
      description:
        "\n**PS4 sword only!**\n\nA sword of unique craftsmanship. It does not appear to belong to this world.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Weapon_Sword_of_Descension.png/revision/latest/scale-to-width-down/256?cb=20201116035338",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "ATK%",
      secondaryStatValue: "7,7%",
      specialAbility: "Descension",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Sword_of_Descension",
      refinement:
        "Hitting enemies with Normal or Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.",
    },
  ],

  // CBT CONTENT **TODO**
  // [
  //   "thealleyflash",
  //   {
  //     name: "The Alley Flash",
  //     description: "A straight sword as black as the night. It once belonged to a thief who roamed the benighted streets.",
  //     thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/8/83/Weapon_The_Alley_Flash.png/revision/latest/scale-to-width-down/194?cb=20201016011557",
  //     color: "RANDOM",
  //     category: "Sword",
  //     stars: "⭐⭐⭐⭐",
  //     baseAttack: "44",
  //     secondaryStat: "CRIT Rate",
  //     secondaryStatValue: "4%",
  //     specialAbility: "Itinerant Hero",
  //     moreInfo: "https://genshin-impact.fandom.com/wiki/The_Alley_Flash",
  //     refinement: "Continuously sprinting for at least 1s increases ATK by 28% for 6s. This effect cannot stack."
  //   },
  // ],
  [
    "favoniussword",
    {
      name: "Favonius Sword",
      description:
        "A standard-issue longsword of the Knights of Favonius. When you're armed with this agile and sharp weapon, channeling the power of the elements has never been so easy!",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/90/Weapon_Favonius_Sword.png/revision/latest?cb=20201116033811",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "13,3%",
      specialAbility: "Windfall",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Favonius_Sword",
      refinement:
        "CRIT hits have a **60/70/80/90/100%** chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every **12/10,5/9/7,5/6s**.",
    },
  ],
  [
    "theblacksword",
    {
      name: "The Black Sword",
      description:
        "A pitch-black longsword that thirsts for violence and conflict. It is said that this weapon can cause its user to become drunk on the red wine of slaughter.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Weapon_The_Black_Sword.png/revision/latest/scale-to-width-down/256?cb=20201116035352",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "6%",
      specialAbility: "Justice",
      moreInfo: "https://genshin-impact.fandom.com/wiki/The_Black_Sword",
      refinement:
        "Increases DMG dealt by Normal and Charged Attacks by **20/25/30/35/40%**. Additionally, regenerates **60/70/80/90/100%** of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.",
    },
  ],
  [
    "theflute",
    {
      name: "The Flute",
      description:
        "Beneath its rusty exterior is a lavishly decorated thin blade. It swings as swiftly as the wind.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/63/Weapon_The_Flute.png/revision/latest?cb=20201119203316",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "ATK%",
      secondaryStatValue: "9%",
      specialAbility: "Chord",
      moreInfo: "https://genshin-impact.fandom.com/wiki/The_Flute",
      refinement:
        "Normal or Charged Attacks grant a Harmonic on hits. Gaining 5 Harmonics triggers the power of music and deals **100/125/150/175/200%** ATK DMG to surrounding enemies. Harmonics last up to 30s, and a maximum of 1 can be gained every 0,5s.",
    },
  ],
  [
    "royallongsword",
    {
      name: "Royal Longsword",
      description:
        "An old longsword that belonged to the erstwhile rulers of Mondstadt. Exquisitely crafted, the carvings and embellishments testify to the stature of its owner.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Weapon_Royal_Longsword.png/revision/latest?cb=20201116034952",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "ATK%",
      secondaryStatValue: "9%",
      specialAbility: "Focus",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Royal_Longsword",
      refinement:
        "Upon dealing damage to an opponent, increases CRIT Rate by **8/10/12/14/16%**. Max 5 stacks. A CRIT hit removes all existing stacks.",
    },
  ],
  [
    "prototyperancour",
    {
      name: "Prototype Rancour",
      description:
        "An ancient longsword discovered in the Blackcliff Forge that cuts through rocks like a hot knife through butter.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Weapon_Prototype_Rancour.png/revision/latest/scale-to-width-down/256?cb=20201116034823",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "Physical DMG Bonus",
      secondaryStatValue: "7,5%",
      specialAbility: "Smashed Stone",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Prototype_Rancour",
      refinement:
        "On hit, Normal or Charged Attacks increase ATK and DEF by **4/5/6/7/8%** for 6s. Max 4 stacks. Can only occur once every 0,3s.",
    },
  ],
  [
    "ironsting",
    {
      name: "Iron Sting",
      description:
        "An exotic long-bladed rapier that somehow found its way into Liyue via foreign traders. It is light, agile, and sharp.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/35/Weapon_Iron_Sting.png/revision/latest/scale-to-width-down/256?cb=20201116034058",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "36",
      specialAbility: "Infusion Stringer",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Iron_Sting",
      refinement:
        "Dealing Elemental DMG increases all DMG by **6/7,5/9/10,5/12%** for 6s. Max 2 stacks. Can only occur once every 1s.",
    },
  ],
  [
    "festeringdesire",
    {
      name: "Festering Desire",
      description:
        "A creepy straight sword that almost seems to yearn for life. It drips with a shriveling venom that could even corrupt a mighty dragon.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/70/Weapon_Festering_Desire.png/revision/latest/scale-to-width-down/256?cb=20201223042935",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "10%",
      specialAbility: "Undying Admiration",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Festering_Desire",
      refinement:
        "Increases Elemental Skill DMG by **16/20/24/28/32%** and Elemental Skill CRIT Rate by **6/7,5/9/10,5/12%**.",
    },
  ],
  [
    "summitshaper",
    {
      name: "Summit Shaper",
      description:
        "A symbol of a legendary pact, this sharp blade once cut off the peak of a mountain.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Weapon_Summit_Shaper.png/revision/latest/scale-to-width-down/256?cb=20201223042936",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "46",
      secondaryStat: "ATK%",
      secondaryStatValue: "10,8%",
      specialAbility: "Golden Majesty",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Summit_Shaper",
      refinement:
        "Increases Shield Strength by **20/25/30/35/40%**. Scoring hits on opponents increases ATK by **4/5/6/7/8%** for 8s. Max 5 stacks. Can only occur once every 0,3s. While protected by a shield, this ATK increase effect is increased by 100%.",
    },
  ],
  [
    "aquilafavonia",
    {
      name: "Aquila Favonia",
      description:
        "The sword of the Knights of Favonius. Millennia later, it still calls on the winds of swift justice to vanquish all evil—just like the last heroine who wielded it.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Weapon_Aquila_Favonia.png/revision/latest?cb=20201120002750",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "48",
      secondaryStat: "Physical DMG Bonus",
      secondaryStatValue: "9%",
      specialAbility: "Falcon's Defiance",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Aquila_Favonia",
      refinement:
        "ATK is increased by **20/25/30/35/40%**. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of the resistance aloft, regenerating HP equal to **100/115/130/145/160%** of ATK and dealing **200/230/260/290/320%** of ATK as DMG to surrounding opponents. This effect can only occur once every 15s.",
    },
  ],
  [
    "skywardblade",
    {
      name: "Skyward Blade",
      description:
        "The sword of a knight that symbolizes the restored honor of Dvalin. The blessings of the Anemo Archon rest on the fuller of the blade, imbuing the sword with the powers of the sky and the wind.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Weapon_Skyward_Atlas.png/revision/latest/scale-to-width-down/256?cb=20201116035225",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "46",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "12%",
      specialAbility: "Sky-Piercing Fang",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Skyward_Blade",
      refinement:
        "Crit Rate increased by **4/5/6/7/8%**. Gains Skypiercing Might upon using Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and increases the DMG of Normal and Charged Attack hits by **20/25/30/35/40%** for 12s.",
    },
  ],
  [
    "lionsroar",
    {
      name: "Lion's Roar",
      description:
        "A sharp blade with extravagant carvings that somehow does not compromise on durability and sharpness. It roars like a lion as it cuts through the air.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e6/Weapon_Lion%27s_Roar.png/revision/latest?cb=20201119232745",
      color: "RANDOM",
      category: "Sword",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "ATK%",
      secondaryStatValue: "9%",
      specialAbility: "Bane of Fire and Thunder",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Lion%27s_Roar",
      refinement:
        "Increases DMG against enemies affected by Pyro or Electro by **20/24/28/32/36%**.",
    },
  ],
  [
    "halberd",
    {
      name: "Halberd",
      description:
        "A polearm with an axe blade mounted on top that can deal quite a lot of damage. It's favored by the Millelith officers.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/41/Weapon_Halberd.png/revision/latest/scale-to-width-down/256?cb=20201116033956",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐",
      baseAttack: "40",
      secondaryStat: "ATK%",
      secondaryStatValue: "5,1%",
      specialAbility: "Heavy",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Halberd",
      refinement:
        "Normal Attacks deal an additional **160/200/240/280/320%** DMG. Can only occur once every 10s.",
    },
  ],
  [
    "blacktassel",
    {
      name: "Black Tassel",
      description:
        "An exceptionally powerful polearm that also offers a simple but elegant solution to the issue of the easily stained white tassel.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Weapon_Black_Tassel.png/revision/latest/scale-to-width-down/256?cb=20201116033134",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐",
      baseAttack: "38",
      secondaryStat: "HP%",
      secondaryStatValue: "10,2%",
      specialAbility: "Bane of the Soft",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Black_Tassel",
      refinement: "Increases DMG against slimes by **40/50/60/70/80%**.",
    },
  ],
  [
    "whitetassel",
    {
      name: "White Tassel",
      description:
        "A standard-issue weapon of the Millelith soldiers. It has a sturdy shaft and sharp spearhead. It's a reliable weapon.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Weapon_White_Tassel.png/revision/latest/scale-to-width-down/256?cb=20201116035549",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "5,1%",
      specialAbility: "Sharp",
      moreInfo: "https://genshin-impact.fandom.com/wiki/White_Tassel",
      refinement: "Increases Normal Attack DMG by **24/30/36/42/48%**.",
    },
  ],
  [
    "crescentpike",
    {
      name: "Crescent Pike",
      description:
        "An exotic weapon with an extremely long blade on the top and a crescent blade at the bottom. It found its way into Liyue through foreign traders. With practice, it can deal heavy damage.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Weapon_Crescent_Pike.png/revision/latest/scale-to-width-down/256?cb=20201116033544",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "Physical DMG Bonus",
      secondaryStatValue: "7,5%",
      specialAbility: "Infusion Needle",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Crescent_Pike",
      refinement:
        "After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal an additional **20/25/30/35/40%** ATK as DMG for 5s.",
    },
  ],
  [
    "deathmatch",
    {
      name: "Deathmatch",
      description:
        "A sharp crimson polearm that was once a gladiator's priceless treasure. Its awl has been stained by the blood of countless beasts and men.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Weapon_Deathmatch.png/revision/latest/scale-to-width-down/256?cb=20201116154647",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "8%",
      specialAbility: "Gladiator",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Deathmatch",
      refinement:
        "If there are at least 2 opponents nearby, ATK is increased by **16/20/24/28/32%** and DEF is increased by **16/20/24/28/32%**. If there are less than 2 opponents nearby, ATK is increased by **24/30/36/42/48%**.",
    },
  ],
  [
    "royalspear",
    {
      name: "Royal Spear",
      description:
        "This polearm was once cherished by a member of the old nobility that governed Mondstadt long ago. Although it has never seen the light of day, it is still incomparably sharp.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Weapon_Royal_Spear.png/revision/latest?cb=20201202041704",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "ATK%",
      secondaryStatValue: "6%",
      specialAbility: "Focus",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Royal_Spear",
      refinement:
        "Upon damaging an opponent, increases CRIT Rate by **8/10/12/14/16%**. Max 5 stacks. A CRIT hit removes all stacks.",
    },
  ],
  [
    "favoniuslance",
    {
      name: "Favonius Lance",
      description:
        "A polearm made in the style of the Knights of Favonius. Its shaft is straight, and its tip flows lightly like the wind.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/57/Weapon_Favonius_Lance.png/revision/latest/scale-to-width-down/256?cb=20201116154512",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "6,7%",
      specialAbility: "Windfall",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Favonius_Lance",
      refinement:
        "CRIT Hits have a **60/70/80/90/100%** chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every **12/10,5/9/7,5/6s**",
    },
  ],
  //  CBT3 **TODO**
  //  [
  //    "lithicspear",
  //    {
  //      name: "Lithic Spear",
  //      description: "A spear forged from the rocks of the Guyun Stone Forest. Its hardness knows no equal.",
  //      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Weapon_Lithic_Spear.png/revision/latest/scale-to-width-down/151?cb=20201116042459",
  //      color: "RANDOM",
  //      category: "Polearm",
  //      stars: "⭐⭐⭐⭐",
  //      baseAttack: "42",
  //      secondaryStat: "DMG Bonus",
  //      secondaryStatValue: "9%",
  //      specialAbility: "Lithic Axiom - Subjugating Evil",
  //      moreInfo: "https://genshin-impact.fandom.com/wiki/Lithic_Spear",
  //      refinement: "Normal Attack hits have a 20% chance of causing the next Charged Attack performed in the following 10s to deal 40% increased DMG.",
  //    },
  //  ],
  [
    "dragonspienspear",
    {
      name: "Dragonspine Spear",
      description:
        "A Spear created from the fang of a dragon. It is oddly warm to the touch.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Weapon_Dragonspine_Spear.png/revision/latest/scale-to-width-down/256?cb=20201223042936",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Physical DMG Bonus",
      secondaryStatValue: "15%",
      specialAbility: "Frost Burial",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Dragonspine_Spear",
      refinement:
        "Hitting an opponent with Normal and Charged Attacks has a **60/70/80/90/100%** chance of forming and dropping an Everfrost Icicle above them, dealing **80/95/110/125/140%** AoE ATK DMG. Opponents affected by Cryo are dealt **200/240/280/320/360%** ATK DMG. Can only occur once every 10s.",
    },
  ],
  [
    "prototypestarglitter",
    {
      name: "Prototype Starglitter",
      description:
        "A grudge discovered in the Blackcliff Forge. The glimmers along the sharp edge are like stars in the night.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7e/Weapon_Prototype_Starglitter.png/revision/latest/scale-to-width-down/100?cb=20201116034758",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "10%",
      specialAbility: "Magic Affinity",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Prototype_Starglitter",
      refinement:
        "After using an Elemental Skill, increases Normal and Charged Attack DMG by **8/10/12/14/16%** for 12s. Max 2 stacks.",
    },
  ],
  [
    "dragonsbane",
    {
      name: "Dragon's Bane",
      description:
        "A polearm decorated with an entwining golden dragon. Light and sharp, this weapon may very well kill dragons with ease.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Weapon_Dragon%27s_Bane.png/revision/latest/scale-to-width-down/256?cb=20201116033629",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "48",
      specialAbility: "Bane of Flame and Water",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Dragon%27s_Bane",
      refinement:
        "Increases DMG against opponents affected by Hydro or Pyro by **20/24/28/32/36%**.",
    },
  ],
  [
    "blackcliffpole",
    {
      name: "Blackcliff Pole",
      description:
        "A weapon made of blackstone and aerosiderite. There is a dark crimson glow on its cold black sheen.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d5/Weapon_Blackcliff_Pole.png/revision/latest/scale-to-width-down/256?cb=20201116153435",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "12%",
      specialAbility: "Press the Advantage",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Blackcliff_Pole",
      refinement:
        "After defeating an opponent, ATK is increased by **12/15/18/21/24%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    },
  ],
  [
    "vortexvanquisher",
    {
      name: "Vortex Vanquisher",
      description:
        "This sharp polearm can seemingly pierce through anything. When swung, one can almost see the rift it tears in the air.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d6/Weapon_Vortex_Vanquisher.png/revision/latest/scale-to-width-down/256?cb=20201129060822",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "46",
      secondaryStat: "ATK%",
      secondaryStatValue: "10,8%",
      specialAbility: "Golden Majesty",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Vortex_Vanquisher",
      refinement:
        "Increases Shield Strength by **20/25/30/35/40%**. Scoring hits on opponents increases ATK by **4/5/6/7/8%** for 8s. Max 5 stacks. Can only occur once every 0,3s. While protected by a shield, this ATK increase effect is increased by 100%.",
    },
  ],
  [
    "skywardspine",
    {
      name: "Skyward Spine",
      description:
        "A polearm that symbolizes Dvalin's fire resolve. The upright shaft of this weapon points towards the heavens, clad in the might of sky and wind.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/69/Weapon_Skyward_Spine.png/revision/latest/scale-to-width-down/256?cb=20201116035301",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "48",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "8%",
      specialAbility: "Blackwing",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Skyward_Spine",
      refinement:
        "Increases CRIT Rate by **8/12/16/20/24%** and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on opponents have a 50% chance to trigger a vaccuum blade that deals **40/55/70/85/100%** of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.",
    },
  ],
  [
    "primordialjadewinged-spear",
    {
      name: "Primordial Jade Winged-Spear",
      description:
        "A jade polearm made by the archons, capable of slaying ancient beasts.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Weapon_Primordial_Jade_Winged-Spear.png/revision/latest/scale-to-width-down/256?cb=20201116152024",
      color: "RANDOM",
      category: "Polearm",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "48",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "4,8%",
      specialAbility: "Eagle Spear of Justice",
      moreInfo:
        "https://genshin-impact.fandom.com/wiki/Primordial_Jade_Winged-Spear",
      refinement:
        "On hit, increases ATK by **3,2/3,9/4,6/5,3/6%** for 6s. Max 7 stacks. This effect can only occur once every 0,3s. While in possession of the maximum possible stacks, DMG dealt is increased by **12/15/18/21/24%**.",
    },
  ],
  [
    "whiteirongreatsword",
    {
      name: "White Iron Greatsword",
      description:
        "A claymore made from white iron. Lightweight without compromising on power. Effective even when wielded by one of average strength, it is extremely deadly in the hands of a physically stronger wielder.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/56/Weapon_White_Iron_Greatsword.png/revision/latest/scale-to-width-down/256?cb=20201119201015",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "DEF%",
      secondaryStatValue: "9,6%",
      specialAbility: "Cull the Weak",
      moreInfo: "https://genshin-impact.fandom.com/wiki/White_Iron_Greatsword",
      refinement: "Defeating an opponent restores **8/10/12/14/16%** HP.",
    },
  ],
  [
    "skyridergreatsword",
    {
      name: "Skyrider Greatsword",
      description:
        "A reliable steel sword. The legendary Skyrider once tried to ride it as a flying sword... for the second time.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Weapon_Skyrider_Greatsword.png/revision/latest/scale-to-width-down/256?cb=20201116035158",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "Physical DMG Bonus",
      secondaryStatValue: "9,6%",
      specialAbility: "Courage",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Skyrider_Greatsword",
      refinement:
        "On hit, Normal or Charged Attacks increase ATK by **6/7/8/9/10%** for 6s. Max 4 stacks. Can only occur once every 0,5s.",
    },
  ],
  [
    "quartz",
    {
      name: "Quartz",
      description:
        "A simple but heavy greatsword made of polished black quartz with a golden gilt. It has an air of elegance and dignity about it.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Weapon_Quartz.png/revision/latest/scale-to-width-down/175?cb=20200620071952",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐",
      baseAttack: "40",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "16",
      specialAbility: "Residual Heat",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Quartz",
      refinement:
        "Upon causing an Overloaded, Melt, Burning, Vaporize, or a Pyro-infused Swirl reaction, increases Base ATK by **20/25/30/35/40%** for 12s.",
    },
  ],
  [
    "ferrousshadow",
    {
      name: "Ferrous Shadow",
      description:
        "A replica of the famed sword of Arundolyn, the Lion of Light. Feel the power of a legendary hero as you hold this sword in your hand! Imagine yourself as the great warrior himself! Note: Daydreaming not recommended in live combat.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e9/Weapon_Ferrous_Shadow.png/revision/latest/scale-to-width-down/256?cb=20201120003242",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "HP%",
      secondaryStatValue: "7,7%",
      specialAbility: "Unbending",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Ferrous_Shadow",
      refinement:
        "When HP falls below **70/75/80/85/90%**, increases Charged Attack DMG by **30/35/40/45/50%**, and Charged Attacks become much harder to interrupt.",
    },
  ],
  [
    "debateclub",
    {
      name: "Debate Club",
      description:
        "A handy club made of fine steel. The most persuasive line of reasoning in any debater's arsenal.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Weapon_Debate_Club.png/revision/latest/scale-to-width-down/256?cb=20201116033616",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "ATK%",
      secondaryStatValue: "7,7%",
      specialAbility: "Blunt Conclusion",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Debate_Club",
      refinement:
        "After using an Elemental Skill, Normal or Charged Attacks, on hit, deal an additional **60/75/90/105/120%** ATK DMG in a small area. Effect lasts 15s. DMG can only occur once every 3s.",
    },
  ],
  [
    "bloodtaintedgreatsword",
    {
      name: "Bloodtainted Greatsword",
      description:
        "A steel sword that is said to have been coated with dragon blood, rendering it invulnerable to damage. This effect is not extended to its wielder, however.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Weapon_Bloodtainted_Greatsword.png/revision/latest/scale-to-width-down/256?cb=20201119233531",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "38",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "41",
      specialAbility: "Bane of Fire and Thunder",
      moreInfo:
        "https://genshin-impact.fandom.com/wiki/Bloodtainted_Greatsword",
      refinement:
        "Increases DMG against opponents affected by Pyro or Electro by **12/15/18/21/24%**.",
    },
  ],
  [
    "blackcliffslasher",
    {
      name: "Blackcliff Slasher",
      description:
        "An extremely sturdy greatsword from the Blackcliff Forge. It has a dark crimson color from the blade to the pommel.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d7/Weapon_Blackcliff_Slasher.png/revision/latest/scale-to-width-down/256?cb=20201116033252",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "12%",
      specialAbility: "Press the Advantage",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Blackcliff_Slasher",
      refinement:
        "After defeating an opponent, ATK is increased by **12/15/18/21/24%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    },
  ],
  [
    "whiteblind",
    {
      name: "Whiteblind",
      description:
        "An exotic sword with one section of the blade left blunt. It made its way into Liyue via the hands of foreign traders. Incredibly powerful in the hands of someone who knows how to use it.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/04/Weapon_Whiteblind.png/revision/latest/scale-to-width-down/256?cb=20201116035607",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "DEF%",
      secondaryStatValue: "11,3%",
      specialAbility: "Infusion Blade",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Whiteblind",
      refinement:
        "On hit, Normal or Charged Attacks increase ATK and DEF by **6/7,5/9/10,5/12%** for 6s. Max 4 stacks (**24/30/36/42/48%** total). Can only occur once every 0,5s.",
    },
  ],
  [
    "snow-tombedstarsilver",
    {
      name: "Snow-Tombed Starsilver",
      description:
        "An ancient greatsword that was stored between frescoes. Forged from Starsilver, it has the power to cleave through ice and snow.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/49/Weapon_Snow-Tombed_Starsilver.png/revision/latest/scale-to-width-down/256?cb=20201223042944",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "Physical DMG Bonus",
      secondaryStatValue: "7,5%",
      specialAbility: "Frost Burial",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Snow-Tombed_Starsilver",
      refinement:
        "Hitting an opponent with Normal and Charged Attacks has a **60/70/80/90/100%** chance of forming and dropping an Everfrost Icicle above them, dealing **80/95/110/125/140%** AoE ATK DMG. Opponents affected by Cryo are dealt **200/240/280/320/360%** ATK DMG. Can only occur once every 10s.",
    },
  ],
  [
    "sacrificialgreatsword",
    {
      name: "Sacrificial Greatsword",
      description:
        "A ceremonial greatsword that has become petrified over time. The trinkets on it are still visible. It grants the wielder the power to withstand the winds of time.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/17/Weapon_Sacrificial_Greatsword.png/revision/latest/scale-to-width-down/256?cb=20201120004023",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "6,7%",
      specialAbility: "Composed",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Sacrificial_Greatsword",
      refinement:
        "After damaging an opponent with an Elemental Skill, the skill has a **40/50/60/70/80%** chance to end its own CD. Can only occur once every **30/26/22/19/16s**.",
    },
  ],
  // CBT3 **TODO**
  //[
  //  "lithicblade",
  //  {
  //    name: "Lithic Blade",
  //    description: "A greatsword carved and chiseled from the very bedrock of Liyue.",
  //    thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Weapon_Lithic_Blade.png/revision/latest/scale-to-width-down/176?cb=20200716172440",
  //    color: "RANDOM",
  //    category: "Claymore",
  //    stars: "⭐⭐⭐⭐",
  //    baseAttack: "41",
  //    secondaryStat: "CRIT DMG",
  //    secondaryStatValue: "16%",
  //    specialAbility: "Lithic Axiom - Unity",
  //    moreInfo: "https://genshin-impact.fandom.com/wiki/Lithic_Blade",
  //    refinement: "For every character in the party who hails from Liyue, the character who equips this weapon gains **6/7/8/9/10%** ATK increase and **2/3/4/5/6%** CRIT Rate increase.",
  //  },
  //],
  [
    "serpentspine",
    {
      name: "Serpent Spine",
      description:
        "A rare weapon whose origin is the ancient ocean. One can hear the sound of the ageless waves as one swings it.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/88/Weapon_Serpent_Spine.png/revision/latest/scale-to-width-down/256?cb=20201116035126",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "6%",
      specialAbility: "Wavesplitter",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Serpent_Spine",
      refinement:
        "Every 4s a character is on the field, they will deal **6/7/8/9/10%** more DMG and take **3/2,7/2,4/2,1/1,8%** more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.",
    },
  ],
  [
    "thebell",
    {
      name: "The Bell",
      description:
        "A heavy greatsword. A clock is embedded within it, though its internal mechanisms have long been damaged.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/6e/Weapon_The_Bell.png/revision/latest/scale-to-width-down/256?cb=20201116035344",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "HP%",
      secondaryStatValue: "9%",
      specialAbility: "Rebellious Guardian",
      moreInfo: "https://genshin-impact.fandom.com/wiki/The_Bell",
      refinement:
        "Taking DMG generates a shield which absorbs DMG up to **20/23/29/29/32%** of max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by the shield, the character gains **12/15/18/21/24%** increased DMG.",
    },
  ],
  [
    "royalgreatsword",
    {
      name: "Royal Greatsword",
      description:
        "An old greatsword that belonged to the erstwhile rulers of Mondstadt. It is made from the finest-quality materials and has stood the test of time. A weapon for use by royals only.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Weapon_Royal_Greatsword.png/revision/latest/scale-to-width-down/256?cb=20201116034928",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "ATK%",
      secondaryStatValue: "6%",
      specialAbility: "Focus",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Royal_Greatsword",
      refinement:
        "Upon damaging an opponent, increases CRIT Rate by **8/10/12/14/16%**. Max 5 stacks. A CRIT hit removes all stacks.",
    },
  ],
  [
    "rainslasher",
    {
      name: "Rainslasher",
      description:
        "A fluorescent greatsword with no sharp edge that crushes enemies with brute force and raw power.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d4/Weapon_Rainslasher.png/revision/latest/scale-to-width-down/256?cb=20201119235128",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "36",
      specialAbility: "Bane of Storm and Tide",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Rainslasher",
      refinement:
        "Increases DMG against opponents affected by Hydro or Electro by **20/24/28/32/36%**.",
    },
  ],
  [
    "prototypearchaic",
    {
      name: "Prototype Archaic",
      description:
        "An ancient greatsword discovered in the Blackcliff Forge. It swings with such an immense force that one feels it could cut straight through reality itself.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Weapon_Prototype_Archaic.png/revision/latest/scale-to-width-down/256?cb=20201116034721",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "ATK%",
      secondaryStatValue: "6%",
      specialAbility: "Crush",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Prototype_Archaic",
      refinement:
        "On hit, Normal or Charged Attacks have a 50% chance to deal an additional **240/300/360/420/480%** ATK DMG to opponents within a small AoE. Can only occur once every 15s.",
    },
  ],
  [
    "favoniusgreatsword",
    {
      name: "Favonius Greatsword",
      description:
        "A heavy ceremonial sword of the Knights of Favonius. It channels elemental power easily and is highly destructive.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Weapon_Favonius_Greatsword.png/revision/latest/scale-to-width-down/256?cb=20201119235934",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "13,3%",
      specialAbility: "Windfall",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Favonius_Greatsword",
      refinement:
        "CRIT Hits have a **60/70/80/90/100%** chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every **12/10,5/9/7,5/6s**.",
    },
  ],
  [
    "theunforged",
    {
      name: "The Unforged",
      description:
        "Capable of driving away evil spirits and wicked people alike, this edgeless claymore seems to possess divine might.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/f7/Weapon_The_Unforged.png/revision/latest/scale-to-width-down/256?cb=20201129060814",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "46",
      secondaryStat: "ATK%",
      secondaryStatValue: "10,8%",
      specialAbility: "Golden Majesty",
      moreInfo: "https://genshin-impact.fandom.com/wiki/The_Unforged",
      refinement:
        "Increases Shield Strength by **20/25/30/35/40%**, scoring hits on opponents increases ATK by **4/5/6/7/8%** for 8s. Max 5 stacks. Can only occur once every 0,3s. While protected by a shield this ATK increase effect is increased by 100%",
    },
  ],
  [
    "wolfsgravestone",
    {
      name: "Wolf's Gravestone",
      description:
        "A longsword used by the Wolf Knight. Originally just a heavy sheet of iron given to the knight by a blacksmith from the city, it became endowed with legendary power owing to his friendship with the wolves.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4f/Weapon_Wolf%27s_Gravestone.png/revision/latest/scale-to-width-down/256?cb=20201116035623",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "46",
      secondaryStat: "ATK%",
      secondaryStatValue: "10,8%",
      specialAbility: "Wolfish Tracker",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Wolf%27s_Gravestone",
      refinement:
        "Increases ATK by **20/25/30/35/40%**. On hit, attacks against opponents with less than 30% HP increase all party members' ATK by **40/50/60/70/80%** for 12s. Can only occur once every 30s.",
    },
  ],
  [
    "skywardpride",
    {
      name: "Skyward Pride",
      description:
        "A claymore that symbolizes the pride of Dvalin soaring through the skies. When swung, it emits a deep hum as the full force of Dvalin's command of the sky and the wind is unleashed.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Weapon_Skyward_Pride.png/revision/latest/scale-to-width-down/256?cb=20201116035255",
      color: "RANDOM",
      category: "Claymore",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "48",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "8%",
      specialAbility: "Sky-ripping Dragon Spine",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Skyward_Pride",
      refinement:
        "Increases all DMG by **8/10/12/14/16%**. After using an Elemental Burst, Normal or Charged Attack, on hit, creates a vacuum blade that does **80/100/120/140/160%** of ATK as DMG to opponents along its path. Lasts for 20s or 8 vacuum blades.",
    },
  ],
  //  CBT3 **TODO**
  //  [
  //    "ambercatalyst",
  //    {
  //      name: "Amber Catalyst",
  //      description: "A catalyst carved out of amber that gains a warm halo under the sun.",
  //      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/9/97/Weapon_Amber_Catalyst.png/revision/latest/scale-to-width-down/126?cb=20200619021800",
  //      color: "RANDOM",
  //      category: "Catalyst",
  //      stars: "⭐⭐⭐",
  //      baseAttack: "40",
  //      secondaryStat: "Elemental Mastery",
  //      secondaryStatValue: "16",
  //      specialAbility: "Elemental Mastery",
  //      moreInfo: "https://genshin-impact.fandom.com/wiki/Amber_Catalyst",
  //      refinement: "Normal Attack hits increase all Elemental DMG by **6/7,5/9/10,5/12%** for 6s. Max 2 stacks.",
  //    },
  //  ],
  [
    "magicguide",
    {
      name: "Magic Guide",
      description:
        "Version 12. A reprint featuring corrections to Version 11 and brand-new additions based on recent developments.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/39/Weapon_Magic_Guide.png/revision/latest/scale-to-width-down/256?cb=20201119232047",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐",
      baseAttack: "38",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "41",
      specialAbility: "Bane of Storm and Tide",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Magic_Guide",
      refinement:
        "Increases DMG against opponents affected by Hydro or Electro by **12/15/18/21/24%**.",
    },
  ],
  [
    "thrillingtalesofdragonslayers",
    {
      name: "Thrilling Tales of Dragon Slayers",
      description:
        "A fictional story of a band of five heroes who go off on a dragon hunt. It is poorly written and structurally incoherent. Its value lies in the many lessons that can be learned from failure.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/19/Weapon_Thrilling_Tales_of_Dragon_Slayers.png/revision/latest/scale-to-width-down/256?cb=20201119201736",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "HP%",
      secondaryStatValue: "7,7%",
      specialAbility: "Legacy",
      moreInfo:
        "https://genshin-impact.fandom.com/wiki/Thrilling_Tales_of_Dragon_Slayers",
      refinement:
        "When switching characters, the new character taking the field has their ATK increased by **24/30/36/32/48%** for 10s. This effect can only occur once every 20s.",
    },
  ],
  [
    "twinnephrite",
    {
      name: "Twin Nephrite",
      description: "A jade pendant formed by piecing together two jade stones.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e3/Weapon_Twin_Nephrite.png/revision/latest/scale-to-width-down/256?cb=20201119201412",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐",
      baseAttack: "40",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "3,4%",
      specialAbility: "Guerilla Tactic",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Twin_Nephrite",
      refinement:
        "Defeating an opponent increases Movement SPD and ATK by **12/14/16/18/20%** for 15s.",
    },
  ],
  [
    "otherworldlystory",
    {
      name: "Otherworldly Story",
      description:
        "A cheap fantasy novel with no value whatsoever. Any claim that it possesses the power of catalysis is also pure fantasy.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/11/Weapon_Otherworldly_Story.png/revision/latest/scale-to-width-down/256?cb=20201116034636",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "8,5%",
      specialAbility: "Energy Shower",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Otherworldly_Story",
      refinement:
        "Each Elemental Orb or Particle collected restores **1/1,25/1,5/1,75/2%** HP.",
    },
  ],
  [
    "emeraldorb",
    {
      name: "Emerald Orb",
      description:
        "A catalyst carved out of the hard jade from Jueyunjian north of Liyue. It is small, light, and durable.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7c/Weapon_Emerald_Orb.png/revision/latest/scale-to-width-down/256?cb=20201120003056",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐",
      baseAttack: "40",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "20",
      specialAbility: "Rapids",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Emerald_Orb",
      refinement:
        "Upon causing a Vaporize, Electro-Charged, Frozen, or a Hydro-infused Swirl reaction, increases ATK by **20/25/30/35/40%** for 12s.",
    },
  ],
  [
    "solarpearl",
    {
      name: "Solar Pearl",
      description:
        "A dull, golden pearl made of an unknown substance that harbors the light of the sun and the moon, and pulses with a warm strength.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Weapon_Solar_Pearl.png/revision/latest/scale-to-width-down/256?cb=20201116035322",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "6%",
      specialAbility: "Solar Shine",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Solar_Pearl",
      refinement:
        "Normal Attack hits increase Elemental Skill and Elemental Burst DMG by **20/25/30/35/40%** for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by **20/25/30/35/40%** for 6s.",
    },
  ],
  //  CBT 3 **TODO**
  //  [
  //    "wineandsong",
  //    {
  //      name: "Wine and Song",
  //      description: "A songbook from the bygone aristocratic era, whose composer has become forgotten. It chronicles the tale of a certain heroic outlaw.",
  //      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Weapon_Wine_and_Song.png/revision/latest/scale-to-width-down/92?cb=20200715012327",
  //      color: "RANDOM",
  //      category: "Catalyst",
  //      stars: "⭐⭐⭐⭐",
  //      baseAttack: "42",
  //      secondaryStat: "Energy Recharge",
  //      secondaryStatValue: "10%",
  //      specialAbility: "Wind in the Square",
  //      moreInfo: "https://genshin-impact.fandom.com/wiki/Wine_and_Song",
  //      refinement: "For every character in the party who hails from Mondstadt, the character who equips this weapon gains **8/10/12/14/16%** ATK increase and **3/3,5/4/4,5/5%** Movement SPD increase.",
  //    },
  //  ],
  [
    "eyeofperception",
    {
      name: "Eye of Perception",
      description:
        "A dim black glaze pearl that is said to have the power to reach the purity of one's heart.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Weapon_Eye_of_Perception.png/revision/latest/scale-to-width-down/256?cb=20201116033703",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "ATK%",
      secondaryStatValue: "12%",
      specialAbility: "Echo",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Eye_of_Perception",
      refinement:
        "Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing **240/270/300/330/360%** ATK as DMG. This bolt can bounce between opponents a maximum of 4 times. This effect can occur once every **12/11/10/9/8s**.",
    },
  ],
  [
    "thewidsith",
    {
      name: "The Widsith",
      description:
        "A heavy notebook filled with musical scores. Though suffering from moth damage and heavy wear-and-tear, there is still much power to be found among the hand-written words within.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Weapon_The_Widsith.png/revision/latest/scale-to-width-down/256?cb=20201119201814",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "12%",
      specialAbility: "Debut",
      moreInfo: "https://genshin-impact.fandom.com/wiki/The_Widsith",
      refinement:
        "When a character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s.\n**Recitative:** ATK is increased by **60/75/90/105/120%**.\n**Aria:** Increases all Elemental DMG by **48/60/72/84/96%**.\n**Interlude:** Elemental Mastery is increased by **240/300/360/420/480**.",
    },
  ],
  [
    "frostbearer",
    {
      name: "Frostbearer",
      description:
        "A fruit that possesses a strange frosty will. A faint sense of agony emanates from it.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Weapon_Frostbearer.png/revision/latest/scale-to-width-down/256?cb=20201220074547",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "ATK%",
      secondaryStatValue: "9%",
      specialAbility: "Frost Burial",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Frostbearer",
      refinement:
        "Hitting an opponent with Normal and Charged Attacks has a **60/70/80/90/100%** chance of forming and dropping an Everfrost Icicle above them, dealing **80/95/110/125/140%** AoE ATK DMG.\nOpponents affected by Cryo are dealt **200/240/280/320/360%** ATK DMG. Can only occur once every 10s.",
    },
  ],
  [
    "sacrificialfragments",
    {
      name: "Sacrificial Fragments",
      description:
        "A weathered script, the text of which is no longer legible. A cursed item eroded by the winds of time.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/6c/Weapon_Sacrificial_Fragments.png/revision/latest/scale-to-width-down/256?cb=20201116035037",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "48",
      specialAbility: "Composed",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Sacrificial_Fragments",
      refinement:
        "After dealing damage to an opponent with an Elemental Skill, the skill has a **40/50/60/70/80%** chance to end its own CD. Can only occur once every 30s.",
    },
  ],
  [
    "royalgrimoire",
    {
      name: "Royal Grimoire",
      description:
        "A book that once belonged to a royal mage of Mondstadt. It contains faithful and comprehensive historical accounts as well as magic spells.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/99/Weapon_Royal_Grimoire.png/revision/latest/scale-to-width-down/256?cb=20201120000114",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "ATK%",
      secondaryStatValue: "6%",
      specialAbility: "Focus",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Royal_Grimoire",
      refinement:
        "Upon damaging an opponent, increases CRIT Rate by **8/10/12/14/16%**. Max 5 stacks. A CRIT hit removes all stacks.",
    },
  ],
  [
    "prototypeamber",
    {
      name: "Prototype Amber",
      description:
        "A dully gilded catalyst secretly guarded in the Blackcliff Forge. It seems to glow with the very light from the sky.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Weapon_Prototype_Amber.png/revision/latest/scale-to-width-down/256?cb=20201116034808",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "HP%",
      secondaryStatValue: "9%",
      specialAbility: "Gliding",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Prototype_Amber",
      refinement:
        "Using an Elemental Burst regenerates **4/4,5/5/5,5/6** Energy every 2s for 6s. All party members will regenerate **4/4,5/5/5,5/6%** HP every 2s for this duration.",
    },
  ],
  [
    "mappamare",
    {
      name: "Mappa Mare",
      description:
        "A nautical chart featuring nearby currents and climates that somehow found its way into Liyue via foreign traders.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4d/Weapon_Mappa_Mare.png/revision/latest/scale-to-width-down/256?cb=20201116034208",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "24",
      specialAbility: "Infusion Scroll",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Mappa_Mare",
      refinement:
        "Triggering an Elemental reaction grants a **8/10/12/14/16%** Elemental DMG Bonus for 10s. Max 2 stacks.",
    },
  ],
  [
    "favoniuscodex",
    {
      name: "Favonius Codex",
      description:
        "A secret tome that belonged to the scholars of the Knights of Favonius. It describes the logic and power of elements and matter.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/36/Weapon_Favonius_Codex.png/revision/latest/scale-to-width-down/256?cb=20201116033719",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "10%",
      specialAbility: "Critical Charge",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Favonius_Codex",
      refinement:
        "CRIT hits have a **60/70/80/90/100%** chance to generate a small amount of Elemental Particles, which will regenerate 6 Energy for the character. Can only occur once every **12/10,5/9/7,5/6s**.",
    },
  ],
  [
    "blackcliffagate",
    {
      name: "Blackcliff Agate",
      description:
        "A mysterious catalyst made of blackstone. It has an ominous crimson glow that seems to pulse in synchronization with the tremors from deep within the earth.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a6/Weapon_Blackcliff_Agate.png/revision/latest/scale-to-width-down/256?cb=20201119233950",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "12%",
      specialAbility: "Press the Advantage",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Blackcliff_Agate",
      refinement:
        "After defeating an opponent, ATK is increased by **12/15/18/21/24%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    },
  ],
  [
    "lostprayertothesacredwinds",
    {
      name: "Lost Prayer to the Sacred Winds",
      description:
        "An educational tome written by anonymous early inhabitants who worshiped the wind. It has been blessed by the wind for its faithfulness and influence over the millennia.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/98/Weapon_Lost_Prayer_to_the_Sacred_Winds.png/revision/latest/scale-to-width-down/256?cb=20201116034132",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "446",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "7,2%",
      specialAbility: "Boundless Blessing",
      moreInfo:
        "https://genshin-impact.fandom.com/wiki/Lost_Prayer_to_the_Sacred_Winds",
      refinement:
        "Increases Movement SPD by 10%. When in battle, gain an **8/10/12/14/16%** Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.",
    },
  ],
  [
    "memoryofdust",
    {
      name: "Memory of Dust",
      description:
        "A stone dumbbell containing distant memories. Its endless transformations reveal the power within.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Weapon_Memory_of_Dust.png/revision/latest/scale-to-width-down/256?cb=20201119232148",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "46",
      secondaryStat: "ATK%",
      secondaryStatValue: "10,8%",
      specialAbility: "Golden Majesty",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Memory_of_Dust",
      refinement:
        "Increases Shield Strength by **20/25/30/35/40%**. Scoring hits on opponents increases ATK by **4/5/6/7/8%** for 8s. Max 5 stacks. Can only occur once every 0,3s. While protected by a shield, this ATK increase effect is increased by 100%.",
    },
  ],
  [
    "skywardatlas",
    {
      name: "Skyward Atlas",
      description:
        "A cloud atlas symbolizing Dvalin and its former master, the Anemo Archon. It details the winds and clouds of the northern regions and contains the powers of the sky and wind.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/33/Weapon_Skyward_Atlas.png/revision/latest/scale-to-width-down/256?cb=20201116035225",
      color: "RANDOM",
      category: "Catalyst",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "48",
      secondaryStat: "ATK%",
      secondaryStatValue: "7,2%",
      specialAbility: "Wandering Clouds",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Skyward_Atlas",
      refinement:
        "Increases Elemental DMG Bonus by **12/15/18/21/24%**. Normal Attack hits have a 50% chance to earn the favor of the clouds. which actively seek out nearby opponents to attack for 15s, dealing **160/200/240/280/320%** ATK DMG. Can only occur once every 30s.",
    },
  ],
  [
    "sharpshootersoath",
    {
      name: "Sharpshooter's Oath",
      description:
        "This superior bow once belonged to a master archer. However, it gives off a strong scent, thus making it unsuitable for hunting.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/52/Weapon_Sharpshooter%27s_Oath.png/revision/latest/scale-to-width-down/256?cb=20201116035135",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐",
      baseAttack: "39",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "10,2%",
      specialAbility: "Precise",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Sharpshooter%27s_Oath",
      refinement: "Increases DMG against weak spots by **24/30/36/42/48%**.",
    },
  ],
  [
    "slingshot",
    {
      name: "Slingshot",
      description:
        "A bow, despite the name. After countless experiments and improvements to the design, the creator of the ultimate slingshot found himself to have made what was actually a bow.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/ca/Weapon_Slingshot.png/revision/latest/scale-to-width-down/256?cb=20201116035308",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐",
      baseAttack: "38",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "6,8%",
      specialAbility: "Slingshot",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Slingshot",
      refinement:
        "If a Normal or Charged Attack hits a target within 0,3s of being fired, increases DMG by **36/42/48/54/60%**. Otherwise, decreases DMG by 10%.",
    },
  ],
  [
    "ravenbow",
    {
      name: "Raven Bow",
      description:
        "Ravens are known to be the ferrymen of the dead. This bow's limb is decorated with raven feathers, which forebode the imminent death of its target.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d0/Weapon_Raven_Bow.png/revision/latest/scale-to-width-down/256?cb=20201116034840",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐",
      baseAttack: "40",
      secondaryStat: "Elemental Mastery",
      secondaryStatValue: "20",
      specialAbility: "Bane of Flame and Water",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Raven_Bow",
      refinement:
        "Increases DMG against opponents affected by Hydro or Pyro by **12/15/18/21/24%**.",
    },
  ],
  //  CBT2 **TODO**
  //  [
  //    "ebonybow",
  //    {
  //      name: "Ebony Bow",
  //      description: "A longbow made of ebony wood with stiffer limbs than ordinary bows. It is also a far more powerful weapon.",
  //      thumbnail: "A longbow made of ebony wood with stiffer limbs than ordinary bows. It is also a far more powerful weapon.",
  //      color: "RANDOM",
  //      category: "Bow",
  //      stars: "⭐⭐⭐",
  //      baseAttack: "40",
  //      secondaryStat: "ATK%",
  //      secondaryStatValue: "6,3%",
  //      specialAbility: "Decimate",
  //      moreInfo: "https://genshin-impact.fandom.com/wiki/Ebony_Bow",
  //      refinement: "Increases DMG against mechanoid Ruin opponents by **40/50/60/70/80%**.",
  //    },
  //  ],
  [
    "messenger",
    {
      name: "Messenger",
      description:
        "A basic wooden bow. It is said to have once been used as a tool for long-distance communication.",
      thumbnail: "https://i.imgur.com/KrZR1IM.png",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐",
      baseAttack: "40",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "6,8%",
      specialAbility: "Archer's Message",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Messenger",
      refinement:
        "Charged Attack hits on weak spots deal an additional **100/125/150/175/200%** ATK DMG as CRIT DMG. Can only occur once every 10s.",
    },
  ],
  [
    "recurvebow",
    {
      name: "Recurve Bow",
      description:
        "It is said that this bow can shoot down eagles in flight, but ultimately how true that is depends on the skill of the archer.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b5/Weapon_Recurve_Bow.png/revision/latest/scale-to-width-down/256?cb=20201120005927",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐",
      baseAttack: "38",
      secondaryStat: "HP%",
      secondaryStatValue: "10,2%",
      specialAbility: "Cull the Weak",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Recurve_Bow",
      refinement: "Defeating an opponent restores **8/10/12/14/16%** HP.",
    },
  ],
  [
    "compoundbow",
    {
      name: "Compound Bow",
      description:
        "An exotic metallic bow from a distant land. Though extremely difficult to maintain, it is easy to nock and fires with tremendous force.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/32/Weapon_Compound_Bow.png/revision/latest/scale-to-width-down/256?cb=20201116033506",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Physical DMG Bonus",
      secondaryStatValue: "15%",
      specialAbility: "Infusion Arrow",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Compound_Bow",
      refinement:
        "Normal Attack and Charged Attack hits increase ATK by **4/5/6/7/8%** and Normal ATK SPD by **1,2/1,5/1,8/2,1/2,4%** for 6s. Max 4 stacks. Can only occur once every 0,3s.",
    },
  ],
  [
    "blackcliffwarbow",
    {
      name: "Blackcliff Warbow",
      description:
        "A bow made of blackstone that features extremely sturdy bow limbs. It requires an archer with a strong bow arm to use.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/b8/Weapon_Blackcliff_Warbow.png/revision/latest/scale-to-width-down/256?cb=20201103093753",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "CRIT DMG",
      secondaryStatValue: "8%",
      specialAbility: "Press the Advantage",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Blackcliff_Warbow",
      refinement:
        "After defeating an opponent, ATK is increased by **12/15/18/21/24%** for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    },
  ],
  [
    "theviridescenthunt",
    {
      name: "The Viridescent Hunt",
      description:
        "A pure green hunting bow. This once belonged to a certain hunter whose home was the forest.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Weapon_The_Viridescent_Hunt.png/revision/latest/scale-to-width-down/256?cb=20201120010331",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "6%",
      specialAbility: "Verdant Wind",
      moreInfo: "https://genshin-impact.fandom.com/wiki/The_Viridescent_Hunt",
      refinement:
        "Upon hit, Normal and Aimed Shot Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding opponents, dealing **40/50/60/70/80%** of ATK as DMG to these opponents every 0,5s for 4s. This effect can only occur once every **14/13/12/11/10s**.",
    },
  ],
  [
    "prototypecrescent",
    {
      name: "Prototype Crescent",
      description:
        "A prototype longbow discovered in the Blackcliff Forge. The arrow fired from this bow glimmers like a ray of moonlight.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/43/Weapon_Prototype_Crescent.png/revision/latest/scale-to-width-down/256?cb=20201116034737",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "ATK%",
      secondaryStatValue: "9%",
      specialAbility: "Unreturning",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Prototype_Crescent",
      refinement:
        "Charged Attack hits on weak points increase Movement SPD by 10% and ATK by **36/45/54/63/72%** for 10s.",
    },
  ],
  [
    "sacrificialbow",
    {
      name: "Sacrificial Bow",
      description:
        "A ceremonial hunting bow that has become petrified over time. The trinkets on it are still visible. It grants the wielder the power to withstand the winds of time.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/ec/Weapon_Sacrificial_Bow.png/revision/latest/scale-to-width-down/256?cb=20201120002607",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "44",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "6,7%",
      specialAbility: "Composed",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Sacrificial_Bow",
      refinement:
        "After dealing damage to an opponent with an Elemental Skill, the skill has a **40/50/60/70/80%** chance to end its own CD. Can only occur once every **30/26/22/18/16s**.",
    },
  ],
  [
    "rust",
    {
      name: "Rust",
      description:
        "A completely rusted iron greatbow. The average person would lack the strength to even lift it, let alone fire it.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Weapon_Rust.png/revision/latest/scale-to-width-down/256?cb=20201120002437",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "ATK%",
      secondaryStatValue: "9%",
      specialAbility: "Rapid Firing",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Rust",
      refinement:
        "Increases Normal Attack DMG by **40/50/60/70/80%** but decreases Charged Attack DMG by 10%.",
    },
  ],
  //  CBT3 **TODO**
  //  [
  //    "alleyhunter",
  //    {
  //      name: "Alley Hunter",
  //      description: "An intricate, opulent longbow. It once belonged to a gentleman thief who was never caught.",
  //      thumbnail: "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Weapon_Alley_Hunter.png/revision/latest/scale-to-width-down/136?cb=20210111041718",
  //      color: "RANDOM",
  //      category: "Bow",
  //      stars: "⭐⭐⭐⭐",
  //      baseAttack: "41",
  //      secondaryStat: "CRIT Rate",
  //      secondaryStatValue: "8%",
  //      specialAbility: "Urban Guerrilla",
  //      moreInfo: "https://genshin-impact.fandom.com/wiki/Alley_Hunter",
  //      refinement: "Every 4s a character is on the field, their ATK increases by **4/5/6/7/8%** and their CRIT DMG increases by **4/5/6/7/8%**. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be cleared when the character takes DMG.",
  //    },
  //  ],
  [
    "thestringless",
    {
      name: "The Stringless",
      description:
        "A bow that once served as an extraordinary instrument. It is no longer capable of getting people up and dancing.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Weapon_The_Stringless.png/revision/latest/scale-to-width-down/256?cb=20201116035406",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "Elemental Mastey",
      secondaryStatValue: "36",
      specialAbility: "Arrowless Song",
      moreInfo: "https://genshin-impact.fandom.com/wiki/The_Stringless",
      refinement:
        "Increases Elemental Skill and Elemental Burst DMG by **24/30/36/42/48%**.",
    },
  ],
  [
    "royalbow",
    {
      name: "Royal Bow",
      description:
        "An old royal longbow that belonged to the erstwhile rulers of Mondstadt. Countless generations later, the bowstring is still tight and can still fire arrows with great force.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/99/Weapon_Royal_Bow.png/revision/latest/scale-to-width-down/256?cb=20201120002134",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "42",
      secondaryStat: "ATK%",
      secondaryStatValue: "9%",
      specialAbility: "Focus",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Royal_Bow",
      refinement:
        "Upon damaging an opponent, increases CRIT Rate by **8/10/12/14/16%**. Max 5 stacks. A CRIT hit removes all stacks.",
    },
  ],
  [
    "favoniuswarbow",
    {
      name: "Favonius Warbow",
      description:
        "A standard-issue recurve bow of the Knights of Favonius. Only the best archers can unleash its full potential.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/85/Weapon_Favonius_Warbow.png/revision/latest/scale-to-width-down/256?cb=20201120003145",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐",
      baseAttack: "41",
      secondaryStat: "Energy Recharge",
      secondaryStatValue: "113,3%",
      specialAbility: "Windfall",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Favonius_Warbow",
      refinement:
        "CRIT hits have a **60/70/80/90/10%** chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every **12/10,5/9/7,5/6s**.",
    },
  ],
  [
    "amosbow",
    {
      name: "Amos' Bow",
      description:
        "An extremely ancient bow that has retained its power despite its original master being long gone. It draws power from everyone and everything in the world, and the further away you are from that which your heart desires the more.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/de/Weapon_Amos%27_Bow.png/revision/latest/scale-to-width-down/256?cb=20201120010513",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "46",
      secondaryStat: "ATK%",
      secondaryStatValue: "10,8%",
      specialAbility: "Strong-Willed",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Amos%27_Bow",
      refinement:
        "Increases Normal Attack and Charged Attack DMG by **12/15/18/21/24%**. Normal and Charged Attack DMG increases by **8/10/12/14/16%** every 0,1s for up to 5 times.",
    },
  ],
  [
    "skywardharp",
    {
      name: "Skyward Harp",
      description:
        "A greatbow that symbolizes Dvalin's affiliation with the Anemo Archon. The sound of the bow firing is music to the Anemo Archon's ears. It contains the power of the sky and wind within.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/19/Weapon_Skyward_Harp.png/revision/latest/scale-to-width-down/256?cb=20201116035246",
      color: "RANDOM",
      category: "Bow",
      stars: "⭐⭐⭐⭐⭐",
      baseAttack: "48",
      secondaryStat: "CRIT Rate",
      secondaryStatValue: "4,8%",
      specialAbility: "Echoing Ballad",
      moreInfo: "https://genshin-impact.fandom.com/wiki/Skyward_Harp",
      refinement:
        "Increases CRIT DMG by 20%. Hits have a **60/70/80/90/100%** chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every **4/3,5/3/2,5/2s**.",
    },
  ],
]);
