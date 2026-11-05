// Prototype logic, carried over unchanged from the Claude Design component.
import React from "react";
import Template from "./Template.jsx";

const DCLogic = React.Component;
var PH = {
  alpha: "a",
  alfa: "a",
  bravo: "b",
  charlie: "c",
  delta: "d",
  echo: "e",
  foxtrot: "f",
  golf: "g",
  hotel: "h",
  india: "i",
  juliet: "j",
  juliett: "j",
  kilo: "k",
  lima: "l",
  mike: "m",
  november: "n",
  oscar: "o",
  papa: "p",
  quebec: "q",
  romeo: "r",
  sierra: "s",
  tango: "t",
  uniform: "u",
  victor: "v",
  whiskey: "w",
  whisky: "w",
  xray: "x",
  yankee: "y",
  zulu: "z",
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  niner: "9",
};
var CAMW = {
  thermal: "thermal",
  thermals: "thermal",
  ir: "thermal",
  infrared: "thermal",
  heat: "thermal",
  day: "day",
  daylight: "day",
  tv: "day",
  eo: "day",
  colour: "day",
  color: "day",
  visible: "day",
};
var NEARW = ["closest", "nearest", "near", "around", "beside", "next"];
var STATW = {
  offline: "issues",
  issues: "issues",
  frozen: "issues",
  down: "issues",
  broken: "issues",
  online: "online",
  working: "online",
};
var PLATW = {
  vehicles: "vehicle",
  towers: "mast",
  masts: "mast",
  tripods: "tripod",
  vehicle: "vehicle",
  tower: "mast",
  mast: "mast",
  tripod: "tripod",
  fixed: "fixed",
};
var FILLER = [
  "feed",
  "feeds",
  "from",
  "the",
  "on",
  "location",
  "to",
  "camera",
  "cameras",
  "video",
  "of",
  "at",
  "and",
  "put",
  "up",
  "show",
  "me",
  "please",
  "in",
  "with",
  "for",
  "give",
  "get",
  "i",
  "want",
  "need",
  "can",
  "we",
  "you",
  "what",
  "do",
  "have",
  "right",
  "now",
  "whatever",
  "is",
  "all",
  "every",
  "any",
  "that",
  "this",
  "us",
  "our",
];
var PLATG = {
  Vehicle: "vehicle",
  "Ship mast": "mast",
  "Coastal tower": "mast",
  Mast: "mast",
  Tripod: "tripod",
  "Fixed position": "fixed",
};

var RAW = [
  [
    "hm",
    "Harbor Mast",
    "Harbour One",
    "Harbour",
    "Ship mast",
    4512,
    4788,
    95,
    12,
    "harbour",
  ],
  [
    "ht",
    "Harbour Tower North",
    "Harbour Two",
    "Harbour",
    "Coastal tower",
    4580,
    4835,
    40,
    8,
    "sea",
  ],
  [
    "hp",
    "Harbour Pier",
    "Harbour Three",
    "Harbour",
    "Tripod",
    4471,
    4702,
    130,
    25,
    "harbour",
  ],
  [
    "hb",
    "Harbour Breakwater",
    "Harbour Four",
    "Harbour",
    "Fixed position",
    4625,
    4760,
    70,
    15,
    "sea",
  ],
  [
    "ct",
    "Coastal Tower South",
    "Coast Two",
    "Coast",
    "Coastal tower",
    4890,
    4210,
    180,
    6,
    "coast",
    "online",
    "live",
    "stream timeout 02:41",
    "thermal",
  ],
  [
    "cn1",
    "Coastal Tower North",
    "Coast One",
    "Coast",
    "Coastal tower",
    4950,
    4480,
    120,
    7,
    "coast",
  ],
  [
    "cc",
    "Coastal Tower Cape",
    "Coast Three",
    "Coast",
    "Coastal tower",
    5010,
    3990,
    200,
    6,
    "sea",
  ],
  [
    "lp",
    "Lighthouse Point",
    "Lima Point",
    "Coast",
    "Fixed position",
    5120,
    4320,
    150,
    10,
    "sea",
  ],
  [
    "cb",
    "Cove Beach",
    "Coast Four",
    "Coast",
    "Tripod",
    4810,
    4105,
    230,
    20,
    "coast",
  ],
  [
    "pb1",
    "Patrol Boat One",
    "Papa One",
    "Patrol boats",
    "Ship mast",
    4705,
    4920,
    60,
    14,
    "sea",
  ],
  [
    "pb2",
    "Patrol Boat Two",
    "Papa Two",
    "Patrol boats",
    "Ship mast",
    4890,
    5010,
    20,
    14,
    "sea",
    "offline",
    "02:12",
    "link lost",
  ],
  [
    "a20",
    "Alpha Two Zero",
    "A20",
    "Convoy Alpha",
    "Vehicle",
    4102,
    4415,
    310,
    18,
    "road",
  ],
  [
    "a21",
    "Alpha Two One",
    "A21",
    "Convoy Alpha",
    "Vehicle",
    3988,
    4390,
    285,
    18,
    "road",
  ],
  [
    "a22",
    "Alpha Two Two",
    "A22",
    "Convoy Alpha",
    "Vehicle",
    3895,
    4362,
    270,
    18,
    "forest",
  ],
  [
    "a23",
    "Alpha Two Three",
    "A23",
    "Convoy Alpha",
    "Vehicle",
    3810,
    4330,
    265,
    18,
    "road",
  ],
  [
    "b1",
    "Bravo One",
    "B1",
    "Bravo patrol",
    "Vehicle",
    4340,
    4655,
    200,
    18,
    "ridge",
    "offline",
    "01:58",
    "link lost",
  ],
  [
    "b2",
    "Bravo Two",
    "B2",
    "Bravo patrol",
    "Vehicle",
    4290,
    4590,
    190,
    18,
    "forest",
  ],
  [
    "b3",
    "Bravo Three",
    "B3",
    "Bravo patrol",
    "Vehicle",
    4235,
    4610,
    160,
    18,
    "village",
  ],
  [
    "b4",
    "Bravo Four",
    "B4",
    "Bravo patrol",
    "Vehicle",
    4180,
    4545,
    210,
    18,
    "forest",
  ],
  [
    "c1",
    "Convoy Lead",
    "Charlie One",
    "Convoy Charlie",
    "Vehicle",
    3820,
    4950,
    15,
    18,
    "road",
  ],
  [
    "c2",
    "Convoy Middle",
    "Charlie Two",
    "Convoy Charlie",
    "Vehicle",
    3760,
    4890,
    25,
    18,
    "village",
  ],
  [
    "c3",
    "Convoy Rear",
    "Charlie Three",
    "Convoy Charlie",
    "Vehicle",
    3705,
    4840,
    35,
    18,
    "road",
  ],
  [
    "rp",
    "Ridge Post",
    "Ridge",
    "Ridge",
    "Tripod",
    4378,
    4691,
    170,
    10,
    "ridge",
  ],
  [
    "rn",
    "Ridge North",
    "Ridge Two",
    "Ridge",
    "Tripod",
    4415,
    4760,
    20,
    10,
    "ridge",
  ],
  [
    "rw",
    "Ridge West",
    "Ridge Three",
    "Ridge",
    "Tripod",
    4205,
    4720,
    250,
    12,
    "forest",
  ],
  [
    "ce",
    "Checkpoint East",
    "Echo Gate",
    "Checkpoints",
    "Fixed position",
    4725,
    4540,
    260,
    30,
    "checkpoint",
  ],
  [
    "cw",
    "Checkpoint West",
    "Whiskey Gate",
    "Checkpoints",
    "Fixed position",
    3650,
    4480,
    80,
    30,
    "checkpoint",
  ],
  [
    "cno",
    "Checkpoint North",
    "November Gate",
    "Checkpoints",
    "Fixed position",
    4300,
    5150,
    180,
    30,
    "checkpoint",
  ],
  [
    "cso",
    "Checkpoint South",
    "Sierra Gate",
    "Checkpoints",
    "Fixed position",
    4450,
    3920,
    0,
    30,
    "village",
  ],
  [
    "af1",
    "Airfield Tower",
    "Kilo Tower",
    "Airfield",
    "Mast",
    3550,
    4100,
    90,
    20,
    "airfield",
  ],
  [
    "af2",
    "Airfield Apron",
    "Kilo Apron",
    "Airfield",
    "Fixed position",
    3600,
    4060,
    140,
    35,
    "airfield",
  ],
  [
    "af3",
    "Airfield Perimeter",
    "Kilo Fence",
    "Airfield",
    "Tripod",
    3480,
    4150,
    300,
    15,
    "forest",
    "online",
    "live",
    "stream timeout 03:05",
    "day",
  ],
  [
    "br1",
    "River Bridge East",
    "Bridge One",
    "River bridge",
    "Fixed position",
    4050,
    4200,
    270,
    20,
    "bridge",
  ],
  [
    "br2",
    "River Bridge West",
    "Bridge Two",
    "River bridge",
    "Fixed position",
    3980,
    4205,
    90,
    20,
    "bridge",
    "offline",
    "00:47",
    "power fault",
  ],
  [
    "rb",
    "River Bend",
    "Romeo",
    "River bridge",
    "Tripod",
    4120,
    4050,
    200,
    15,
    "bridge",
  ],
  [
    "vc",
    "Village Church Tower",
    "Victor One",
    "Village",
    "Mast",
    4260,
    4300,
    45,
    14,
    "village",
  ],
  [
    "vm",
    "Village Market",
    "Victor Two",
    "Village",
    "Fixed position",
    4300,
    4260,
    120,
    25,
    "village",
  ],
  [
    "f1",
    "Forest Edge North",
    "Foxtrot One",
    "Forest edge",
    "Tripod",
    3900,
    4700,
    330,
    12,
    "forest",
  ],
  [
    "f2",
    "Forest Edge South",
    "Foxtrot Two",
    "Forest edge",
    "Tripod",
    3880,
    4600,
    200,
    12,
    "forest",
  ],
  [
    "f3",
    "Forest Track",
    "Foxtrot Three",
    "Forest edge",
    "Vehicle",
    3950,
    4650,
    300,
    18,
    "forest",
  ],
];
var SYS = RAW.map(function (a, i) {
  return {
    id: a[0],
    name: a[1],
    cs: a[2],
    site: a[3],
    plat: a[4],
    e: a[5],
    n: a[6],
    hdg: a[7],
    fov: a[8],
    scene: a[9],
    status: a[10] || "online",
    seen: a[11] || "live",
    err: a[12] || "",
    frozen: a[13] || null,
    serial: "HO-SM-000" + (101 + i),
    host: a[1].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    tilt: (a[7] % 5) - 2,
    px: (i * 37) % 100,
    py: 25 + ((i * 53) % 55),
  };
});
SYS[0].serial = "HO-SM-000123";
SYS[0].host = "harbour-mast-2";
// ---------- OSD data (made up, stable per system) ----------
function hashOf(id) {
  var h = 7;
  for (var i = 0; i < id.length; i++) {
    h = (h * 31 + id.charCodeAt(i)) % 100003;
  }
  return h;
}
// Pan travel relative to the mount, by platform.
var PAN_LIMIT = {
  Vehicle: 180,
  "Ship mast": 150,
  "Coastal tower": 120,
  Tripod: 90,
  "Fixed position": 60,
};
// Laser rangefinder fitted (assumption): vehicles, ship masts and coastal towers; not tripods or fixed positions.
var HAS_LRF = { Vehicle: true, "Ship mast": true, "Coastal tower": true };
function osdData(s, cam, now) {
  var h = hashOf(s.id);
  var limit = PAN_LIMIT[s.plat] || 120;
  var rel = ((h % 61) - 30) * (limit < 90 ? 0.6 : 1) + ((h % 7) - 3) / 4;
  var mount = (((s.hdg - rel) % 360) + 360) % 360;
  var tilt = s.tilt + ((h % 9) - 4) / 8;
  var fov = cam === "day" ? s.fov : Math.max(4, s.fov * 0.8);
  var e10 = s.e * 10 + (h % 10),
    n10 = s.n * 10 + ((h >> 3) % 10);
  var range = 300 + ((h * 37) % 1400) + (h % 10) / 10;
  var rad = (s.hdg * Math.PI) / 180;
  var te = Math.round(e10 + range * Math.sin(rad)),
    tn = Math.round(n10 + range * Math.cos(rad));
  var alt = 20 + (h % 90) + (h % 10) / 10;
  var t = now instanceof Date ? now : new Date(now);
  var iso = t.toISOString();
  return {
    sensor: cam === "day" ? "EO" : "IR",
    fov: fov,
    digital: fov < 6,
    focus: fov <= 15 ? "INF" : Math.round(200 + (h % 800)) + " m",
    stab: s.plat === "Vehicle" || s.plat === "Ship mast" ? "ON" : "OFF",
    spd: 1 + (h % 4) * 0.5,
    hdg: s.hdg,
    mils: Math.round((s.hdg * 6400) / 360),
    mount: mount,
    rel: rel,
    panLimit: limit,
    tilt: tilt,
    tiltMin: s.plat === "Vehicle" ? -20 : -30,
    tiltMax: s.plat === "Fixed position" ? 20 : 45,
    posSrc: s.plat === "Vehicle" ? "INS" : "SURV",
    home: "35J PJ " + e10 + " " + n10,
    alt: alt,
    cpu: 41 + (h % 120) / 10,
    gpu: 39 + (h % 90) / 10,
    sply: 24 + (h % 70) / 10,
    hot: false,
    tgt: !HAS_LRF[s.plat]
      ? null
      : {
          range: range,
          grid: "35J PJ " + te + " " + tn,
          alt: alt - 3 + (h % 6),
          altAcc: 1.5 + (h % 8) / 10,
          acc: 1.5 + (h % 6) / 10,
          reset: 60 - ((Math.floor(t.getTime() / 1000) + h) % 60),
        },
    format: "MGRS",
    time: iso.slice(0, 10) + " " + iso.slice(11, 19) + "Z",
  };
}

var BYID = {};
SYS.forEach(function (s) {
  BYID[s.id] = s;
});

function gen(n) {
  var u = 12 / n,
    out = [];
  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) {
      out.push([c * u, r * u, u, u]);
    }
  }
  return out;
}
var PRESETS = {
  "1+5": [
    [0, 0, 8, 8],
    [8, 0, 4, 4],
    [8, 4, 4, 4],
    [0, 8, 4, 4],
    [4, 8, 4, 4],
    [8, 8, 4, 4],
  ],
  "1+7": [
    [0, 0, 9, 9],
    [9, 0, 3, 3],
    [9, 3, 3, 3],
    [9, 6, 3, 3],
    [0, 9, 3, 3],
    [3, 9, 3, 3],
    [6, 9, 3, 3],
    [9, 9, 3, 3],
  ],
  "2x2": gen(2),
  "3x3": gen(3),
  "4x4": gen(4),
};
var PRESET_ORDER = ["1+5", "1+7", "2x2", "3x3", "4x4"];
var PRESET_LABEL = {
  "1+5": "1 + 5",
  "1+7": "1 + 7",
  "2x2": "2 × 2",
  "3x3": "3 × 3",
  "4x4": "4 × 4",
};
var FOCUS_PRESETS = { "1+5": true, "1+7": true };
function insetOk(g) {
  return !!g && g[2] >= 4 && g[3] >= 4;
}
function insetsOf(d) {
  return PRESETS[d.preset].map(function (g, i) {
    return !!(d.insets && d.insets[i]) && insetOk(g);
  });
}

function clone(x) {
  return JSON.parse(JSON.stringify(x));
}
function pad2(n) {
  return (n < 10 ? "0" : "") + n;
}
function pad3(n) {
  return ("00" + n).slice(-3);
}
function hhmm(d) {
  return pad2(d.getUTCHours()) + ":" + pad2(d.getUTCMinutes());
}
function camLabel(c) {
  return c === "day" ? "Daylight" : "Thermal";
}
function camShort(c) {
  return c === "day" ? "DAY" : "THERMAL";
}
function fState(s, c) {
  if (s.status === "offline") {
    return "offline";
  }
  if (s.frozen === c) {
    return "frozen";
  }
  return "live";
}
function sysDist(a, b) {
  var dx = (a.e - b.e) * 10,
    dy = (a.n - b.n) * 10;
  return Math.sqrt(dx * dx + dy * dy);
}
function fmtDist(m) {
  return m < 1000
    ? Math.round(m / 10) * 10 + " m"
    : (m / 1000).toFixed(1) + " km";
}
function frozenAt(s) {
  var m = (s.err || "").match(/\d\d:\d\d/);
  return m ? m[0] : "—";
}
function sceneCls(s, c) {
  return "scn-" + s.scene + "-" + (c === "day" ? "d" : "t");
}
function statusRank(s) {
  if (s.status === "offline") {
    return 2;
  }
  if (s.frozen) {
    return 1;
  }
  return 0;
}
function norm(str) {
  return String(str)
    .toLowerCase()
    .split(/[\s\-_\/.]+/)
    .map(function (w) {
      return PH[w] !== undefined ? PH[w] : w;
    })
    .join("")
    .replace(/[^a-z0-9]/g, "")
    .replace(/harbor/g, "harbour");
}
// Literal form: letters and digits only, no phonetic folding ("Charlie One" → "charlieone").
function lit(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/harbor/g, "harbour");
}
function fieldsOf(s) {
  if (!s._f) {
    s._f = [norm, lit].map(function (f) {
      return {
        cs: f(s.cs),
        nm: f(s.name),
        h: f(s.host),
        se: f(s.serial),
        pl: f(s.plat),
        si: f(s.site),
      };
    });
  }
  return s._f;
}
function scoreOne(F, q) {
  if (!q) {
    return 0;
  }
  if (F.cs === q || F.nm === q) {
    return 100;
  }
  if (F.cs.indexOf(q) === 0 || F.nm.indexOf(q) === 0) {
    return 85;
  }
  if (F.nm.indexOf(q) >= 0 || F.cs.indexOf(q) >= 0) {
    return 70;
  }
  if (F.si.indexOf(q) >= 0) {
    return 60;
  }
  if (F.h.indexOf(q) >= 0) {
    return 50;
  }
  if (F.se.indexOf(q) >= 0) {
    return 45;
  }
  if (F.pl.indexOf(q) >= 0) {
    return 30;
  }
  return 0;
}
// Match both ways: what was typed literally (“char…”) and its phonetic reading (“charlie one” → c1).
function score(s, qn, ql) {
  var F = fieldsOf(s);
  return Math.max(
    scoreOne(F[0], qn),
    scoreOne(F[1], ql != null ? ql : qn),
    scoreOne(F[1], qn),
  );
}
function parseQuery(raw) {
  var words = String(raw)
    .trim()
    .toLowerCase()
    .replace(/[“”"'’,.?!:;]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  var cam = null,
    target = null,
    big = false,
    gridWord = false,
    near = false,
    keep = [],
    fStatus = null,
    fWall = null,
    fPlat = null,
    platWord = null;
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    if (CAMW[w]) {
      cam = CAMW[w];
      continue;
    }
    if (w === "tile" && words[i + 1] && /^\d{1,2}$/.test(words[i + 1])) {
      target = Number(words[i + 1]) - 1;
      i++;
      continue;
    }
    if (w === "tile") {
      continue;
    }
    if (w === "big" || w === "focus" || w === "main") {
      target = 0;
      big = true;
      continue;
    }
    if (w === "grid") {
      gridWord = true;
      continue;
    }
    if (NEARW.indexOf(w) >= 0) {
      near = true;
      continue;
    }
    if (STATW[w]) {
      fStatus = STATW[w];
      continue;
    }
    if (w === "not" && words[i + 1] === "on" && words[i + 2] === "wall") {
      fWall = "off";
      i += 2;
      continue;
    }
    if (w === "wall") {
      fWall = "on";
      continue;
    }
    if (PLATW[w]) {
      platWord = { w: w, v: PLATW[w], plural: /s$/.test(w) };
      keep.push(w);
      continue;
    }
    if (FILLER.indexOf(w) >= 0) {
      continue;
    }
    keep.push(w);
  }
  if (platWord && (platWord.plural || keep.length === 1)) {
    fPlat = platWord.v;
    keep = keep.filter(function (k) {
      return k !== platWord.w;
    });
  }
  var rest = keep.join(" ");
  var grid = null;
  var m = rest
    .toUpperCase()
    .match(
      /^(?:(\d{1,2}[C-HJ-NP-X])\s?)?(?:([A-HJ-NP-Z]{2})\s?)?(\d[\d ]*\d)$/,
    );
  if (m) {
    var digits = m[3].replace(/ /g, "");
    if (
      digits.length % 2 === 0 &&
      digits.length >= 2 &&
      digits.length <= 10 &&
      (m[1] || m[2] || gridWord || /\d \d/.test(m[3]))
    ) {
      var half = digits.length / 2,
        prec = Math.pow(10, 5 - half);
      var E = parseInt(digits.slice(0, half), 10) * prec,
        N = parseInt(digits.slice(half), 10) * prec;
      grid = {
        zone: m[1] || "35J",
        sq: m[2] || "PJ",
        filled: !m[1] || !m[2],
        e: digits.slice(0, half),
        n: digits.slice(half),
        prec: prec,
        E: E,
        N: N,
        cx: E + prec / 2,
        cy: N + prec / 2,
      };
    }
  }
  return {
    cam: cam,
    target: target,
    big: big,
    rest: rest,
    qn: norm(rest),
    ql: lit(rest),
    grid: grid,
    near: near,
    fStatus: fStatus,
    fWall: fWall,
    fPlat: fPlat,
  };
}
function tileState(t) {
  if (!t) {
    return "empty";
  }
  var st = fState(BYID[t.s], t.c);
  if (st !== "live") {
    return st;
  }
  return t.rec ? "rec" : "live";
}
function wallMaps(d) {
  var feed = {},
    sys = {};
  d.tiles.forEach(function (t, i) {
    if (!t) {
      return;
    }
    var k = t.s + ":" + t.c;
    (feed[k] = feed[k] || []).push(i);
    (sys[t.s] = sys[t.s] || []).push(i);
  });
  return { feed: feed, sys: sys };
}
function fillSuggestions(ref, d) {
  var r = BYID[ref.s],
    maps = wallMaps(d);
  return SYS.filter(function (x) {
    return fState(x, ref.c) === "live" && !maps.sys[x.id];
  })
    .map(function (x) {
      return { x: x, d: sysDist(r, x) };
    })
    .sort(function (a, b) {
      return a.d - b.d;
    })
    .slice(0, 3)
    .map(function (o) {
      return { sid: o.x.id, c: ref.c, text: o.x.cs, meta: fmtDist(o.d) };
    });
}
function suggestions(t, d) {
  var s = BYID[t.s],
    out = [],
    other = t.c === "day" ? "thermal" : "day",
    maps = wallMaps(d);
  if (fState(s, other) === "live" && !maps.feed[s.id + ":" + other]) {
    out.push({
      sid: s.id,
      c: other,
      text: s.cs + " · " + camLabel(other).toLowerCase(),
      meta: "same system",
    });
  }
  SYS.filter(function (x) {
    return x.id !== s.id && fState(x, t.c) === "live" && !maps.sys[x.id];
  })
    .map(function (x) {
      return { x: x, d: sysDist(s, x) };
    })
    .sort(function (a, b) {
      return a.d - b.d;
    })
    .slice(0, 2)
    .forEach(function (o) {
      out.push({
        sid: o.x.id,
        c: t.c,
        text: o.x.cs + " · " + camLabel(t.c).toLowerCase(),
        meta: fmtDist(o.d) + " away",
      });
    });
  return out;
}

function hhmmss(dt) {
  var x = new Date(dt);
  return [x.getUTCHours(), x.getUTCMinutes(), x.getUTCSeconds()]
    .map(function (n) {
      return (n < 10 ? "0" : "") + n;
    })
    .join(":");
}
function mmss(sec) {
  sec = Math.max(0, Math.round(sec));
  var m = Math.floor(sec / 60),
    r = sec % 60;
  return m + ":" + (r < 10 ? "0" : "") + r;
}
function viewCams(v) {
  var c = v.replace("+", "");
  return v.indexOf("+") > 0 ? [c, c === "day" ? "thermal" : "day"] : [c];
}
function pbKey(t) {
  return t && t.recAt ? String(t.recAt) : "";
}
// ---------- desk keyboard model ----------
var SECS = ["find", "mirror", "sel", "log", "arr", "saved"];
function focusables(box) {
  if (!box) return [];
  return Array.prototype.filter.call(
    box.querySelectorAll("button, input, select, textarea"),
    function (el) {
      return (
        !el.disabled &&
        el.offsetParent !== null &&
        !el.closest('[role="dialog"]')
      );
    },
  );
}
// Next element in a direction by on-screen position: the nearest row (or column) first, then the closest item in it.
function spatialNext(items, from, dir) {
  var a = from.getBoundingClientRect(),
    ax = a.left + a.width / 2,
    ay = a.top + a.height / 2,
    cands = [];
  items.forEach(function (el) {
    if (el === from) return;
    var b = el.getBoundingClientRect(),
      gap,
      side;
    if (dir === "ArrowRight") {
      gap = b.left - a.right;
      side = Math.abs(b.top + b.height / 2 - ay);
    } else if (dir === "ArrowLeft") {
      gap = a.left - b.right;
      side = Math.abs(b.top + b.height / 2 - ay);
    } else if (dir === "ArrowDown") {
      gap = b.top - a.bottom;
      side = Math.abs(b.left + b.width / 2 - ax);
    } else {
      gap = a.top - b.bottom;
      side = Math.abs(b.left + b.width / 2 - ax);
    }
    if (gap < -2) return;
    // sideways moves stay on roughly the same line
    if (
      (dir === "ArrowRight" || dir === "ArrowLeft") &&
      side > Math.max(a.height, b.height)
    )
      return;
    cands.push({ el: el, gap: gap, side: side });
  });
  if (!cands.length) return null;
  var nearest = Math.min.apply(
    null,
    cands.map(function (c) {
      return c.gap;
    }),
  );
  var row = cands.filter(function (c) {
    return c.gap <= nearest + 8;
  });
  row.sort(function (x, y) {
    return x.side - y.side;
  });
  return row[0].el;
}

function isMac() {
  try {
    var n = typeof navigator !== "undefined" ? navigator : null;
    return (
      !!n &&
      /Mac|iPhone|iPad|iPod/i.test(
        (n.userAgentData && n.userAgentData.platform) ||
          n.platform ||
          n.userAgent ||
          "",
      )
    );
  } catch (err) {
    return false;
  }
}
// Labels follow the operator's OS: Mac has Option (⌥) and Command (⌘), not Alt and Ctrl.
function keyLabels() {
  var mac = isMac();
  return mac
    ? { mac: true, alt: "⌥", altC: "⌥C", altW: "⌥W", undo: "⌘Z", redo: "⇧⌘Z" }
    : {
        mac: false,
        alt: "Alt+",
        altC: "Alt+C",
        altW: "Alt+W",
        undo: "Ctrl+Z",
        redo: "Ctrl+Y",
      };
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = this.initial();
  }
  initial() {
    function T(s, c, osd) {
      return { s: s, c: c, osd: !!osd, rec: null, pip: false, osdSize: 1 };
    }
    var saved = {
      "Night harbour": {
        name: "Night harbour",
        preset: "1+5",
        insets: [true, false, false, false, false, false],
        tiles: [
          T("hm", "thermal", true),
          T("ht", "thermal"),
          T("hp", "thermal"),
          T("ct", "thermal"),
          T("rp", "day"),
          T("hb", "day"),
        ],
      },
      Convoy: {
        name: "Convoy",
        preset: "1+7",
        insets: [false, false, false, false, false, false, false, false],
        tiles: [
          T("c1", "day"),
          T("a20", "thermal"),
          T("a21", "thermal"),
          T("a22", "thermal"),
          T("a23", "day"),
          T("ce", "day"),
          T("cw", "day"),
          T("f3", "day"),
        ],
      },
      Overview: {
        name: "Overview",
        preset: "3x3",
        insets: [false, false, false, false, false, false, false, false, false],
        tiles: [
          T("hm", "day"),
          T("ce", "day"),
          T("a20", "day"),
          T("rp", "day"),
          T("af1", "day"),
          T("br1", "day"),
          T("vc", "day"),
          T("cn1", "day"),
          T("cno", "day"),
        ],
      },
    };
    var start = clone(saved["Night harbour"]);
    return {
      q: "",
      hl: 0,
      camSel: null,
      pend: null,
      sel: 0,
      swapFrom: null,
      staging: false,
      saved: saved,
      live: clone(start),
      draft: clone(start),
      nameInput: "Night harbour",
      hist: [],
      fut: [],
      logPin: null,
      logHover: null,
      moreFilters: false,
      lastChip: null,
      view: "desk",
      pb: {},
      botTab: "log",
      short: false,
      kbd: false,
      sec: "find",
      log: [
        {
          t: "start",
          text: "Night harbour recalled at shift start",
          snap: clone(start),
        },
      ],
      now: new Date(),
      fStatus: null,
      fWall: null,
      fPlat: null,
      sort: "best",
      group: false,
      recent: {},
      open: null,
      help: false,
      pickTarget: false,
      camWarn: null,
    };
  }
  componentDidMount() {
    var self = this;
    this.timer = setInterval(function () {
      if (self.props.screen === "wall") {
        self.setState({ now: new Date() });
        return;
      }
      var pb = self.state.pb,
        any = false,
        next = {},
        now = Date.now();
      Object.keys(pb).forEach(function (k) {
        var e = pb[k],
          max = (now - Number(k)) / 1000;
        if (e.playing) {
          any = true;
          var pos = Math.min(max, e.pos + e.speed);
          next[k] = { pos: pos, speed: e.speed, playing: pos < max };
        } else {
          next[k] = e;
        }
      });
      if (any) {
        self.setState({ pb: next, now: new Date() });
      } else if (now - self.state.now.getTime() > 20000) {
        self.setState({ now: new Date() });
      }
    }, 1000);
    // Clicking plain text leaves focus on <body>, outside this component, so its own onKeyDown never fires.
    // Catch those keys at document level, but only for the board the operator last touched (A and B share a page).
    this._uid = "hevi" + Math.random().toString(36).slice(2);
    if (typeof window !== "undefined" && !window.__heviActive) {
      window.__heviActive = this._uid;
    }
    this._docKey = function (e) {
      var t = e.target,
        tag = t && t.tagName;
      if (tag !== "BODY" && tag !== "HTML" && t !== document) {
        return;
      }
      if (window.__heviActive !== self._uid) {
        return;
      }
      self.onDeskKey(e);
    };
    if (typeof document !== "undefined") {
      document.addEventListener("keydown", this._docKey);
    }
    // Short screens: the three bottom boxes become tabs.
    this._onResize = function () {
      var sh = window.innerHeight < 760;
      if (sh !== self.state.short) {
        self.setState({ short: sh });
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this._onResize);
      this._onResize();
    }
    // Desk and wall can run in separate tabs: the desk publishes what is live, the wall tab follows it.
    this._chan =
      typeof BroadcastChannel !== "undefined"
        ? new BroadcastChannel("hevi-wall")
        : null;
    if (this.props.screen === "wall") {
      var follow = function (m) {
        if (m && m.live) {
          self.setState({ live: m.live, pb: m.pb || {} });
        }
      };
      try {
        follow(JSON.parse(window.localStorage.getItem("hevi-wall") || "null"));
      } catch (err) {}
      if (this._chan) {
        this._chan.onmessage = function (ev) {
          follow(ev.data);
        };
      }
      this._onStorage = function (ev) {
        if (ev.key === "hevi-wall") {
          try {
            follow(JSON.parse(ev.newValue));
          } catch (err) {}
        }
      };
      window.addEventListener("storage", this._onStorage);
      this.setState({ view: "wall" });
    } else {
      this.publishWall();
      // Keyboard-first: the desk opens with the cursor in the search field.
      setTimeout(function () {
        var q = document.getElementById("feed-search");
        if (q) q.focus({ preventScroll: true });
      }, 0);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.screen !== "wall" &&
      (prevState.hl !== this.state.hl || prevState.open !== this.state.open)
    ) {
      var el = this.rowEl(
        Math.min(this.state.hl, Math.max((this._rows || []).length - 1, 0)),
      );
      if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
    }
    if (
      this.props.screen !== "wall" &&
      (prevState.live !== this.state.live || prevState.pb !== this.state.pb)
    ) {
      this.publishWall();
    }
  }
  publishWall() {
    var m = { live: this.state.live, pb: this.state.pb };
    try {
      window.localStorage.setItem("hevi-wall", JSON.stringify(m));
    } catch (err) {}
    if (this._chan) {
      this._chan.postMessage(m);
    }
  }
  componentWillUnmount() {
    if (this._chan) {
      this._chan.close();
    }
    if (this._onStorage) {
      window.removeEventListener("storage", this._onStorage);
    }
    clearInterval(this.timer);
    if (typeof document !== "undefined" && this._docKey) {
      document.removeEventListener("keydown", this._docKey);
    }
    if (typeof window !== "undefined" && this._onResize) {
      window.removeEventListener("resize", this._onResize);
    }
  }

  logEntry(text, snap) {
    return { t: hhmm(new Date()), text: text, snap: clone(snap) };
  }
  apply(fn, msg, extra) {
    var st = this.state;
    var d = fn(clone(st.draft));
    var next = Object.assign({ draft: d, pend: null }, extra || {});
    // Nothing changed on the wall: no undo step, no Recent changes entry.
    if (JSON.stringify(d) === JSON.stringify(st.draft)) {
      delete next.draft;
      this.setState(next);
      return;
    }
    if (!st.staging) {
      next.live = clone(d);
    }
    next.hist = st.hist
      .concat([{ snap: clone(st.draft), text: msg || "change" }])
      .slice(-30);
    next.fut = [];
    if (msg) {
      next.log = [this.logEntry(msg + (st.staging ? " · staged" : ""), d)]
        .concat(st.log)
        .slice(0, 8);
    }
    this.setState(next);
  }
  send(sid, c, ti, force) {
    var st = this.state,
      s = BYID[sid];
    if (ti >= PRESETS[st.draft.preset].length) {
      return;
    }
    if (!force) {
      if (fState(s, c) === "offline") {
        this.setState({ pend: { kind: "offline", sid: sid, c: c, ti: ti } });
        return;
      }
      var from = -1;
      st.draft.tiles.forEach(function (t, k) {
        if (t && t.s === sid && t.c === c && k !== ti) {
          from = k;
        }
      });
      if (from >= 0) {
        this.setState({
          pend: { kind: "dup", sid: sid, c: c, ti: ti, from: from },
        });
        return;
      }
    }
    var recent = Object.assign({}, st.recent);
    recent[sid] = Date.now();
    this.apply(
      function (dd) {
        var prev = dd.tiles[ti];
        dd.tiles[ti] = {
          s: sid,
          c: c,
          osd: prev ? prev.osd : false,
          rec: null,
          pip: false,
          osdSize: prev && prev.osdSize != null ? prev.osdSize : 1,
        };
        return dd;
      },
      "Tile " + (ti + 1) + " ← " + s.cs + " " + camLabel(c).toLowerCase(),
      { sel: ti, recent: recent, camWarn: null },
    );
  }
  moveDup() {
    var p = this.state.pend;
    if (!p || p.kind !== "dup") {
      return;
    }
    var s = BYID[p.sid];
    var recent = Object.assign({}, this.state.recent);
    recent[p.sid] = Date.now();
    this.apply(
      function (dd) {
        var moved = dd.tiles[p.from];
        dd.tiles[p.ti] = {
          s: p.sid,
          c: p.c,
          osd: moved ? moved.osd : false,
          rec: null,
          pip: false,
          osdSize: moved && moved.osdSize != null ? moved.osdSize : 1,
        };
        dd.tiles[p.from] = null;
        return dd;
      },
      "Moved " +
        s.cs +
        " " +
        camLabel(p.c).toLowerCase() +
        " from tile " +
        (p.from + 1) +
        " to tile " +
        (p.ti + 1),
      { sel: p.ti, recent: recent },
    );
  }
  undo() {
    var st = this.state;
    if (!st.hist.length) {
      return;
    }
    var last = st.hist[st.hist.length - 1];
    var next = {
      draft: clone(last.snap),
      hist: st.hist.slice(0, -1),
      fut: st.fut
        .concat([{ snap: clone(st.draft), text: last.text }])
        .slice(-30),
      pend: null,
      swapFrom: null,
      logPin: null,
    };
    if (!st.staging) {
      next.live = clone(last.snap);
    }
    next.log = [this.logEntry("Undid: " + last.text, last.snap)]
      .concat(st.log)
      .slice(0, 8);
    this.setState(next);
  }
  redo() {
    var st = this.state;
    if (!st.fut.length) {
      return;
    }
    var nx = st.fut[st.fut.length - 1];
    var next = {
      draft: clone(nx.snap),
      fut: st.fut.slice(0, -1),
      hist: st.hist
        .concat([{ snap: clone(st.draft), text: nx.text }])
        .slice(-30),
      pend: null,
      swapFrom: null,
      logPin: null,
    };
    if (!st.staging) {
      next.live = clone(nx.snap);
    }
    next.log = [this.logEntry("Redid: " + nx.text, nx.snap)]
      .concat(st.log)
      .slice(0, 8);
    this.setState(next);
  }
  restore(k) {
    var e = this.state.log[k];
    if (!e) {
      return;
    }
    this.apply(
      function () {
        return clone(e.snap);
      },
      "Restored to “" + e.text + "”",
      { logPin: null, logHover: null, sel: 0, swapFrom: null },
    );
  }
  switchView(sel, view, force) {
    var d0 = this.state.draft,
      t = d0.tiles[sel];
    if (!t) {
      return;
    }
    var c = view.replace("+", ""),
      pip = view.indexOf("+") > 0 && insetOk(PRESETS[d0.preset][sel]),
      s = BYID[t.s],
      other = c === "day" ? "thermal" : "day";
    if (t.c === c && insetsOf(d0)[sel] === pip) {
      this.setState({ camWarn: null });
      return;
    }
    if (
      !force &&
      (fState(s, c) !== "live" || (pip && fState(s, other) !== "live"))
    ) {
      this.setState({ camWarn: { sel: sel, view: view } });
      return;
    }
    var label = {
      day: "day",
      thermal: "thermal",
      "day+": "day + thermal inset",
      "thermal+": "thermal + day inset",
    }[c + (pip ? "+" : "")];
    this.apply(
      function (dd) {
        dd.tiles[sel].c = c;
        dd.insets = insetsOf(dd);
        dd.insets[sel] = pip;
        return dd;
      },
      "Tile " + (sel + 1) + " view: " + s.cs + " " + label,
      { camWarn: null },
    );
  }
  osdSet(sel, lvl) {
    var t = this.state.draft.tiles[sel];
    if (!t || (t.osdSize != null ? t.osdSize : 1) === lvl) {
      return;
    }
    this.apply(
      function (dd) {
        dd.tiles[sel].osdSize = lvl;
        return dd;
      },
      "Tile " + (sel + 1) + " OSD text " + ["S", "M", "L", "XL"][lvl],
    );
  }
  osdStep(sel, delta) {
    var t = this.state.draft.tiles[sel];
    if (!t) {
      return;
    }
    var lvl = Math.max(
      0,
      Math.min(3, (t.osdSize != null ? t.osdSize : 1) + delta),
    );
    this.apply(
      function (dd) {
        dd.tiles[sel].osdSize = lvl;
        return dd;
      },
      "Tile " + (sel + 1) + " OSD text " + ["S", "M", "L", "XL"][lvl],
    );
  }

  renderVals() {
    var self = this,
      st = this.state,
      d = st.draft,
      L = st.live;
    var scale = this.props.labelScale != null ? this.props.labelScale : 1;
    var geomD = PRESETS[d.preset],
      geomL = PRESETS[L.preset];
    var P = parseQuery(st.q);
    var hasFocus = !!FOCUS_PRESETS[d.preset],
      bigMiss = P.big && !hasFocus;
    var target =
      P.target != null && P.target < geomD.length && !bigMiss
        ? P.target
        : Math.min(st.sel, geomD.length - 1);
    this._target = target;
    var maps = wallMaps(d);
    var onWallCount = Object.keys(maps.sys).length;

    // ---------- reference point for distance ----------
    var ref = null,
      refLabel = "",
      nearMode = false,
      gridBad = false;
    if (P.grid) {
      if (P.grid.zone === "35J" && P.grid.sq === "PJ") {
        ref = { e: P.grid.cx / 10, n: P.grid.cy / 10 };
        refLabel = "grid " + P.grid.e + " " + P.grid.n;
      } else {
        gridBad = true;
      }
    } else if (P.near && P.qn) {
      var best = SYS.map(function (s) {
        return { s: s, sc: score(s, P.qn, P.ql) };
      })
        .filter(function (o) {
          return o.sc > 0;
        })
        .sort(function (a, b) {
          return b.sc - a.sc;
        })[0];
      if (best) {
        ref = best.s;
        refLabel = best.s.cs;
        nearMode = true;
      }
    }
    if (!ref && st.sort === "near") {
      var tt = d.tiles[target];
      if (tt) {
        ref = BYID[tt.s];
        refLabel = "tile " + (target + 1) + " · " + ref.cs;
      }
    }

    // ---------- candidates ----------
    var list;
    if (gridBad) {
      list = [];
    } else if (P.grid || nearMode) {
      list = SYS.map(function (s) {
        return { s: s, sc: 1 };
      });
    } else if (P.qn) {
      list = SYS.map(function (s) {
        return { s: s, sc: score(s, P.qn, P.ql) };
      }).filter(function (o) {
        return o.sc > 0;
      });
    } else {
      list = SYS.map(function (s) {
        return { s: s, sc: 1 };
      });
    }
    list.forEach(function (o) {
      o.dist = ref ? sysDist(o.s, ref) : null;
    });

    var fStatus = st.fStatus || P.fStatus,
      fWall = st.fWall || P.fWall,
      fPlat = st.fPlat || P.fPlat;
    list = list.filter(function (o) {
      var s = o.s;
      if (fStatus === "online" && statusRank(s) !== 0) {
        return false;
      }
      if (fStatus === "issues" && statusRank(s) === 0) {
        return false;
      }
      if (fWall === "on" && !maps.sys[s.id]) {
        return false;
      }
      if (fWall === "off" && maps.sys[s.id]) {
        return false;
      }
      if (fPlat && PLATG[s.plat] !== fPlat) {
        return false;
      }
      return true;
    });

    var sortMode = st.sort;
    var byCs = function (a, b) {
      return a.s.cs.localeCompare(b.s.cs);
    };
    var byDist = function (a, b) {
      return a.dist == null || b.dist == null ? byCs(a, b) : a.dist - b.dist;
    };
    if (sortMode === "best") {
      if (ref && (P.grid || nearMode)) {
        list.sort(byDist);
      } else if (P.qn) {
        list.sort(function (a, b) {
          return b.sc - a.sc || byCs(a, b);
        });
      } else {
        list.sort(byCs);
      }
    } else if (sortMode === "az") {
      list.sort(byCs);
    } else if (sortMode === "near") {
      list.sort(byDist);
    } else if (sortMode === "status") {
      list.sort(function (a, b) {
        return statusRank(a.s) - statusRank(b.s) || byCs(a, b);
      });
    } else if (sortMode === "recent") {
      list.sort(function (a, b) {
        return (
          (st.recent[b.s.id] || 0) - (st.recent[a.s.id] || 0) || byCs(a, b)
        );
      });
    }

    // Dead tile selected and nothing typed: its replacements go first, nearest first.
    var tgtT = d.tiles[target],
      tgtTs = tileState(tgtT),
      tgtDead = tgtTs === "frozen" || tgtTs === "offline";
    var tgtEmpty = !tgtT,
      fillRef = null;
    if (tgtEmpty) {
      for (var fi = 0; fi < d.tiles.length; fi++) {
        if (d.tiles[fi]) {
          fillRef = d.tiles[fi];
          break;
        }
      }
    }
    var topSug = st.q.trim()
        ? []
        : tgtDead
          ? suggestions(tgtT, d)
          : tgtEmpty && fillRef
            ? fillSuggestions(fillRef, d)
            : [],
      topCam = {},
      topMeta = {};
    topSug.forEach(function (g) {
      if (topCam[g.sid] == null) {
        topCam[g.sid] = g.c;
        topMeta[g.sid] = g.meta;
      }
    });
    var topList = Object.keys(topCam).map(function (sid) {
      return { s: BYID[sid], sc: 1, dist: null, top: true };
    });
    if (topList.length) {
      list = list.filter(function (o) {
        return topCam[o.s.id] == null;
      });
    }
    var ordered = list;
    var groupsOrder = [],
      groupsMap = {};
    if (st.group) {
      list.forEach(function (o) {
        if (!groupsMap[o.s.site]) {
          groupsMap[o.s.site] = [];
          groupsOrder.push(o.s.site);
        }
        groupsMap[o.s.site].push(o);
      });
      ordered = [];
      groupsOrder.forEach(function (g) {
        ordered = ordered.concat(groupsMap[g]);
      });
    }
    ordered = topList.concat(ordered);

    // ---------- interpretation ----------
    var parts = [];
    if (P.grid) {
      var sizeTxt =
        P.grid.prec >= 1000 ? P.grid.prec / 1000 + " km" : P.grid.prec + " m";
      parts.push(
        "Grid " +
          P.grid.zone +
          " " +
          P.grid.sq +
          " " +
          P.grid.e +
          " " +
          P.grid.n +
          " · " +
          sizeTxt +
          (gridBad ? " · no systems there" : " · nearest first"),
      );
    } else if (nearMode) {
      parts.push("Nearest " + refLabel);
    }
    if (P.cam) {
      parts.push(P.cam === "day" ? "DAY" : "THR");
    }
    if (bigMiss) {
      parts.push("no focus tile · → tile " + (target + 1));
    } else if (P.target != null) {
      parts.push("→ tile " + (P.target + 1));
    }
    var typed = [];
    if (P.fStatus) {
      typed.push(P.fStatus === "online" ? "online only" : "issues only");
    }
    if (P.fWall) {
      typed.push(P.fWall === "on" ? "on the wall" : "not on the wall");
    }
    if (P.fPlat) {
      typed.push(
        {
          vehicle: "vehicles",
          mast: "masts and towers",
          tripod: "tripods",
          fixed: "fixed positions",
        }[P.fPlat],
      );
    }
    if (typed.length) {
      parts.push(typed.join(" · "));
    }
    var interp = parts.join(" · ");

    // ---------- rows ----------
    var hlRow = Math.min(st.hl, Math.max(ordered.length - 1, 0));
    var kbd = !!st.kbd;
    var hlSys = ordered[hlRow] ? ordered[hlRow].s.id : null;
    var hlCam =
      st.camSel != null
        ? st.camSel
        : hlSys && topCam[hlSys]
          ? topCam[hlSys] === "thermal"
            ? 1
            : 0
          : P.cam === "thermal"
            ? 1
            : 0;
    this._rows = ordered.map(function (o) {
      return o.s.id;
    });
    this._hlCam = hlCam;
    var rowObjs = ordered.map(function (o, ri) {
      var s = o.s;
      var cams = ["day", "thermal"].map(function (c, ci) {
        var fs = fState(s, c),
          key = s.id + ":" + c,
          tiles = maps.feed[key] || [];
        var hl = kbd && ri === hlRow && ci === hlCam;
        var line = tiles.length
          ? "on " +
            tiles
              .map(function (i) {
                return i + 1;
              })
              .join(",")
          : { live: "live", frozen: "frozen", offline: "off" }[fs];
        return {
          key: key,
          label: c === "day" ? "DAY" : "THR",
          line: line,
          // Cyan means one thing only: the highlighted cell that Enter will send. On-wall is shown by the “on N” text.
          color:
            fs !== "live" ? "#FF8C98" : tiles.length ? "#DCE3EC" : "#95A3B5",
          bg: hl ? "#1C2B3B" : tiles.length ? "#1A222D" : "#111720",
          border: hl
            ? "1px solid #4CC3FF"
            : tiles.length
              ? "1px solid #3A4B63"
              : "1px solid #2A3647",
          shadow: hl ? "0 0 0 1px #4CC3FF" : "none",
          aria:
            "Send " +
            s.cs +
            " " +
            camLabel(c).toLowerCase() +
            " to tile " +
            (target + 1) +
            (fs !== "live" ? ", " + fs : "") +
            (tiles.length
              ? ", already on tile " +
                tiles
                  .map(function (i) {
                    return i + 1;
                  })
                  .join(" and ")
              : ""),
          send: function () {
            self.setState({ hl: ri, camSel: ci });
            self.send(s.id, c, target);
          },
        };
      });
      var wallT = maps.sys[s.id] || [];
      var meta,
        metaColor = "#95A3B5";
      if (s.status === "offline") {
        meta = "offline since " + s.seen + " · " + s.err;
        metaColor = "#FF8C98";
      } else if (s.frozen) {
        meta = s.frozen + " frozen " + frozenAt(s) + " · " + s.plat;
        metaColor = "#FF8C98";
      } else {
        meta = s.plat + " · HDG " + pad3(s.hdg) + "° · FOV " + s.fov + "°";
      }
      var isOpen = st.open === s.id;
      var previews = isOpen
        ? ["day", "thermal"].map(function (c) {
            var fs = fState(s, c),
              tiles = maps.feed[s.id + ":" + c] || [];
            return {
              key: s.id + c + "pv",
              cls: fs === "offline" ? "" : sceneCls(s, c),
              bpos: s.px + "% " + s.py + "%",
              filter:
                fs === "frozen" ? "brightness(0.55) saturate(0.7)" : "none",
              label: camLabel(c),
              state: tiles.length
                ? "on tile " +
                  tiles
                    .map(function (i) {
                      return i + 1;
                    })
                    .join(",")
                : {
                    live: "live",
                    frozen: "frozen " + frozenAt(s),
                    offline: "no signal",
                  }[fs],
              color:
                fs !== "live"
                  ? "#FF8C98"
                  : tiles.length
                    ? "#DCE3EC"
                    : "#B7C3D1",
              aria:
                "Send " +
                s.cs +
                " " +
                camLabel(c).toLowerCase() +
                " to tile " +
                (target + 1),
              send: function () {
                self.send(s.id, c, target);
              },
            };
          })
        : [];
      var facts = isOpen
        ? [
            ["Site", s.site],
            ["Platform", s.plat],
            ["Grid", "35JPJ " + s.e + " " + s.n],
            ["Heading", pad3(s.hdg) + "°"],
            ["Tilt", s.tilt + "°"],
            ["Field of view", s.fov + "°"],
            ["Serial", s.serial],
            ["Host", s.host],
            [
              "Status",
              s.status === "offline"
                ? "offline · " + s.seen + " · " + s.err
                : s.frozen
                  ? s.frozen + " frozen " + frozenAt(s)
                  : "online",
            ],
            [
              "On wall",
              wallT.length
                ? "tile " +
                  wallT
                    .map(function (i) {
                      return i + 1;
                    })
                    .join(", ")
                : "no",
            ],
          ].map(function (f, k) {
            return { key: s.id + "f" + k, k: f[0], v: f[1] };
          })
        : [];
      return {
        key: s.id,
        site: s.site,
        cs: s.cs,
        sub: (norm(s.name) === norm(s.cs) ? "" : s.name + " · ") + s.site,
        onWall: wallT.length > 0,
        onWallText:
          "ON " +
          wallT
            .map(function (i) {
              return i + 1;
            })
            .join(","),
        hasDist: o.top || o.dist != null,
        dist: o.top ? topMeta[s.id] : o.dist != null ? fmtDist(o.dist) : "",
        distColor: o.top ? "#B7C3D1" : "#8ED9FF",
        meta: meta,
        metaColor: metaColor,
        bg: kbd && ri === hlRow ? "rgba(76, 195, 255, 0.07)" : "transparent",
        ring: kbd && ri === hlRow ? "inset 3px 0 0 0 #4CC3FF" : "none",
        ri: ri,
        focus: function () {
          if (self.state.hl !== ri || !self.state.kbd) {
            self.setState({ hl: ri, kbd: true });
          }
        },
        open: isOpen,
        expanded: isOpen ? "true" : "false",
        caret: isOpen ? "▾" : "▸",
        detailAria: (isOpen ? "Hide" : "Show") + " details for " + s.cs,
        toggle: function () {
          self.setState({ open: isOpen ? null : s.id, hl: ri });
        },
        previews: previews,
        facts: facts,
        cams: cams,
      };
    });
    var nTop = topList.length,
      restRows = rowObjs.slice(nTop),
      sections;
    if (st.group) {
      var idx = 0;
      sections = groupsOrder.map(function (g) {
        var rows = restRows.slice(idx, idx + groupsMap[g].length);
        idx += groupsMap[g].length;
        var onW = rows.filter(function (r) {
          return r.onWall;
        }).length;
        return {
          key: g,
          hasTitle: true,
          title: g.toUpperCase(),
          meta:
            rows.length +
            " system" +
            (rows.length === 1 ? "" : "s") +
            (onW ? " · " + onW + " on wall" : ""),
          rows: rows,
          dot: false,
          color: "#95A3B5",
          border: "1px solid #243042",
          bg: "transparent",
        };
      });
    } else {
      sections = [
        {
          key: "all",
          hasTitle: nTop > 0,
          title: "ALL SYSTEMS",
          meta: "",
          rows: restRows,
          dot: false,
          color: "#95A3B5",
          border: "1px solid #243042",
          bg: "transparent",
        },
      ];
    }
    if (nTop) {
      var tgS = tgtT ? BYID[tgtT.s] : null;
      sections.unshift({
        key: "top",
        hasTitle: true,
        dot: !!tgtT,
        color: "#DCE3EC",
        border: "1px solid #3A4B63",
        bg: "transparent",
        title: tgtT
          ? "REPLACE TILE " +
            (target + 1) +
            " · " +
            tgS.cs.toUpperCase() +
            " " +
            (tgtT.c === "day" ? "DAY" : "THR") +
            " " +
            (tgtTs === "frozen" ? "FROZE " + frozenAt(tgS) : "OFFLINE")
          : "FILL TILE " +
            (target + 1) +
            " · NEAR " +
            BYID[fillRef.s].cs.toUpperCase(),
        meta: "",
        rows: rowObjs.slice(0, nTop),
      });
    }
    var resultHead =
      (ordered.length === SYS.length
        ? SYS.length + " SYSTEMS"
        : ordered.length + " OF " + SYS.length + " SYSTEMS") +
      " · " +
      ordered.length * 2 +
      " FEEDS · " +
      onWallCount +
      " ON WALL";

    // ---------- chips ----------
    var chipDefs = [
      ["status", "online", "Online"],
      ["status", "issues", "Issues"],
      ["wall", "on", "On wall"],
      ["wall", "off", "Not on wall"],
      ["plat", "vehicle", "Vehicles"],
      ["plat", "mast", "Masts and towers"],
      ["plat", "tripod", "Tripods"],
      ["plat", "fixed", "Fixed"],
    ];
    var chips = chipDefs.map(function (cd) {
      var stateKey =
        cd[0] === "status" ? "fStatus" : cd[0] === "wall" ? "fWall" : "fPlat";
      var typedKey = stateKey;
      var mine = st[stateKey] === cd[1],
        fromTyped = !mine && P[typedKey] === cd[1] && !st[stateKey];
      var on = mine || fromTyped;
      return {
        key: cd[0] + cd[1],
        label: cd[2],
        pressed: on ? "true" : "false",
        bg: on ? "#1C2B3B" : "transparent",
        border: mine
          ? "1px solid #4CC3FF"
          : fromTyped
            ? "1px dashed #4CC3FF"
            : "1px solid #33435A",
        color: on ? "#E6F6FF" : "#B7C3D1",
        on: on,
        id: cd[0] + cd[1],
        toggle: function () {
          var o = { hl: 0, lastChip: cd[0] + cd[1] };
          o[stateKey] = st[stateKey] === cd[1] ? null : cd[1];
          self.setState(o);
        },
      };
    });
    // Quick row: anything active first, then a fixed pinned set, then the last one used. No reordering by frequency,
    // so the pinned chips never move under the operator's hand.
    var PINNED = ["statusonline", "walloff", "platvehicle"];
    var byId = {};
    chips.forEach(function (c) {
      byId[c.id] = c;
    });
    var qIds = chips
      .filter(function (c) {
        return c.on;
      })
      .map(function (c) {
        return c.id;
      });
    PINNED.concat(st.lastChip ? [st.lastChip] : []).forEach(function (id) {
      if (qIds.indexOf(id) < 0) {
        qIds.push(id);
      }
    });
    var quickChips = qIds.map(function (id) {
      return Object.assign({}, byId[id], { key: "q" + id });
    });
    var sortDefs = [
      ["best", "Best match"],
      ["az", "A–Z"],
      ["near", "Nearest"],
      ["status", "Status"],
      ["recent", "Recent"],
    ];
    var sorts = sortDefs.map(function (sd) {
      var on = st.sort === sd[0];
      return {
        key: sd[0],
        label:
          sd[0] === "near"
            ? ref
              ? "Nearest to " + refLabel
              : "Nearest to tile " + (target + 1)
            : sd[1],
        pressed: on ? "true" : "false",
        bg: on ? "#1C2B3B" : "transparent",
        border: on ? "1px solid #4CC3FF" : "1px solid #33435A",
        pick: function () {
          self.setState({ sort: sd[0], hl: 0 });
        },
      };
    });
    var hasFilters = !!(
      st.fStatus ||
      st.fWall ||
      st.fPlat ||
      st.sort !== "best" ||
      st.group
    );
    var sortName = {
      best: "Best match",
      az: "A–Z",
      near: "Nearest",
      status: "Status",
      recent: "Recent",
    }[st.sort];
    var sortSummary = "Sort: " + sortName + (st.group ? " · by site" : "");

    // ---------- preview + target ----------
    var tgtTile = d.tiles[target];
    var targetText =
      "Tile " + (target + 1) + (target === 0 && hasFocus ? " · focus" : "");
    var targetNow = tgtTile
      ? "Now: " + BYID[tgtTile.s].cs + " " + camLabel(tgtTile.c).toLowerCase()
      : "Now: empty";
    var targetOpts = geomD.map(function (g, i) {
      var tt2 = d.tiles[i],
        on = i === target;
      var now = tt2
        ? BYID[tt2.s].cs + " " + camLabel(tt2.c).toLowerCase()
        : "empty";
      return {
        key: "to" + i,
        label: String(i + 1) + (i === 0 && hasFocus ? " · focus" : ""),
        now: now,
        aria: "Tile " + (i + 1) + ", now " + now,
        pressed: on ? "true" : "false",
        bg: on ? "#1C2B3B" : "transparent",
        border: on ? "1px solid #4CC3FF" : "1px solid #33435A",
        pick: function () {
          self.selectTile(i);
          self.setState({ pickTarget: false });
        },
      };
    });

    // ---------- pending prompt ----------
    var pend = {
      text: "",
      color: "#DCE3EC",
      bg: "#132232",
      border: "#2C4A63",
      primaryText: "",
      hasSecond: false,
      secondText: "",
      primary: null,
      second: null,
      cancel: function () {
        self.setState({ pend: null });
      },
    };
    if (st.pend) {
      var p = st.pend,
        s0 = BYID[p.sid];
      if (p.kind === "dup") {
        pend.text =
          s0.cs +
          " " +
          (p.c === "day" ? "DAY" : "THR") +
          " is on tile " +
          (p.from + 1);
        pend.primaryText = "Move to tile " + (p.ti + 1);
        pend.primary = function () {
          self.moveDup();
        };
        pend.hasSecond = true;
        pend.secondText = "Show on both";
        pend.second = function () {
          self.send(p.sid, p.c, p.ti, true);
        };
      } else {
        pend.text = s0.cs + " offline since " + s0.seen + " · " + s0.err;
        pend.color = "#FFB3BB";
        pend.bg = "#24141A";
        pend.border = "#6B2F3A";
        var nearFree = SYS.filter(function (x) {
          return x.id !== s0.id && fState(x, p.c) === "live" && !maps.sys[x.id];
        })
          .map(function (x) {
            return { x: x, dd: sysDist(s0, x) };
          })
          .sort(function (a, b) {
            return a.dd - b.dd;
          })[0];
        if (nearFree) {
          pend.primaryText =
            "Use " + nearFree.x.cs + " · " + fmtDist(nearFree.dd);
          pend.primary = function () {
            self.send(nearFree.x.id, p.c, p.ti);
          };
        } else {
          pend.primaryText = "Place anyway";
          pend.primary = function () {
            self.send(p.sid, p.c, p.ti, true);
          };
        }
        pend.hasSecond = !!nearFree;
        pend.secondText = "Place anyway";
        pend.second = function () {
          self.send(p.sid, p.c, p.ti, true);
        };
      }
    }

    this._pendPrimary = st.pend ? pend.primary : null;

    // ---------- mirror ----------
    var prevE = null;
    var md = d,
      geomM = PRESETS[md.preset],
      insM = insetsOf(md);
    var stagedSlots = 0;
    var mirror = geomM.map(function (g, i) {
      var t = md.tiles[i],
        s = t ? BYID[t.s] : null,
        ts = tileState(t),
        u = g[2];
      var liveT = L.preset === md.preset ? L.tiles[i] : "__";
      var changed =
        JSON.stringify(t || null) !==
        JSON.stringify(liveT === undefined ? null : liveT);
      var staged = st.staging && changed && !prevE;
      if (staged) {
        stagedSlots++;
      }
      var stateText = {
        live: "Live",
        rec: "Rec " + (t && t.rec ? recNow(t) : ""),
        frozen: "Frozen " + (s ? frozenAt(s) : ""),
        offline: "No signal",
        empty: "",
      }[ts];
      var stateColor = {
        live: "#B7C3D1",
        rec: "#FFB547",
        frozen: "#FF8C98",
        offline: "#FF8C98",
        empty: "#6F7E92",
      }[ts];
      var border = "1px solid #2A3647";
      if (st.swapFrom != null) {
        border = "1px dashed #4CC3FF";
      }
      if (i === target) {
        border = "2px solid #4CC3FF";
      }
      if (prevE) {
        border = changed ? "2px dashed #FFD27A" : "1px dashed #6B5A2F";
      }
      var big = u >= 8,
        mid = u >= 6,
        sm = u >= 4;
      var pipTxt =
        t && insM[i]
          ? " + " + (t.c === "day" ? "THR" : "DAY") + " inset"
          : !t && insM[i]
            ? " · inset on"
            : "";
      var pc = t ? (t.c === "day" ? "thermal" : "day") : null,
        pfs = t ? fState(s, pc) : null;
      return {
        inset: !!insM[i],
        insetTop: "5px",
        insetBorder: t
          ? pfs === "live"
            ? "1px solid #B7C3D1"
            : "1px solid #FF8C98"
          : "1px dashed #55667E",
        insetBg: t ? (pfs === "live" ? "#223041" : "#2A151B") : "transparent",
        insetTagBg: t ? (pfs === "live" ? "#DCE3EC" : "#FF8C98") : "#55667E",
        insetLabel: t
          ? (pc === "day" ? "DAY" : "THR") +
            (pfs !== "live" ? (pfs === "frozen" ? " · FROZEN" : " · OFF") : "")
          : "INSET",
        key: "m" + i,
        num: String(i + 1),
        gc: g[0] + 1 + " / span " + g[2],
        gr: g[1] + 1 + " / span " + g[3],
        title: t ? s.cs : "Empty",
        name: t ? s.name : "",
        showName: !!t && mid && norm(s.name) !== norm(s.cs),
        sub: t
          ? camShort(t.c) + pipTxt + " · " + stateText + (t.osd ? " · OSD" : "")
          : "Search to place" + pipTxt,
        fs: big ? "26px" : mid ? "20px" : sm ? "16px" : "13px",
        subFs: big ? "14px" : mid ? "13px" : sm ? "11.5px" : "10.5px",
        numFs: big ? "13px" : "11px",
        pad: big ? "10px 12px" : sm ? "6px 8px" : "4px 5px",
        flag: staged
          ? "STAGED"
          : i === 0 && FOCUS_PRESETS[md.preset]
            ? "FOCUS"
            : "",
        flagColor: staged ? "#FFD27A" : "#95A3B5",
        stateColor: stateColor,
        border: border,
        bg: !t
          ? "#0E131A"
          : ts === "frozen" || ts === "offline"
            ? "#2A151B"
            : ts === "rec"
              ? "#2A2112"
              : i === target
                ? "#1A2635"
                : "#161E29",
        pressed: i === target ? "true" : "false",
        aria:
          "Tile " +
          (i + 1) +
          ": " +
          (t
            ? s.cs +
              " " +
              camLabel(t.c).toLowerCase() +
              ", " +
              (stateText || "live")
            : "empty"),
        select: function () {
          self.selectTile(i);
        },
      };
    });
    if (st.staging && L.preset !== d.preset) {
      stagedSlots = Math.max(stagedSlots, 1);
    }
    var hasStaged =
      st.staging &&
      JSON.stringify(d.tiles) + d.preset + JSON.stringify(insetsOf(d)) !==
        JSON.stringify(L.tiles) + L.preset + JSON.stringify(insetsOf(L));

    // ---------- wall ----------
    var insL = insetsOf(L);
    function cq(px) {
      return (px / 5.6).toFixed(3) + "cqw";
    }
    function recNow(t) {
      var e = st.pb[pbKey(t)],
        pos = e ? e.pos : 0;
      return t.recAt
        ? hhmmss(t.recAt + pos * 1000) +
            (e && e.speed > 1 ? " " + e.speed + "×" : "") +
            (e && !e.playing ? " ❚❚" : "")
        : t.rec;
    }
    var wall = geomL.map(function (g, i) {
      var t = L.tiles[i],
        s = t ? BYID[t.s] : null,
        ts = tileState(t),
        u = g[2];
      // Label height follows the wall spec: about 56 px on a 3840 px wall (1.46% of its width), the same on every tile
      // so it reads from the back of the room; only 4x4 tiles step down a little. cq() maps px on a 560 px reference wall.
      var base = (u >= 4 ? 1 : 0.85) * 0.0146 * 560;
      var fsN = base * scale;
      var bandBg = "#151D28",
        bandColor = "#E6ECF2",
        state = "● LIVE",
        stateColor = "#B7C3D1",
        ring = "none";
      if (ts === "rec") {
        bandBg = "#FFB547";
        bandColor = "#1A1206";
        state = "REC " + recNow(t);
        stateColor = "#1A1206";
        ring = "inset 0 0 0 2px #FFB547";
      }
      if (ts === "frozen") {
        bandBg = "#3A1820";
        bandColor = "#FFD6DA";
        state = "FROZEN";
        stateColor = "#FF8C98";
        ring = "inset 0 0 0 3px #FF6B7A";
      }
      if (ts === "offline") {
        bandBg = "#3A1820";
        bandColor = "#FFD6DA";
        state = "NO SIGNAL";
        stateColor = "#FF8C98";
        ring = "inset 0 0 0 3px #FF6B7A";
      }
      if (ts === "empty") {
        bandBg = "#0B0F14";
        bandColor = "#6F7E92";
        state = "";
      }
      var center = "",
        centerColor = "#FF8C98",
        centerBg = "rgba(5, 7, 10, 0.8)";
      if (ts === "frozen") {
        center = "FROZEN · LAST FRAME " + frozenAt(s);
      }
      if (ts === "offline") {
        center = "NO SIGNAL · LAST SEEN " + s.seen;
      }
      if (ts === "empty") {
        center = "EMPTY";
        centerColor = "#4D5A6B";
        centerBg = "transparent";
      }
      var osdN =
        (u >= 8 ? 10 : u >= 6 ? 8.5 : 7) *
        [0.8, 1, 1.35, 1.75][t && t.osdSize != null ? t.osdSize : 1];
      var pipOn = !!(t && insL[i] && ts !== "offline"),
        pc2 = t && t.c === "day" ? "thermal" : "day",
        pfs2 = s ? fState(s, pc2) : "live";
      return {
        pip: pipOn,
        pipCls: pipOn && pfs2 !== "offline" ? sceneCls(s, pc2) : "",
        pipFilter:
          pfs2 === "frozen" ? "brightness(0.55) saturate(0.7)" : "none",
        pipLabel:
          (pc2 === "day" ? "DAY" : "THR") +
          (pfs2 !== "live"
            ? " · " + (pfs2 === "frozen" ? "FROZEN" : "NO SIGNAL")
            : ""),
        pipTagBg: pfs2 === "live" ? "#DCE3EC" : "#FF8C98",
        pipFs: cq(fsN * 0.7),
        key: "w" + i,
        gc: g[0] + 1 + " / span " + g[2],
        gr: g[1] + 1 + " / span " + g[3],
        cls: !t || ts === "offline" ? "" : sceneCls(s, t.c),
        bsz: "150%",
        bpos: s ? s.px + "% " + s.py + "%" : "center",
        filter: ts === "frozen" ? "brightness(0.55) saturate(0.7)" : "none",
        stripes: ts === "offline",
        hasCenter: !!center,
        center: center,
        centerColor: centerColor,
        centerBg: centerBg,
        osd: !!(t && t.osd && ts !== "offline"),
        osdFs: cq(osdN),
        osdD: t ? osdData(s, t.c, st.now) : null,
        osdK: [0.8, 1, 1.35, 1.75][t && t.osdSize != null ? t.osdSize : 1],
        // Small tiles show a reduced OSD (heading, aim, pan and tilt, time) unless the text is set to L or XL.
        osdCompact: u < 6 && (t && t.osdSize != null ? t.osdSize : 1) < 2,
        num: String(i + 1),
        title: t
          ? s.cs.toUpperCase() +
            " · " +
            (pipOn
              ? t.c === "day"
                ? "DAY + THR"
                : "THR + DAY"
              : camShort(t.c))
          : "",
        state: state,
        stateColor: stateColor,
        bandBg: bandBg,
        bandColor: bandColor,
        ring: ring,
        fs: cq(fsN),
        gap: cq(fsN * 0.5),
        pad: cq(fsN * 0.35) + " " + cq(fsN * 0.55),
      };
    });

    // ---------- inspector ----------
    var sel = target;
    var t = d.tiles[sel],
      s = t ? BYID[t.s] : null,
      ts = tileState(t);
    var failed = ts === "frozen" || ts === "offline";
    var suggs = failed ? suggestions(t, d) : [];
    var insD = insetsOf(d),
      canInset = insetOk(geomD[sel]);
    var viewDefs = canInset
      ? [
          ["day", "DAY", "Day"],
          ["thermal", "THR", "Thermal"],
          ["day+", "DAY+THR", "Day with thermal inset"],
          ["thermal+", "THR+DAY", "Thermal with day inset"],
        ]
      : [
          ["day", "DAY", "Day"],
          ["thermal", "THR", "Thermal"],
        ];
    var curView = t ? t.c + (insD[sel] ? "+" : "") : "";
    var lvl = t && t.osdSize != null ? t.osdSize : 1;
    var warn = st.camWarn && st.camWarn.sel === sel && t ? st.camWarn : null;
    var warnText = "";
    if (warn) {
      var wc = warn.view.replace("+", ""),
        wo = wc === "day" ? "thermal" : "day";
      var bad = fState(s, wc) !== "live" ? wc : wo,
        bs = fState(s, bad);
      warnText =
        (bad === "day" ? "DAY" : "THR") +
        " " +
        (bs === "frozen" ? "frozen since " + frozenAt(s) : "offline");
    }
    var pbE =
      t && t.rec
        ? st.pb[pbKey(t)] || { pos: 0, speed: 1, playing: true }
        : null;
    var pbMax =
      t && t.recAt ? Math.round((st.now.getTime() - t.recAt) / 1000) : 900;
    var pb = {
      time: "",
      behind: "",
      max: pbMax,
      pos: 0,
      speeds: [],
      toggleIcon: "❚❚",
      toggleAria: "Pause",
    };
    if (pbE && t.recAt) {
      pb = {
        time:
          hhmmss(t.recAt + pbE.pos * 1000) + (pbE.playing ? "" : " · paused"),
        behind:
          pbE.pos >= pbMax - 1
            ? "at the live edge"
            : mmss(pbMax - pbE.pos) + " behind live",
        max: pbMax,
        pos: Math.round(pbE.pos),
        scrub: function (e) {
          self.pbSet(t, { pos: Number(e.target.value) });
        },
        back: function () {
          self.pbSet(t, { pos: pbE.pos - 10 });
        },
        fwd: function () {
          self.pbSet(t, { pos: pbE.pos + 10 });
        },
        toggle: function () {
          self.pbSet(t, { playing: !pbE.playing });
        },
        toggleIcon: pbE.playing ? "❚❚" : "▶",
        toggleAria: pbE.playing ? "Pause" : "Play",
        speeds: [1, 2, 4].map(function (x) {
          var on = pbE.speed === x;
          return {
            key: "sp" + x,
            label: x + "×",
            pressed: on ? "true" : "false",
            bg: on ? "#2A2112" : "transparent",
            border: on ? "1px solid #FFB547" : "1px solid #33435A",
            pick: function () {
              self.pbSet(t, { speed: x, playing: true });
            },
          };
        }),
      };
    }
    var ins = {
      hasFeed: !!t,
      hasWarn: !!warn,
      warnText: warnText,
      hasPb: !!(pbE && t.recAt),
      views: viewDefs.map(function (vd) {
        var on = curView === vd[0];
        var dead = t
          ? viewCams(vd[0])
              .map(function (c) {
                return fState(s, c);
              })
              .filter(function (f) {
                return f !== "live";
              })
          : [];
        var tag = dead.length
          ? dead.indexOf("offline") >= 0
            ? "OFF"
            : "FROZEN"
          : "";
        var deadCams = t
          ? viewCams(vd[0]).filter(function (c) {
              return fState(s, c) !== "live";
            })
          : [];
        return {
          key: "v" + vd[0],
          label: vd[1],
          hasTag: !!tag,
          tag: tag,
          pressed: on ? "true" : "false",
          tip: tag
            ? deadCams
                .map(function (c) {
                  return (
                    camShort(c) +
                    " " +
                    (fState(s, c) === "offline"
                      ? "offline"
                      : "frozen since " + frozenAt(s))
                  );
                })
                .join(" · ")
            : vd[2],
          aria:
            vd[2] + (tag ? ", " + (tag === "OFF" ? "offline" : "frozen") : ""),
          bg: on ? "#1C2B3B" : "transparent",
          border: on
            ? "1px solid #4CC3FF"
            : tag
              ? "1px solid #6B2F3A"
              : "1px solid #33435A",
          pick: function () {
            self.switchView(sel, vd[0]);
          },
        };
      }),
      osdSizes: ["S", "M", "L", "XL"].map(function (lb, k) {
        var on = !!(t && t.osd) && lvl === k;
        return {
          key: "z" + lb,
          label: lb,
          off: !t || !t.osd,
          pressed: on ? "true" : "false",
          aria: "OSD text size " + lb,
          bg: on ? "#2A2716" : "transparent",
          border: on ? "1px solid #E9DC7A" : "1px solid #33435A",
          pick: function () {
            self.osdSet(sel, k);
          },
        };
      }),
      num: String(sel + 1) + (sel === 0 && hasFocus ? " · FOCUS" : ""),
      title: t ? s.cs + " · " + camLabel(t.c) : "Empty",
      sub: t
        ? s.name +
          " · " +
          s.site +
          " · " +
          {
            live: "live",
            rec: "recorded",
            frozen: "frozen since " + frozenAt(s),
            offline: "no signal since " + s.seen,
          }[ts]
        : "No feed on this tile",
      stateColor: {
        live: "#95A3B5",
        rec: "#FFB547",
        frozen: "#FF8C98",
        offline: "#FF8C98",
        empty: "#6F7E92",
      }[ts],
      osdPressed: t && t.osd ? "true" : "false",
      osdBg: t && t.osd ? "#2A2716" : "transparent",
      osdBorder: t && t.osd ? "1px solid #E9DC7A" : "1px solid #33435A",
      recLabel: t && t.rec ? "● REC" : "REC −15′",
      recPressed: t && t.rec ? "true" : "false",
      recTitle:
        t && t.rec
          ? "Showing recorded footage · click to go back to live"
          : "Show recorded footage from 15 minutes ago",
      recBg: t && t.rec ? "#2A2112" : "transparent",
      recBorder: t && t.rec ? "1px solid #FFB547" : "1px solid #33435A",
      recColor: t && t.rec ? "#FFB547" : "#DCE3EC",
      noFeed: !t,
      noRec: !t || failed,
      empty: !t,
      failed: failed,
    };
    var sugg = {
      text: failed
        ? ts === "frozen"
          ? "Tile " +
            (sel + 1) +
            ": " +
            s.cs +
            " " +
            camLabel(t.c).toLowerCase() +
            " froze at " +
            frozenAt(s) +
            ". Replace with:"
          : "Tile " +
            (sel + 1) +
            ": " +
            s.cs +
            " is offline since " +
            s.seen +
            " (" +
            s.err +
            "). Replace with:"
        : "",
      none: failed && suggs.length === 0,
      items: suggs.map(function (g, k) {
        return {
          key: "sg" + k,
          text: g.text,
          meta: g.meta,
          apply: function () {
            self.send(g.sid, g.c, sel);
          },
        };
      }),
    };

    // ---------- layout side panel ----------
    var presets = PRESET_ORDER.map(function (p) {
      var on = d.preset === p;
      return {
        key: p,
        label: PRESET_LABEL[p],
        aria:
          "Arrangement " +
          PRESET_LABEL[p] +
          ", " +
          PRESETS[p].length +
          " tiles",
        pressed: on ? "true" : "false",
        bg: on ? "#1C2B3B" : "transparent",
        border: on ? "1px solid #4CC3FF" : "1px solid #33435A",
        cellBg: on ? "#4CC3FF" : "#55667E",
        cells: PRESETS[p].map(function (g, k) {
          return {
            key: p + k,
            gc: g[0] + 1 + " / span " + g[2],
            gr: g[1] + 1 + " / span " + g[3],
          };
        }),
        pick: function () {
          self.pickPreset(p);
        },
      };
    });
    var layouts = Object.keys(st.saved).map(function (name) {
      var on = d.name === name;
      return {
        key: name,
        name: name,
        meta: PRESET_LABEL[st.saved[name].preset],
        pressed: on ? "true" : "false",
        bg: on ? "#1C2B3B" : "transparent",
        border: on ? "1px solid #4CC3FF" : "1px solid #33435A",
        recall: function () {
          self.recall(name);
        },
      };
    });
    var edited =
      !st.saved[d.name] ||
      JSON.stringify(st.saved[d.name]) !== JSON.stringify(d);
    var lastH = st.hist[st.hist.length - 1];

    var nextR = st.fut[st.fut.length - 1];
    var K = keyLabels();
    var sAlt = K.mac ? "⇧⌥" : "Shift+Alt+";
    var shortcuts = [
      {
        key: "secs",
        title: "SECTIONS",
        items: [
          { d: "Next / previous section", k: "Tab  ⇧Tab" },
          {
            d: "Find, Mirror, Selected, Changes, Arrangement, Saved",
            k: sAlt + "1…6",
          },
          { d: "Move inside a section", k: "← → ↑ ↓" },
          { d: "Press the focused item", k: "Enter  Space" },
        ],
      },
      {
        key: "mirror",
        title: "MIRROR AND SELECTED",
        items: [
          { d: "Go to tile 1–9 (Mirror)", k: "1…9" },
          { d: "Swap with another tile, then Enter on it", k: "S" },
          { d: "Recorded −15′ / back to live", k: "R" },
          { d: "OSD on / off", k: "O" },
          { d: "Clear the tile", k: K.mac ? "⌫" : "Delete" },
          { d: "Cancel a swap", k: "Esc" },
        ],
      },
      {
        key: "changes",
        title: "CHANGES",
        items: [
          { d: "Pin or unpin the preview", k: "Space" },
          { d: "Restore that state", k: "Enter" },
        ],
      },
      {
        key: "find",
        title: "FIND AND SEND",
        items: [
          { d: "Into the list, and between systems", k: "↓ ↑" },
          { d: "Day or thermal camera", k: "← →" },
          { d: "Open or close details", k: "Space · " + K.alt + "↓" },
          { d: "Send to the target tile, or confirm a prompt", k: "Enter" },
          { d: "Send to tile 1–9", k: K.alt + "1…9" },
          { d: "Clear the search, or cancel a prompt", k: "Esc" },
        ],
      },
      {
        key: "tile",
        title: "SELECTED TILE",
        items: [
          {
            d: "Next view (skips dead cameras)",
            k: K.altC,
          },
        ],
      },
      {
        key: "hist",
        title: "HISTORY",
        items: [
          { d: "Undo the last change", k: K.undo },
          { d: "Redo", k: K.redo },
        ],
      },
      {
        key: "help",
        title: "SCREENS AND THIS PANEL",
        items: [
          { d: "Switch between desk and wall", k: K.altW },
          { d: "Open or close shortcuts (outside text fields)", k: "?" },
          { d: "Close", k: "Esc" },
        ],
      },
    ];
    var layKey = this.props.layout === "b" ? "b" : "a";
    var hasSugg = false;
    var lay =
      layKey === "b"
        ? {
            cols: "minmax(0, 1fr) auto",
            botDisplay: "grid",
            selW: "max-content",
            selMin: "260px",
            selMax: "560px",
            selWrap: "nowrap",
            areas: hasSugg
              ? '"hdr sel" "mirror sel" "sugg sel" "bottom bottom"'
              : '"hdr sel" "mirror sel" "bottom bottom"',
            rows: hasSugg
              ? "auto minmax(0, 1fr) auto minmax(0, clamp(112px, 28vh, 236px))"
              : "auto minmax(0, 1fr) minmax(0, clamp(112px, 28vh, 236px))",
            boxBg: "#161E29",
            boxBorder: "1px solid #243042",
            boxPad: "12px",
            searchW: "clamp(300px, calc(100vw - 740px), 460px)",
            searchBg: "#0E141C",
            searchBorder: "1px solid #2A3647",
            searchPad: "14px",
            searchLabel: "FIND A FEED · ALL SYSTEMS",
          }
        : {
            cols: "minmax(0, 1fr) minmax(0, 1fr) minmax(230px, 270px)",
            botDisplay: "contents",
            selW: "auto",
            selMin: "0",
            selMax: "none",
            selWrap: "wrap",
            areas: hasSugg
              ? '"hdr hdr arr" "mirror mirror arr" "mirror mirror saved" "sugg sugg saved" "sel log saved"'
              : '"hdr hdr arr" "mirror mirror arr" "mirror mirror saved" "sel log saved"',
            rows: hasSugg
              ? "auto minmax(0, 1fr) minmax(0, 1fr) auto minmax(0, 250px)"
              : "auto minmax(0, 1fr) minmax(0, 1fr) minmax(0, 250px)",
            boxBg: "#161E29",
            boxBorder: "1px solid #243042",
            boxPad: "12px",
            searchW: "clamp(300px, calc(100vw - 700px), 500px)",
            searchBg: "transparent",
            searchBorder: "0",
            searchPad: "0",
            searchLabel: "FIND A FEED",
          };
    var tabsOn = layKey === "b" && st.short;
    lay.tabs = tabsOn;
    lay.botCols = tabsOn ? "minmax(0, 1fr)" : "repeat(3, minmax(0, 1fr))";
    lay.botRows = tabsOn ? "auto minmax(0, 1fr)" : "minmax(0, 1fr)";
    lay.botAreas = tabsOn ? '"tabs" "box"' : '"log arr saved"';
    lay.botGap = tabsOn ? "8px" : "12px";
    lay.ga = {
      log: tabsOn ? "box" : "log",
      arr: tabsOn ? "box" : "arr",
      saved: tabsOn ? "box" : "saved",
    };
    lay.dp = {
      log: !tabsOn || st.botTab === "log" ? "flex" : "none",
      arr: !tabsOn || st.botTab === "arr" ? "flex" : "none",
      saved: !tabsOn || st.botTab === "saved" ? "flex" : "none",
    };
    lay.cardL = tabsOn ? "auto" : "calc(100% + 8px)";
    lay.cardR = tabsOn ? "0" : "auto";
    lay.cardB = tabsOn ? "calc(100% + 46px)" : "0";
    var curSnap = d;
    function snapDiff(snap) {
      if (snap.preset !== curSnap.preset) {
        return {
          all: true,
          text:
            PRESET_LABEL[snap.preset] +
            " arrangement (now " +
            PRESET_LABEL[curSnap.preset] +
            ")",
        };
      }
      var insA = insetsOf(snap),
        insB = insetsOf(curSnap),
        diffT = [];
      PRESETS[snap.preset].forEach(function (g, i) {
        if (
          JSON.stringify(snap.tiles[i] || null) !==
            JSON.stringify(curSnap.tiles[i] || null) ||
          insA[i] !== insB[i]
        ) {
          diffT.push(i);
        }
      });
      return {
        all: false,
        idx: diffT,
        text: diffT.length
          ? diffT.length +
            (diffT.length === 1 ? " tile differs" : " tiles differ") +
            " from now: " +
            diffT
              .map(function (i) {
                return i + 1;
              })
              .join(", ")
          : "Same as the wall now",
      };
    }

    var logRows;

    return {
      q: st.q,
      onQ: function (e) {
        self.setState({ q: e.target.value, hl: 0, camSel: null, pend: null });
      },
      onKey: function (e) {
        self.onKey(e);
      },
      onDeskKey: function (e) {
        self.onDeskKey(e);
      },
      onDeskKeyUp: function (e) {
        self.onDeskKeyUp(e);
      },
      onDeskFocus: function (e) {
        self.onDeskFocus(e);
      },
      markActive: function (e) {
        var hit =
          e && e.target && e.target.closest
            ? e.target.closest("[data-sec]")
            : null;
        if (hit && hit.getAttribute("data-sec") !== self.state.sec) {
          self.setState({ sec: hit.getAttribute("data-sec") });
        }
        if (e && e.currentTarget) {
          self._root = e.currentTarget;
        }
        if (typeof window !== "undefined" && self._uid) {
          window.__heviActive = self._uid;
        }
      },
      // A click on plain text would leave focus on <body>; pull it onto this component so its shortcuts keep working.
      claimFocus: function (e) {
        if (typeof window !== "undefined" && self._uid) {
          window.__heviActive = self._uid;
        }
        var root = e && e.currentTarget,
          a = typeof document !== "undefined" ? document.activeElement : null;
        if (
          root &&
          root.focus &&
          (!a ||
            a === document.body ||
            a === document.documentElement ||
            !root.contains(a))
        ) {
          root.focus({ preventScroll: true });
        }
      },
      interp: interp,
      hasInterp: parts.length > 0,
      resultHead: resultHead,
      sections: sections,
      noResults: ordered.length === 0,
      chips: chips,
      sorts: sorts,
      hasFilters: hasFilters,
      quickChips: quickChips,
      sortSummary: sortSummary,
      moreFilters: st.moreFilters,
      moreExpanded: st.moreFilters ? "true" : "false",
      moreLabel: st.moreFilters ? "Less ▴" : "More ▾",
      moreBg: st.moreFilters ? "#1C2B3B" : "transparent",
      toggleMore: function () {
        self.setState({ moreFilters: !st.moreFilters });
      },
      lay: lay,
      keys: K,
      shortcuts: shortcuts,
      osName: K.mac ? "Mac" : "Windows and Linux",
      yes: true,
      clearFilters: function () {
        self.setState({
          fStatus: null,
          fWall: null,
          fPlat: null,
          sort: "best",
          group: false,
          hl: 0,
        });
      },
      toggleGroup: function () {
        self.setState({ group: !st.group, hl: 0 });
      },
      groupPressed: st.group ? "true" : "false",
      groupBg: st.group ? "#1C2B3B" : "transparent",
      groupBorder: st.group ? "1px solid #4CC3FF" : "1px solid #33435A",
      targetText: targetText,
      targetNow: targetNow,
      targetAria:
        "Sending to " + targetText + ". " + targetNow + ". Change target",
      targetOpts: targetOpts,
      pickTarget: st.pickTarget,
      pickExpanded: st.pickTarget ? "true" : "false",
      toggleTargetPick: function () {
        self.setState({ pickTarget: !st.pickTarget });
      },
      help: st.help,
      toggleHelp: function () {
        self.setState({ help: !self.state.help });
      },
      hasSugg: hasSugg,
      secOn: SECS.reduce(function (o, k) {
        o[k] = st.sec === k && st.view !== "wall";
        return o;
      }, {}),
      secRing: SECS.reduce(function (o, k) {
        o[k] =
          st.sec === k && st.view !== "wall" ? "0 0 0 2px #4CC3FF" : "none";
        return o;
      }, {}),
      sugg: sugg,
      pb: pb,
      kbdOn: function () {
        if (!self.state.kbd) {
          self.setState({ kbd: true });
        }
      },
      kbdOff: function () {
        if (self.state.kbd) {
          self.setState({ kbd: false });
        }
      },
      botTabs: [
        ["log", "Recent changes"],
        ["arr", "Arrangement"],
        ["saved", "Saved layouts"],
      ].map(function (b) {
        var on = st.botTab === b[0];
        return {
          key: "bt" + b[0],
          label: b[1],
          sel: on ? "true" : "false",
          bg: on ? "#1C2B3B" : "transparent",
          border: on ? "1px solid #4CC3FF" : "1px solid #33435A",
          pick: function () {
            self.setState({ botTab: b[0], logPin: null, logHover: null });
          },
        };
      }),
      isDesk: st.view !== "wall",
      isWall: st.view === "wall",
      showPeek: this.props.screen !== "wall",
      rootBg: st.view === "wall" ? "#000000" : "#0A0E13",
      rootPad: st.view === "wall" ? "0" : "10px 16px 10px",
      showDesk: function () {
        self.setState({ view: "desk" });
      },
      showWall: function () {
        self.setState({ view: "wall", help: false, logPin: null });
      },
      camWarnYes: function () {
        if (st.camWarn) {
          self.switchView(st.camWarn.sel, st.camWarn.view, true);
        }
      },
      camWarnNo: function () {
        self.setState({ camWarn: null });
      },
      mirrorNoteColor: "#95A3B5",
      hasPend: !!st.pend,
      pend: pend,
      mirror: mirror,
      wall: wall,
      ins: ins,
      presets: presets,
      layouts: layouts,
      layoutTitle: d.name,
      edited: edited,
      nameInput: st.nameInput,
      onName: function (e) {
        self.setState({ nameInput: e.target.value });
      },
      save: function () {
        self.saveLayout();
      },
      toggleOsd: function () {
        self.toggleOsd(sel);
      },
      startSwap: function () {
        self.setState({ swapFrom: sel });
      },
      cancelSwap: function () {
        self.setState({ swapFrom: null });
      },
      toggleRec: function () {
        self.toggleRec(sel);
      },
      clearTile: function () {
        self.clearTile(sel);
      },
      swapping: st.swapFrom != null,
      swapText:
        st.swapFrom != null ? "Swap tile " + (st.swapFrom + 1) + " with…" : "",
      mirrorNote: st.staging
        ? hasStaged
          ? "STAGED · NOT ON THE WALL YET"
          : "STAGING · MATCHES THE WALL"
        : "MATCHES THE WALL",
      livePressed: st.staging ? "false" : "true",
      stagedPressed: st.staging ? "true" : "false",
      liveBg: st.staging ? "transparent" : "#1C2B3B",
      liveBorder: st.staging ? "1px solid #33435A" : "1px solid #4CC3FF",
      stagedBg: st.staging ? "#1C2B3B" : "transparent",
      stagedBorder: st.staging ? "1px solid #4CC3FF" : "1px solid #33435A",
      setLive: function () {
        self.setLive();
      },
      setStaged: function () {
        self.setState({ staging: true });
      },
      hasStaged: hasStaged,
      stagedText:
        stagedSlots + " staged change" + (stagedSlots === 1 ? "" : "s"),
      publish: function () {
        if (JSON.stringify(st.draft) === JSON.stringify(st.live)) return;
        self.setState({
          live: clone(st.draft),
          log: [self.logEntry("Published to the wall", st.draft)]
            .concat(st.log)
            .slice(0, 8),
        });
      },
      discard: function () {
        if (JSON.stringify(st.draft) === JSON.stringify(st.live)) return;
        self.setState({
          draft: clone(st.live),
          hist: st.hist
            .concat([{ snap: clone(st.draft), text: "discard" }])
            .slice(-30),
          log: [self.logEntry("Discarded staged changes", st.live)]
            .concat(st.log)
            .slice(0, 8),
        });
      },
      undo: function () {
        self.undo();
      },
      noUndo: st.hist.length === 0,
      undoAria: lastH ? "Undo: " + lastH.text : "Nothing to undo",
      undoTitle:
        (lastH ? "Undo: " + lastH.text : "Nothing to undo") +
        " (" +
        K.undo +
        ")",
      redo: function () {
        self.redo();
      },
      noRedo: st.fut.length === 0,
      redoAria: nextR ? "Redo: " + nextR.text : "Nothing to redo",
      redoTitle:
        (nextR ? "Redo: " + nextR.text : "Nothing to redo") +
        " (" +
        K.redo +
        ")",
      clock: hhmm(st.now) + " UTC",
      log: (logRows = st.log.map(function (e, k) {
        var pinned = st.logPin === k,
          hasCard =
            k !== 0 && (pinned || (st.logPin == null && st.logHover === k));
        var cells = [],
          diff = { text: "" };
        if (hasCard) {
          diff = snapDiff(e.snap);
          var insE = insetsOf(e.snap);
          cells = PRESETS[e.snap.preset].map(function (g, i) {
            var tt = e.snap.tiles[i],
              ch = diff.all || diff.idx.indexOf(i) >= 0,
              ss = tt ? BYID[tt.s] : null;
            return {
              key: "mc" + k + "-" + i,
              gc: g[0] + 1 + " / span " + g[2],
              gr: g[1] + 1 + " / span " + g[3],
              bg: ch ? "#2A2112" : "#161E29",
              border: ch ? "1px solid #FFB547" : "1px solid #243042",
              fs: g[2] >= 6 ? "11px" : "9px",
              label:
                i +
                1 +
                (tt && g[2] >= 4
                  ? " " +
                    ss.cs +
                    " " +
                    (tt.c === "day" ? "DAY" : "THR") +
                    (insE[i] ? "+" : "")
                  : tt
                    ? ""
                    : " ·"),
            };
          });
        }
        return {
          key: "l" + k,
          t: e.t,
          text: e.text,
          isCurrent: k === 0,
          notCurrent: k !== 0,
          bg: hasCard ? "rgba(255, 181, 71, 0.08)" : "transparent",
          aria: "Restore the wall as it was after: " + e.text,
          restore: function () {
            self.restore(k);
          },
          expanded: hasCard ? "true" : "false",
          hasCard: hasCard,
          pinned: pinned,
          cells: cells,
          diff: diff.text,
          diffColor: "#FFD27A",
          cardAria: "Wall after: " + e.text,
          pin: function () {
            if (k !== 0) {
              self.setState({ logPin: self.state.logPin === k ? null : k });
            }
          },
          unpin: function () {
            self.setState({ logPin: null, logHover: null });
          },
          enter: function () {
            var h = k === 0 ? null : k;
            if (self.state.logHover !== h) {
              self.setState({ logHover: h });
            }
          },
        };
      })),
      // One card for the whole list, drawn outside the scrolling list so it isn't clipped.
      hasLogCard: logRows.some(function (r) {
        return r.hasCard;
      }),
      logCard: (function () {
        var r = logRows.filter(function (x) {
          return x.hasCard;
        })[0];
        return r
          ? {
              t: r.t,
              text: r.text,
              cells: r.cells,
              diff: r.diff,
              pinned: r.pinned,
              unpin: r.unpin,
              restore: r.restore,
              aria: r.cardAria,
            }
          : {
              t: "",
              text: "",
              cells: [],
              diff: "",
              pinned: false,
              unpin: null,
              restore: null,
              aria: "",
            };
      })(),
      logLeave: function () {
        if (self.state.logHover != null) {
          self.setState({ logHover: null });
        }
      },
      _noop: null,
    };
  }

  onKey(e) {
    var rows = this._rows || [],
      st = this.state,
      hl = Math.min(st.hl, Math.max(rows.length - 1, 0)),
      cam = this._hlCam || 0;
    if (st.pend && e.key === "Enter") {
      e.preventDefault();
      if (this._pendPrimary) {
        this._pendPrimary();
      }
      return;
    }
    if (e.altKey && e.key === "ArrowDown") {
      e.preventDefault();
      var sidO = rows[hl];
      if (sidO) {
        this.setState({ open: st.open === sidO ? null : sidO });
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (rows.length) this.focusRow(hl);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      return;
    }
    if (
      e.key === "ArrowRight" &&
      e.target.selectionStart === e.target.value.length
    ) {
      e.preventDefault();
      this.setState({ camSel: 1, pend: null });
      return;
    }
    if (
      e.key === "ArrowLeft" &&
      e.target.selectionStart === e.target.value.length
    ) {
      e.preventDefault();
      this.setState({ camSel: 0, pend: null });
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      if (st.pend) {
        this.setState({ pend: null });
      } else {
        this.setState({ q: "", hl: 0, camSel: null });
      }
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      var sid = rows[hl];
      if (sid) {
        this.send(sid, cam === 1 ? "thermal" : "day", this._target);
      }
      return;
    }
    if (e.altKey && !e.shiftKey && /^Digit[1-9]$/.test(e.code)) {
      e.preventDefault();
      var n = Number(e.code.slice(5)) - 1,
        sid2 = rows[hl];
      if (sid2) {
        this.send(sid2, cam === 1 ? "thermal" : "day", n);
      }
    }
  }
  rowEl(i) {
    var box = this.secBox("find");
    return box && box.querySelector
      ? box.querySelector('[data-ri="' + i + '"]')
      : null;
  }
  focusRow(i) {
    var el = this.rowEl(i),
      b = el && el.querySelector ? el.querySelector(".rowbtn") : null;
    if (!b) return;
    if (this.state.hl !== i || !this.state.kbd)
      this.setState({ hl: i, kbd: true });
    b.focus({ preventScroll: true });
    el.scrollIntoView({ block: "nearest" });
  }
  focusSearch() {
    var q =
      this._root && this._root.querySelector
        ? this._root.querySelector("#feed-search")
        : null;
    if (q && q.focus) q.focus({ preventScroll: true });
  }
  // Keys on a focused row of the systems list.
  listKey(e) {
    var rows = this._rows || [],
      st = this.state,
      hl = Math.min(st.hl, Math.max(rows.length - 1, 0)),
      cam = this._hlCam || 0,
      plain = !e.altKey && !e.metaKey && !e.ctrlKey;
    if (e.key === "ArrowDown" && plain) {
      e.preventDefault();
      if (hl < rows.length - 1) {
        this.setState({ pend: null, open: null });
        this.focusRow(hl + 1);
      }
      return true;
    }
    if (e.key === "ArrowUp" && plain) {
      e.preventDefault();
      this.setState({ pend: null, open: null });
      if (hl > 0) this.focusRow(hl - 1);
      else this.focusSearch();
      return true;
    }
    if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && plain) {
      e.preventDefault();
      this.setState({ camSel: e.key === "ArrowRight" ? 1 : 0, pend: null });
      return true;
    }
    if (e.key === " " && plain) {
      e.preventDefault();
      var sidO = rows[hl];
      if (sidO)
        this.setState({ open: st.open === sidO ? null : sidO, pend: null });
      return true;
    }
    if (e.key === "Enter" && plain) {
      e.preventDefault();
      if (st.pend) {
        if (this._pendPrimary) this._pendPrimary();
      } else if (rows[hl]) {
        this.send(rows[hl], cam === 1 ? "thermal" : "day", this._target);
      }
      return true;
    }
    if (e.altKey && !e.shiftKey && /^Digit[1-9]$/.test(e.code)) {
      e.preventDefault();
      if (rows[hl])
        this.send(
          rows[hl],
          cam === 1 ? "thermal" : "day",
          Number(e.code.slice(5)) - 1,
        );
      return true;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
      if (st.pend) this.setState({ pend: null });
      else this.focusSearch();
      return true;
    }
    if (
      e.key === "Backspace" ||
      (plain && e.key && e.key.length === 1 && e.key !== " ")
    ) {
      // Typing goes back to the search field.
      this.focusSearch();
      return true;
    }
    return false;
  }
  secBox(sec) {
    return this._root && this._root.querySelector
      ? this._root.querySelector('[data-sec="' + sec + '"]')
      : null;
  }
  // Put the keyboard on a section: Find gets the search field, the others their last item.
  goSection(sec) {
    var self = this,
      next = { sec: sec };
    if (
      this.props.layout !== "a" &&
      this.state.short &&
      (sec === "log" || sec === "arr" || sec === "saved")
    ) {
      next.botTab = sec;
    }
    if (sec !== "log") {
      next.logHover = null;
    }
    this.setState(next, function () {
      self.focusSection(sec);
    });
  }
  focusSection(sec) {
    var box = this.secBox(sec);
    if (!box) return;
    if (sec === "find") {
      var q = box.querySelector("#feed-search");
      if (q) q.focus({ preventScroll: true });
      return;
    }
    this._cur = this._cur || {};
    if (sec === "mirror") {
      var want = box.querySelector(
        '[data-ti="' +
          (this._cur.mirror != null ? this._cur.mirror : this.state.sel) +
          '"]',
      );
      if (want) {
        want.focus({ preventScroll: true });
        return;
      }
    }
    var items = focusables(box);
    var idx = Math.min(this._cur[sec] || 0, Math.max(items.length - 1, 0));
    if (items[idx]) {
      items[idx].focus({ preventScroll: true });
      this.noteLogRow(sec, items[idx]);
    }
  }
  // In Changes, the preview card follows the keyboard.
  noteLogRow(sec, el) {
    if (sec !== "log") return;
    var li = el.closest("[data-row]"),
      k = li ? Number(li.getAttribute("data-row")) : null;
    var h = k === 0 ? null : k;
    if (this.state.logHover !== h) this.setState({ logHover: h });
  }
  cycleSection(step) {
    var i = SECS.indexOf(this.state.sec);
    this.goSection(SECS[(i + step + SECS.length) % SECS.length]);
  }
  // Keys inside the active section (everything except the search field).
  sectionKey(e, sec) {
    var st = this.state,
      box = this.secBox(sec),
      target = e.target,
      tag = target && target.tagName,
      inInput = tag === "INPUT" || tag === "TEXTAREA";
    if (!box) return false;
    var items = focusables(box),
      here = items.indexOf(target) >= 0 ? target : null;
    var noMod = !e.altKey && !e.metaKey && !e.ctrlKey;
    // Arrows move by position; in a text field only up and down leave it.
    if (
      /^Arrow/.test(e.key) &&
      noMod &&
      !e.shiftKey &&
      !(inInput && (e.key === "ArrowLeft" || e.key === "ArrowRight"))
    ) {
      e.preventDefault();
      if (!here) {
        this.focusSection(sec);
        return true;
      }
      var nx = spatialNext(items, here, e.key);
      if (nx) {
        nx.focus({ preventScroll: true });
        this._cur = this._cur || {};
        this._cur[sec] =
          sec === "mirror"
            ? Number(nx.getAttribute("data-ti"))
            : items.indexOf(nx);
        this.noteLogRow(sec, nx);
      }
      return true;
    }
    var tileAt =
      sec === "mirror" && here && here.getAttribute("data-ti") != null
        ? Number(here.getAttribute("data-ti"))
        : null;
    var tileOf = sec === "mirror" ? tileAt : sec === "sel" ? st.sel : null;
    // Enter and Space press the focused item. Changes: Space pins the card, Enter restores.
    if ((e.key === "Enter" || e.key === " ") && noMod) {
      if (inInput && e.key === " ") return false;
      e.preventDefault();
      if (sec === "log" && here) {
        var li = here.closest("[data-row]"),
          k = li ? Number(li.getAttribute("data-row")) : -1;
        if (e.key === " ") {
          if (k > 0) this.setState({ logPin: st.logPin === k ? null : k });
        } else if (k > 0) {
          this.restore(k);
        }
        return true;
      }
      if (inInput && target.id === "layout-name") {
        this.saveLayout();
        return true;
      }
      if (here) here.click();
      return true;
    }
    // Mirror: 1-9 jump to a tile.
    if (
      sec === "mirror" &&
      noMod &&
      !e.shiftKey &&
      /^Digit[1-9]$/.test(e.code)
    ) {
      var n = Number(e.code.slice(5)) - 1,
        el = box.querySelector('[data-ti="' + n + '"]');
      e.preventDefault();
      if (el) {
        el.focus({ preventScroll: true });
        this._cur = this._cur || {};
        this._cur.mirror = n;
      }
      return true;
    }
    // Single keys act on the tile: in Mirror the focused one, in Selected the selected one.
    if (
      (sec === "mirror" || sec === "sel") &&
      noMod &&
      !inInput &&
      tileOf != null
    ) {
      var c = e.code;
      if (
        c === "KeyS" ||
        c === "KeyR" ||
        c === "KeyO" ||
        e.key === "Delete" ||
        e.key === "Backspace"
      ) {
        e.preventDefault();
        if (c === "KeyS") {
          this._cur = this._cur || {};
          this._cur.mirror = tileOf;
          this.setState({ swapFrom: tileOf, sel: tileOf });
          if (sec !== "mirror") this.goSection("mirror");
          return true;
        }
        if (st.sel !== tileOf) this.setState({ sel: tileOf });
        if (c === "KeyR") {
          this.toggleRec(tileOf);
        } else if (c === "KeyO") {
          this.toggleOsd(tileOf);
        } else {
          this.clearTile(tileOf);
        }
        return true;
      }
    }
    if (e.key === "Escape" && sec === "mirror" && st.swapFrom != null) {
      e.preventDefault();
      this.setState({ swapFrom: null });
      return true;
    }
    return false;
  }
  keepRoot(e) {
    if (!this._root && e && e.currentTarget && e.currentTarget.nodeType === 1)
      this._root = e.currentTarget;
  }
  onDeskKeyUp(e) {
    // Space would press a focused button a second time on release.
    if (e.key === " " && e.target && e.target.tagName === "BUTTON")
      e.preventDefault();
  }
  // Clicking or tabbing into a section makes it the keyboard's section.
  onDeskFocus(e) {
    this.keepRoot(e);
    var box =
        e.target && e.target.closest ? e.target.closest("[data-sec]") : null,
      sec = box ? box.getAttribute("data-sec") : null;
    if (sec && sec !== this.state.sec) this.setState({ sec: sec });
    if (
      sec === "mirror" &&
      e.target.getAttribute &&
      e.target.getAttribute("data-ti") != null
    ) {
      this._cur = this._cur || {};
      this._cur.mirror = Number(e.target.getAttribute("data-ti"));
    }
  }
  onDeskKey(e) {
    this.keepRoot(e);
    var tag = e.target && e.target.tagName,
      inText = tag === "INPUT" || tag === "TEXTAREA";
    var mod = e.metaKey || e.ctrlKey,
      k = (e.key || "").toLowerCase();
    // Esc is ours when we use it, so the canvas player doesn't also exit play mode.
    if (this.state.help && e.key === "Escape") {
      e.preventDefault();
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      this.setState({ help: false });
      return;
    }
    if (
      this.props.screen !== "wall" &&
      this.state.view !== "wall" &&
      !this.state.help
    ) {
      // Tab / Shift+Tab (and Option+Tab on Mac) rotate sections; Shift+Option+1-6 jump to one.
      if (e.key === "Tab" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        this.cycleSection(e.shiftKey ? -1 : 1);
        return;
      }
      if (e.altKey && e.shiftKey && !mod && /^Digit[1-6]$/.test(e.code)) {
        e.preventDefault();
        this.goSection(SECS[Number(e.code.slice(5)) - 1]);
        return;
      }
      var inSearch = e.target && e.target.id === "feed-search";
      var inList =
        e.target &&
        e.target.classList &&
        e.target.classList.contains("rowbtn") &&
        e.target.closest &&
        e.target.closest('[data-sec="find"]');
      if (inList && this.listKey(e)) {
        return;
      }
      if (
        !inSearch &&
        this.state.sec !== "find" &&
        this.sectionKey(e, this.state.sec)
      ) {
        return;
      }
    }
    if (e.key === "?" && !inText && !mod) {
      e.preventDefault();
      this.setState({ help: !this.state.help });
      return;
    }
    if (e.key === "Escape" && this.state.logPin != null) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      this.setState({ logPin: null });
      return;
    }
    // Text fields keep their own native undo/redo.
    if (
      mod &&
      !inText &&
      ((k === "z" && e.shiftKey) || (k === "y" && e.ctrlKey && !e.metaKey))
    ) {
      e.preventDefault();
      this.redo();
      return;
    }
    if (mod && !inText && k === "z" && !e.shiftKey) {
      e.preventDefault();
      this.undo();
      return;
    }
    if (e.altKey && e.code === "KeyW") {
      e.preventDefault();
      if (this.props.screen === "wall") {
        return;
      }
      this.setState({
        view: this.state.view === "wall" ? "desk" : "wall",
        help: false,
      });
      return;
    }
    if (e.altKey && e.code === "KeyC" && this.state.view === "desk") {
      e.preventDefault();
      var sel = this._target,
        nv = this.nextView(sel);
      if (nv) {
        this.switchView(sel, nv);
      }
    }
  }
  selectTile(i) {
    var st = this.state;
    if (st.swapFrom != null && st.swapFrom !== i) {
      var a = st.swapFrom;
      this.apply(
        function (dd) {
          var tmp = dd.tiles[a];
          dd.tiles[a] = dd.tiles[i];
          dd.tiles[i] = tmp;
          return dd;
        },
        "Swapped tiles " + (a + 1) + " and " + (i + 1),
        { swapFrom: null, sel: i },
      );
      return;
    }
    var q = this.state.q;
    var P = parseQuery(q);
    this.setState({
      sel: i,
      swapFrom: null,
      pend: null,
      q:
        P.target != null
          ? q
              .replace(/\b(big|focus|main)\b|\btile\s*\d{1,2}\b/gi, "")
              .replace(/\s+/g, " ")
              .trim()
          : q,
    });
    var ts = tileState(this.state.draft.tiles[i]);
    if (ts === "frozen" || ts === "offline" || ts === "empty") {
      this.setState({ hl: 0, camSel: null, kbd: true });
      var box =
        this._root && this._root.querySelector
          ? this._root.querySelector("#feed-search")
          : null;
      if (box && box.focus) {
        box.focus({ preventScroll: true });
      }
    }
  }
  toggleOsd(sel) {
    var t = this.state.draft.tiles[sel];
    if (!t) {
      return;
    }
    this.apply(
      function (dd) {
        dd.tiles[sel].osd = !dd.tiles[sel].osd;
        return dd;
      },
      "Tile " + (sel + 1) + " OSD " + (t.osd ? "off" : "on"),
    );
  }
  toggleRec(sel) {
    var t = this.state.draft.tiles[sel];
    if (!t) {
      return;
    }
    var at = Date.now() - 15 * 60000,
      when = hhmm(new Date(at));
    if (!t.rec) {
      var pb = Object.assign({}, this.state.pb);
      pb[String(at)] = { pos: 0, speed: 1, playing: true };
      this.setState({ pb: pb });
    }
    this.apply(
      function (dd) {
        dd.tiles[sel].rec = t.rec ? null : when;
        dd.tiles[sel].recAt = t.rec ? null : at;
        return dd;
      },
      "Tile " +
        (sel + 1) +
        (t.rec ? " back to live" : " showing recorded from " + when),
    );
  }
  pbSet(t, patch) {
    var k = pbKey(t);
    if (!k) {
      return;
    }
    var pb = Object.assign({}, this.state.pb),
      cur = pb[k] || { pos: 0, speed: 1, playing: true },
      max = (Date.now() - Number(k)) / 1000;
    var n = Object.assign({}, cur, patch);
    n.pos = Math.max(0, Math.min(max, n.pos));
    pb[k] = n;
    this.setState({ pb: pb });
  }
  nextView(sel) {
    var d = this.state.draft,
      t = d.tiles[sel];
    if (!t) {
      return null;
    }
    var s = BYID[t.s],
      order = insetOk(PRESETS[d.preset][sel])
        ? ["day", "thermal", "day+", "thermal+"]
        : ["day", "thermal"];
    var cur = order.indexOf(t.c + (insetsOf(d)[sel] ? "+" : "")),
      n = order.length;
    // Step to the next view whose cameras are all live; if none is, the next one (the warning then explains).
    for (var k = 1; k < n; k++) {
      var v = order[(cur + k) % n];
      if (
        viewCams(v).every(function (c) {
          return fState(s, c) === "live";
        })
      ) {
        return v;
      }
    }
    return order[(cur + 1) % n];
  }
  clearTile(sel) {
    if (!this.state.draft.tiles[sel]) {
      return;
    }
    this.apply(
      function (dd) {
        dd.tiles[sel] = null;
        return dd;
      },
      "Tile " + (sel + 1) + " cleared",
    );
  }
  pickPreset(p) {
    var n = PRESETS[p].length;
    this.apply(
      function (dd) {
        dd.preset = p;
        var t = dd.tiles.slice(0, n);
        while (t.length < n) {
          t.push(null);
        }
        dd.tiles = t;
        dd.insets = PRESETS[p].map(function (g, i) {
          return !!(dd.insets && dd.insets[i]) && insetOk(g);
        });
        return dd;
      },
      "Arrangement " + PRESET_LABEL[p],
      { sel: Math.min(this.state.sel, n - 1), swapFrom: null },
    );
  }
  recall(name) {
    var lay = clone(this.state.saved[name]);
    this.apply(
      function () {
        return lay;
      },
      "Recalled " + name,
      { sel: 0, swapFrom: null, nameInput: name },
    );
  }
  saveLayout() {
    var st = this.state,
      name = (st.nameInput || "").trim() || "Untitled";
    var dd = clone(st.draft);
    dd.name = name;
    var saved = Object.assign({}, st.saved);
    saved[name] = clone(dd);
    var next = {
      saved: saved,
      draft: dd,
      log: [this.logEntry("Saved layout " + name, dd)]
        .concat(st.log)
        .slice(0, 8),
    };
    if (!st.staging) {
      next.live = clone(dd);
    }
    this.setState(next);
  }
  setLive() {
    var st = this.state;
    if (st.staging && JSON.stringify(st.draft) !== JSON.stringify(st.live)) {
      this.setState({
        staging: false,
        live: clone(st.draft),
        log: [this.logEntry("Published staged changes", st.draft)]
          .concat(st.log)
          .slice(0, 8),
      });
      return;
    }
    this.setState({ staging: false });
  }
}
Component.prototype.render = function () {
  return Template(this.renderVals());
};

export const DEFAULT_PROPS = { layout: "a", labelScale: 1.15 };
export default Component;
