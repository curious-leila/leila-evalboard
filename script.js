/* 数据全部来自冻结的评测结果（consistency_report.md / reliability_matrix.md / ai_scores.csv），页面不做任何重新计算。 */
(function () {
  "use strict";

  var DETAILS = {
    "T-H": { dim: "术语一致性", risk: "高风险", strategy: "强制人工：100% 人工复核",
      cases: ["S061 · S065 · S069：claim 译作申诉/索赔，AI 判无问题放行，人工以 PayPal 官方文档纠回（Minor）",
              "S121 · S125 · S129：Kick 译作踢出/踢，AI 判放行或低估严重度，人工以中文产品界面惯例纠回（Minor/Major）"],
      note: "失败模式：AI 在无外部依据时自信判断官方译法后放行，涉及资金与不可逆操作的术语必须人审。" },
    "T-M": { dim: "术语一致性", risk: "中风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "18 次判断全部一致。" },
    "T-L": { dim: "术语一致性", risk: "低风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "9 次判断全部一致。" },

    "A-H": { dim: "准确性", risk: "高风险", strategy: "AI 初评 + 10% 人工抽检（重点核数字/条件）",
      cases: ["S006：AI 偏严误报，将营销文案的修辞性增译扣为 Minor，人工判无问题（Neutral）"],
      note: "数字与条件类高风险内容整体可靠，但保留抽检校验。" },
    "A-M": { dim: "准确性", risk: "中风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "18 次判断全部一致。" },
    "A-L": { dim: "准确性", risk: "低风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "9 次判断全部一致。" },

    "L-H": { dim: "本地化规范", risk: "高风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "18 次判断全部一致。" },
    "L-M": { dim: "本地化规范", risk: "中风险", strategy: "AI 初评 + 10% 人工抽检",
      cases: ["S031：框架歧义项，中英混排空格不在本地化规范定义范围内，AI 越界扣分，本轮维持 Neutral"],
      note: "含一处框架歧义项，保留抽检。" },
    "L-L": { dim: "本地化规范", risk: "低风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "9 次判断全部一致。" },

    "U-H": { dim: "受众适配性", risk: "高风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "18 次判断全部一致。" },
    "U-M": { dim: "受众适配性", risk: "中风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "18 次判断全部一致。" },
    "U-L": { dim: "受众适配性", risk: "低风险", strategy: "AI 自动评分 + 5% 人工抽检", cases: [], note: "9 次判断全部一致。" }
  };

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  /* ---------- 矩阵格子点击 → 详情面板 ---------- */
  var panel = document.getElementById("cell-detail");
  var cells = document.querySelectorAll("td.cell[data-key]");

  function showCell(key, td) {
    cells.forEach(function (c) { c.classList.remove("selected"); });
    if (td) td.classList.add("selected");
    var d = DETAILS[key];
    if (!d) return;
    var frac = td ? td.querySelector(".rate").textContent + " · " + td.querySelector(".frac").textContent : "";
    var html = '<p class="cd-title">' + esc(d.dim) + " × " + esc(d.risk) + "　" + esc(frac) + "</p>";
    html += '<div class="cd-grid"><div class="cd-item"><b>介入策略</b><span class="v">' + esc(d.strategy) + "</span></div></div>";
    if (d.cases.length) {
      html += '<ul class="cd-cases">';
      d.cases.forEach(function (c) { html += "<li>" + esc(c) + "</li>"; });
      html += "</ul>";
    }
    html += '<p class="cd-note">' + esc(d.note) + "</p>";
    panel.innerHTML = html;
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  cells.forEach(function (td) {
    td.addEventListener("click", function () { showCell(td.getAttribute("data-key"), td); });
    td.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showCell(td.getAttribute("data-key"), td); }
    });
  });

  /* ---------- 侧边栏：滚动高亮 + 移动端抽屉 ---------- */
  var sidebar = document.getElementById("sidebar");
  var navToggle = document.getElementById("navToggle");
  var navLinksBox = document.getElementById("navLinks");
  var scrim = document.getElementById("scrim");
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var sections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  function isMobile() { return window.innerWidth <= 900; }

  function closeMenu() {
    if (sidebar) sidebar.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    if (scrim) scrim.classList.remove("show");
  }
  function openMenu() {
    if (sidebar) sidebar.classList.add("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "true");
    if (scrim) scrim.classList.add("show");
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var open = sidebar && sidebar.classList.contains("is-open");
      open ? closeMenu() : openMenu();
    });
  }
  if (scrim) scrim.addEventListener("click", closeMenu);
  navAnchors.forEach(function (a) { a.addEventListener("click", function () { if (isMobile()) closeMenu(); }); });

  function onScroll() {
    var pos = window.scrollY + 140;
    var current = null;
    sections.forEach(function (sec) { if (sec.offsetTop <= pos) current = sec.id; });
    navAnchors.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
