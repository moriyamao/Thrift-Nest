
    // Countdown timer — set to 24 hours from now
    const end = new Date(Date.now() + 24 * 60 * 60 * 1000);
    function tick() {
      const diff = end - Date.now();
      if (diff <= 0) return;
      const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
      document.getElementById('cd-hours').textContent = h;
      document.getElementById('cd-mins').textContent = m;
      document.getElementById('cd-secs').textContent = s;
    }
    tick();
    setInterval(tick, 1000);

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        document.querySelectorAll('.product-card').forEach(card => {
          card.style.display = (filter === 'all' || card.dataset.cat === filter) ? 'block' : 'none';
        });
      });
    });

    // Fav button toggle
    document.querySelectorAll('.fav-btn').forEach(btn => {
      btn.addEventListener('click', () => btn.classList.toggle('active'));
    });

    // Cart toast
    document.querySelectorAll('.cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.closest('.product-card').querySelector('.product-name').textContent;
        showToast('Added to cart: ' + name);
      });
    });

    function showToast(msg) {
      const t = document.createElement('div');
      t.className = 'toast';
      t.textContent = msg;
      document.body.appendChild(t);
      setTimeout(() => t.classList.add('show'), 10);
      setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
    }
  