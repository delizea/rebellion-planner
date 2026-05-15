// app.js

const LINEUP = {
  Thursday: {
    date: "Thu 6 Aug 2026",
    bands: [
      {
        name: "THE STRANGLERS",
        stage: "Empress Ballroom",
        start: "21:30",
        end: "22:30"
      },
      {
        name: "BUZZCOCKS",
        stage: "Arena",
        start: "20:15",
        end: "21:00"
      },
      {
        name: "STEVE IGNORANT BAND CRASS SET",
        stage: "Opera House",
        start: "19:00",
        end: "20:00"
      }
    ]
  },

  Friday: {
    date: "Fri 7 Aug 2026",
    bands: [
      {
        name: "SHAM 69",
        stage: "Empress Ballroom",
        start: "21:45",
        end: "22:45"
      }
    ]
  },

  Saturday: {
    date: "Sat 8 Aug 2026",
    bands: [
      {
        name: "COCK SPARRER",
        stage: "Empress Ballroom",
        start: "22:00",
        end: "23:15"
      }
    ]
  },

  Sunday: {
    date: "Sun 9 Aug 2026",
    bands: [
      {
        name: "STIFF LITTLE FINGERS",
        stage: "Empress Ballroom",
        start: "21:00",
        end: "22:15"
      }
    ]
  }
};

const STORAGE_KEY = "rebellion_planner_v2";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      picks: {},
      notes: {},
      must: {}
    };
  } catch {
    return { picks: {}, notes: {}, must: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function norm(s) {
  return (s || "").toLowerCase().trim();
}

function keyFor(day, band) {
  return `${day}::${band}`;
}

function escapeHtml(str) {
  return (str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function overlaps(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd;
}

function getBand(day, name) {
  return LINEUP[day].bands.find(b => b.name === name);
}

const elTabs = document.getElementById("tabs");
const elLeft = document.getElementById("left");
const elRight = document.getElementById("right");
const elStatus = document.getElementById("status");

let state = loadState();
let view = "browse";
let currentDay = "Thursday";
let query = "";

function renderTabs() {
  elTabs.innerHTML = "";

  Object.keys(LINEUP).forEach(day => {
    const btn = document.createElement("button");

    btn.className =
      "tab" + (currentDay === day ? " primary" : "");

    btn.textContent = `${day} · ${LINEUP[day].date}`;

    btn.onclick = () => {
      currentDay = day;
      render();
    };

    elTabs.appendChild(btn);
  });
}

function renderBrowse() {
  const bands = LINEUP[currentDay].bands.filter(b =>
    norm(b.name).includes(norm(query))
  );

  elLeft.innerHTML = `
    <div class="card">
      <div class="row" style="justify-content:space-between;">
        <div>
          <div style="font-weight:800;">
            ${currentDay}
          </div>

          <div class="small">
            ${LINEUP[currentDay].date}
          </div>
        </div>

        <div class="pill">${bands.length}</div>
      </div>

      <div style="margin-top:12px;">
        <input
          id="search"
          placeholder="Search bands..."
          value="${escapeHtml(query)}"
        />
      </div>

      <div class="list" id="bandList" style="margin-top:12px;"></div>
    </div>
  `;

  document.getElementById("search").oninput = e => {
    query = e.target.value;
    renderBrowse();
  };

  const elList = document.getElementById("bandList");

  bands.forEach(band => {
    const k = keyFor(currentDay, band.name);

    const picked = !!state.picks[k];
    const must = !!state.must[k];

    const row = document.createElement("div");

    row.className = "item";

    row.innerHTML = `
      <input type="checkbox" ${picked ? "checked" : ""} />

      <div style="flex:1;">
        <div class="row" style="justify-content:space-between;">
          <h3>${escapeHtml(band.name)}</h3>

          <span class="tag ${must ? "must" : ""}">
            ${must ? "Must see" : "Optional"}
          </span>
        </div>

        <div class="meta">
          ${band.start}-${band.end}
          · ${escapeHtml(band.stage)}
        </div>
      </div>
    `;

    row.querySelector("input").onclick = e => {
      e.stopPropagation();

      state.picks[k] = e.target.checked;

      if (!e.target.checked) {
        delete state.must[k];
        delete state.notes[k];
      }

      saveState();
      renderStatus();
    };

    row.onclick = () => openEditor(currentDay, band.name);

    elList.appendChild(row);
  });
}

function openEditor(day, bandName) {
  const band = getBand(day, bandName);

  const k = keyFor(day, bandName);

  state.picks[k] = true;

  saveState();

  elRight.innerHTML = `
    <div style="font-weight:800;font-size:18px;">
      ${escapeHtml(band.name)}
    </div>

    <div class="small" style="margin-top:4px;">
      ${band.start}-${band.end}
      · ${escapeHtml(band.stage)}
    </div>

    <div style="margin-top:12px;">
      <button class="btn ${
        state.must[k] ? "primary" : ""
      }" id="mustBtn">
        ${state.must[k] ? "Must see ✓" : "Mark Must see"}
      </button>
    </div>

    <div style="margin-top:12px;">
      <textarea
        id="note"
        placeholder="Notes..."
      >${escapeHtml(state.notes[k] || "")}</textarea>
    </div>

    <div style="margin-top:12px;">
      <button class="btn primary" id="saveBtn">
        Save
      </button>
    </div>
  `;

  document.getElementById("mustBtn").onclick = () => {
    state.must[k] = !state.must[k];
    saveState();
    openEditor(day, bandName);
    renderStatus();
  };

  document.getElementById("saveBtn").onclick = () => {
    state.notes[k] =
      document.getElementById("note").value;

    saveState();
    renderStatus();
  };

  renderStatus();
}

function detectClashes(day) {
  const picks = Object.keys(state.picks)
    .filter(k => k.startsWith(day + "::"))
    .filter(k => state.picks[k])
    .map(k => getBand(day, k.split("::")[1]));

  const clashes = [];

  for (let i = 0; i < picks.length; i++) {
    for (let j = i + 1; j < picks.length; j++) {
      const a = picks[i];
      const b = picks[j];

      if (
        overlaps(
          a.start,
          a.end,
          b.start,
          b.end
        )
      ) {
        clashes.push([a, b]);
      }
    }
  }

  return clashes;
}

function renderPlan() {
  let html = "";

  Object.keys(LINEUP).forEach(day => {
    const picks = Object.keys(state.picks)
      .filter(k => k.startsWith(day + "::"))
      .filter(k => state.picks[k])
      .map(k => getBand(day, k.split("::")[1]));

    const clashes = detectClashes(day);

    html += `
      <div class="card" style="margin-bottom:12px;">
        <div class="row" style="justify-content:space-between;">
          <div>
            <div style="font-weight:800;">${day}</div>
            <div class="small">${LINEUP[day].date}</div>
          </div>

          <div class="pill">
            ${picks.length} picks
          </div>
        </div>

        ${
          clashes.length
            ? `
              <div class="tag clash" style="margin-top:10px;">
                ${clashes.length} clash(es)
              </div>
            `
            : ""
        }

        <div class="list" style="margin-top:12px;">
          ${
            picks.length
              ? picks.map(band => `
                  <div class="item">
                    <div style="flex:1;">
                      <div class="row" style="justify-content:space-between;">
                        <h3>${escapeHtml(band.name)}</h3>
                      </div>

                      <div class="meta">
                        ${band.start}-${band.end}
                        · ${escapeHtml(band.stage)}
                      </div>
                    </div>
                  </div>
                `).join("")
              : `<div class="small">No picks yet.</div>`
          }
        </div>
      </div>
    `;
  });

  elLeft.innerHTML = html;
}

function renderStatus() {
  const picked =
    Object.values(state.picks).filter(Boolean).length;

  const must =
    Object.values(state.must).filter(Boolean).length;

  elStatus.textContent =
    `${picked} picked · ${must} must`;
}

function render() {
  renderTabs();
  renderStatus();

  if (view === "browse") {
    renderBrowse();
  } else {
    renderPlan();
  }

  elRight.innerHTML = `
    <div style="font-weight:800;">
      Rebellion 2026 Planner
    </div>

    <div class="small" style="margin-top:8px;line-height:1.5;">
      • Browse bands by day<br/>
      • Mark must-see acts<br/>
      • Detect time clashes<br/>
      • Store notes offline<br/>
      • Install as a phone app
    </div>
  `;
}

document.getElementById("btnBrowse").onclick = () => {
  view = "browse";
  render();
};

document.getElementById("btnPlan").onclick = () => {
  view = "plan";
  render();
};

document.getElementById("btnReset").onclick = () => {
  if (!confirm("Reset everything?")) return;

  state = {
    picks: {},
    notes: {},
    must: {}
  };

  saveState();
  render();
};

document.getElementById("btnExport").onclick = async () => {
  const json = JSON.stringify(state, null, 2);

  await navigator.clipboard.writeText(json);

  alert("Copied export JSON.");
};

document.getElementById("btnImport").onclick = () => {
  const text = prompt("Paste export JSON");

  if (!text) return;

  try {
    state = JSON.parse(text);

    saveState();

    render();

    alert("Import complete.");
  } catch {
    alert("Invalid JSON.");
  }
};

render();
