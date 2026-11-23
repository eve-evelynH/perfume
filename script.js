const slides = [...document.querySelectorAll('.slide')];
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const counter = document.querySelector('.counter');

let current = 0;

function show(n) {
  // 限制頁碼不能超過第一頁或最後一頁
  current = Math.max(0, Math.min(n, slides.length - 1));

  // 顯示目前頁面，隱藏其他頁面
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === current);
  });

  // 更新頁碼
  counter.textContent = (current + 1) + ' / ' + slides.length;

  // 第一頁停用上一頁；最後一頁停用下一頁
  prev.disabled = current === 0;
  next.disabled = current === slides.length - 1;
}

// 點擊按鈕切換頁面
prev.onclick = () => show(current - 1);
next.onclick = () => show(current + 1);

// 使用鍵盤左右方向鍵切換頁面
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    show(current + 1);
  }

  if (event.key === 'ArrowLeft') {
    show(current - 1);
  }
});

// 開啟網站時顯示第一頁
show(0);
