// Rebellion 2026 lineup (by day) sourced from the official lineup page.
// Times are not available yet, so this app is selection + notes + priority.
//
// If the lineup changes, you can update the arrays below.

const LINEUP = {
  Thursday: {
    date: "Thu 6 Aug 2026",
    bands: [
      "THE STRANGLERS","BUZZCOCKS","SLAUGHTER & THE DOGS","STEVE IGNORANT BAND CRASS SET","BOW WOW WOW","UK SUBS","BAR STOOL PREACHERS",
      "MILLIE MANDERS & THE SHUT UP","MAID OF ACE","AU PAIRS","SCREAM","THE COURETTES","THE ADOLESCENTS","BAD COP BAD COP","THE VAPORS",
      "THE DROWNS","ZION TRAIN","POPES OF CHILLITOWN","BEANS ON TOAST","MENACE","BLYTH POWER","SPLODGENESSABOUNDS","TV SMITH",
      "THE COUNTESS OF FIFE","HAGAR THE WOMB","SKEPTIX","DRONGOS FOR EUROPE","SICK ON THE BUS","PIZZATRAMP","FACE UP","THE DOLLHEADS",
      "SUBALTERNOS","18 FEVERS","BLACK WATER COUNTY","THE BOLOKOS","SLACKRR","HEADSTONE HORRORS","DOG ROTTEN","VOMIT","JANUS STARK",
      "NOOSE","FOREIGN LEGION","CAROL HODGE BAND","MOLLY VULPYNE BAND","AMBITION DEMOLITION","RIOT CITY RADIO","THE LIARBILITYS",
      "LITTERBUG","KOMBI KILLERS","BITE BACK","DEAD DATES","BLYTH POWER ACOUSTIC","BABAR LUCK","DAVID DELINQUENT?","HENSHAW",
      "IN EVIL HOUR ACOUSTIC","JESS SILK","MUDDY SUMMERS & THE DFWs","POPES OF CHILLITOWN ACOUSTIC","SUBALTERNOS ACOUSTIC",
      "NELL DAVIES","BATTERY ACID ACOUSTIC","RED MOON HEROES","EX-","GRAIL GUARD","THE DOLLIES","THE GLITTERBOMBS","THROWN AWAY",
      "AFTRSHOCKS","SMOKING FINGERS","BE N!CE","MINIMAL FAFF","HAIRDYE","STATIC KILL ACOUSTIC SESSIONS","RAT BOY'S MAGIC SHOW",
      "BINGO WITH MAX SPLODGE"
    ]
  },
  Friday: {
    date: "Fri 7 Aug 2026",
    bands: [
      "SHAM 69","ANTI NOWHERE LEAGUE","REZILLOS","SPEAR OF DESTINY","THE BOYS","THE BUSINESS","FEROCIOUS DOG","LENE LOVICH",
      "TV SMITH & THE BORED TEENAGERS","BOOZE & GLORY","LOWER CLASS BRATS","THE QUEERS","JOHN OTWAY & WILD WILLY BARRETT","GOLDBLADE",
      "THE KIDS","MICK ROSSI'S GUN ST","CITIZEN FISH","RANDOM HAND","SPECIAL DUTIES","BAR STOOL PREACHERS ACOUSTIC",
      "RISKEE AND THE RIDICULE","ROMAN JUGG BAND","LOST CHERREES","SCREAMING DEAD","MERYL STREEK","SPLIT DOGS","BITE ME BAMBI",
      "DEAF DEVILS","THE SAMPLES","RIVALRY","MDM","SPLEEN","GYPSY PISTOLEROS","TWIST OFF!","SPECTRUM 4","BULLITZ 23","BATTERY ACID",
      "BROKEN 3 WAYS","CLUB BRAT","COVID 21","ANTI VIRUS","BORROWED TIME","FANTAZMAZ","THE PUNCTURISTS","UNRIVALLED","MARC VALENTINE",
      "50 FOOT WOMAN","RANDOM HAND ACOUSTIC","THE OUTCASTS ACOUSTIC","CRYSSIS ACOUSTIC","JO CARLEY AND THE OLD DRY SKULLS",
      "JOHNNY MOPED ACOUSTIC","CHRON GEN ACOUSTIC","VOODOO RADIO ACOUSTIC","I, DORIS ACOUSTIC","EMILY FLEA PLAYS THE DAMNED",
      "FIRE EXIT ACOUSTIC","LAST TREE SQUAD ACOUSTIC","MENACE WITH LEIGH HEGGARTY PLAY G.L.C. RIP","MAURI CLASH","CAROL HODGE","BITZY",
      "CHRISTMAS KWON FROM 18 FEVERS","A MURDER OF CROWS","THE COATHANGER SOLUTION","MALAD","CRITICAL CANDY","CATFIGHT","VERSAINTS",
      "THRONK!","DEFUSED","TOMORROW BURNS","WRISHLAS","R.P.C.","STATIC KILL ACOUSTIC SESSIONS","RAT BOY'S MAGIC SHOW","BINGO WITH MAX SPLODGE"
    ]
  },
  Saturday: {
    date: "Sat 8 Aug 2026",
    bands: [
      "COCK SPARRER","SKIDS","COCKNEY REJECTS","DIE TOTEN HOSEN","THE WURZELS","SUBHUMANS","PENETRATION","GBH","THE CHAMELEONS",
      "DAVE FORMULA & NOKO","CHRON GEN","999","JOHNNY MOPED","SPIZZ ENERGI","THE OUTCASTS","EXTC","RUBELLA BALLET","RUTS D.C. ACOUSTIC",
      "SPUNK VOLCANO & THE ERUPTIONS","GIMP FIST","LOS FASTIDIOS","THE RESTARTS","DISORDER","SALFORD JETS","4FT FINGERS",
      "PARANOID VISIONS","CULT MANIAX","RESISTANCE 77","TEAR UP","RICKY WARWICK & THE FIGHTING HEARTS","ANDERSON FROM CRAZYHEAD",
      "THE ATTACK","NOTSENSIBLES","LIBERTY & JUSTICE","LAST TREE SQUAD","PUBIC ENEMY","PUSSYLIQUOR","HEATHEN APOSTLES","FIRE EXIT",
      "KNOCK OFF","SPUNK","HUNG LIKE HANRATTY","GRIPPERS","THE GAKK","DEAD POLLYS","VOODOO RADIO","UNDER THE INFLUENCE","DIAZ BROTHERS",
      "PHAT PROBLEM","HELEN McCOOKERYBOOK?","HENRY CLUNEY","NICK CASH","RICKY WARWICK ACOUSTIC","BITE ME BAMBI ACOUSTIC","CHARLIE HARPER",
      "JESSI EASTFIELD","JONNY ROBSON","CHERRY AND PEESH","MUSIC IN OUR UNDERPANTS","REV PETERS","SHELL THE ALTERNATIVE FOLKIE",
      "SPECTRUM 4 ACOUSTIC","EMILY FLEA","MAISIE JO & THE ROGANS","WREX","XTINE AND & THE RECKLESS HEARTS","BLOODY BENDERS","THE JUNGLES",
      "RIVER RATTS","CLITSPIT","BAMBEES","SKINT KNEES","NOTHING THRIVES","TAlllON","STATIC KILL ACOUSTIC SESSIONS","RAT BOY'S MAGIC SHOW",
      "BINGO WITH MAX SPLODGE"
    ]
  },
  Sunday: {
    date: "Sun 9 Aug 2026",
    bands: [
      "STIFF LITTLE FINGERS","THE DICKIES","RUTS D.C.","DISCHARGE","CRO-MAGS","CHELSEA","UK DECAY","THE MEMBERS PLAY AT THE CHELSEA NIGHT CLUB",
      "THE GODFATHERS","HAYWIRE","ONE WAY SYSTEM","DIRTBOX DISCO","CULTURE SHOCK","CHANNEL 3","M.D.C.","TOTAL CHAOS","SHANGHAI TREASON",
      "THE DARLING BUDS","THE INSANE","EASTFIELD","THREATS","JOHN E VISTIC ROCK N ROLL SOUNDSYSTEM","DUMMY TOYS","MESS","SENSA YUMA",
      "MC16","ICONOCLASTS","RAT HOLE","MIKABOMB","ON THE HUH","THIRD HOUSE","PETE BENTHAM & THE DINNER LADIES","CHOKING SUSAN","SEGREGATES",
      "THE LONDON SEWAGE COMPANY","CONVICT CLASS","OORYA","BLACK SEPTEMBER","ALL COASTED","THE ANTIPOET","THE BOLOKOS ACOUSTIC",
      "ARTURO LURKERS/999 PUNKTRY SET","FAEBHEAN KWEST ( FEAT RACHEL DARQ)","JC CARROLL","LOS FASTIDIOS ACOUSTIC","M.D.C. ACOUSTIC",
      "MILLIE MANDERS"
    ]
  }
};

const STORAGE_KEY = "rebellion_planner_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { picks: {}, notes: {}, must: {} };
    const parsed = JSON.parse(raw);
    return {
      picks: parsed.picks || {},
      notes: parsed.notes || {},
      must: parsed.must || {}
    };
  } catch {
    return { picks: {}, notes: {}, must: {} };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function norm(s) {
  return (s || "").trim().toLowerCase();
}

function keyFor(day, band) {
  return `${day}::${band}`;
}

const elTabs = document.getElementById("tabs");
const elLeft = document.getElementById("left");
const elRight = document.getElementById("right");
const elStatus = document.getElementById("status");
const btnPlan = document.getElementById("btnPlan");
const btnBrowse = document.getElementById("btnBrowse");
const btnExport = document.getElementById("btnExport");
const btnImport = document.getElementById("btnImport");
const btnReset = document.getElementById("btnReset");

let state = loadState();
let view = "browse"; // browse | plan
let currentDay = Object.keys(LINEUP)[0];
let query = "";
let showOnlyPicked = false;

function countPicked() {
  return Object.values(state.picks).filter(Boolean).length;
}

function pickedForDay(day) {
  return Object.keys(state.picks)
    .filter((k) => k.startsWith(day + "::") && state.picks[k])
    .map((k) => k.split("::")[1]);
}

function renderTabs() {
  elTabs.innerHTML = "";
  for (const day of Object.keys(LINEUP)) {
    const b = document.createElement("button");
    b.className = "tab" + (day === currentDay ? " active" : "");
    b.textContent = `${day} · ${LINEUP[day].date}`;
    b.onclick = () => { currentDay = day; render(); };
    elTabs.appendChild(b);
  }
}

function renderBrowse() {
  const bands = LINEUP[currentDay].bands.slice();
  const q = norm(query);

  const filtered = bands.filter((band) => {
    const matches = !q || norm(band).includes(q);
    if (!matches) return false;
    if (showOnlyPicked) return !!state.picks[keyFor(currentDay, band)];
    return true;
  });

  elLeft.innerHTML = `
    <div class="row" style="justify-content: space-between; margin-bottom: 10px;">
      <div>
        <div style="font-weight:800; font-size:16px;">${currentDay}</div>
        <div class="small">${LINEUP[currentDay].date} · Pick bands (times not set yet)</div>
      </div>
      <div class="pill">${filtered.length}/${bands.length}</div>
    </div>

    <div class="row" style="margin-bottom: 10px;">
      <input id="search" placeholder="Search bands…" value="${escapeHtml(query)}" />
    </div>

    <div class="row" style="justify-content: space-between; margin-bottom: 10px;">
      <button class="btn ${showOnlyPicked ? "primary" : ""}" id="togglePicked">
        ${showOnlyPicked ? "Showing picked" : "Show only picked"}
      </button>
      <div class="small">Tip: tap a band to add notes + priority</div>
    </div>

    <div class="list" id="list"></div>
  `;

  const elSearch = document.getElementById("search");
  elSearch.oninput = (e) => { query = e.target.value; renderBrowseList(filtered); };

  document.getElementById("togglePicked").onclick = () => {
    showOnlyPicked = !showOnlyPicked;
    render();
  };

  renderBrowseList(filtered);
}

function renderBrowseList(filtered) {
  const elList = document.getElementById("list");
  elList.innerHTML = "";

  filtered.forEach((band) => {
    const k = keyFor(currentDay, band);
    const isPicked = !!state.picks[k];
    const isMust = !!state.must[k];
    const note = state.notes[k] || "";

    const row = document.createElement("div");
    row.className = "item";
    row.innerHTML = `
      <div style="padding-top:2px;">
        <input type="checkbox" ${isPicked ? "checked" : ""} aria-label="Pick ${escapeHtml(band)}" />
      </div>
      <div style="flex:1;">
        <div class="row" style="justify-content: space-between;">
          <h3>${escapeHtml(band)}</h3>
          <span class="tag ${isMust ? "must" : ""}">${isMust ? "Must see" : "Optional"}</span>
        </div>
        <div class="meta">${note ? "Note: " + escapeHtml(note) : "Tap to add note / set priority"}</div>
      </div>
    `;

    const checkbox = row.querySelector("input[type=checkbox]");
    checkbox.onclick = (e) => {
      e.stopPropagation();
      state.picks[k] = checkbox.checked;
      if (!checkbox.checked) {
        delete state.must[k];
        delete state.notes[k];
      }
      saveState(state);
      renderStatus();
      if (showOnlyPicked) render();
      else renderBrowseList(filtered);
    };

    row.onclick = () => openBandEditor(currentDay, band);
    elList.appendChild(row);
  });
}

function openBandEditor(day, band) {
  const k = keyFor(day, band);
  const isPicked = !!state.picks[k];
  if (!isPicked) {
    state.picks[k] = true; // selecting a band when you open editor feels right
  }
  const isMust = !!state.must[k];
  const note = state.notes[k] || "";

  elRight.innerHTML = `
    <div style="font-weight: 800; font-size: 16px;">${escapeHtml(band)}</div>
    <div class="small" style="margin-bottom: 10px;">${day} · ${LINEUP[day].date}</div>

    <div class="row" style="gap:10px; margin-bottom:10px;">
      <button class="btn ${isMust ? "primary" : ""}" id="btnMust">${isMust ? "Must see ✓" : "Mark Must see"}</button>
      <button class="btn danger" id="btnRemove">Remove</button>
    </div>

    <div class="small" style="margin-bottom:6px;">Notes (mates to meet, clashes, “see if times allow”…)</div>
    <textarea id="note" placeholder="E.g. priority if no clash; try to catch full set.">${escapeHtml(note)}</textarea>

    <div class="row" style="margin-top:10px;">
      <button class="btn primary" id="btnSave">Save</button>
    </div>

    <div class="small" style="margin-top:12px;">
      When set times drop, you can add them into notes, or we can update the app to support stages + time conflicts.
    </div>
  `;

  document.getElementById("btnMust").onclick = () => {
    state.must[k] = !state.must[k];
    saveState(state);
    openBandEditor(day, band);
    renderStatus();
    render();
  };

  document.getElementById("btnRemove").onclick = () => {
    delete state.picks[k];
    delete state.must[k];
    delete state.notes[k];
    saveState(state);
    renderStatus();
    elRight.innerHTML = renderSidebarDefault();
    render();
  };

  document.getElementById("btnSave").onclick = () => {
    const v = document.getElementById("note").value || "";
    if (v.trim()) state.notes[k] = v.trim();
    else delete state.notes[k];
    saveState(state);
    renderStatus();
    render();
  };

  saveState(state);
  renderStatus();
}

function renderPlan() {
  const days = Object.keys(LINEUP);
  const blocks = days.map((day) => {
    const list = pickedForDay(day);
    const mustCount = list.filter((band) => state.must[keyFor(day, band)]).length;

    const itemsHtml = list.length
      ? list
          .sort((a, b) => {
            const am = !!state.must[keyFor(day, a)];
            const bm = !!state.must[keyFor(day, b)];
            if (am !== bm) return bm - am;
            return a.localeCompare(b);
          })
          .map((band) => {
            const k = keyFor(day, band);
            const isMust = !!state.must[k];
            const note = state.notes[k] || "";
            return `
              <div class="item" style="cursor: default;">
                <div style="flex:1;">
                  <div class="row" style="justify-content: space-between;">
                    <h3>${escapeHtml(band)}</h3>
                    <span class="tag ${isMust ? "must" : ""}">${isMust ? "Must see" : "Optional"}</span>
                  </div>
                  <div class="meta">${note ? escapeHtml(note) : "No note"}</div>
                </div>
              </div>
            `;
          })
          .join("")
      : `<div class="small">No picks yet for ${day}. Tap “Browse” to add some.</div>`;

    return `
      <div class="card" style="margin-bottom:10px;">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div style="font-weight:800;">${day}</div>
            <div class="small">${LINEUP[day].date}</div>
          </div>
          <div class="pill">${list.length} picks · ${mustCount} must</div>
        </div>
        <div style="margin-top:10px;" class="list">${itemsHtml}</div>
      </div>
    `;
  }).join("");

  elLeft.innerHTML = `
    <div class="row" style="justify-content: space-between; margin-bottom: 10px;">
      <div>
        <div style="font-weight:800; font-size:16px;">My Plan</div>
        <div class="small">Selections only (times not published yet)</div>
      </div>
      <button class="btn" id="btnShare">Share summary</button>
    </div>
    ${blocks}
  `;

  document.getElementById("btnShare").onclick = async () => {
    const text = buildShareText();
    try {
      if (navigator.share) {
        await navigator.share({ title: "Rebellion 2026 Planner", text });
      } else {
        await navigator.clipboard.writeText(text);
        alert("Copied summary to clipboard!");
      }
    } catch {
      // ignore
    }
  };
}

function buildShareText() {
  const days = Object.keys(LINEUP);
  const lines = ["Rebellion 2026 — my picks (times TBD)"];
  for (const day of days) {
    const picks = pickedForDay(day);
    if (!picks.length) continue;
    lines.push(`\n${day} (${LINEUP[day].date})`);
    picks
      .sort((a, b) => {
        const am = !!state.must[keyFor(day, a)];
        const bm = !!state.must[keyFor(day, b)];
        if (am !== bm) return bm - am;
        return a.localeCompare(b);
      })
      .forEach((band) => {
        const k = keyFor(day, band);
        const star = state.must[k] ? "★ " : "- ";
        const note = state.notes[k] ? ` — ${state.notes[k]}` : "";
        lines.push(`${star}${band}${note}`);
      });
  }
  if (lines.length === 1) lines.push("\n(No picks yet)");
  return lines.join("\n");
}

function renderSidebarDefault() {
  return `
    <div style="font-weight:800; font-size: 16px;">Quick help</div>
    <div class="small" style="margin-top:6px; line-height:1.4;">
      • Use <b>Browse</b> to pick bands for each day.<br/>
      • Tap a band to add a note and mark it <span style="color: var(--accent);">Must see</span>.<br/>
      • Use <b>My Plan</b> to see your daily list.<br/>
      • Export/Import lets you back up or share your selections.<br/>
      <br/>
      Source: official Rebellion 2026 lineup-by-day page.
    </div>
  `;
}

function renderStatus() {
  const picked = countPicked();
  const must = Object.values(state.must).filter(Boolean).length;
  elStatus.textContent = `${picked} picked · ${must} must-see`;
}

function render() {
  renderTabs();
  renderStatus();

  if (view === "browse") {
    renderBrowse();
    elRight.innerHTML = renderSidebarDefault();
  } else {
    renderPlan();
    elRight.innerHTML = renderSidebarDefault();
  }

  btnPlan.classList.toggle("primary", view === "plan");
  btnBrowse.classList.toggle("primary", view === "browse");
}

btnPlan.onclick = () => { view = "plan"; render(); };
btnBrowse.onclick = () => { view = "browse"; render(); };

btnExport.onclick = async () => {
  const payload = JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), ...state }, null, 2);
  try {
    if (navigator.share) {
      const file = new File([payload], "rebellion-2026-planner-export.json", { type: "application/json" });
      await navigator.share({ title: "Rebellion Planner Export", files: [file] });
    } else {
      await navigator.clipboard.writeText(payload);
      alert("Export JSON copied to clipboard.");
    }
  } catch {
    // ignore
  }
};

btnImport.onclick = async () => {
  const text = prompt("Paste export JSON here:");
  if (!text) return;
  try {
    const obj = JSON.parse(text);
    state = {
      picks: obj.picks || {},
      notes: obj.notes || {},
      must: obj.must || {}
    };
    saveState(state);
    render();
    alert("Import complete.");
  } catch {
    alert("That didn’t look like valid JSON.");
  }
};

btnReset.onclick = () => {
  if (!confirm("Reset all picks/notes?")) return;
  state = { picks: {}, notes: {}, must: {} };
  saveState(state);
  render();
};

function escapeHtml(str) {
  return (str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// init
render();
