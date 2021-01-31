import { botCache, Collection } from "../../deps.ts";

botCache.constants.missions = [
  {
    amount: 1,
    commandName: `guildadded`,
    title: `strings:MISSIONS_GUILDADDED`,
    reward: 200,
  },
  {
    amount: 10,
    commandName: `advice`,
    title: `strings:MISSIONS_ADVICE`,
    reward: 30,
  },
  {
    amount: 5,
    commandName: `baka`,
    title: `strings:MISSIONS_BAKA`,
    reward: 50,
  },
  {
    amount: 5,
    commandName: `compliment`,
    title: `strings:MISSIONS_COMPLIMENT`,
    reward: 50,
  },
  { amount: 5, commandName: `hug`, title: `strings:MISSIONS_HUG`, reward: 50 },
  {
    amount: 5,
    commandName: `profile`,
    title: `strings:MISSIONS_PROFILE`,
    reward: 150,
  },
  {
    amount: 3,
    commandName: `role`,
    title: `strings:MISSIONS_ROLE`,
    reward: 30,
  },
  {
    amount: 5,
    commandName: `user`,
    title: `strings:MISSIONS_USER`,
    reward: 70,
  },
  {
    amount: 3,
    commandName: `votefeedback`,
    title: `strings:MISSIONS_VOTEFEEDBACK`,
    reward: 10,
  },
  {
    amount: 1,
    commandName: `voice10min`,
    title: `strings:MISSIONS_VOICE10MIN`,
    reward: 50,
  },
  {
    amount: 1,
    commandName: `avatar`,
    title: `strings:MISSIONS_AVATAR`,
    reward: 5,
  },
  {
    amount: 3,
    commandName: `cuddle`,
    title: `strings:MISSIONS_CUDDLE`,
    reward: 15,
  },
  {
    amount: 5,
    commandName: `kiss`,
    title: `strings:MISSIONS_KISS`,
    reward: 30,
  },
  {
    amount: 5,
    commandName: `poke`,
    title: `strings:MISSIONS_POKE`,
    reward: 10,
  },
  {
    amount: 5,
    commandName: `tickle`,
    title: `strings:MISSIONS_TICKLE`,
    reward: 10,
  },
  {
    amount: 5,
    commandName: `pony`,
    title: `strings:MISSIONS_PONY`,
    reward: 30,
  },
  {
    amount: 5,
    commandName: `8ball`,
    title: `strings:MISSIONS_8BALL`,
    reward: 30,
  },
  {
    amount: 10,
    commandName: `lmao`,
    title: `strings:MISSIONS_LMAO`,
    reward: 30,
  },
  {
    amount: 10,
    commandName: `slots`,
    title: `strings:MISSIONS_SLOTS`,
    reward: 30,
  },
  {
    amount: 5,
    commandName: `bite`,
    title: `strings:MISSIONS_BITE`,
    reward: 30,
  },
];

botCache.constants.levels = new Collection<
  number,
  { name: string; xpNeeded: number; id: number }
>([
  [0, { xpNeeded: 50, name: `Level 0`, id: 0 }],
  [1, { xpNeeded: 100, name: `Level 1`, id: 1 }],
  [2, { xpNeeded: 300, name: `Level 2`, id: 2 }],
  [3, { xpNeeded: 700, name: `Level 3`, id: 3 }],
  [4, { xpNeeded: 1200, name: `Level 4`, id: 4 }],
  [5, { xpNeeded: 1900, name: `Level 5`, id: 5 }],
  [6, { xpNeeded: 3000, name: `Level 6`, id: 6 }],
  [7, { xpNeeded: 4400, name: `Level 7`, id: 7 }],
  [8, { xpNeeded: 6000, name: `Level 8`, id: 8 }],
  [9, { xpNeeded: 7800, name: `Level 9`, id: 9 }],
  [10, { xpNeeded: 10000, name: `Level 10`, id: 10 }],
  [11, { xpNeeded: 12500, name: `Level 11`, id: 11 }],
  [12, { xpNeeded: 17000, name: `Level 12`, id: 12 }],
  [13, { xpNeeded: 24000, name: `Level 13`, id: 13 }],
  [14, { xpNeeded: 33000, name: `Level 14`, id: 14 }],
  [15, { xpNeeded: 43000, name: `Level 15`, id: 15 }],
  [16, { xpNeeded: 55000, name: `Level 16`, id: 16 }],
  [17, { xpNeeded: 68500, name: `Level 17`, id: 17 }],
  [18, { xpNeeded: 73000, name: `Level 18`, id: 18 }],
  [19, { xpNeeded: 89000, name: `Level 19`, id: 19 }],
  [20, { xpNeeded: 107000, name: `Level 20`, id: 20 }],
  [21, { xpNeeded: 127000, name: `Level 21`, id: 21 }],
  [22, { xpNeeded: 150000, name: `Level 22`, id: 22 }],
  [23, { xpNeeded: 176000, name: `Level 23`, id: 23 }],
  [24, { xpNeeded: 208000, name: `Level 24`, id: 24 }],
  [25, { xpNeeded: 244000, name: `Level 25`, id: 25 }],
  [26, { xpNeeded: 284000, name: `Level 26`, id: 26 }],
  [27, { xpNeeded: 334000, name: `Level 27`, id: 27 }],
  [28, { xpNeeded: 404000, name: `Level 28`, id: 28 }],
  [29, { xpNeeded: 494000, name: `Level 29`, id: 29 }],
  [30, { xpNeeded: 604000, name: `Level 30`, id: 30 }],
  [31, { xpNeeded: 744000, name: `Level 31`, id: 31 }],
  [32, { xpNeeded: 924000, name: `Level 32`, id: 32 }],
  [33, { xpNeeded: 1144000, name: `Level 33`, id: 33 }],
  [34, { xpNeeded: 1400000, name: `Level 34`, id: 34 }],
  [35, { xpNeeded: 1680000, name: `Level 35`, id: 35 }],
  [36, { xpNeeded: 2020000, name: `Level 36`, id: 36 }],
  [37, { xpNeeded: 2400000, name: `Level 37`, id: 37 }],
  [38, { xpNeeded: 2900000, name: `Level 38`, id: 38 }],
  [39, { xpNeeded: 3500000, name: `Level 39`, id: 39 }],
  [40, { xpNeeded: 4200000, name: `Level 40`, id: 40 }],
  [41, { xpNeeded: 5000000, name: `Level 41`, id: 41 }],
  [42, { xpNeeded: 5900000, name: `Level 42`, id: 42 }],
  [43, { xpNeeded: 7000000, name: `Level 43`, id: 43 }],
  [44, { xpNeeded: 8100000, name: `Level 44`, id: 44 }],
  [44, { xpNeeded: 9200000, name: `Level 44`, id: 44 }],
  [45, { xpNeeded: 10300000, name: `Level 45`, id: 45 }],
  [46, { xpNeeded: 11400000, name: `Level 46`, id: 46 }],
  [47, { xpNeeded: 12500000, name: `Level 47`, id: 47 }],
  [48, { xpNeeded: 13600000, name: `Level 48`, id: 48 }],
  [49, { xpNeeded: 14700000, name: `Level 49`, id: 49 }],
  [50, { xpNeeded: 16000000, name: `Level 50`, id: 50 }],
  [51, { xpNeeded: 17000000, name: `Level 51`, id: 51 }],
  [52, { xpNeeded: 18000000, name: `Level 52`, id: 52 }],
  [53, { xpNeeded: 19000000, name: `Level 53`, id: 53 }],
  [54, { xpNeeded: 20000000, name: `Level 54`, id: 54 }],
  [55, { xpNeeded: 21000000, name: `Level 55`, id: 55 }],
  [56, { xpNeeded: 22000000, name: `Level 56`, id: 56 }],
  [57, { xpNeeded: 23000000, name: `Level 57`, id: 57 }],
  [58, { xpNeeded: 24000000, name: `Level 58`, id: 58 }],
  [59, { xpNeeded: 25000000, name: `Level 59`, id: 59 }],
  [60, { xpNeeded: 26000000, name: `Level 60`, id: 60 }],
  [61, { xpNeeded: 27000000, name: `Level 61`, id: 61 }],
  [62, { xpNeeded: 28000000, name: `Level 62`, id: 62 }],
  [63, { xpNeeded: 29000000, name: `Level 63`, id: 63 }],
  [64, { xpNeeded: 30000000, name: `Level 64`, id: 64 }],
  [65, { xpNeeded: 31000000, name: `Level 65`, id: 65 }],
  [66, { xpNeeded: 32000000, name: `Level 66`, id: 66 }],
  [67, { xpNeeded: 33000000, name: `Level 67`, id: 67 }],
  [68, { xpNeeded: 34000000, name: `Level 68`, id: 68 }],
  [69, { xpNeeded: 35000000, name: `Level 69`, id: 69 }],
  [70, { xpNeeded: 36000000, name: `Level 70`, id: 70 }],
  [71, { xpNeeded: 37000000, name: `Level 71`, id: 71 }],
  [72, { xpNeeded: 38000000, name: `Level 72`, id: 72 }],
  [73, { xpNeeded: 39000000, name: `Level 73`, id: 73 }],
  [74, { xpNeeded: 40000000, name: `Level 74`, id: 74 }],
  [75, { xpNeeded: 41000000, name: `Level 75`, id: 75 }],
  [76, { xpNeeded: 42000000, name: `Level 76`, id: 76 }],
  [77, { xpNeeded: 43000000, name: `Level 77`, id: 77 }],
  [78, { xpNeeded: 44000000, name: `Level 78`, id: 78 }],
  [79, { xpNeeded: 45000000, name: `Level 79`, id: 79 }],
  [80, { xpNeeded: 46000000, name: `Level 80`, id: 80 }],
  [81, { xpNeeded: 47000000, name: `Level 81`, id: 81 }],
  [82, { xpNeeded: 48000000, name: `Level 82`, id: 82 }],
  [83, { xpNeeded: 49000000, name: `Level 83`, id: 83 }],
  [84, { xpNeeded: 50000000, name: `Level 84`, id: 84 }],
  [85, { xpNeeded: 51000000, name: `Level 85`, id: 85 }],
  [86, { xpNeeded: 52000000, name: `Level 86`, id: 86 }],
  [87, { xpNeeded: 53000000, name: `Level 87`, id: 87 }],
  [88, { xpNeeded: 54000000, name: `Level 88`, id: 88 }],
  [89, { xpNeeded: 55000000, name: `Level 89`, id: 89 }],
  [90, { xpNeeded: 56000000, name: `Level 90`, id: 90 }],
  [91, { xpNeeded: 57000000, name: `Level 91`, id: 91 }],
  [92, { xpNeeded: 58000000, name: `Level 92`, id: 92 }],
  [93, { xpNeeded: 59000000, name: `Level 93`, id: 93 }],
  [94, { xpNeeded: 60000000, name: `Level 94`, id: 94 }],
  [95, { xpNeeded: 61000000, name: `Level 95`, id: 95 }],
  [96, { xpNeeded: 62000000, name: `Level 96`, id: 96 }],
  [97, { xpNeeded: 63000000, name: `Level 97`, id: 97 }],
  [98, { xpNeeded: 64000000, name: `Level 98`, id: 98 }],
  [99, { xpNeeded: 65000000, name: `Level 99`, id: 99 }],
  [100, { xpNeeded: 66000000, name: `Level 100`, id: 100 }],
  [101, { xpNeeded: 67000000, name: `Level 101`, id: 101 }],
  [102, { xpNeeded: 68000000, name: `Level 102`, id: 102 }],
  [103, { xpNeeded: 69000000, name: `Level 103`, id: 103 }],
  [104, { xpNeeded: 70000000, name: `Level 104`, id: 104 }],
  [105, { xpNeeded: 71000000, name: `Level 105`, id: 105 }],
  [106, { xpNeeded: 72000000, name: `Level 106`, id: 106 }],
  [107, { xpNeeded: 73000000, name: `Level 107`, id: 107 }],
  [108, { xpNeeded: 74000000, name: `Level 108`, id: 108 }],
  [109, { xpNeeded: 75000000, name: `Level 109`, id: 109 }],
  [110, { xpNeeded: 76000000, name: `Level 110`, id: 110 }],
  [111, { xpNeeded: 77000000, name: `Level 111`, id: 111 }],
  [112, { xpNeeded: 78000000, name: `Level 112`, id: 112 }],
  [113, { xpNeeded: 79000000, name: `Level 113`, id: 113 }],
  [114, { xpNeeded: 80000000, name: `Level 114`, id: 114 }],
  [115, { xpNeeded: 81000000, name: `Level 115`, id: 115 }],
  [116, { xpNeeded: 82000000, name: `Level 116`, id: 116 }],
  [117, { xpNeeded: 83000000, name: `Level 117`, id: 117 }],
  [118, { xpNeeded: 84000000, name: `Level 118`, id: 118 }],
  [119, { xpNeeded: 85000000, name: `Level 119`, id: 119 }],
  [120, { xpNeeded: 86000000, name: `Level 120`, id: 120 }],
  [121, { xpNeeded: 87000000, name: `Level 121`, id: 121 }],
  [122, { xpNeeded: 88000000, name: `Level 122`, id: 122 }],
  [123, { xpNeeded: 89000000, name: `Level 123`, id: 123 }],
  [124, { xpNeeded: 90000000, name: `Level 124`, id: 124 }],
  [125, { xpNeeded: 91000000, name: `Level 125`, id: 125 }],
  [126, { xpNeeded: 92000000, name: `Level 126`, id: 126 }],
  [127, { xpNeeded: 93000000, name: `Level 127`, id: 127 }],
  [128, { xpNeeded: 94000000, name: `Level 128`, id: 128 }],
  [129, { xpNeeded: 95000000, name: `Level 129`, id: 129 }],
  [130, { xpNeeded: 96000000, name: `Level 130`, id: 130 }],
  [131, { xpNeeded: 97000000, name: `Level 131`, id: 131 }],
  [132, { xpNeeded: 98000000, name: `Level 132`, id: 132 }],
  [133, { xpNeeded: 99000000, name: `Level 133`, id: 133 }],
  [134, { xpNeeded: 100000000, name: `Level 134`, id: 134 }],
  [135, { xpNeeded: 101000000, name: `Level 135`, id: 135 }],
  [136, { xpNeeded: 102000000, name: `Level 136`, id: 136 }],
  [137, { xpNeeded: 103000000, name: `Level 137`, id: 137 }],
  [138, { xpNeeded: 104000000, name: `Level 138`, id: 138 }],
  [139, { xpNeeded: 105000000, name: `Level 139`, id: 139 }],
  [140, { xpNeeded: 106000000, name: `Level 140`, id: 140 }],
  [141, { xpNeeded: 107000000, name: `Level 141`, id: 141 }],
  [142, { xpNeeded: 108000000, name: `Level 142`, id: 142 }],
  [143, { xpNeeded: 109000000, name: `Level 143`, id: 143 }],
  [144, { xpNeeded: 110000000, name: `Level 144`, id: 144 }],
  [145, { xpNeeded: 111000000, name: `Level 145`, id: 145 }],
  [146, { xpNeeded: 112000000, name: `Level 146`, id: 146 }],
  [147, { xpNeeded: 113000000, name: `Level 147`, id: 147 }],
  [148, { xpNeeded: 114000000, name: `Level 148`, id: 148 }],
  [149, { xpNeeded: 115000000, name: `Level 149`, id: 149 }],
  [150, { xpNeeded: 116000000, name: `Level 150`, id: 150 }],
  [151, { xpNeeded: 117000000, name: `Level 151`, id: 151 }],
  [152, { xpNeeded: 118000000, name: `Level 152`, id: 152 }],
  [153, { xpNeeded: 119000000, name: `Level 153`, id: 153 }],
  [154, { xpNeeded: 120000000, name: `Level 154`, id: 154 }],
  [155, { xpNeeded: 121000000, name: `Level 155`, id: 155 }],
  [156, { xpNeeded: 122000000, name: `Level 156`, id: 156 }],
  [157, { xpNeeded: 123000000, name: `Level 157`, id: 157 }],
  [158, { xpNeeded: 124000000, name: `Level 158`, id: 158 }],
  [159, { xpNeeded: 125000000, name: `Level 159`, id: 159 }],
  [160, { xpNeeded: 126000000, name: `Level 160`, id: 160 }],
  [161, { xpNeeded: 127000000, name: `Level 161`, id: 161 }],
  [162, { xpNeeded: 128000000, name: `Level 162`, id: 162 }],
  [163, { xpNeeded: 129000000, name: `Level 163`, id: 163 }],
  [164, { xpNeeded: 130000000, name: `Level 164`, id: 164 }],
  [165, { xpNeeded: 131000000, name: `Level 165`, id: 165 }],
  [166, { xpNeeded: 132000000, name: `Level 166`, id: 166 }],
  [167, { xpNeeded: 133000000, name: `Level 167`, id: 167 }],
  [168, { xpNeeded: 134000000, name: `Level 168`, id: 168 }],
  [169, { xpNeeded: 135000000, name: `Level 169`, id: 169 }],
  [170, { xpNeeded: 136000000, name: `Level 170`, id: 170 }],
  [171, { xpNeeded: 137000000, name: `Level 171`, id: 171 }],
  [172, { xpNeeded: 138000000, name: `Level 172`, id: 172 }],
  [173, { xpNeeded: 139000000, name: `Level 173`, id: 173 }],
  [174, { xpNeeded: 140000000, name: `Level 174`, id: 174 }],
  [175, { xpNeeded: 141000000, name: `Level 175`, id: 175 }],
  [176, { xpNeeded: 142000000, name: `Level 176`, id: 176 }],
  [177, { xpNeeded: 143000000, name: `Level 177`, id: 177 }],
  [178, { xpNeeded: 144000000, name: `Level 178`, id: 178 }],
  [179, { xpNeeded: 145000000, name: `Level 179`, id: 179 }],
  [180, { xpNeeded: 146000000, name: `Level 180`, id: 180 }],
  [181, { xpNeeded: 147000000, name: `Level 181`, id: 181 }],
  [182, { xpNeeded: 148000000, name: `Level 182`, id: 182 }],
  [183, { xpNeeded: 149000000, name: `Level 183`, id: 183 }],
  [184, { xpNeeded: 150000000, name: `Level 184`, id: 184 }],
  [185, { xpNeeded: 151000000, name: `Level 185`, id: 185 }],
  [186, { xpNeeded: 152000000, name: `Level 186`, id: 186 }],
  [187, { xpNeeded: 153000000, name: `Level 187`, id: 187 }],
  [188, { xpNeeded: 154000000, name: `Level 188`, id: 188 }],
  [189, { xpNeeded: 155000000, name: `Level 189`, id: 189 }],
  [190, { xpNeeded: 156000000, name: `Level 190`, id: 190 }],
  [191, { xpNeeded: 157000000, name: `Level 191`, id: 191 }],
  [192, { xpNeeded: 158000000, name: `Level 192`, id: 192 }],
  [193, { xpNeeded: 159000000, name: `Level 193`, id: 193 }],
  [194, { xpNeeded: 160000000, name: `Level 194`, id: 194 }],
  [195, { xpNeeded: 161000000, name: `Level 195`, id: 195 }],
  [196, { xpNeeded: 162000000, name: `Level 196`, id: 196 }],
  [197, { xpNeeded: 163000000, name: `Level 197`, id: 197 }],
  [198, { xpNeeded: 164000000, name: `Level 198`, id: 198 }],
  [199, { xpNeeded: 165000000, name: `Level 199`, id: 199 }],
  [200, { xpNeeded: 200000000, name: `Level 200`, id: 200 }],
]);