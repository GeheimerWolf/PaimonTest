export const characters = new Map([
  [
    "zhongli",
    {
      name: "Zhongli",
      description:
        "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
      emoji: "<:Zhongli:798577390577254441>",
      thumbnail: "https://i.imgur.com/FbpPr3j.png",
      image: "https://i.imgur.com/FbpPr3j.png",
      color: "ffc100",
      category: "Geo",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Geo:798483630740865044> Geo",
      weapon: "Polearm",
      nation: "Liyue",
      affiliation: "Wangsheng Funeral Parlor Archons",
      specialDish: "Slow-Cooked Bamboo Shoot Soup",
      constellation: "Lapis Dei",
      birthday: "December 31st",
      ascensionCost: "https://i.imgur.com/gPDl5vi.png",
      activeTalents: [
        {
          name: "Rain of Stone",
          description:
            "**Normal Attack**\nPerforms up to 6 rapid strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to lunge forward, causing stone spears to fall along his path.\n\n**Plunging Attack**\nPlunges from mid-air to strike the gronud below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Dominus Lapidis",
          description:
            "**Press**\nCommands the omnipresent power of the earth to solidify into a Stone Stele, standing 30 seconds, dealing AoE Geo DMG at the creation.\nOnce per 2 seconds, the Stone Stele will resonate with the nearby Geo Constructs, dealing Geo DMG to surrounding opponents.\nThe Stone Stele is considered a Geo Construct, and can both be climbed and used to block attacks. Only one Stele may exist at any one time.\n\n**Hold**\nCauses nearby Geo energy to explode, causing the following effects:\nCreates a shield of jade. The shield's DMG absorption scales based on Zhongli's Max HP, and absorbs Geo DMG 250% more effectively.\nCauses AoE Geo DMG.\nIf there are nearby targets with the Geo element, it will drain a large amount of Geo element from a maximum of 2 such targets. This effect does not cause DMG.\nWhen hit at least one opponent, the Stone Stele creation and the Resonance generate 0.5 elemental particles.\n",
        },
        {
          name: "Burst: Planet Befall",
          description:
            "Brings a falling meteor down to earth, dealing massive Geo DMG to opponents caught in its AoE and applying the Petrification status to them.\nPetrification: Opponents affected by the Petrification status cannot move.",
        },
      ],
      passiveTalents: [
        {
          name: "Resonant Waves",
          description:
            "When the Jade Shield takes DMG, it will Fortify:\nFortified characters have 5% increased Shield Strength.\nCan stack up to 5 times, and lasts until the Jade Shield disappears.",
        },
        {
          name: "Dominance of Earth",
          description:
            "Planet Befall deals additional DMG equal to 33% of Zhongli's Max HP.",
        },
        {
          name: "Arcanum of Crystal",
          description:
            "Refunds 15% of the ores used when crafting Polearm-type weapons.",
        },
      ],
      constellations: [
        {
          name: "C1: Rock, the Backbone of Earth",
          description:
            "Increases the maximum number of Stone Steles created by Dominus Lapidis that may exist simultaneously to 2.",
        },
        {
          name: "C2: Stone, the Cradle of Jade",
          description:
            "Planet Befall grants nearby characters on the field a Jade Shield when it descends.",
        },
        {
          name: "C3: Jade, Shimmering through Darkness",
          description:
            "Increases the Level of Dominus Lapidis by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Topaz, Unbreakable and Fearless",
          description:
            "Increases Planet Befall's AoE by 20% and increases the duration of Planet Befall's Petrification effect by 2s.",
        },
        {
          name: "C5: Lazuli, Herald of the Order",
          description:
            "Increases the Level of Planet Befall by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Chrysos, Bounty of Dominator",
          description:
            "When the Jade Shield takes DMG, 40% of that incoming DMG is converted to HP for the current character. A single instance of regeneration cannot exceed 8% of that character's Max HP.",
        },
      ],
    },
  ],
  [
    "xinyan",
    {
      name: "Xinyan",
      description:
        "Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Character_Xinyan_Portrait.png/revision/latest?cb=20201128161608",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Character_Xinyan_Portrait.png/revision/latest?cb=20201128161608",
      color: "ff4000",
      emoji: "<:Xinyan:798577406427529246>",
      category: "Pyro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Pyro:798483485832249354> Pyro",
      weapon: "Claymore",
      nation: "Liyue",
      affiliation: "Liyue Harbor",
      specialDish: "Rockin' Riffin' Chicken!",
      constellation: "Fila Ignium",
      birthday: "October 16th",
      ascensionCost: "https://i.imgur.com/oS6dSH5.png",
      activeTalents: [
        {
          name: "Dance of Fire",
          description:
            "**Normal Attack**\nPerforms up to 4 consecutive strikes.\n\n**Charged Attack**\nDrains Stamina over time to perform continuous spinning attacks against all nearby opponents.\nAt end of the sequence, perform a more powerful slash.\n\nn**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Sweeping Fervor",
          description:
            "Xinyan brandishes her instrument, dealing **Pyro DMG** on nearby opponents, forming a shield made out of her audience's passion.\nThe shield's DMG Absorption scales based on Xinyan's DEF and on the number of opponents hit.\nHitting 0-1 opponents grants Shield Level 1: Ad Lib.\nHitting 2 opponents grants Shield Level 2: Lead-In.\nHitting 3 or more opponents grants Shield Level 3: Rave, which will also deal intermittent **Pyro DMG** to nearby opponents.\n\nThe shield has the following special properties:\nWhen unleashed, it infuses Xinyan with Pyro.\nIt has 250% DMG Absorption effectiveness against **Pyro DMG**.\n\nGenerate 4 elemental particles when it hit at least 1 target.\n",
        },
        {
          name: "Burst: Riff Revolution",
          description:
            "Strumming rapidly, Xinyan launches nearby opponents and deals Physical DMG to them, hyping up the crowd. The sheer intensity of the atmosphere will cause explosions that deal **Pyro DMG** to nearby opponents.",
        },
      ],
      passiveTalents: [
        {
          name: "The Show Goes On, Even Without an Audience...",
          description:
            "Decreases the number of opponents Sweeping Fervor must hit to trigger each level of shielding.\nShield Level 2: Lead-In requirement reduced to 1 opponent hit.\nShield Level 3: Rave requirement reduced to 2 opponents hit or more.",
        },
        {
          name: "...Now That's Rock 'N' Roll!",
          description:
            "Characters shielded by Sweeping Fervor deal 15% increased Physical DMG.",
        },
        {
          name: "A Rad Recipe",
          description:
            "When a Perfect Cooking is achieved on a DEF-boosting dish, Xinyan has a 12% chance to obtain double the product.",
        },
      ],
      constellations: [
        {
          name: "C1: Fatal Acceleration",
          description:
            "Upon scoring a CRIT hit, increases ATK SPD of Xinyan's Normal and Charged Attacks by 12% for 5s. Can only occur once every 5s.",
        },
        {
          name: "C2: Impromptu Opening",
          description:
            "Riff Revolution Physical DMG has its Crit rate increased by 100%, and will form a shield at Shield Level 3: Rave when cast.",
        },
        {
          name: "C3: Double-Stop",
          description:
            "Increases the Level of Sweeping Fervor by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Wildfire Rhythm",
          description:
            "Sweeping Fervor's swing DMG decrease opponent's Physical RES by 15% for 12s.",
        },
        {
          name: "C5: Screamin' for an Encore",
          description:
            "Increases the Level of Riff Revolution by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Rockin' in a Flaming World",
          description:
            "Decrease the Stamina Consumption of Xinyan Charged Attacks by 30%. Additionally, Xinyan's Charged Attacks gain an ATK bonus equal to 50% of her DEF.",
        },
      ],
    },
  ],
  [
    "xingqiu",
    {
      name: "Xingqiu",
      description:
        "He is the second son of the Guild Manager of the Feiyun Commerce Guild, an influential group in Liyue, and is also a self-proclaimed practitioner of the Guhua Clan's arts.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Character_Xingqiu_Portrait.png/revision/latest/?cb=20200916184107",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Character_Xingqiu_Portrait.png/revision/latest/?cb=20200916184107",
      color: "0379fd",
      emoji: "<:Xingqiu:798577525265399838>",
      category: "Hydro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Hydro:798483587157983282> Hydro",
      weapon: "Sword",
      nation: "Liyue",
      affiliation: "Feiyun Commerce Guild",
      specialDish: "All-Delicacy Parcels",
      constellation: "Fabulae Textile",
      birthday: "October 9th",
      ascensionCost: "https://i.imgur.com/kEXUzQH.png",
      activeTalents: [
        {
          name: "Guhua Style",
          description:
            "**Normal Attack**\nPerforms up to 5 rapid strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\n**Plunging Attack**\nPlunges from mid-aur to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Guhua Sword - Fatal Rainscreen",
          description:
            "Xingqiu performs twin strikes with his sword, dealing **Hydro DMG**.\nAt the same time, this ability creates the maximum number of Rain Swords, which will orbit the character.\nThe Rain Swords have the following properties:\n\n-When a character takes DMG, the Rain Sword will shatter, reducing the amount of DMG taken.\n\n-Increases the character's resistance to interruption.\n\n20% of Xingqiu's **Hydro DMG** Bonus will be converted to additional DMG Reduction for the Rain Swords.\n\nThe maximum amount of additional DMG Reduction that can be gained this way is 24%.\nThe initial maximum number of Rain Swords is 3.\nUsing this ability applies the Wet status onto the character.\n",
        },
        {
          name: "Burst: Guhua Sword - Raincutter",
          description:
            "Initiate Rainbow Bladework and fight using an illusory sword rain, while creating the maximum number of Rain Swords.\n\n**Rainbow Bladework**\n-Normal Attacks will trigger consecutive sword rain attacks, dealing **Hydro DMG**.\n\n-Rain Swords will remain at the maximum number throughout the ability's duration.\nThese effects carry over to other characters.",
        },
      ],
      passiveTalents: [
        {
          name: "Hydropathic",
          description:
            "When a Rain Sword is shattered or when its duration expires, it regenerates the current character's HP based on 6% of Xingqiu's Max HP.",
        },
        {
          name: "Blades Amidst Raindrops",
          description: "Xingqiu gains a 20% **Hydro DMG** Bonus.",
        },
        {
          name: "Flash of Genius",
          description:
            "When Xingqiu crafts Character Talent Materials, he has a 25% chance to refund a portion of the crafting materials used.",
        },
      ],
      constellations: [
        {
          name: "C1: The Scent Remained",
          description: "Increases the maximum number of Rain Swords by 1.",
        },
        {
          name: "C2: Rainbow Upon the Azure Sky",
          description:
            "Extends the duration of Guhua Sword - Raincutter by 3s.\nDecreases the **Hydro RES** of enemies hit by sword rain attacks by 15% for 4s.",
        },
        {
          name: "C3: Weaver of Verses",
          description:
            "Increases the Level of Guhua Sword - Raincutter by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C4: Evilsoother",
          description:
            "Throughout the duration of Guhua Sword: Raincutter, the DMG dealt by Guhua Sword: Fatal Rainscreen is increased by 50%.",
        },
        {
          name: "C5: Embrace of Rain",
          description:
            "Increase the Level of Guhua Sword - Fatal Rainscreen by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C6: Hence, Call Them My Own Verses",
          description:
            "Activating 2 of Guhua Sword - Raincutter's sword rain attacks greatly increases the DMG of the third.\nXingqiu regenerates 3 Energy when sword rain attacks hit enemies.",
        },
      ],
    },
  ],
  [
    "xiangling",
    {
      name: "Xiangling",
      description:
        "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Xiangling_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916184026",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/22/Character_Xiangling_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916184026",
      color: "ff4000",
      emoji: "<:Xiangling:798578032935436329>",
      category: "Pyro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Pyro:798483485832249354> Pyro",
      weapon: "Polearm",
      nation: "Liyue",
      affiliation: "Wanmin Restaurant",
      specialDish: "Wanmin Restaurant's Boiled Fish",
      constellation: "Trulla",
      birthday: "November 2nd",
      ascensionCost: "https://i.imgur.com/aunDCW7.png",
      activeTalents: [
        {
          name: "Dough-Fu",
          description:
            "**Normal Attack**\nPerforms up to five consecutive spear strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Gouba Attack",
          description:
            "Summons Guoba the Panda. After 2 seconds, Guoba starts breathing fire at an opponent, dealing **AoE Pyro DMG** every 1.5 seconds 4 times.\nEach breath generates 1 elemental particle when it hits at least 1 target.\n",
        },
        {
          name: "Burst: Pyronado",
          description:
            "Displaying her mastery over both fire and polearms, Xiangling sends a Pyronado whirling around her. The Pyronado will move with your character for so long as the ability persists, dealing **Pyro DMG** to all opponents in its path.",
        },
      ],
      passiveTalents: [
        {
          name: "Crossfire",
          description: "Increases the flame range of Guoba by 20%.",
        },
        {
          name: "Beware, It's Super Hot!",
          description:
            "When Guoba Attack's effects end, Guoba leaves a chili pepper on the spot where it disappeared. Picking up a chili pepper increases ATK by 10% for 10s.",
        },
        {
          name: "Chef de Cuisine",
          description:
            "When a Perfect Cooking is achieved on an ATK-boosting dish, Xiangling has a 12% chance to receive double the product.",
        },
      ],
      constellations: [
        {
          name: "C1: Crispy Outside, Tender Inside",
          description:
            "Opponents hit by Guoba's attacks have their **Pyro RES** reduced by 15% for 6s.",
        },
        {
          name: "C2: Oil Meets Fire",
          description:
            "The last attack in Normal Attack sequence applies the Implode status onto the opponent for 2s. An explosion will occur once this duration ends, dealing 75% of Xiangling's ATK as **AoE Pyro DMG**.",
        },
        {
          name: "C3: Deepfry",
          description:
            "Increases the level of Pyronado by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Slowbake",
          description: "Pyronado's duration is increased by 40%.",
        },
        {
          name: "C5: Guoba Mad",
          description:
            "	Increases the level of Guoba Attack by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Condensed Pyronado",
          description:
            "For the duration of Pyronado, all party members receive a 15% **Pyro DMG Bonus**.",
        },
      ],
    },
  ],
  [
    "venti",
    {
      name: "Venti",
      description:
        "Venti is the wine-loving bard in Mondstadt who will share you his stories and maybe even sing for you, if you buy him some wine.\nIt appears there is more than meets the eye to the half-witted bard. ",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Character_Venti_Portrait.png/revision/latest/?cb=20200916184309",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Character_Venti_Portrait.png/revision/latest/?cb=20200916184309",
      color: "03fd9e",
      emoji: "<:Venti:798578059891834890>",
      category: "Anemo",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Anemo:798483595781341194> Anemo",
      weapon: "Bow",
      nation: "Mondstadt",
      affiliation: "Archons",
      specialDish: "A Buoyant Breeze",
      constellation: "Carmen Dei",
      birthday: "June 16th",
      ascensionCost: "https://i.imgur.com/iJJTVKY.png",
      activeTalents: [
        {
          name: "Divine Marksmanship",
          description:
            "**Normal Attack**\nPerforms up to 6 consecutive shots with a bow.\n\n**Charged Attack**\nPerform a more precise Aimed Shot with increased DMG.\nWhile aiming, favorable winds will accumulate on the arrowhead. A fully charged arrow will deal **Anemo DMG**.\n\n**Plunging Attack**\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Skyward Sonnet",
          description:
            "O wind upon which all hymns and songs fly, bear these earth-walkers up into the sky!\n\n**Press**\nSummons a Wind Domain at the enemy's location, dealing **AoE Anemo DMG** and launching enemies into the air.\n\n**Hold**\nSummons an even larger Wind Domain with Venti as the epicenter, dealing AoE **Anemo** DMG and launching affected enemies into the air.\nAfter unleashing the Hold version of this ability, Venti rides the wind into the air.\nEnemies hit by Skyward Sonnet will fall to the ground slowly.\n",
        },
        {
          name: "Burst: Wind's Grand Ode",
          description:
            "Fires off an arrow made of countless coalesced winds, creating a huge Stormeye that sucks in objects and enemies along its path, dealing continuous **Anemo DMG**.\n\n**Elemental Absorption**\nIf the Stormeye comes into contact with **Hydro/Pyro/Cryo/Electro** elements, it will deal additional elemental DMG of that type.\nElemental Absorption may only occur once per use.",
        },
      ],
      passiveTalents: [
        {
          name: "Embrace of Winds",
          description:
            "Holding Skyward Sonnet creates an upcurrent that lasts for 20s.",
        },
        {
          name: "Stormeye",
          description:
            "Regenerates 15 Energy for Venti after the effects of Wind's Grand Ode end.\nIf an Elemental Absorption occurred, this also restores 15 Energy to all characters of that corresponding element.",
        },
        {
          name: "Windrider",
          description:
            "Decreases all party member's gliding Stamina Consumption by 20%.",
        },
      ],
      constellations: [
        {
          name: "C1: Splitting Gale",
          description:
            "Fires 2 additional arrows per Aimed Shot, each dealing 33% of the original arrow's DMG.",
        },
        {
          name: "C2: Breeze of Reminiscence",
          description:
            "Skyward Sonnet decreases enemy **Anemo RES** by 12% for 10s.\nEnemies launched by Skyward Sonnet suffer an additional 12% **Anemo RES** and **Physical RES** decrease while airborne.",
        },
        {
          name: "C3: Ode to Thousand Winds",
          description:
            "Increases the Level of Wind's Grand Ode by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C4: Hurricane of Freedom",
          description:
            "When Venti picks up an Elemental Orb or Particle, he receives a 25% **Anemo DMG** Bonus for 10s.",
        },
        {
          name: "C5: Concierto dal Cielo",
          description:
            "Increase the Level of Skyward Sonnet by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C6: Storm of Defiance",
          description:
            "Targets who take DMG from Wind's Grand Ode have their **Anemo RES** decreased by 20%.\nIf an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
        },
      ],
    },
  ],
  [
    "sucrose",
    {
      name: "Sucrose",
      description:
        "An alchemist filled with curiosity about all things. She researches bio-alchemy.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/20/Character_Sucrose_Portrait.png/revision/latest/scale-to-width-down/244?cb=20200916181011",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/20/Character_Sucrose_Portrait.png/revision/latest/scale-to-width-down/244?cb=20200916181011",
      color: "03fd9e",
      emoji: "<:Sucrose:798578072756158475>",
      category: "Anemo",
      rarity: "⭐⭐⭐⭐",
      element: "<:Anemo:798483595781341194> Anemo",
      weapon: "Catalyst",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius",
      specialDish: "Nutritious Meal (V. 593)",
      constellation: "Ampulla",
      birthday: "November 26th",
      ascensionCost: "https://i.imgur.com/N32KTEh.png",
      activeTalents: [
        {
          name: "Wind Spirit Creation",
          description:
            "**Normal Attack**\nPerforms up to 4 attacks using Wind Spirits, dealing **Anemo DMG**.\n\n**Charged Attack**\nConsumes a certain amount of Stamina and deals **AoE Anemo DMG** after a short casting time.\n\n**Plunging Attack**\nCalling upon the power of her Wind Spirits, Sucrose plunges towards the ground from mid-air, damaging all opponents in her path. Deals **AoE Anemo DMG** upon impact with the ground.\n",
        },
        {
          name: "Skill: Astable Anemohypostasis Creation - 6308",
          description:
            "Creates a small Wind Spirit that pulls opponents and objects towards its location, launches opponents within its AoE, and deals **Anemo DMG**.\nGenerate 4 elemental particles when it hit at least 1 target.\n",
        },
        {
          name: "Burst: Forbidden Creation - Isomer 75 / Type II",
          description:
            "Sucrose hurls an unstable concoction that creates a Large Wind Spirit. While it persists, the Large Wind Spirit will continuously pull and launch nearby opponents, and deal **Anemo DMG**.\nElemental Absorption: If the Wind Spirit comes into contact with **Hydro/Pyro/Cryo/Electro** elements, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use.",
        },
      ],
      passiveTalents: [
        {
          name: "Catalyst Conversion",
          description:
            "When Sucrose triggers a Swirl effect, all characters in the party with the matching element (excluding Sucrose) have their Elemental Mastery increased by 50 for 8s.",
        },
        {
          name: "Mollis Favonius",
          description:
            "When Astable Anemohypostasis Creation - 6308 or Forbidden Creation - Isomer 75 / Type II hit an opponent, increases all party members' (excluding Sucrose) Elemental Mastery based on 20% of Sucrose's Elemental Mastery for 8s.",
        },
        {
          name: "Astable Invention",
          description:
            "When Sucrose crafts Character and Weapon Enhancement Materials, she has a 10% chance to obtain double the product.",
        },
      ],
      constellations: [
        {
          name: "C1: Clustered Vacuum Field",
          description:
            "Astable Anemohypostasis Creation - 6308 gains 1 additional charge.",
        },
        {
          name: "C2: Beth: Unbound Form",
          description:
            "The duration of Forbidden Creation - Isomer 75 / Type II is increased by 2s.",
        },
        {
          name: "C3: Flawless Alchemistress",
          description:
            "Increases the Level of Astable Anemohypostasis Creation - 6308 by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Alchemania",
          description:
            "Every 7 Normal and Charged Attacks, Sucrose will reduce the CD of Astable Anemohypostasis Creation - 6308 by 1~7s.",
        },
        {
          name: "C5: Caution: Standard Flask",
          description:
            "Increases the Level of Forbidden Creation - Isomer 75 / Type II by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Chaotic Entropy",
          description:
            "If Forbidden Creation - Isomer 75 / Type II triggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for the corresponding absorbed element during its duration.",
        },
      ],
    },
  ],
  [
    "razor",
    {
      name: "Razor",
      description:
        "Abandoned as an infant, Razor was taken in by the Wolf of the North, Andrius, and raised by his wolf pack in Wolvendom.\nAfter a chance encounter with the Knights of Favonius' Grand Master, Varka, he has slowly started integrating with humans again.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1e/Character_Razor_Portrait.png/revision/latest/cb=20200916151017",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1e/Character_Razor_Portrait.png/revision/latest/cb=20200916151017",
      color: "e205fd",
      emoji: "<:Razor:798578623900024862>",
      category: "Electro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Electro:798483560205385799> Electro",
      weapon: "Claymore",
      nation: "Mondstadt",
      affiliation: "Wolvendom (Andrius)",
      specialDish: "Puppy-Paw Hash Brown",
      constellation: "Lupus Minor",
      birthday: "September 9th",
      ascensionCost: "https://i.imgur.com/Cyxorfr.png",
      activeTalents: [
        {
          name: "Steel Fang",
          description:
            "**Normal Attack**\nPerforms up to 4 consecutive strikes.\n\n**Charged Attack**\nDrains Stamina over time to perform continuous swirling attacks against all nearby enemies.\nAt end of the sequence, perform a more powerful slash.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Claw and Thunder",
          description:
            "Hunts his prey using the techniques taught to him by his master and his Lupical.\n\n**Press**\nSwings the Thunder Wolf Claw, dealing **Electro DMG** to enemies in front of Razor.\nUpon striking an enemy, Razor will gain an **Electro Sigil**, which increases his Energy Recharge rate.\nRazor can have up to 3 **Electro Sigils** simultaneously, and gaining a new **Electro Sigil** refreshes their duration.\n\n**Hold**\nGathers **Electro energy** to unleash a lightning storm over a small AoE, causing massive **Electro DMG**, and clears all of Razor's **Electro Sigils**.\nEach **Electro Sigil** cleared in this manner will be converted into Energy for Razor.\n",
        },
        {
          name: "Burst: Lightning Fang",
          description:
            "Summons the Wolf Within which deals **Electro DMG** to all nearby opponents.\nThis clears all of Razor's **Electro Sigils**, which will be converted into elemental energy for him.\nThe Wolf Within will fight alongside Razor for the skill's duration.\n\n**The Wolf Within**\n-Strikes alongside Razor's normal attacks, dealing **Electro DMG**.\n\n-Raises Razor's ATK SPD and **Electro RES**.\n\n-Causes Razor to be immune to DMG inflicted by the **Electro-Charged** status.\n\n-Disables Razor's Charged Attacks.\n\nThe effects end when Razor leaves the battlefield.\nWhen Razor leaves the field, a maximum of 10 Energy will be returned to him based off the duration remaining on this skill.",
        },
      ],
      passiveTalents: [
        {
          name: "Awakening",
          description:
            "Decreases Claw and Thunder's CD by 18%.\nUsing Lightning Fang resets the CD of Claw and Thunder.",
        },
        {
          name: "Hunger",
          description:
            "When Razor's Energy is below 50%, increases Energy Recharge by 30%.",
        },
        {
          name: "Wolvensprint",
          description:
            "Decreases all party member's sprinting Stamina Consumption by 20%.",
        },
      ],
      constellations: [
        {
          name: "C1: Wolf's Instinct",
          description:
            "Picking up an Elemental Orb or Particle increases Razor's DMG by 10% for 8s.",
        },
        {
          name: "C2: Suppression",
          description:
            "Increases CRIT Rate against enemies with less than 30% HP by 10%.",
        },
        {
          name: "C3: Soul Companion",
          description:
            "Increases the Level of Lightning Fang by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C4: Bite",
          description:
            "When casting Claw and Thunder (Press), enemies hit will have their DEF decreased by 15% for 7s.",
        },
        {
          name: "C5: Sharpened Claws",
          description:
            "Increase the Level of Claw and Thunder by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C6: Lupus Fulguris",
          description:
            "Every 10s, Razor's sword charges up, causing the next Normal Attack to release lightning that deals 100% of Razor's ATK as **Electro DMG**.\nWhen Razor is not using Lightning Fang, a lightning strike on an enemy will grant Razor an **Electro Sigil** for Claw and Thunder.",
        },
      ],
    },
  ],
  [
    "qiqi",
    {
      name: "Qiqi",
      description:
        "Resurrected as a zombie by the adepti, she has ended up in Baizhu's care and now works at Bubu Pharmacy in Liyue Harbor.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Character_Qiqi_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916183756",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Character_Qiqi_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916183756",
      color: "00f9ff",
      emoji: "<:Qiqi:798578651145830401>",
      category: "Cryo",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Cryo:798578651145830401> Cryo",
      weapon: "Sword",
      nation: "Liyue",
      affiliation: "Bubu Pharmacy",
      specialDish: "No Tomorrow",
      constellation: "Pristina Nola",
      birthday: "March 3rd",
      ascensionCost: "https://i.imgur.com/Mp97kfp.png",
      activeTalents: [
        {
          name: "Ancient Sword Art",
          description:
            "**Normal Attack**\nPerforms up to 5 rapid strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Adeptus Art: Herald of Frost",
          description:
            "Using the Icevein Talisman, Qiqi brings forth the Herald of Frost, dealing **Cryo DMG** to nearby enemies.\n\n**Herald of Frost**\n-When Qiqi hits a target with her Normal or Charged Attacks, she regenerates HP for all party members and all nearby allied characters.\n\n-Healing scales based on Qiqi's ATK.\n\n-Regenerates HP for current character at regular intervals.\nFollows the character around, dealing **Cryo DMG** to enemies in its path.\n",
        },
        {
          name: "Burst: Adeptus Art: Preserver of Fortune",
          description:
            "Qiqi releases the adeptus power sealed within her body, marking nearby enemies with a Fortune-Preserving Talisman that deals **Cryo DMG**.\n\n**Fortune-Preserving Talisman**\nWhen enemies affected by this Talisman take DMG, the character that dealt this DMG regenerates HP.",
        },
      ],
      passiveTalents: [
        {
          name: "Life-Prolonging Methods",
          description:
            "When a character under the effects of Adeptus Art: Herald of Frost triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.",
        },
        {
          name: "A Glimpse into Arcanum",
          description:
            "When Qiqi hits enemies with her Normal and Charged Attacks, she has a 50% chance to apply a Fortune-Preserving Talisman to them for 6s. This effect can only occur once every 30s.",
        },
        {
          name: "Former Life Memories",
          description:
            "Displays the location of nearby resources unique to Liyue on the mini-map.",
        },
      ],
      constellations: [
        {
          name: "C1: Ascetics of Frost",
          description:
            "When the Herald of Frost hits an enemy marked by a Fortune-Preserving Talisman, Qiqi regenerates 2 Energy.",
        },
        {
          name: "C2: Frozen to the Bone",
          description:
            "Qiqi's Normal and Charge Attack DMG against enemies affected by **Cryo** is increased by 15%.",
        },
        {
          name: "C3: Ascendant Praise",
          description:
            "Increases the Level of Adeptus Art: Preserver of Fortune by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C4: Divine Suppression",
          description:
            "Targets marked by the Fortune-Preserving Talisman have their ATK decreased by 20%.",
        },
        {
          name: "C5: Crimson Lotus Bloom",
          description:
            "Increase the Level of Adeptus Art: Herald of Frost by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C6: Rite of Resurrection",
          description:
            "Using Adeptus Art: Preserve of Fortune revives all nearby fallen characters and regenerates 50% of their HP.\nThis effect can only occur once every 15 mins.",
        },
      ],
    },
  ],
  [
    "noelle",
    {
      name: "Noelle",
      description:
        "While not yet a knight, she seeks to one day join the Knights of Favonius by first serving as a dutiful maid.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Character_Noelle_Portrait.png/revision/latest/scale-to-width-down/247?cb=20200916183843",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Character_Noelle_Portrait.png/revision/latest/scale-to-width-down/247?cb=20200916183843",
      color: "ffc100",
      emoji: "<:Noelle:798578667508072458>",
      category: "Geo",
      rarity: "⭐⭐⭐⭐",
      element: "<:Geo:798483630740865044> Geo",
      weapon: "Claymore",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius",
      specialDish: "Lighter-Than-Air Pancake",
      constellation: "Parma Cordis",
      birthday: "March 21st",
      ascensionCost: "https://i.imgur.com/oacner2.png",
      activeTalents: [
        {
          name: "Favonius Bladework - Maid",
          description:
            "**Normal Attack**\nPerforms up to 4 consecutive strikes.\n\n**Charged Attack**\nDrains Stamina over time to perform continuous swirling attacks against all nearby enemies.\nAt end of the sequence, perform a more powerful slash.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Breastplate",
          description:
            "Summons a protective stone armor, dealing **Geo DMG** to surrounding enemies and creating a shield.\nThe shield's DMG Absorption scaled based on Noelle's DEF.\nThe shield has the following properties:\n\n-When Noelle's Normal and Charged Attacks hit a target, they have a certain chance to regenerate HP for all characters, both on and off the field.\n\n-Applies the **Geo element** to the character.\n\n-Possesses 250% Absorption Efficiency against **Geo DMG**.\n\nThe amount of HP healed when regeneration is triggered scales based on Noelle's DEF.\n",
        },
        {
          name: "Burst: Sweeping Time",
          description:
            "Gathering the strength of stone around her weapon, Noelle strikes the enemies surrounding her within a large AoE, dealing **Geo DMG**.\nAfterwards, Noelle gains the following effects:\n\n-Larger attack AoE.\n-Converts attack DMG to Geo DMG.\n-Increased ATK that scales based on her DEF.\n",
        },
      ],
      passiveTalents: [
        {
          name: "Devotion",
          description:
            "When Noelle is in the party but not on the field, this ability triggers automatically when the active character's HP falls below 30%:\nCreates a shield that lasts for 20s and absorbs DMG equal to 400% of Noelle's DEF.\nThis effect can only occur once every 60s.",
        },
        {
          name: "Nice and Clean",
          description:
            "Every 4 Normal or Charged Attack hits will decrease the CD of Breastplate by 1s.\nHitting multiple enemies with a single attack is only counted as 1 hit.",
        },
        {
          name: "Maid's Knighthood",
          description:
            "When a Perfect Cooking is achieved on a DEF-boosting dish, Noelle has a 12% chance to obtain double the product.",
        },
      ],
      constellations: [
        {
          name: "C1: ",
          description:
            "While Sweeping Time and Breastplate are both in effect, the chance of Breastplate's healing effects activating is increased to 100%.",
        },
        {
          name: "C2: ",
          description:
            "Decreases the Stamina Consumption of Noelle's Charged Attacks by 20% and increases her Charged Attack DMG by 15%.",
        },
        {
          name: "C3: ",
          description:
            "Increases the Level of Breastplate by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C4: ",
          description:
            "When Breastplate's duration expires or it is destroyed by DMG, it will deal 400% ATK of Geo DMG to surrounding enemies.",
        },
        {
          name: "C5: ",
          description:
            "Increase the Level of Sweeping Time by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C6: ",
          description:
            "Sweeping Time increases Noelle's ATK by an additional 50% of her DEF.\nAdditionally, every enemy defeated during the skill's duration adds 1s to the duration, up to 10s.",
        },
      ],
    },
  ],
  [
    "ningguang",
    {
      name: "Ningguang",
      emoji: "<:Ningguang:798571977120022578>",
      category: "Geo",
      description:
        "The Tianquan of Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
      thumbnail: "https://i.imgur.com/usy9I7B.png",
      image: "https://i.imgur.com/usy9I7B.png",
      color: "ffc100",
      rarity: "⭐⭐⭐⭐",
      element: "<:Geo:798483630740865044> Geo",
      weapon: "Catalyst",
      nation: "Liyue",
      affiliation: "Liyue Qixing",
      specialDish: "Qiankun Mora Meat",
      constellation: "Opus Aqe",
      birthday: "August 26th",
      ascensionCost: "https://i.imgur.com/I219abV.png",
      activeTalents: [
        {
          name: "Sparkling Scatter",
          description:
            "**Normal Attack**\nShoots gems that deal **Geo DMG**.\nUpon hit, this grants Ningguang 1 Star Jade.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to fire off a giant gem that deals **Geo DMG**.\nIf Ningguang has any Star Jades, unleashing a Charged Attack will cause the Star Jades to be fired at the enemy as well, dealing additional DMG.\n\n**Plunging Attack**\nGathering the might of Geo, Ningguang plunges towards the ground from mid-air, damaging all enemies in her path. Deals **AoE Geo DMG** upon impact with the ground.\n",
        },
        {
          name: "Skill: Jade Screen",
          description:
            "Ningguang creates a Jade Screen out of gold, obsidian and her great opulence, dealing **AoE Geo DMG**.\nJade Screen\n\nBlocks enemy projectiles.\nEndurance scales based on Ningguang's Max HP.\n\nJade Screen is considered a Geo Construct and can be used to block certain attacks, but cannot be climbed. Only one Jade Screen may exist at any one time.\n",
        },
        {
          name: "Burst: Elemental Burst",
          description:
            "Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her enemies that deal massive Geo DMG.\n\nIf Starshatter is cast when a Jade Screen is nearby, the Jade Screen will fire additional gem projectiles at the same time.",
        },
      ],
      passiveTalents: [
        {
          name: "Backup Plan",
          description:
            "When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.",
        },
        {
          name: "Strategic Reserve",
          description:
            "A character that passes through the Jade Screen will gain a 12% **Geo DMG Bonus** for 10s.",
        },
        {
          name: "Trove of Marvelous Treasure",
          description:
            "Displays the location of nearby ore veins (Iron Ore, White Iron Ore, Crystal Ore, and Magical Crystal Ore) on the mini-map.",
        },
      ],
      constellations: [
        {
          name: "Piercing Fragments",
          description: "When a Normal Attack hits, it deals AoE DMG.",
        },
        {
          name: "Shock Effect",
          description:
            "When Jade Screen is shattered, its CD will reset.\nCan occur once every 6s.",
        },
        {
          name: "Majesty be the Array of Stars",
          description:
            "Increases the Level of Starshatter by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "Exquisite be the Jade, Outshining All the Beneath",
          description:
            "Jade Screen increases nearby characters' Elemental RES by 10%.",
        },
        {
          name: "Invincible be the Jade Screen",
          description:
            "Increase the Level of Jade Screen by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "Grandeur be the Seven Stars",
          description:
            "When Starshatter is used, Ningguang gains 7 Star Jades.",
        },
      ],
    },
  ],
  [
    "lisa",
    {
      name: "Lisa",
      description:
        "The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Character_Lisa_Portrait.png/revision/latest/scale-to-width-down/251?cb=20200916171314",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Character_Lisa_Portrait.png/revision/latest/scale-to-width-down/251?cb=20200916171314",
      color: "e205fd",
      emoji: "<:Lisa:798578725716361267>",
      category: "Electro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Electro:798483560205385799> Electro",
      weapon: "Catalyst",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius",
      specialDish: "Mysterious Bolognese",
      constellation: "Tempus Fugit",
      birthday: "June 9th",
      ascensionCost: "https://i.imgur.com/6APpHWD.png",
      activeTalents: [
        {
          name: "Lightning Touch",
          description:
            "**Normal Attack**\nPerforms up to 4 Electro attacks, dealing **Electro DMG**.\n\nCharged Attack: Consumes a certain amount of Stamina to deal **Electro DMG** after a short casting time.\n\n**Plunging Attack**\nGathering the might of Electro, Lisa plunges towards the ground from mid-air, damaging all opponents in her path. Deals **AoE Electro DMG** upon impact with the ground.\n",
        },
        {
          name: "Skill: Violet Arc",
          description:
            "**Press**\nReleases a homing lightning orb. On hit, it deals **Electro DMG**, and applies a stack of the Conductive status (Max 3 stacks) to opponents in a small AoE.\n\n**Hold**\nAfter an extended casting time, calls down lightning from the heavens, dealing massive **Electro DMG** to all nearby opponents.\nDeals great amounts of extra damage to opponents based on the number of Conductive stacks applied to them and clears their Conductive status.\nHold generate 5 elemental particles when it hit at least 1 target.\n",
        },
        {
          name: "Burst: Lightning Rose",
          description:
            "Summons a Lightning Rose that unleashes powerful lightning bolts, launching surrounding opponents and dealing **Electro DMG**.\nThe Lightning Rose will continuously emit lightning to knock back opponents and deal **Electro DMG** for so long as it persists",
        },
      ],
      passiveTalents: [
        {
          name: "Induced Aftershock",
          description:
            "Hits by Charged Attacks apply Violet Arc's Conductive status to opponents.",
        },
        {
          name: "Static Electricity Field",
          description:
            "Opponents hit by Lightning Rose have their DEF decreased by 15% for 10s.",
        },
        {
          name: "General Pharmaceutics",
          description:
            "When Lisa crafts a potion, she has a 20% chance to refund one count of one material out of all the crafting materials used.",
        },
      ],
      constellations: [
        {
          name: "C1: Infinite Circuit",
          description:
            "Lisa recovers 2 Energy for every opponent hit while holding Violet Arc.\nA maximum of 10 Energy can be regenerated in this manner at any one time.",
        },
        {
          name: "C2: Electromagnetic Field",
          description:
            "Holding Violet Arc has the following effects:\nIncreases DEF by 25%.\nIncreases Lisa's resistance to interruption.",
        },
        {
          name: "C3: Resonant Thunder",
          description:
            "Increases the level of Lightning Rose by 3. Maximum level upgrade is 15.",
        },
        {
          name: "C4: Plasma Eruption",
          description:
            "Increases the number of lightning bolts released by Lightning Rose by 1-3.",
        },
        {
          name: "C5: Electrocute",
          description:
            "	Increases the level of Violet Arc by 3. Maximum level upgrade is 15.",
        },
        {
          name: "C6:	Pulsating Witch",
          description:
            "When Lisa takes the field, she applies 3 stacks of Violet Arc's Conductive status onto nearby opponents.\nThis effect can only occur once every 5s.",
        },
      ],
    },
  ],
  [
    "klee",
    {
      name: "Klee",
      description:
        "The daughter of the intrepid — and destructive — adventurer Alice, Klee takes her mother in many ways, much to the consternation of the Knights of Favonius whom she has been entrusted to.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3f/Character_Klee_Portrait.png/revision/latest/scale-to-width-down/267?cb=20200916171245",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3f/Character_Klee_Portrait.png/revision/latest/scale-to-width-down/267?cb=20200916171245",
      color: "ff4000",
      emoji: "<:Klee:798578917464080404>",
      category: "Pyro",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Pyro:798483485832249354> Pyro",
      weapon: "Catalyst",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius",
      specialDish: "Fish-Flavored Toast",
      constellation: "Trifolium",
      birthday: "July 27th",
      ascensionCost: "https://i.imgur.com/lOIoolh.png",
      activeTalents: [
        {
          name: "Kaboom!",
          description:
            "**Normal Attack**\nThrows things that go boom when they hit things! Perform up to 3 explosive attacks, dealing **AoE Pyro DMG**.\n\n**Charged Attack**\nConsumes a certain amount of Stamina and deals P**yro DMG** to enemies after a short casting time.\n\n**Plunging Attack**\nGathering the power of Pyro, Klee plunges towards the ground from mid-air, damaging all enemies in her path. Deals **AoE Pyro DMG** upon impact with the ground.\n",
        },
        {
          name: "Skill: Jumpy Dumpty",
          description:
            "Jumpy Dumpty is tons of boom-bang-fun!\nWhen thrown, Jumpy Dumpty bounces thrice, igniting and dealing **AoE Pyro DMG** with every bounce.\n\nOn the third bounce, the bomb splits into many mines.\nThe mines will explode upon contact with enemies, or after a short period of time, dealing **AoE Pyro DMG**.\n\nStarts with 2 charges.\n",
        },
        {
          name: "Burst: Sparks 'n' Splash",
          description:
            "Klee's Blazing Delight! For the duration of this ability, continuously summons Sparks 'n' Splash to attack nearby enemies, dealing **AoE Pyro DMG**.",
        },
      ],
      passiveTalents: [
        {
          name: "Pounding Surprise",
          description:
            "When Jumpy Dumpty and Normal Attacks deal DMG, Klee has a 50% chance to obtain an Explosive Spark.\nThis Explosive Spark is consumed by the next Charged Attack, which costs no Stamina and deals 50% increased DMG.",
        },
        {
          name: "Sparkling Burst",
          description:
            "When a Charged Attack results in a CRIT, all party members gain 2 Elemental Energy.",
        },
        {
          name: "All Of My Treasures!",
          description:
            "Displays the location of nearby resources unique to Mondstadt on the mini-map.",
        },
      ],
      constellations: [
        {
          name: "C1: Chained Reaction",
          description:
            "Attacks and Skills have a certain chance to summon a spark that bombards enemies, dealing DMG equal to 120% of Sparks 'n' Splash's DMG.",
        },
        {
          name: "C2: Explosive Frags",
          description:
            "Being hit by Jumpy Dumpty's mines decreases enemy DEF by 23% for 10s.",
        },
        {
          name: "C3: Exquisite Compound",
          description:
            "Increases the Level of Jumpy Dumpty by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C4: Sparkly Explosion",
          description:
            "If Klee leaves the field during the duration of Sparks 'n' Splash, her departure triggers an explosion that deals 555% of her ATK as **AoE Pyro DMG**.",
        },
        {
          name: "C5: Nova Burst",
          description:
            "Increase the Level of Sparks 'n' Splash by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C6: Blazing Delight",
          description:
            "While under the effects of Sparks 'n' Splash, other members of the party will continuously regenerate Energy.\nWhen Sparks 'n' Splash is used, all party members will gain 10% **Pyro DMG Bonus** for 25s.",
        },
      ],
    },
  ],
  [
    "keqing",
    {
      name: "Keqing",
      description:
        "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue — but in truth, gods admire skeptics such as her quite a lot.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Character_Keqing_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916184644",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Character_Keqing_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916184644",
      color: "e205fd",
      emoji: "<:Keqing:798578899956006914>",
      category: "Electro",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Electro:798483560205385799> Electro",
      weapon: "Sword",
      nation: "Liyue",
      affiliation: "Liyue Qixing",
      specialDish: "Survival Grilled Fish",
      constellation: "Trulla Cementarii",
      birthday: "November 20th",
      ascensionCost: "https://i.imgur.com/y74uJOU.png",
      activeTalents: [
        {
          name: "Yunlai Swordsmanship",
          description:
            "**Normal Attack**\nPerform up to 5 rapid strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Stellar Restoration",
          description:
            "Hurls a Lightning Stiletto that annihilates her opponents like the swift thunder. When the Stiletto hits its target, it deals **Electro DMG** to opponents in a small AoE, and places a Stiletto Mark on the spot hit.\n**Hold**\nHold to adjust the direction in which the Stiletto shall be thrown. Stilettos thrown by the Hold attack mode can be suspended in mid-air, allowing Keqing to jump to them when using Stellar Restoration a second time.\n**Lightning Stiletto**\nIf Keqing uses Stellar Restoration again or uses a Charged Attack while its duration lasts, it will clear the Stiletto Mark and produce different effects:\nIf she uses Stellar Restoration again, she will blink to the location of the Mark and unleash one slashing attack that deals **AoE Electro DMG**. When blinking to a Stiletto that was thrown from a Holding attack, Keqing can leap across obstructing terrain.\nIf Keqing uses a Charged Attack, she will ignite a series of thundering cuts at the Mark's location, dealing **AoE Electro DMG**.\n",
        },
        {
          name: "Burst: Starward Sword",
          description:
            "Keqing unleashes the power of lightning, dealing **Electro DMG** in an AoE.\nShe then blends into the shadow of her blade, striking a series of thunderclap-blows to nearby opponents simultaneously that deal multiple instances of **Electro DMG**. The final attack deals massive **AoE Electro DMG**.",
        },
      ],
      passiveTalents: [
        {
          name: "Thundering Penance",
          description:
            "After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing's weapon gains an Electro Infusion for 5s.",
        },
        {
          name: "Aristocratic Dignity",
          description:
            "When casting Starward Sword, Keqing's CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s.",
        },
        {
          name: "Land's Overseer",
          description:
            "When dispatched on an expedition in Liyue, time consumed is reduced by 25%.",
        },
      ],
      constellations: [
        {
          name: "C1: Thundering Might",
          description:
            "Recasting Stellar Restoration while a Lightning Stiletto is present causes Keqing to deal 50% of her ATK as **AoE Electro DMG** at the start point and terminus of her Blink.",
        },
        {
          name: "C2: Keen Extraction",
          description:
            "When Keqing's Normal and Charged Attacks hit opponents affected by **Electro**, they have a 50% chance of producing an Elemental Particle. This effect can only occur once every 5s.",
        },
        {
          name: "C3: Foreseen Reformation",
          description:
            "Increases the level of Starward Sword by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Attunement",
          description:
            "For 10s after Keqing triggers an **Electro-related Elemental Reaction**, her ATK is increased by 25%.",
        },
        {
          name: "C5: Beckoning Stars",
          description:
            "Increases the level of Stellar Restoration by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Tenacious Star",
          description:
            "When initiating a Normal Attack, a Charged Attack, Elemental Skill or Elemental Burst, Keqing gains a 6% **Electro DMG Bonus** for 8s. Effects triggered by Normal Attacks, Charged Attacks, Elemental Skills, and Elemental Bursts are considered independent entities.",
        },
      ],
    },
  ],
  [
    "kaeya",
    {
      name: "Kaeya",
      description:
        "A thinker in the Knights of Favonius with a somewhat exotic appearance.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Character_Kaeya_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916171117",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1c/Character_Kaeya_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916171117",
      color: "00f9ff",
      emoji: "<:Kaeya:798578983775240242>",
      category: "Cryo",
      rarity: "⭐⭐⭐⭐",
      element: "<:Cryo:798483525052530719> Cryo",
      weapon: "Sword",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius",
      specialDish: "Fruity Skewers",
      constellation: "Pavo Ocellus",
      birthday: "November 30th",
      ascensionCost: "https://i.imgur.com/yzRUth0.png",
      activeTalents: [
        {
          name: "Ceremonial Bladework",
          description:
            "**Normal Attack**\nPerforms up to 5 rapid strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Frostgnaw",
          description:
            "Unleashes a frigid blast, dealing **Cryo DMG** to opponents in front of Kaeya.\nGenerate 2.5 elemental particles when it hit at least 1 target.\n",
        },
        {
          name: "Burst: Glacial Waltz",
          description:
            "Coalescing the frost in the air, Kaeya summons 3 icicles that revolve 4 times around him for 8 seconds.\nThese icicles will follow the character around and deal **Cryo DMG** to opponents in their path for so long as they persist.",
        },
      ],
      passiveTalents: [
        {
          name: "Cold-Blooded Strike",
          description:
            "Every hit with Frostgnaw regenerates HP for Kaeya equal to 15% of his ATK.",
        },
        {
          name: "Glacial Heart",
          description:
            "Opponents Frozen by Frostgnaw will drop additional Elemental Particles. Frostgnaw may only produce a maximum of 2 additional Elemental Particles per use.",
        },
        {
          name: "Hidden Strength",
          description:
            "Decreases sprinting Stamina consumption of your characters in the party by 20%.\nNot stackable with Passive Talents that provide the exact same effects.",
        },
      ],
      constellations: [
        {
          name: "C1: Excellent Blood",
          description:
            "The CRIT Rate of Kaeya's Normal Attack and Charge Attacks against opponents affected by the **Cryo** is increased by 15%.",
        },
        {
          name: "C2: Never-Ending Performance",
          description:
            "Every time Glacial Waltz defeats an opponent, its duration is increased by 2.5s, up to a maximum of 15s.\n*The description is incorrect, duration extension takes effect on any enemy defeat, not just enemies defeated by Glacial Waltz.*",
        },
        {
          name: "C3: Dance of Frost",
          description:
            "	Increases the Level of Frostgnaw by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Frozen Kiss",
          description:
            "Triggers automatically when Kaeya's HP falls below 20%:\nCreates a shield that absorbs damage equal to 30% of Kaeya's Max HP. Lasts for 20s.\nThis shield absorbs **Cryo DMG** with 250% efficiency.\nCan only occur once every 60s.",
        },
        {
          name: "C5: Frostbiting Embrace",
          description:
            "Increases the level of Glacial Waltz by 3. Max upgrade level is 15.",
        },
        {
          name: "C6: Glacial Whirlwind",
          description:
            "Glacial Waltz will generate 1 additional icicle, and will regenerate 15 Energy when cast.",
        },
      ],
    },
  ],
  [
    "jean",
    {
      name: "Jean",
      description:
        "The righteous and rigorous Dandelion Knight, and Acting Grand Master of Mondstadt's Knights of Favonius.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Character_Jean_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916180808",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Character_Jean_Portrait.png/revision/latest/scale-to-width-down/310?cb=20200916180808",
      color: "03fd9e",
      emoji: "<:Jean:798578932031029308>",
      category: "Anemo",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Anemo:798483595781341194> Anemo",
      weapon: "Sword",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius",
      specialDish: "Invigorating Pizza",
      constellation: "Leo Minor",
      birthday: "March 14th",
      ascensionCost: "https://i.imgur.com/UAaZHxJ.png",
      activeTalents: [
        {
          name: "Favonius Bladework",
          description:
            "**Normal Attack**\nPerforms up to 5 consecutive strikes.\n\n**Charged Attack**\nConsumes a certain amount of stamina to launch an opponent using the power of wind. Launched opponents will slowly fall to the ground.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Gale Blade",
          description:
            "Focusing the might of the formless wind around her blade, Jean releases a miniature storm, launching opponents in the direction she aims at, dealing massive **Anemo DMG**.\n\n**Hold**\nAt the cost of continued stamina consumption, Jean can command the whirlwind to pull surrounding opponents and objects towards her front.\nDirection can be adjusted.\nCharacter is immobile during skill duration.\n",
        },
        {
          name: "Burst: Dandelion Breeze",
          description:
            "Calling upon the wind's protection, Jean creates a swirling Dandelion Field, launching surrounding opponents and causing **Anemo DMG**.\nAt the same time, she instantly regenerates a large amount of HP for all party members. The amount of HP restored scales off Jean's ATK.\n\n**Dandelion Field**\nContinuously regenerates HP of characters within the AoE and continuously imbues them with Anemo.\nDeals **Anemo DMG** to opponents entering or exiting the Dandelion Field.",
        },
      ],
      passiveTalents: [
        {
          name: "Wind Companion",
          description:
            "Hits by Jean's Normal Attacks have a 50% chance to regenerate HP equal to 15% of Jean's ATK for all party members.",
        },
        {
          name: "Let the Wind Lead",
          description:
            "Using Dandelion Breeze will regenerate 20% of its Energy.",
        },
        {
          name: "Guiding Breeze",
          description:
            "When a Perfect Cooking is achieved on a dish with restorative effects, Jean has a 12% chance to obtain double the product.",
        },
      ],
      constellations: [
        {
          name: "C1: Spiraling Tempest",
          description:
            "Increases the pulling speed of Gale Blade after holding for more than 1s, and increases the DMG dealt by 40%.",
        },
        {
          name: "C2: People's Aegis",
          description:
            "When Jean picks up an Elemental Orb/Particle, all party members have their Movement SPD and ATK SPD increased by 15% for 15s.",
        },
        {
          name: "C3: When the West Wind Arises",
          description:
            "Increases the level of Dandelion Breeze by 3. The maximum upgrade level is 15.",
        },
        {
          name: "C4: Lands of Dandelion",
          description:
            "Within the Field created by Dandelion Breeze, all opponents have their Anemo RES decreased by 40%.",
        },
        {
          name: "C5: Outbursting Gust",
          description:
            "Increases the level of Gale Blade by 3. The maximum upgrade level is 15.",
        },
        {
          name: "C6: Lion's Fang, Fair Protector of Mondstadt",
          description:
            "Incoming DMG is decreased by 35% within the Field created by Dandelion Breeze. Upon leaving the Dandelion Field, this effect lasts for 3 attacks or 10s.",
        },
      ],
    },
  ],
  [
    "ganyu",
    {
      name: "Ganyu",
      description:
        "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Ganyu_Portrait.png/revision/latest/scale-to-width-down/246?cb=20210109020221",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Ganyu_Portrait.png/revision/latest/scale-to-width-down/246?cb=20210109020221",
      color: "00f9ff",
      emoji: "<:Ganyu:798579013084774504>",
      category: "Cryo",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Cryo:798483525052530719> Cryo",
      weapon: "Bow",
      nation: "Liyue",
      affiliation: "Yuehai Pavilion",
      specialDish: "Prosperous Peace",
      constellation: "Sinae Unicornis",
      birthday: "December 2nd",
      ascensionCost: "https://i.imgur.com/Kr4Qtxl.png",
      activeTalents: [
        {
          name: "Liutian Archery",
          description:
            "**Normal Attack**\nPerform up to 6 consecutive shots with a bow.\n\n**Charged Attack**\nPerform a more precise Aimed Shot with increased DMG. While aiming, an icy aura will accumulate on the arrowhead before the arrow is fired. Has different effects based on how long the energy has been charged:\nCharge Level 1: Fires off an icy arrow that deals **Cryo DMG**.\nCharge Level 2: Fires off a Frostflake Arrow that deals **Cryo DMG**.\n\nThe Frostflake Arrow blooms after hitting its target, dealing **AoE Cryo DMG**.\n\n**Plunging Attack**\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Trail of the Qilin",
          description:
            "Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning all impurity and dealing **AoE Cryo DMG**.\n\n**Ice Lotus**\nContinuously taunts surrounding opponents, attracting them to attack it.\nEndurance scales based on Ganyu's Max HP.\nBlooms profusely when destroyed or once its duration ends, dealing **AoE Cryo DMG**.\n",
        },
        {
          name: "Burst: Celestial Shower",
          description:
            "Coalesces atmospheric frost and snow to summon a Sacred Cryo Pearl that exorcises evil.\nDuring its ability duration, the Sacred Cryo Pearl will continuously rain down shards of ice, striking opponents within an AoE and dealing **Cryo DMG**.",
        },
      ],
      passiveTalents: [
        {
          name: "Undivided Heart",
          description:
            "After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their resulting bloom effects is increased by 20% for 5s.",
        },
        {
          name: "Harmony between Heaven and Earth",
          description:
            "Celestial Shower grants a 20% **Cryo DMG Bonus** to active members in the AoE.",
        },
        {
          name: "Preserved for the Hunt",
          description:
            "Refunds 15% of the ores used when crafting Bow-type weapons.",
        },
      ],
      constellations: [
        {
          name: "C1: Dew-Drinker",
          description:
            "Taking DMG from a Charge Level 2 Frostflake Arrow or Frostflake Arrow Bloom decreases opponents' **Cryo RES** by 15% for 6s.\nA hit regenerates 2 Energy for Ganyu. This effect can only occur once per Charge Level Frostflake Arrow, regardless if Frostflake Arrow itself or its Bloom hit the target.",
        },
        {
          name: "C2: The Auspicious",
          description: "Trail of the Qilin gains 1 additional charge.",
        },
        {
          name: "C3: Cloud-Strider",
          description:
            "Increases the Level of Celestial Shower by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Westward Sojourn",
          description:
            "Opponents standing within the AoE of Celestial Shower take increased DMG. This effect strengthens over time. Increased DMG taken begins at 5% and increases by 5% every 3s, up to a maximum of 25%.\nThe effect lingers for 3s after the opponent leaves the AoE.",
        },
        {
          name: "C5: The Merciful",
          description:
            "Increases the Level of Trail of the Qilin by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: The Clement",
          description:
            "Using Trail of the Qilin causes the next Frostflake Arrow shot within 30s to not require charging.",
        },
      ],
    },
  ],
  [
    "fischl",
    {
      name: "Fischl",
      description:
        "A mysterious girl who calls herself 'Prinzessin der Verurteilung' and travels with a night raven named Oz.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Fischl_Portrait.png/revision/latest/scale-to-width-down/282?cb=20200916171212",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Fischl_Portrait.png/revision/latest/scale-to-width-down/282?cb=20200916171212",
      color: "e205fd",
      emoji: "<:Fischl:798579031381114890>",
      category: "Electro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Electro:798483560205385799> Electro",
      weapon: "Bow",
      nation: "Mondstadt",
      affiliation: "Adventurers' Guild",
      specialDish: "Die Heilige Sinfonie",
      constellation: "Corvus",
      birthday: "May 27th",
      ascensionCost: "https://i.imgur.com/GJpU7Va.png",
      activeTalents: [
        {
          name: "Bolts of Downfall",
          description:
            "**Normal Attack**\nPerform up to 5 consecutive shots with a bow.\n\n**Charged Attack**\nPerform a more precise Aimed Shot with increased DMG. While aiming, the dark lightning spirits of Immernachtreich shall heed the call of their Prinzessin and indwell the enchanted arrowhead. When fully indwelt, the Rachsüchtig Blitz shall deal immense **Electro DMG**.\n\n**Plunging Attack**\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Nightrider",
          description:
            "Summons Oz. The night raven forged of darkness and lightning descends upon the land, dealing **Electro DMG** in a small AoE.\nFor the ability's duration, Oz will continuously attack nearby opponents with Freikugel.\nHold to adjust the location Oz will be summoned to.\nPress again any time during the ability's duration to once again summon him to Fischl's side.\n",
        },
        {
          name: "Burst: Midnight Phantasmagoria",
          description:
            "Summons Oz to spread his twin wings of twilight and defend Fischl. Has the following properties during the ability's duration:\nFischl takes on Oz's form, greatly increasing her Movement Speed.\nStrikes nearby opponents with lightning, dealing **Electro DMG** to opponents she comes in contact with. Each opponent can only be struck once.\nOnce this ability's effects end, Oz will remain on the battlefield and attack his Prinzessin's foes. If Oz is already on the field, then this will reset the duration of his presence.",
        },
      ],
      passiveTalents: [
        {
          name: "Stellar Predator",
          description:
            "When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down Thundering Retribution, dealing AoE Electro DMG equal to 152.7% of the arrow's DMG.",
        },
        {
          name: "Undone Be Thy Sinful Hex",
          description:
            "If your active character triggers an **Electro-related Elemental Reaction** when Oz is on the field, the opponent shall be stricken with Thundering Retribution, dealing **Electro DMG** equal to 80% of Fischl's ATK.",
        },
        {
          name: "Mein Hausgarten",
          description:
            "When dispatched on an expedition in Mondstadt, the time consumed is reduced by 25%.",
        },
      ],
      constellations: [
        {
          name: "C1: Gaze of the Deep",
          description:
            "Even when Oz is not present in combat, he can still watch over Fischl through the crow's eyes. When Fischl attacks an opponent, Oz fires a joint attack through the crow's eyes, dealing 22% of ATK DMG.",
        },
        {
          name: "C2: Devourer of All Sins",
          description:
            "When Nightrider is used, it deals an additional 200% ATK as DMG, and its AoE is increased by 50%.",
        },
        {
          name: "C3: Wings of Nightmare",
          description:
            "Increases Nightrider's skill level by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Her Pilgrimage of Bleak",
          description:
            "When Midnight Phantasmagoria is used, deals 222% of ATK as **Electro DMG** to surrounding opponents. When the skill duration ends, Fischl recovers 20% of her HP.",
        },
        {
          name: "C5: Against the Fleeing Light",
          description:
            "Increases Midnight Phantasmagoria's skill level by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Evernight Raven",
          description:
            "Increases the duration of Oz's summoning by 2s. Additionally, Oz attacks with your active character when present, dealing 30% of Fischl's ATK as **Electro DMG**.",
        },
      ],
    },
  ],
  [
    "diluc",
    {
      name: "Diluc",
      description:
        "Born into the affluent Ragnvindr Family, Diluc is the current owner of the Dawn Winery and a nobleman of high esteem in Mondstadt society.\nWhile a past incident caused him to split ways with the Knights of Favonius, he continues to protect Mondstadt in his own way. ",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Character_Diluc_Portrait.png/revision/latest/scale-to-width-down/228?cb=20200916171027",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/b/bc/Character_Diluc_Portrait.png/revision/latest/scale-to-width-down/228?cb=20200916171027",
      color: "ff4000",
      emoji: "<:Diluc:798579247945613332>",
      category: "Pyro",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Pyro:798483485832249354> Pyro",
      weapon: "Claymore",
      nation: "Mondstadt",
      affiliation: "Dawn Winery\nKnights of Favonius (Formerly)",
      specialDish: "Once Upon a Time in Mondstadt",
      constellation: "Noctua",
      birthday: "April 30th",
      ascensionCost: "https://i.imgur.com/NtpJStj.png",
      activeTalents: [
        {
          name: "Tempered Sword",
          description:
            "**Normal Attack**\nPerforms up to 4 consecutive strikes.\n\n**Charged Attack**\nDrains Stamina over time to perform continuous slashes.\nAt the end of the sequence, perform a more powerful slash.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground, damaging enemies along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Searing Onslaught",
          description:
            "Performs a forward slash that deals **Pyro DMG**.\nThis skill can be used 3 times consecutively.\nEnters CD if not cast again within a short period.\n",
        },
        {
          name: "Burst: Dawn",
          description:
            "Releases intense flames to knock nearby enemies back, dealing **Pyro DMG**.\nThe flames then converge into the weapon, summoning a Phoenix that flies forward and deals massive **Pyro DMG** to all enemies in its path.\nThe Phoenix explodes upon reaching its destination, causing a large amount of **AoE Pyro DMG**.\nThe searing flames that run down his blade cause Diluc's Normal and Charged Attacks to deal **Pyro DMG** for a time.",
        },
      ],
      passiveTalents: [
        {
          name: "Relentless",
          description:
            "Diluc's Charged Attack Stamina Cost is decreased by 50%, and its duration is increased by 3s.",
        },
        {
          name: "Blessing of Phoenix",
          description:
            "The **Pyro Enchantment** provided by Dawn lasts for 4s longer. Additionally, Diluc gains 20% **Pyro DMG** Bonus during the duration of this effect.",
        },
        {
          name: "Tradition of the Dawn Knight",
          description:
            "Refunds 15% of the ores used when crafting Claymore-type weapons.",
        },
      ],
      constellations: [
        {
          name: "C1: Conviction",
          description:
            "Diluc deals 15% more DMG to enemies whose HP is above 50%.",
        },
        {
          name: "C2: Searing Ember",
          description:
            "When Diluc takes DMG, his Base ATK increases by 10% and his ATK SPD increases by 5%. Lasts for 10s.\nThis effect can stack up to 3 times and can only occur once every 1.5s.",
        },
        {
          name: "C3: Steel and Fire",
          description:
            "Increases the Level of Searing Onslaught by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C4: Flowing Flame",
          description:
            "Casting Searing Onslaught in sequence greatly increases damage dealt.\nWithin 2s of using Searing Onslaught, casting the next Searing Onslaught in the combo deals 40% additional DMG.\nThis effect lasts for the next 2s.",
        },
        {
          name: "C5: Phoenix, Harbinger of Dawn",
          description:
            "Increases the level of Dawn by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C6: Flaming Sword, Nemesis of Dark",
          description:
            "After casting Searing Onslaught, the next 2 Normal Attacks within the next 6s will have their DMG and ATK SPD increased by 30%.\nAdditionally, Searing Onslaught will not interrupt the Normal Attack combo.",
        },
      ],
    },
  ],
  [
    "chongyun",
    {
      name: "Chongyun",
      description:
        "A young exorcist from a family of exorcists. He does everything he can to suppress his pure positive energy.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Character_Chongyun_Portrait.png/revision/latest/scale-to-width-down/250?cb=20200916181119",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Character_Chongyun_Portrait.png/revision/latest/scale-to-width-down/250?cb=20200916181119",
      color: "00f9ff",
      emoji: "<:Chongyun:798579223241162792>",
      category: "Cryo",
      rarity: "⭐⭐⭐⭐",
      element: "<:Cryo:798483525052530719> Cryo",
      weapon: "Claymore",
      nation: "Liyue",
      affiliation: "None",
      specialDish: "Cold Noodles with Mountain Delicacies",
      constellation: "Nubis Caesor",
      birthday: "September 7th",
      ascensionCost: "https://i.imgur.com/Mitihlt.png",
      activeTalents: [
        {
          name: "Demonbane",
          description:
            "**Normal Attack**\nPerform up to 4 consecutive strikes.\n\n**Charged Attack**\nDrains Stamina over time to perform continuous swirling attacks against all nearby opponents. At the end of the sequence, perform a more powerful slash.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Spirit Blade: Chonghua's Layered Frost",
          description:
            "Chongyun strikes the ground with his greatsword, causing a **Cryo** explosion in a circular AoE in front of him that deals **Cryo DMG**.\nAfter a short delay, the cold air created by the **Cryo** explosion will coalesce into a Chonghua Frost Field, within which all Sword, Claymore and Polearm-wielding characters' weapons will be infused with **Cryo**.\n",
        },
        {
          name: "Burst: Spirit Blade: Cloud-Parting Star",
          description:
            "Performing the secret hand seals, Chongyun summons 3 giant spirit blades in mid-air that fall to the earth one by one after a short delay, exploding as they hit the ground.\nWhen the spirit blades explode, they will deal **AoE Cryo DMG** and launch opponents.",
        },
      ],
      passiveTalents: [
        {
          name: "Steady Breathing",
          description:
            "Sword, Claymore, or Polearm-wielding characters within the field created by Spirit Blade: Chonghua's Layered Frost have their Normal ATK SPD increased by 8%.",
        },
        {
          name: "Rimechaser Blade",
          description:
            "When the field created by Spirit Blade: Chonghua's Layered Frost disappears, another spirit blade will be summoned to strike nearby opponents, dealing 100% of Chonghua's Layered Frost's Skill DMG as **AoE Cryo DMG**. Opponents hit by this blade will have their **Cryo RES** decreased by 10% for 8s.",
        },
        {
          name: "Gallant Journey",
          description:
            "When dispatched on an expedition in Liyue, time consumed is reduced by 25%.",
        },
      ],
      constellations: [
        {
          name: "C1: Ice Unleashed",
          description:
            "The last attack of Chongyun's Normal Attack combo releases 3 ice blades. Each blade deals 50% of Chongyun's ATK as **Cryo DMG** to all opponents in its path.",
        },
        {
          name: "C2: Atmospheric Revolution",
          description:
            "Elemental Skills and Elemental Bursts cast within the Frost Field created by Spirit Blade: Chonghua's Layered Frost have their CD time decreased by 15%.",
        },
        {
          name: "C3: Cloudburst",
          description:
            "Increases the level of Spirit Blade: Cloud-Parting Star by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Frozen Skies",
          description:
            "Chongyun regenerates 1 Energy every time he hits an opponent affected by Cryo. This effect can only occur once every 2s.",
        },
        {
          name: "C5: The True Path",
          description:
            "Increases the level of Spirit Blade: Chonghua's Layered Frost by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Rally of Four Blades",
          description:
            "Spirit Blade: Cloud-Parting Star deals 15% more DMG to opponents with a lower percentage of their Max HP remaining than Chongyun. This skill will also summon 1 additional spirit blade.",
        },
      ],
    },
  ],
  [
    "tartaglia",
    {
      name: "Tartaglia",
      description:
        "No. 11 of The Harbingers, also known as 'Childe.' His name is highly feared on the battlefield.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Character_Tartaglia_Portrait.png/revision/latest/scale-to-width-down/262?cb=20201109083418",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/3a/Character_Tartaglia_Portrait.png/revision/latest/scale-to-width-down/262?cb=20201109083418",
      color: "0379fd",
      emoji: "<:Childe:798579167843057665>",
      category: "Hydro",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Hydro:798483587157983282> Hydro",
      weapon: "Bow",
      nation: "Snezhnaya",
      affiliation: "Fatui",
      specialDish: "A Prize Catch",
      constellation: "Monoceros Caeli",
      birthday: "July 20th",
      ascensionCost: "https://i.imgur.com/kEXUzQH.png",
      activeTalents: [
        {
          name: "Cutting Torrent",
          description:
            "**Normal Attack**\nPerform up to 6 consecutive shots with a bow.\n\n**Charged Attack**\nPerform a more precise Aimed Shot with increased DMG. While aiming, the power of Hydro will accumulate on the arrowhead. An arrow fully charged with the torrent will deal **Hydro DMG** and apply the Riptide status.\n\n**Riptide**\nOpponents affected by Riptide will suffer from AoE **Hydro DMG** effects when attacked by Tartaglia in various ways. DMG dealt in this way is considered Normal Attack dmg.\nRiptide Flash: A fully-charged Aimed Shot that hits an opponent affected by Riptide deals consecutive bouts of AoE DMG. Can occur once every 0.7s.\nRiptide Burst: Defeating an opponent affected by Riptide creates a Hydro burst that inflicts the Riptide status on nearby opponents hit.\n\n**Plunging Attack**\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG upon impact.\nWhen Tartaglia is in Foul Legacy: Raging Tide's Melee Stance, he cannot perform a plunging attack.\n",
        },
        {
          name: "Skill: Foul Legacy: Raging Tide",
          description:
            "Unleashes a set of weaponry made of pure water, dealing **Hydro DMG** to surrounding opponents and entering Melee Stance.\n\nIn this Stance, Tartaglia's Normal and Charged Attacks are converted to **Hydro DMG** that cannot be overridden by any other elemental infusion and change as follows:\n**Normal Attack**\nPerform up to 6 consecutive **Hydro** strikes.\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash a cross slash, dealing **Hydro DMG**.\n**Riptide Slash**\nHitting an opponent affected by Riptide with a melee attack unleashes a Riptide Slash that deals **AoE Hydro DMG**. DMG dealt in this way is considered Elemental Skill DMG, and can only occur once every 1.5s.\nAfter 30s, or when the ability is unleashed again, this skill will end. Tartaglia will return to his Ranged Stance and this ability will enter CD. The longer Tartaglia stays in his Melee Stance, the longer the CD. If the return to a ranged stance occurs automatically after 30s, the CD is even longer.\n",
        },
        {
          name: "Burst: Havoc: Obliteration",
          description:
            "Performs different attacks based on what stance Tartaglia is in when casting.\n\n**Ranged Stance**\nFlash of Havoc: Swiftly fires a Hydro-imbued magic arrow, dealing **AoE Hydro DMG** and applying the Riptide status. Returns a portion of its Energy Cost after use.\n\n**Melee Stance**\nLight of Obliteration: Performs a slash with a large AoE, dealing massive **Hydro DMG** to all surrounding opponents, which triggers Riptide Blast.\n\n**Riptide Blast**\nWhen the obliterating waters hit an opponent affected by Riptide, it clears their Riptide status and triggers a Hydro Explosion that deals **AoE Hydro DMG**. DMG dealt in this way is considered Elemental Burst DMG.",
        },
      ],
      passiveTalents: [
        {
          name: "Never Ending",
          description: "Extends Riptide duration by 8s.",
        },
        {
          name: "Sword of Torrents",
          description:
            "When Tartaglia is in Foul Legacy: Raging Tide's Melee stance, on dealing a CRIT hit, Normal and Charged Attacks apply the Riptide status effects to opponents.",
        },
        {
          name: "Master of Weaponry",
          description:
            "Increases your own party members' Normal Attack Level by 1.",
        },
      ],
      constellations: [
        {
          name: "C1: Foul Legacy: Tide Withholder",
          description: "Decrease the CD of Foul Legacy: Raging Tide by 20%",
        },
        {
          name: "C2: Foul Legacy: Understream",
          description:
            "When opponents affected by Riptide are defeated. Tartaglia regenerates 4 Elemental Energy.",
        },
        {
          name: "C3: Abyssal Mayhem: Vortex of Turmoil",
          description:
            "Increases the Level of Foul Legacy: Raging Tide by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Abyssal Mayhem: Hydrosprout",
          description:
            "If Tartaglia is in Foul Legacy: Raging Tide's Melee Stance, triggers Riptide Slash against opponents on the field affected by Riptide every 4s, otherwise, triggers Riptide Flash.\nRiptide Slashes and Riptide Flashes triggered by this Constellation effect are not subject to the time intervals that would typically apply to these two Riptide effects, nor do they have any effects on those time intervals.",
        },
        {
          name: "C5: Havoc: Formless Blade",
          description:
            "Increases the level of Havoc: Obliteration by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Havoc: Annihilation",
          description:
            "When Havoc: Obliteration is cast in Melee stance, the CD of Foul Legacy: Raging Tide is reset. This effect will only take place once Tartaglia returns to his Ranged Stance.",
        },
      ],
    },
  ],
  [
    "bennett",
    {
      name: "Bennett",
      description:
        "A good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Character_Bennett_Portrait.png/revision/latest/scale-to-width-down/267?cb=20200916170558",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Character_Bennett_Portrait.png/revision/latest/scale-to-width-down/267?cb=20200916170558",
      color: "ff4000",
      emoji: "<:Bennett:798579139430973500>",
      category: "Pyro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Pyro:798483485832249354> Pyro",
      weapon: "Sword",
      nation: "Mondstadt",
      affiliation: "Adventurers' Guild",
      specialDish: "Teyvat Charred Egg",
      constellation: "Rota Calamitas",
      birthday: "February 29th",
      ascensionCost: "https://i.imgur.com/N4TySHC.png",
      activeTalents: [
        {
          name: "Strike of Fortune",
          description:
            "**Normal Attack**\nPerforms up to 5 rapid strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash 2 rapid sword swings.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Passion Overload",
          description:
            "Bennett concentrates the spirit of Adventure and Pyro into his blade. Depending on how long he charges for, different effects occur.\n\n**Tap**\nA single, swift flame strike that deals **Pyro DMG**.\n**Hold (Short)**\nCharges up, resulting in different effects when unleashed based on the Charge Level.\n\n**Level 1**\nStrikes twice, dealing **Pyro DMG** and launching opponents.\n**Level 2**\nUnleashes 3 consecutive attacks that deal impressive **Pyro DMG**, but the last attack triggers an explosion that launches both Bennett and the enemy.\n\nBennett takes no damage from being launched.\n",
        },
        {
          name: "Burst: Fantastic Voyage",
          description:
            "Bennett performs a jumping attack that deals **Pyro DMG**, creating an Inspiration Field for 12 seconds.\n\n**Inspiration Field**\nIf the health of a character within the AoE is equal to or falls below 70%, their health will regenerate each second. The amount of HP restores scales off Bennett's Max HP.\nIf the health of a character within the AoE is higher than 70%, they gain an ATK Bonus that scales based on Bennett's Base ATK.\nImbues characters within the AoE with **Pyro**.",
        },
      ],
      passiveTalents: [
        {
          name: "Rekindle",
          description: "Decreases Passion Overload's CD by 20%.",
        },
        {
          name: "Fearnaught",
          description:
            "When inside Fantastic Voyage's circle, Passion Overload's CD is decreased by 50% and Bennett cannot be launched by this skill's explosion.",
        },
        {
          name: "It Should Be Safe...",
          description:
            "When dispatched on an expedition in Mondstadt, time consumed is reduced by 25%.",
        },
      ],
      constellations: [
        {
          name: "C1: Grand Expectation",
          description:
            "Fantastic Voyage's ATK increase no longer has an HP restriction, and gains an additional 20% of Bennett's Base ATK. (Additive increase)",
        },
        {
          name: "C2: Impasse Conqueror",
          description:
            "When HP falls below 70%, increases Energy Recharge by 30%.",
        },
        {
          name: "C3: Unstoppable Fervor",
          description:
            "Increases Passion Overload's skill level by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Unexpected Odyssey",
          description:
            "Short hold to release Passion Overload as a two-stage attack. Press the attack button to perform an additional falling attack.",
        },
        {
          name: "C5: True Explorer",
          description:
            "Increases Fantastic Voyage's skill level by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Fire Ventures with Me",
          description:
            "Sword, Claymore, or Polearm-wielding characters inside Fantastic Voyage's radius gain a 15% **Pyro DMG Bonus** and their weapons are infused with **Pyro**.",
        },
      ],
    },
  ],
  [
    "beidou",
    {
      name: "Beidou",
      description:
        "Captain of her crew, The Crux. She's quite an unbound and forthright woman.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Character_Beidou_Portrait.png/revision/latest/scale-to-width-down/237?cb=20200916170732",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/74/Character_Beidou_Portrait.png/revision/latest/scale-to-width-down/237?cb=20200916170732",
      color: "e205fd",
      emoji: "<:Beidou:798579120479928360>",
      category: "Electro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Electro:798483560205385799> Electro",
      weapon: "Claymore",
      nation: "Liyue",
      affiliation: "Crux Fleet",
      specialDish: "Flash-Fried Filet",
      constellation: "Victor Mare",
      birthday: "February 14th",
      ascensionCost: "https://i.imgur.com/pu1eQr2.png",
      activeTalents: [
        {
          name: "Oceanborne",
          description:
            "**Normal Attack**\nPerform up to 5 successive strikes.\n\n**Charged Attack**\nDrains Stamina over time to perform continuous slashes. At end of the sequence, perform a more powerful slash.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Tidecaller",
          description:
            "Nothing to worry about. Should anyone raise a hand against her or her men, she will avenge it ten-fold with sword and thunder.\n\n**Press**\nAccumulating the power of lightning, Beidou swings her blade forward fiercely, dealing **Electro DMG**.\n\n**Hold**\nLifts her weapon up as a shield. Max DMG absorbed scales off Beidou's Max HP.\n\nAttacks using the energy stored within the greatsword upon release or once this ability's duration expires, dealing **Electro DMG**. DMG dealt scales with the number of times beidou is attacked in the skill's duration. The greatest DMG Bonus will be attained once this effect is triggered twice.\n\nThe shield possesses the following properties:\nHas 250% **Electro DMG** Absorption Efficiency.\nApplies the **Electro element** to Beidou upon activation.\n\nGenerate 2 elemental particles when it hit at least 1 target, or 4 when hit with energy stored.\n",
        },
        {
          name: "Burst: Stormbreaker",
          description:
            "Recalling her slaying of the great beast Haishan, Beidou calls upon that monstrous strength and the lightning to create a Thunderbeast's Targe around herself, dealing **Electro DMG** to nearby opponents.\n\n**Thunderbeast's Targe**\nWhen Normal and Charged Attacks hit, they create a lightning discharge that can jump between opponents, dealing **Electro DMG**.\nIncreases the character's resistance to interruption, and decreases DMG taken.\nTriggers a maximum of 1 lightning discharge per second.",
        },
      ],
      passiveTalents: [
        {
          name: "Retribution",
          description:
            "Counterattacking with Tidecaller at the precise moment when the character is hit grants the maximum DMG Bonus.",
        },
        {
          name: "Lightning Storm",
          description:
            "Gain the following effects for 10s after unleashing Tidecaller with its maximum DMG Bonus:DMG dealt by Normal and Charged Attacks is increased by 15%. ATK SPD of Normal and Charged Attacks is increased by 15%.\nGreatly reduced delay before unleashing Charged Attacks.",
        },
        {
          name: "Conqueror of Tides",
          description:
            "Decreases swimming Stamina consumption of your characters in the party by 20%.\nNot stackable with Passive Talents that provide the exact same effects.",
        },
      ],
      constellations: [
        {
          name: "C1: Sea Beast's Scourge",
          description:
            "When Stormbreaker is used: Creates a shield that absorbs up to 16% of Beidou's Max HP for 15s. This shield absorbs **Electro DMG** 250% more effectively.",
        },
        {
          name: "C2: Upon the Turbulent Sea, the Thunder Arises",
          description:
            "Stormbreaker's arc lightning can jump to 2 additional targets.",
        },
        {
          name: "C3: Summoner of Storm",
          description:
            "Increases the level of Tidecaller by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Stunning Revenge",
          description:
            "Within 10s of taking DMG, Beidou's Normal Attacks gain 20% additional **Electro DMG**.",
        },
        {
          name: "C5: Crimson Tidewalker",
          description:
            "Increases the level of Stormbreaker by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Bane of the Evil",
          description:
            "During the duration of Stormbreaker, the **Electro RES** of surrounding opponents is decreased by 15%.",
        },
      ],
    },
  ],
  [
    "barbara",
    {
      name: "Barbara",
      description:
        "Every citizen of Mondstadt adores Barbara. She learned the word 'idol' from a magazine.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Character_Barbara_Portrait.png/revision/latest/scale-to-width-down/253?cb=20200916170845",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Character_Barbara_Portrait.png/revision/latest/scale-to-width-down/253?cb=20200916170845",
      color: "0379fd",
      emoji: "<:Barbara:798579079221215272>",
      category: "Hydro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Hydro:798483587157983282> Hydro",
      weapon: "Catalyst",
      nation: "Mondstadt",
      affiliation: "Church of Favonius",
      specialDish: "Spicy Stew",
      constellation: "Crater",
      birthday: "July 5th",
      ascensionCost: "https://i.imgur.com/NlHGc0P.png",
      activeTalents: [
        {
          name: "Whisper of Water",
          description:
            "**Normal Attack**\nPerform up to 4 water splash attacks that deal **Hydro DMG**.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to deal **AoE Hydro DMG** after a short casting time.\n\n**Plunging Attack**\nGathering the might of Hydro, Barbara plunges towards the ground from mid-air, damaging all opponents in her path. Deals **AoE Hydro DMG** upon impact with the ground.\n",
        },
        {
          name: "Skill: Let the Show Begin",
          description:
            "Summons water droplets resembling musical notes that form a Melody Loop, dealing **Hydro DMG** to surrounding opponents and afflicting them with the **Wet** status.\n\n**Melody Loop**\nBarbara's Normal Attacks heal your characters in the party and nearby allied characters for a certain amount of HP, which scales with Barbara's Max HP.\nHer Charged Attack generates 4 times the amount of healing.\nRegenerates a certain amount of HP at regular intervals for your active character.\nApplies the **Wet** status to the character and opponents who come in contact with them.\n",
        },
        {
          name: "Burst: Shining Miracle",
          description:
            "Heals nearby allied characters and your characters in the party for a large amount of HP that scales with Barbara's Max HP.",
        },
      ],
      passiveTalents: [
        {
          name: "Glorious Season",
          description:
            "The Stamina Consumption of characters within Let the Show Begin's Melody Loop is reduced by 12%.",
        },
        {
          name: "Encore",
          description:
            "When your active character gains an Elemental Orb/Particle, the duration of Let the Show Begin's Melody Loop is extended by 1s. The maximum extension is 5s.",
        },
        {
          name: "With My Whole Heart",
          description:
            "When a Perfect Cooking is achieved on a dish with restorative effects, Barbara has a 12% chance to obtain double the product.",
        },
      ],
      constellations: [
        {
          name: "C1: Gleeful Songs",
          description: "Barbara regenerates 1 Energy every 10s.",
        },
        {
          name: "C2: Vitality Burst",
          description:
            "Decreases the CD of Let the Show Begin by 15%. During the ability's duration, your active character gains 15% **Hydro DMG Bonus**.",
        },
        {
          name: "C3: Star of Tomorrow",
          description:
            "Increases the level of Shining Miracle by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Attentiveness be My Power",
          description:
            "Every opponent Barbara hits with her Charged Attack regenerates 1 Energy for her. A maximum of 5 energy can be regenerated in this manner with any one Charged Attack.",
        },
        {
          name: "C5: The Purest Companionship",
          description:
            "Increases the level of Let the Show Begin by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Dedicating Everything to You",
          description:
            "When Barbara is not on the field, and one of your characters in the party falls:\nAutomatically revives this character.\nFully regenerates this character's HP to 100%.\nThis effect can only occur once every 15 mins.",
        },
      ],
    },
  ],
  [
    "amber",
    {
      name: "Amber",
      description:
        "Always energetic and full of life, Amber's the best — albeit only — Outrider of the Knights of Favonius.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png/revision/latest/scale-to-width-down/303?cb=20200914160851",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Amber_Portrait.png/revision/latest/scale-to-width-down/303?cb=20200914160851",
      color: "ff4000",
      emoji: "<:Amber:798579318262988810>",
      category: "Pyro",
      rarity: "⭐⭐⭐⭐",
      element: "<:Pyro:798483485832249354> Pyro",
      weapon: "Bow",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius",
      specialDish: "Outrider's Champion Steak!",
      constellation: "Lepus",
      birthday: "August 10th",
      ascensionCost: "https://i.imgur.com/QbFwe03.png",
      activeTalents: [
        {
          name: "Sharpshooter",
          description:
            "**Normal Attack**\nPerform up to 5 consecutive shots with a bow.\n\n**Charged Attack**\nPerform a more precise Aimed Shot with increased DMG. While aiming, flames will accumulate on the arrowhead. A fully charged flaming arrow will deal **Pyro DMG**.\n\n**Plunging Attack**\nFires off a shower of arrows in mid-air before falling an striking the ground, dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Explosive Puppet",
          description:
            "The ever-reliable Baron Bunny takes the stage.\n\n**Baron Bunny**\nContinuously taunts the enemy, drawing their fire.\nBaron Bunny's HP scales with Amber's Max HP.\nWhen destroyed or when its timer expires, Baron Bunny explodes, dealing **AoE Pyro DMG**.\nGenerate 4 elemental particles when it hit at least 1 target.\nHold: Adjusts the throwing direction of Baron Bunny. The longer the button is held, the further the throw.\n",
        },
        {
          name: "Burst: Fiery Rain",
          description:
            "Fires off a shower of arrows, dealing continuous **AoE Pyro DMG**.",
        },
      ],
      passiveTalents: [
        {
          name: "Every Arrow Finds Its Target",
          description:
            "Increases the CRIT Rate of Fiery Rain by 10% and widens its AoE by 30%.",
        },
        {
          name: "Precise Shot",
          description:
            "Aimed Shot hits on weak spots increase ATK by 15% for 10s.",
        },
        {
          name: "Gliding Champion",
          description:
            "Decreases gliding Stamina consumption for your own party members by 20%.\nNot stackable with Passive Talents that provide the exact same effects.",
        },
      ],
      constellations: [
        {
          name: "C1: One Arrow to Rule Them All",
          description:
            "Fires 2 arrows per Aimed Shot. The second arrow deals 20% of the first arrow's DMG.\nThe second arrow is fired 10 degrees vertically below actual aiming, has separate critical, and also makes the primary shot travel further before it starts dropping down.",
        },
        {
          name: "C2: Bunny Triggered",
          description:
            "Baron Bunny, new and improved! Hitting Baron Bunny's foot with a fully-charged Aimed Shot manually detonates it.\nExplosion via manual detonation deals 200% additional DMG.",
        },
        {
          name: "C3: It Burns!",
          description:
            "	Increases the level of Fiery Rain by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: It's Not Just Any Doll...",
          description:
            "Decreases Explosive Puppet's CD by 20%. Adds 1 additional charge.",
        },
        {
          name: "C5: It's Baron Bunny!",
          description:
            "Increases the level of Explosive Puppet by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Wildfire",
          description:
            "Fiery Rain increases the entire party's Movement SPD by 15% and ATK by 15% for 10s.",
        },
      ],
    },
  ],
  [
    "albedo",
    {
      name: "Albedo",
      description:
        "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Character_Albedo_Portrait.png/revision/latest/scale-to-width-down/276?cb=20201217140004",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/23/Character_Albedo_Portrait.png/revision/latest/scale-to-width-down/276?cb=20201217140004",
      color: "ffc100",
      emoji: "<:Albedo:798579345916559370>",
      category: "Geo",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Geo:798483630740865044> Geo",
      weapon: "Sword",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius",
      specialDish: "Woodland Dream",
      constellation: "Princeps Cretaceus",
      birthday: "September 13th",
      ascensionCost: "https://i.imgur.com/YPC45mo.png",
      activeTalents: [
        {
          name: "Favonius Bladework - Weiss",
          description:
            "**Normal Attack**\nPerform up to 5 rapid strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Abiogenesis: Solar Isotoma",
          description:
            "Albedo creates a Solar Isotoma using alchemy, which deals **AoE Geo DMG** on appearance.\n\nSolar Isotoma has the following properties:\nWhen enemies within the Solar Isotoma zone take damage, the Solar Isotoma will generate Transient Blossoms which deal **AoE Geo DMG**. DMG dealt scales off Albedo's DEF.\nTransient Blossoms can only be generated once every 2s.\nWhen a character is located at the locus of the Solar Isotoma, the Solar Isotoma will accumulate Geo power to form a crystallized platform that lifts the character up to a certain height.\nOnly one crystallized platform can exist at a time.\nSolar Isotoma is a **Geo construct**.\n\n**Hold** to designate the location of the skill.\n",
        },
        {
          name: "Burst: Rite of Progeniture: Tectonic Tide",
          description:
            "Under Albedo's command, Geo crystals surge and burst forth, dealing **AoE Geo DMG** in front of him.\n\nIf a Solar Isotoma created by Albedo himself is on the field, 7 Fatal Blossoms will be generated in the Solar Isotoma field, bursting violently into bloom and dealing **AoE Geo DMG**.\n\nTecotonic Tide DMG and Fatal Blossom DMG will not generate Transient Blossoms.",
        },
      ],
      passiveTalents: [
        {
          name: "Calcite Might",
          description:
            "Transient Blossoms generated by Abiogenesis: Solar Isotoma deal 25% more DMG to opponents whose HP is below 50%.",
        },
        {
          name: "Homuncular Nature",
          description:
            "Using Rite of Progeniture: Tectonic Tide increases the Elemental Mastery of nearby party members by 125 for 10s.",
        },
        {
          name: "Flash of Genius (Albedo)",
          description:
            "When Albedo crafts Weapon Ascension Materials, he has a 10% chance to receive double the product.",
        },
      ],
      constellations: [
        {
          name: "C1: Flower of Eden",
          description:
            "Transient Blossoms generated by Albedo's Abiogenesis: Solar Isotoma regenerate 1.2 Energy for Albedo.",
        },
        {
          name: "C2: Opening of Phanerozoic",
          description:
            "Transient Blossoms generated by Abiogenesis: Solar Isotoma grant Albedo Fatal Reckoning for 30s:\nUnleashing Rite of Progeniture: Tectonic Tide consumes all stacks of Fatal Reckoning. Each stack of Fatal Reckoning consumed increases DMG dealt by Fatal Blossoms and Rite of Progeniture: Tectonic Tide's burst DMG by 30% of Albedo's DEF.\nThe effect stacks up to 4 times.",
        },
        {
          name: "C3: Grace of Helios",
          description:
            "Increases the level of Abiogenesis: Solar Isotoma by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Descent of Divinity",
          description:
            "Solar Isotoma increases Plunging Attack DMG by 30% for active party members within the AoE.",
        },
        {
          name: "C5: Tide of Hadaen",
          description:
            "Increases the level of Rite of Progeniture: Tectonic Tide by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Dust of Purification",
          description:
            "If active party members within the AoE are protected by a shield created by Crystallize, Solar Isotoma increases their DMG by 17%.",
        },
      ],
    },
  ],
  [
    "mona",
    {
      name: "Mona",
      description:
        "A mysterious young astrologer who proclaims herself to be 'Astrologist Mona Megistus,' and who possesses abilities to match the title. Erudite, but prideful.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Character_Mona_Portrait.png/revision/latest/scale-to-width-down/287?cb=20200916170444",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Character_Mona_Portrait.png/revision/latest/scale-to-width-down/287?cb=20200916170444",
      color: "0379fd",
      emoji: "<:Mona:798582495674105876>",
      category: "Hydro",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Hydro:798483587157983282> Hydro",
      weapon: "Catalyst",
      nation: "Mondstadt",
      affiliation: "Hexenzirkel",
      specialDish: "Der Weisheit Letzter Schluss (Life)",
      constellation: "Astrolabos",
      birthday: "August 31st",
      ascensionCost: "https://i.imgur.com/lwLnu7B.png",
      activeTalents: [
        {
          name: "Ripple of Fate",
          description:
            "**Normal Attack**\nPerform up to 4 water splash attacks that deal **Hydro DMG**.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to deal **AoE Hydro DMG** after a short casting time.\n\n**Plunging Attack**\nGathering the might of Hydro, Mona plunges towards the ground from mid-air, damaging all opponents in her path. Deals **AoE Hydro DMG** upon impact with the ground.\n",
        },
        {
          name: "Skill: Mirror Reflection of Doom",
          description:
            "Creates an illusory Phantom of fate from coalesced waterspouts.\n\nThe Phantom has the following special properties:\nContinuously taunts nearby opponents, attracting their fire.\nEach second, 4 times, deals **AoE Hydro DMG**.\nWhen its duration expires, the Phantom explodes, dealing **AoE Hydro DMG**.\n\n**Hold**\nUtilizes water currents to move backwards swiftly before conjuring a Phantom\nOnly one Phantom created by Mirror Reflection of Doom can exist at any time.\nWhen the Phantom explodes and hits at least one opponent, it generates 3 elemental particles.\n",
        },
        {
          name: "Burst: Illusory Torrent",
          description:
            "Alternate Sprint: Mona cloaks herself within the water's flow, consuming stamina to move rapidly.\nWhen under the effect of Illusory Torrent, Mona can move at high speed on water.\nApplies the **Wet** status to nearby opponents when she reappears.",
        },
      ],
      passiveTalents: [
        {
          name: "Come 'n' Get Me, Hag!",
          description:
            "After she has used Illusory Torrent for 2s, if there are any opponents nearby, Mona will automatically create a Phantom.\nA Phantom created in this manner lasts for 2s, and its explosion DMG is equal to 50% of Mirror Reflection of Doom.",
        },
        {
          name: "Waterborne Destiny",
          description:
            "Increases Mona's *Hydro DMG Bonus** by a degree equivalent to 20% of her Energy Recharge rate.",
        },
        {
          name: "Principium of Astrology",
          description:
            "When Mona crafts Weapon Ascension Materials, she has a 25% chance to refund one count of one material out of all the crafting materials used.",
        },
      ],
      constellations: [
        {
          name: "C1: Prophecy of Submersion",
          description:
            "The effects of **Hydro-related Elemental Reactions** are enhanced for 8s after any of your characters in the party hit an opponent affected by an Omen:\nElectro-Charged DMG is increased by 15%.\nVaporize DMG is increased by 15%.\nHydro Swirl DMG is increased by 15%.\nThe duration for which enemies are Frozen is increased by 15%.",
        },
        {
          name: "C2: Lunar Chain",
          description:
            "When a Normal Attack hits, there is a 20% chance that it will be automatically followed by a Charged Attack. This effect can only occur once every 5s.",
        },
        {
          name: "C3: Restless Revolution",
          description:
            "	Increases the Level of Stellaris Phantasm by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Prophecy of Oblivion",
          description:
            "When any character in the party attacks an opponent affected by the Omen status effect, their CRIT Rate is increased by 15%.",
        },
        {
          name: "C5: Mockery of Fortuna",
          description:
            "Increase the Level of Mirror Reflection of Doom by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Rhetorics of Calamitas",
          description:
            "Upon entering Illusory Torrent, Mona gains a 60% increase to the DMG her next Charged Attack per second of movement. A maximum DMG Bonus of 180% can be achieved in this manner. The effect lasts for no more than 8s.",
        },
      ],
    },
  ],
  [
    "travelergeo",
    {
      name: "Traveler (Geo)",
      description:
        "The Traveler is the playable protagonist of Genshin Impact.\nAt the beginning of the game, both genders are twin siblings from another world, traveling throughout the universe, until an Unknown God ambushed, captured one of them, and sealed their ways of travel, leaving them stranded on Teyvat.\nThey are accompanied by a travel companion named Paimon throughout their journey. ",
      thumbnail:
        "https://genshinimpact.net/wp-content/uploads/2020/09/Character_Traveler_Portrait-768x583.png",
      image:
        "https://genshinimpact.net/wp-content/uploads/2020/09/Character_Traveler_Portrait-768x583.png",
      color: "ffc100",
      emoji: "<:Traveler:798976293613600829>",
      category: "Geo",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Geo:798483630740865044> Geo",
      weapon: "Sword",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius/Adventurers' Guild",
      specialDish: "None",
      constellation: "Viator (Male)/Viatrix (Female)",
      birthday: "Player's Choice",
      ascensionCost: "https://i.imgur.com/5rYBKgh.png",
      activeTalents: [
        {
          name: "Foreign Rockblade",
          description:
            "**Normal Attack**\nPerforms up to 5 consecutive strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Starfell Sword",
          description:
            "You disgorge a meteorite from the depths of the earth, dealing **AoE Geo DMG**.\nThe meteorite is considered a Geo Construct, and can be climbed or used to block attacks.\n\nHold\nThe skill's positioning may be adjusted.\n",
        },
        {
          name: "Burst: Wake of Earth",
          description:
            "Energizing the Geo elements deep underground, you set off expanding shockwaves.\n\nLaunches surrounding enemies back and deals **AoE Geo DMG**.\n\nA stone wall is erected at the edges of the shockwave.\n\nThe stone wall is considered a **Geo Construct**, and may be used to block attacks.",
        },
      ],
      passiveTalents: [
        {
          name: "Shattered Darkrock",
          description: "Reduces Starfell Sword's CD by 2s.",
        },
        {
          name: "Frenzied Rockslide",
          description:
            "The final hit of a Normal Attack combo triggers a collapse, dealing 60% of ATK as **AoE Geo DMG**.",
        },
      ],
      constellations: [
        {
          name: "C1: Invincible Stonewall",
          description:
            "Allies within the radius of Wake of Earth have their CRIT Rate increased by 10% and have increased resistance against interruption.",
        },
        {
          name: "C2: Rockcore Meltdown",
          description:
            "When the meteorite created by Starfell Sword is destroyed, it will also explode, dealing additional **AoE Geo DMG** equal to the amount of damage dealt by Starfell Sword.",
        },
        {
          name: "C3: Will of the Rock",
          description:
            "Increases the Level of Wake of Earth by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C4: Reaction Force",
          description:
            "The shockwave triggered by Wake of Earth regenerates 5 Energy for every enemy hit.\n\nA maximum of 25 Energy can be recovered in this manner at any one time.",
        },
        {
          name: "C5: Meteorite Impact",
          description:
            "Increase the Level of Starfell Sword by 3.\nMaximum upgrade level is 15.",
        },
        {
          name: "C6: Everlasting Boulder",
          description:
            "The barrier created by Wake of Earth lasts 5s longer.\n\nThe meteorite created by Starfell Sword lasts 10s longer.",
        },
      ],
    },
  ],
  [
    "traveleranemo",
    {
      name: "Traveler (Anemo)",
      description:
        "The Traveler is the playable protagonist of Genshin Impact.\nAt the beginning of the game, both genders are twin siblings from another world, traveling throughout the universe, until an Unknown God ambushed, captured one of them, and sealed their ways of travel, leaving them stranded on Teyvat.\nThey are accompanied by a travel companion named Paimon throughout their journey. ",
      thumbnail:
        "https://genshinimpact.net/wp-content/uploads/2020/09/Character_Traveler_Portrait-768x583.png",
      image:
        "https://genshinimpact.net/wp-content/uploads/2020/09/Character_Traveler_Portrait-768x583.png",
      color: "03fd9e",
      emoji: "<:Traveler:798976293613600829>",
      category: "Anemo",
      rarity: "⭐⭐⭐⭐⭐",
      element: "<:Anemo:798483595781341194> Anemo",
      weapon: "Sword",
      nation: "Mondstadt",
      affiliation: "Knights of Favonius/Adventurers' Guild",
      specialDish: "None",
      constellation: "Viator (Male)/Viatrix (Female)",
      birthday: "Player's Choice",
      ascensionCost: "https://i.imgur.com/4mDYLVA.png",
      activeTalents: [
        {
          name: "Foreign Ironwind",
          description:
            "**Normal Attack**\nPerforms up to 5 rapid strikes.\n\n**Charged Attack**\nConsumes a certain amount of Stamina to unleash 2 rapid sword strikes.\n\n**Plunging Attack**\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.\n",
        },
        {
          name: "Skill: Palm Vortex",
          description:
            "Grasping the wind's might, you form a vortex of vacuum in your palm, causing **Anemo DMG** 6 times in 1.5 seconds to opponents in front of you. The vacuum vortex explodes when the skill duration ends, causing a greater amount of Anemo DMG over a larger area.\n\n**Hold**\nDMG and AoE will gradually increase.\n\n**Elemental Absorption**\nIf the vortex comes into contact with **Hydro/Pyro/Cryo/Electro** elements, it will deal 23% additional elemental DMG of that type. Elemental Absorption may only occur once per use.\nGenerate 2 elemental particles when press and 3.5 when hold, if it hit at least 1 target.\n",
        },
        {
          name: "Burst: Gust Surge",
          description:
            "Guiding the path of the wind currents, you summon a forward-moving tornado that pulls objects and opponents towards itself, dealing **Anemo DMG** each 0.5 seconds, 9 times.\n**Elemental Absorption** If the vortex comes into contact with **Hydro/Pyro/Cryo/Electro** elements, it will deal 30.7% additional elemental DMG of that type. Elemental Absorption may only occur once per use.",
        },
      ],
      passiveTalents: [
        {
          name: "Slitting Wind",
          description:
            "The last hit of a Normal Attack combo unleashes a wind blade, dealing 60% of ATK as **Anemo DMG** to all opponents in its path.",
        },
        {
          name: "Second Wind",
          description:
            "Palm Vortex kills regenerate 2% HP for 5s. This effect can only occur once every 5s.",
        },
      ],
      constellations: [
        {
          name: "C1: Raging Vortex",
          description: "Palm Vortex pulls in enemies within a 5m radius.",
        },
        {
          name: "C2: Uprising Whirlwind",
          description: "Increases Energy Recharge by 16%.",
        },
        {
          name: "C3: Sweeping Gust",
          description:
            "Increases the level of Gust Surge by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Cherishing Breezes",
          description: "Reduces DMG taken while casting Palm Vortex by 10%.",
        },
        {
          name: "C5: Vortex Stellaris",
          description:
            "Increases the level of Palm Vortex by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Intertwined Winds",
          description:
            "Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%.\nIf an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
        },
      ],
    },
  ],
  [
    "diona",
    {
      name: "Diona",
      description:
        "A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.",
      thumbnail:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/ce/Character_Diona_Portrait.png/revision/latest/scale-to-width-down/281?cb=20201117115533",
      image:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/ce/Character_Diona_Portrait.png/revision/latest/scale-to-width-down/281?cb=20201117115533",
      color: "00f9ff",
      emoji: "<:Diona:798582510480785409>",
      category: "Cryo",
      rarity: "⭐⭐⭐⭐",
      element: "<:Cryo:798483525052530719> Cryo",
      weapon: "Bow",
      nation: "Mondstadt",
      affiliation: "Cat's Tail Tavern",
      specialDish: "Definitely Not Bar Food!",
      constellation: "Feles",
      birthday: "January 18th",
      ascensionCost: "https://i.imgur.com/iH3HmCm.png",
      activeTalents: [
        {
          name: "Kätzlein Style",
          description:
            "**Normal Attack**\nPerform up to 5 consecutive shots with a bow.\n\n**Charged Attack**\nPerform a more precise Aimed Shot with increased DMG. While aiming, biting frost will accumulate on the arrowhead. A fully charged frost arrow will deal **Cryo Damage**.\n\n**Plunging Attack**\nFires off a shower of arrows in mid-air before falling and striking the ground, dealing AoE DMG on impact.\n",
        },
        {
          name: "Skill: Icy Paws",
          description:
            "Fires an Icy Paw that deals **Cryo DMG** to opponents and forms a shield on hit. The shield's DMG Absorption scales based on Diona's Max HP, and its duration scales off the number of Icy Paws that hit their target.\n\n**Press**\nRapidly fires off 2 Icy Paws.\n\n**Hold**\nDashes back quickly before firing 5 Icy Paws. The shield created by a Hold attack will gain a 75% DMG Absorption Bonus.\n\nThe shield has a 250% **Cryo DMG** Absorption Bonus, and will infuse Diona with **Cryo** at the point of formation for a short duration.\nEach Icy Paw which hits an opponent generates approximately 0.8 elemental particles.\n",
        },
        {
          name: "Burst: Signature Mix",
          description:
            "Tosses out a special cold brew that deals **AoE Cryo DMG** and creates a Drunken Mist in an AoE.\n\nEvery 2 seconds, for 12 seconds, Drunken Mist:\nDeals **Cryo DMG** to opponents within the field.\nRegenerates the HP of characters within the field.",
        },
      ],
      passiveTalents: [
        {
          name: "Cat's Tail Secret Menu",
          description:
            "Characters shielded by Icy Paws have their Movement SPD increased by 10% and their Stamina Consumption decreased by 10%.",
        },
        {
          name: "Drunkards' Farce",
          description:
            "Opponents who enter the AoE of Signature Mix have 10% decreased ATK for 15s.",
        },
        {
          name: "Complimentary Bar Food",
          description:
            "When a Perfect Cooking is achieved on a dish with restorative effects, Diona has a 12% chance to obtain double the product.",
        },
      ],
      constellations: [
        {
          name: "C1: A Lingering Flavor",
          description:
            "Regenerates 15 Energy for Diona after the effects of Signature Mix end.",
        },
        {
          name: "C2: Shaken, Not Purred",
          description:
            "Increases Icy Paws' DMG by 15%, and increases its shield's DMG Absorption by 15%. Additionally, when paws hit their targets, creates a shield for other nearby characters on the field with 50% of the Icy Paws shield's DMG Absorption for 5s.",
        },
        {
          name: "C3: A-Another Round?",
          description:
            "	Increases the Level of Signature Mix by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C4: Wine Industry Slayer",
          description:
            "Within the radius of Signature Mix, Diona's charge time for aimed shots is reduced by 60%.",
        },
        {
          name: "C5: Double Shot, On The Rocks",
          description:
            "Increases the Level of Icy Paws by 3. Maximum upgrade level is 15.",
        },
        {
          name: "C6: Cat's Tail Closing Time",
          description:
            "Characters within Signature Mix's radius will gain the following effects based on their HP amounts:\nIncreases Incoming Healing Bonus by 30% when HP falls below or is equal to 50%.\nElemental Mastery increased by 200 when HP is above 50%.",
        },
      ],
    },
  ],
]);
