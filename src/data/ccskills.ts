import { Condition } from "@discretize/gw2-ui-new";
import { ComponentProps } from "react";
import { DraggableTypes } from "../components/Draggables/Draggable";

export type CCData = {
  cc: number;
  profession?: string | "bundle";
  name?: string;
  id: unknown;
  maxTicks?: number;
};

export const CC_SKILLS: Record<number, CCData> = {
  9091: {
    name: "Shield of Absorption",
    profession: "guardian",
    id: 9091,
    cc: 150,
  },
  9226: { name: "Pull", profession: "guardian", id: 9226, cc: 150 },
  9124: { name: "Banish", profession: "guardian", id: 9124, cc: 232 },
  9144: { name: "Line of Warding", profession: "guardian", id: 9144, cc: 150 },
  9193: { name: "Wrathful Grasp", profession: "guardian", id: 9193, cc: 150 },
  9206: {
    name: "Weight of Justice",
    profession: "guardian",
    id: 9206,
    cc: 200,
  },
  29630: {
    name: "Deflecting Shot",
    profession: "guardian",
    id: 29630,
    cc: 150,
  },
  30628: { name: "Hunter's Ward", profession: "guardian", id: 30628, cc: 150 },
  45402: { name: "Blazing Edge", profession: "guardian", id: 45402, cc: 150 },
  28409: { name: "Temporal Rift", profession: "revenant", id: 28409, cc: 150 },
  28110: {
    name: "Drop the Hammer",
    profession: "revenant",
    id: 28110,
    cc: 200,
  },
  28978: {
    name: "Surge of the Mists",
    profession: "revenant",
    id: 28978,
    cc: 150,
    maxTicks: 9,
  },
  50410: {
    name: "Reckoning Blast",
    profession: "revenant",
    id: 50410,
    cc: 150,
  },
  41820: { name: "Scorchrazor", profession: "revenant", id: 41820, cc: 200 },
  14503: { name: "Pommel Bash", profession: "warrior", id: 14503, cc: 100 },
  14415: { name: "Tremor", profession: "warrior", id: 14415, cc: 300 },
  14361: { name: "Shield Bash", profession: "warrior", id: 14361, cc: 200 },
  14511: { name: "Backbreaker", profession: "warrior", id: 14511, cc: 700 },
  14359: { name: "Staggering Blow", profession: "warrior", id: 14359, cc: 150 },
  14505: {
    name: "Smoldering Arrow",
    profession: "warrior",
    id: 14505,
    cc: 100,
  },
  14360: { name: "Rifle Butt", profession: "warrior", id: 14360, cc: 150 },
  14448: { name: "Barbed Pull", profession: "warrior", id: 14448, cc: 150 },
  14465: { name: "Repeating Shot", profession: "warrior", id: 14465, cc: 150 },
  44937: { name: "Disrupting Stab", profession: "warrior", id: 44937, cc: 250 },
  6126: {
    name: "Magnetic Inversion",
    profession: "engineer",
    id: 6126,
    cc: 150,
  },
  6054: { name: "Static Shield", profession: "engineer", id: 6054, cc: 100 },
  6057: { name: "Throw Shield", profession: "engineer", id: 6057, cc: 100 },
  6154: { name: "Overcharged Shot", profession: "engineer", id: 6154, cc: 232 },
  50380: { name: "Capture Line", profession: "engineer", id: 50380, cc: 150 },
  30713: { name: "Thunderclap", profession: "engineer", id: 30713, cc: 100 },
  63234: {
    name: "Rocket Fist Prototype",
    profession: "engineer",
    id: 63234,
    cc: 100,
  },
  12638: { name: "Path of Scars", profession: "ranger", id: 12638, cc: 150 },
  12621: { name: "Call of the Wild", profession: "ranger", id: 12621, cc: 200 },
  12523: {
    name: "Counterattack Kick",
    profession: "ranger",
    id: 12523,
    cc: 150,
  },
  12475: { name: "Hilt Bash", profession: "ranger", id: 12475, cc: 300 },
  12511: { name: "Point-Blank Shot", profession: "ranger", id: 12511, cc: 300 },
  12508: { name: "Concussion Shot", profession: "ranger", id: 12508, cc: 400 },
  12561: { name: "Counterstrike", profession: "ranger", id: 12561, cc: 300 },
  63336: { name: "Deft Strike", profession: "ranger", id: 63336, cc: 100 },
  63075: {
    name: "Overbearing Smash",
    profession: "ranger",
    id: 63075,
    cc: 225,
  },
  63330: { name: "Thump", profession: "ranger", id: 63330, cc: 200 },
  13012: { name: "Head Shot", profession: "thief", id: 13012, cc: 200 },
  13031: { name: "Pistol Whip", profession: "thief", id: 13031, cc: 100 },
  13114: { name: "Tactical Strike", profession: "thief", id: 13114, cc: 200 },
  13024: { name: "Choking Gas", profession: "thief", id: 13024, cc: 100 },
  13070: { name: "Tow Line", profession: "thief", id: 13070, cc: 150 },
  30210: { name: "Hook Strike", profession: "thief", id: 30210, cc: 400 },
  50484: {
    name: "Malicious Tactical Strike",
    profession: "thief",
    id: 50484,
    cc: 200,
  },
  69250: {
    name: "Malicious Hook Strike",
    profession: "thief",
    id: 69250,
    cc: 400,
  },
  5690: { name: "Earthquake", profession: "elementalist", id: 5690, cc: 200 },
  5527: {
    name: "Shocking Aura",
    profession: "elementalist",
    id: 5527,
    cc: 100,
  },
  51662: {
    name: "Transmute Lightning",
    profession: "elementalist",
    id: 51662,
    cc: 100,
  },
  5687: { name: "Updraft", profession: "elementalist", id: 5687, cc: 232 },
  5490: { name: "Comet", profession: "elementalist", id: 5490, cc: 200 },
  5562: { name: "Gale", profession: "elementalist", id: 5562, cc: 400 },
  5553: { name: "Gust", profession: "elementalist", id: 5553, cc: 150 },
  5671: { name: "Static Field", profession: "elementalist", id: 5671, cc: 200 },
  5683: {
    name: "Unsteady Ground",
    profession: "elementalist",
    id: 5683,
    cc: 150,
  },
  5648: { name: "Air Bubble", profession: "elementalist", id: 5648, cc: 200 },
  5655: { name: "Electrocute", profession: "elementalist", id: 5655, cc: 100 },
  5650: {
    name: "Lightning Cage",
    profession: "elementalist",
    id: 5650,
    cc: 100,
  },
  5659: { name: "Rock Anchor", profession: "elementalist", id: 5659, cc: 200 },
  30008: { name: "Cyclone", profession: "elementalist", id: 30008, cc: 150 },
  30864: {
    name: "Tidal Surge",
    profession: "elementalist",
    id: 30864,
    cc: 150,
  },
  46140: {
    name: "Katabatic Wind",
    profession: "elementalist",
    id: 46140,
    cc: 150,
  },
  46018: { name: "Mud Slide", profession: "elementalist", id: 46018, cc: 200 },
  40794: {
    name: "Earthen Synergy",
    profession: "elementalist",
    id: 40794,
    cc: 150,
  },
  46295: {
    name: "Gale Strike",
    profession: "elementalist",
    id: 46295,
    cc: 200,
  },
  44998: {
    name: "Polaric Leap",
    profession: "elementalist",
    id: 44998,
    cc: 100,
  },
  42321: {
    name: "Pile Driver",
    profession: "elementalist",
    id: 42321,
    cc: 200,
  },
  46360: {
    name: "Absolute Zero",
    profession: "elementalist",
    id: 46360,
    cc: 100,
  },
  62716: {
    name: "Shock Blast",
    profession: "elementalist",
    id: 62716,
    cc: 150,
  },
  62947: { name: "Wind Storm", profession: "elementalist", id: 62947, cc: 200 },
  10229: { name: "Magic Bullet", profession: "mesmer", id: 10229, cc: 250 },
  10358: { name: "Counter Blade", profession: "mesmer", id: 10358, cc: 200 },
  10363: { name: "Into the Void", profession: "mesmer", id: 10363, cc: 150 },
  10189: { name: "Phantasmal Mage", profession: "mesmer", id: 10189, cc: 100 },
  10220: { name: "Illusionary Wave", profession: "mesmer", id: 10220, cc: 150 },
  10169: { name: "Chaos Storm", profession: "mesmer", id: 10169, cc: 100 },
  10255: { name: "Vortex", profession: "mesmer", id: 10255, cc: 150 },
  10260: {
    name: "Illusion of Drowning",
    profession: "mesmer",
    id: 10260,
    cc: 200,
  },
  30643: { name: "Tides of Time", profession: "mesmer", id: 30643, cc: 100 },
  69389: { name: "Phantom Razor", profession: "mesmer", id: 69389, cc: 100 },
  45230: { name: "Mirage Thrust", profession: "mesmer", id: 45230, cc: 100 },
  39959: { name: "Wave of Panic", profession: "mesmer", id: 39959, cc: 100 },
  10695: {
    name: "Deadly Catch",
    profession: "necromancer",
    id: 10695,
    cc: 150,
  },
  10628: {
    name: "Sinking Tomb",
    profession: "necromancer",
    id: 10628,
    cc: 200,
  },
  29740: {
    name: "Grasping Darkness",
    profession: "necromancer",
    id: 29740,
    cc: 150,
  },
  44296: {
    name: "Oppressive Collapse",
    profession: "necromancer",
    id: 44296,
    cc: 200,
  },
  62511: { name: "Vile Blast", profession: "necromancer", id: 62511, cc: 100 },
  9128: {
    name: "Sanctuary",
    profession: "guardian",
    id: 9128,
    cc: 150,
    maxTicks: 5,
  },
  9093: { name: "Bane Signet", profession: "guardian", id: 9093, cc: 300 },
  9125: { name: "Hammer of Wisdom", profession: "guardian", id: 9125, cc: 200 },
  62549: { name: "Heel Crack", profession: "guardian", id: 62549, cc: 200 },
  62676: {
    name: "Quick Retribution",
    profession: "guardian",
    id: 62676,
    cc: 300,
  },
  27917: {
    name: "Call to Anguish",
    profession: "revenant",
    id: 27917,
    cc: 150,
  },
  41220: {
    name: "Darkrazor's Daring",
    profession: "revenant",
    id: 41220,
    cc: 100,
    maxTicks: 6,
  },
  62878: { name: "Reaver's Rage", profession: "revenant", id: 62878, cc: 150 },
  14405: {
    name: "Banner of Strength",
    profession: "warrior",
    id: 14405,
    cc: 200,
  },
  14516: { name: "Bull's Charge", profession: "warrior", id: 14516, cc: 300 },
  14464: { name: "Kick", profession: "warrior", id: 14464, cc: 150 },
  14388: { name: "Stomp", profession: "warrior", id: 14388, cc: 232 },
  29941: { name: "Wild Blow", profession: "warrior", id: 29941, cc: 300 },
  68128: {
    name: "Detonate Cartridges",
    profession: "warrior",
    id: 68128,
    cc: 232,
  },
  6163: { name: "Deploy Mine", profession: "engineer", id: 6163, cc: 200 },
  6162: { name: "Detonate", profession: "engineer", id: 6162, cc: 200 },
  5811: {
    name: "Personal Battering Ram",
    profession: "engineer",
    id: 5811,
    cc: 232,
  },
  5825: { name: "Slick Shoes", profession: "engineer", id: 5825, cc: 200 },
  6161: { name: "Throw Mine", profession: "engineer", id: 6161, cc: 200 },
  5893: { name: "Electrified Net", profession: "engineer", id: 5893, cc: 200 },
  5913: {
    name: "Explosive Rockets",
    profession: "engineer",
    id: 5913,
    cc: 200,
  },
  5889: { name: "Thump", profession: "engineer", id: 5889, cc: 232 },
  31248: { name: "Blast Gyro", profession: "engineer", id: 31248, cc: 300 },
  63253: { name: "Force Signet", profession: "engineer", id: 63253, cc: 150 },
  12598: { name: "Call Lightning", profession: "ranger", id: 12598, cc: 200 },
  12476: { name: "Spike Trap", profession: "ranger", id: 12476, cc: 232 },
  31401: {
    name: "Glyph of Equality",
    profession: "ranger",
    id: 31401,
    cc: 200,
  },
  29558: {
    name: "Glyph of the Tides",
    profession: "ranger",
    id: 29558,
    cc: 150,
  },
  63157: { name: "Exploding Spores", profession: "ranger", id: 63157, cc: 200 },
  56880: { name: "Pitfall", profession: "thief", id: 56880, cc: 300 },
  13099: { name: "Seal Area", profession: "thief", id: 13099, cc: 150 },
  13020: { name: "Scorpion Wire", profession: "thief", id: 13020, cc: 150 },
  30568: {
    name: "Distracting Daggers",
    profession: "thief",
    id: 30568,
    cc: 100,
  },
  30693: { name: "Palm Strike", profession: "thief", id: 30693, cc: 200 },
  30519: { name: "Reflexive Strike", profession: "thief", id: 30519, cc: 200 },
  41205: { name: "Binding Shadow", profession: "thief", id: 41205, cc: 300 },
  46335: { name: "Shadow Gust", profession: "thief", id: 46335, cc: 382 },
  63230: { name: "Well of Silence", profession: "thief", id: 63230, cc: 200 },
  10206: { name: "Power Lock", profession: "mesmer", id: 10206, cc: 150 },
  10232: {
    name: "Signet of Domination",
    profession: "mesmer",
    id: 10232,
    cc: 300,
  },
  62573: { name: "Psychic Force", profession: "mesmer", id: 62573, cc: 150 },
  10620: {
    name: "Spectral Grasp",
    profession: "necromancer",
    id: 10620,
    cc: 150,
  },
  30273: { name: "Dragon's Maw", profession: "guardian", id: 30273, cc: 150 },
  62561: { name: "Heaven's Palm", profession: "guardian", id: 62561, cc: 400 },
  28406: { name: "Jade Winds", profession: "revenant", id: 28406, cc: 300 },
  27356: {
    name: "Energy Expulsion",
    profession: "revenant",
    id: 27356,
    cc: 300,
  },
  28075: {
    name: "Chaotic Release",
    profession: "revenant",
    id: 28075,
    cc: 232,
  },
  30343: { name: "Head Butt", profession: "warrior", id: 30343, cc: 400 },
  5868: { name: "Supply Crate", profession: "engineer", id: 5868, cc: 400 },
  42009: {
    name: "Prime Light Beam",
    profession: "engineer",
    id: 42009,
    cc: 232,
  },
  13132: { name: "Basilisk Venom", profession: "thief", id: 13132, cc: 150 },
  29516: { name: "Impact Strike", profession: "thief", id: 29516, cc: 200 },
  30077: { name: "Uppercut", profession: "thief", id: 30077, cc: 232 },
  63275: { name: "Shadowfall", profession: "thief", id: 63275, cc: 300 },
  5534: { name: "Tornado", profession: "elementalist", id: 5534, cc: 232 },
  5602: { name: "Whirlpool", profession: "elementalist", id: 5602, cc: 150 },
  25492: {
    name: "Crashing Waves",
    profession: "elementalist",
    id: 25492,
    cc: 150,
  },
  25480: {
    name: "Shocking Bolt",
    profession: "elementalist",
    id: 25480,
    cc: 150,
  },
  44637: {
    name: "Tailored Victory",
    profession: "elementalist",
    id: 44637,
    cc: 250,
  },
  29519: {
    name: "Signet of Humility",
    profession: "mesmer",
    id: 29519,
    cc: 600,
  },
  30359: { name: "Gravity Well", profession: "mesmer", id: 30359, cc: 550 },
  10647: { name: "Charge", profession: "necromancer", id: 10647, cc: 332 },
  30105: {
    name: '"Chilled to the Bone!"',
    profession: "necromancer",
    id: 30105,
    cc: 500,
  },
  33134: {
    name: "Hunter's Verdict",
    profession: "guardian",
    id: 33134,
    cc: 150,
  },
  14387: { name: "Earthshaker", profession: "warrior", id: 14387, cc: 450 },
  14414: { name: "Skull Crack", profession: "warrior", id: 14414, cc: 600 },
  14443: { name: "Whirling Strike", profession: "warrior", id: 14443, cc: 450 },
  29644: { name: "Gun Flame", profession: "warrior", id: 29644, cc: 100 },
  30879: { name: "Rupturing Smash", profession: "warrior", id: 30879, cc: 100 },
  29679: { name: "Skull Grinder", profession: "warrior", id: 29679, cc: 100 },
  31048: { name: "Wild Whirl", profession: "warrior", id: 31048, cc: 150 },
  44165: { name: "Full Counter", profession: "warrior", id: 44165, cc: 100 },
  5813: { name: "Big Ol' Bomb", profession: "engineer", id: 5813, cc: 332 },
  5982: {
    name: "Launch Personal Battering Ram",
    profession: "engineer",
    id: 5982,
    cc: 100,
  },
  21661: { name: "Static Shock", profession: "engineer", id: 21661, cc: 200 },
  12462: { name: "Throw Vine", profession: "engineer", id: 12462, cc: 200 },
  29515: { name: "Toss Elixir X", profession: "engineer", id: 29515, cc: 300 },
  31167: {
    name: "Spare Capacitor",
    profession: "engineer",
    id: 31167,
    cc: 200,
  },
  41843: {
    name: "Prismatic Singularity",
    profession: "engineer",
    id: 41843,
    cc: 150,
  },
  63050: { name: "Crash Down", profession: "engineer", id: 63050, cc: 232 },
  42894: { name: "Brutal Charge", profession: "ranger", id: 42894, cc: 200 },
  46432: { name: "Brutal Charge", profession: "ranger", id: 46432, cc: 300 },
  45743: { name: "Charge", profession: "ranger", id: 45743, cc: 200 },
  66258: { name: "Heavy Shot", profession: "ranger", id: 66258, cc: 200 },
  43375: { name: "Prelude Lash", profession: "ranger", id: 43375, cc: 150 },
  64699: { name: "Slam", profession: "ranger", id: 64699, cc: 232 },
  43068: { name: "Tail Lash", profession: "ranger", id: 43068, cc: 150 },
  41908: { name: "Wing Buffet", profession: "ranger", id: 41908, cc: 232 },
  10287: { name: "Diversion", profession: "mesmer", id: 10287, cc: 100 },
  56873: { name: "Time Sink", profession: "mesmer", id: 56873, cc: 100 },
  62602: {
    name: "Bladesong Dissonance",
    profession: "mesmer",
    id: 62602,
    cc: 100,
  },
};

export const CC_SKILLS_BY_PROFESSION = Object.values(CC_SKILLS).reduce(
  (acc, skill) => {
    if (!skill.profession) {
      return acc;
    }
    if (!acc[skill.profession]) {
      acc[skill.profession] = [];
    }
    acc[skill.profession].push(skill);
    return acc;
  },
  {} as Record<string, CCData[]>
);

// @ts-expect-error not all skills inflict cc
export const CC_CONDITIONS: Record<
  ComponentProps<typeof Condition>["name"],
  CCData
> = {
  Fear: { id: "Fear", cc: 100 },
  Taunt: { id: "Taunt", cc: 75 },
  Immobile: { id: "Immobile", cc: 50 },
  Slow: { id: "Slow", cc: 50 },
  Chilled: { id: "Chilled", cc: 33 },
  Blinded: { id: "Blinded", cc: 20 },
  Weakness: { id: "Weakness", cc: 20 },
  Crippled: { id: "Crippled", cc: 20 },
};

export const getCCEntry = (type: DraggableTypes, gw2id: unknown) => {
  switch (type) {
    case "Skill":
      return CC_SKILLS[gw2id as number];
    case "Condition":
      return CC_CONDITIONS[gw2id as ComponentProps<typeof Condition>["name"]];
  }
};

export const getCCValue = (type: DraggableTypes, gw2id: unknown) => {
  const entry = getCCEntry(type, gw2id);
  return entry?.cc ?? 0;
};
