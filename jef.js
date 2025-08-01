<script>
  const style = document.createElement('style');
  style.textContent = `
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }

    .overlay-jef {
      position: fixed;
      z-index: 99999;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #0f0;
      font-family: 'Courier New', monospace;
      font-size: 2rem;
      text-align: center;
      animation: glitch 1s infinite;
    }

    .overlay-jef h1 {
      font-size: 4rem;
      text-shadow: 0 0 5px red, 0 0 10px lime;
    }

    .overlay-jef p {
      margin-top: 1rem;
      font-size: 1.5rem;
      opacity: 0.7;
    }

    .overlay-jef::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        to bottom,
        rgba(0, 255, 0, 0.05),
        rgba(0, 255, 0, 0.05) 2px,
        transparent 2px,
        transparent 4px
      );
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  const div = document.createElement('div');
  div.className = 'overlay-jef';
  div.innerHTML = `
    <h1>HACKED BY JEF</h1>
    <p>Belajar JavaScript & Web Overlay</p>
  `;
  document.body.appendChild(div);
</script>