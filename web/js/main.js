document.addEventListener('DOMContentLoaded', function() {
  window.scrollTo(0, 0);
  
  // 添加对话框悬停效果
  const dialogs = document.querySelectorAll('.dialog');
  dialogs.forEach(dialog => {
    dialog.setAttribute('role', 'button');
    dialog.setAttribute('aria-label', dialog.textContent.trim());
    dialog.addEventListener('mouseenter', function() {
      this.classList.add('dialog-hover');
    });
    dialog.addEventListener('mouseleave', function() {
      this.classList.remove('dialog-hover');
    });
    dialog.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
    dialog.style.cursor = 'pointer';
  });

  window.addEventListener('scroll', function() {
    const intro = document.querySelector('.intro');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const scrollPosition = window.scrollY;

    // 减少触发效果的滚动距离
    if (scrollPosition > 25) { 
      intro.classList.add('show');
      h1.classList.add('shrink');
      h2.classList.add('shrink');
    } else {
      intro.classList.remove('show');
      h1.classList.remove('shrink');
      h2.classList.remove('shrink');
    }
  });

  // 获取一言 API 数据并显示
  const fetchWithTimeout = (url, timeout = 5000) => {
    return Promise.race([
      fetch(url),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timed out')), timeout)
      )
    ]);
  };

  fetchWithTimeout('https://international.v1.hitokoto.cn/?c=k')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = `${data.hitokoto} —— ${data.from_who || '佚名'} 《${data.from}》`;
    })
    .catch(error => {
      console.error('Error:', error);
      const hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = "一言加载失败，请刷新页面重试。";
    });

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const moveBackground = debounce(function(e) {
    const bg = document.getElementById('bg');
    if (!bg) return;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (mouseX - centerX) / 20;
    const offsetY = (mouseY - centerY) / 20;
    const scale = 1.2;

    bg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  }, 10);

  document.addEventListener('mousemove', moveBackground);
});
