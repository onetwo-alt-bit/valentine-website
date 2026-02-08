const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// NO button bhaagta rahega
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES click → love message 💖
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      text-align:center;
      color:white;
      font-size:2rem;
      padding:20px;
    ">
      <div>
        <h1>Yayyy ❤️</h1>
        <p>
          You are my Valentine today, tomorrow, and forever 💕<br><br>
          I love you so much, pumpkin 😘
        </p>
      </div>
    </div>
  `;
});
