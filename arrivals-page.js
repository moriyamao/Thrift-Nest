
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        filterProducts();
      });
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', filterProducts);

    function filterProducts() {
      const filter = document.querySelector('.filter-tab.active').dataset.filter;
      const query = document.getElementById('searchInput').value.toLowerCase();
      let visible = 0;
      document.querySelectorAll('.product-card').forEach(card => {
        const catMatch = filter === 'all' || card.dataset.cat === filter;
        const nameMatch = card.dataset.name.includes(query);
        const show = catMatch && nameMatch;
        card.style.display = show ? 'block' : 'none';
        if (show) visible++;
      });
      document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
    }

    // Fav toggle
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
  