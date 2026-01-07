const PRIZES = [
  "設計費半價（原價6000$/坪）",
  "贈送奢石桌 1.8米 × 1.8米（材料，配件與加工另計）",
  "贈送電視牆 1.8米 × 1.8米（材料，配件與加工另計）",
  "贈送全室國際牌 RISNA 系列開關插座面板",
  "贈送三坪藝術塗料"
];

const drawBtn = document.getElementById("drawBtn");
const packet = document.getElementById("packet");
const result = document.getElementById("result");

let hasDrawn = false;

drawBtn.addEventListener("click", () => {
  if (hasDrawn) return;
  hasDrawn = true;

  drawBtn.disabled = true;
  packet.classList.remove("hidden");
  result.classList.add("hidden");

  setTimeout(() => {
    const prize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
    result.textContent = "你抽到：" + prize;
    result.classList.remove("hidden");
  }, 900);
});
// ===== 不規則金粉粒子（雪花式亂飄）=====
(function makeGoldDust(){
  const wrap = document.querySelector(".gold-dust");
  if(!wrap) return;

  // 先清掉舊的（避免你 F5 或重載時疊太多）
  wrap.innerHTML = "";

  // 粒子數量：桌機多一點、手機少一點
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  const COUNT = isMobile ? 40 : 80;

  for(let i=0;i<COUNT;i++){
    const dot = document.createElement("i");
    dot.className = "dust";

    // 隨機參數
    const x = Math.random() * 100;             // 0~100vw
    const size = 2 + Math.random() * 3.6;      // 2~5.6px
    const opacity = 0.25 + Math.random() * 0.55;// 0.25~0.8
    const fallT = 10 + Math.random() * 18;     // 10~28s
    const fallDelay = -Math.random() * fallT;  // 讓一開始就分散在不同高度
    const driftT = 3 + Math.random() * 5;      // 3~8s
    const driftDelay = -Math.random() * driftT;
    const sway = 10 + Math.random() * 36;      // 左右飄幅 10~46px

    dot.style.setProperty("--x", `${x}vw`);
    dot.style.setProperty("--s", `${size}px`);
    dot.style.setProperty("--o", opacity);
    dot.style.setProperty("--t", `${fallT}s`);
    dot.style.setProperty("--d", `${fallDelay}s`);
    dot.style.setProperty("--t2", `${driftT}s`);
    dot.style.setProperty("--d2", `${driftDelay}s`);
    dot.style.setProperty("--w", `${sway}px`);

    wrap.appendChild(dot);
  }
})();
