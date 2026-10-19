
    updateCount();

    function updateCount() {
      const items = document.querySelectorAll('.fav-item');
      document.getElementById('favCount').textContent = items.length;
      if (items.length === 0) {
        document.getElementById('favEmpty').style.display = 'flex';
        document.getElementById('favGrid').style.display = 'none';
      }
    }

    // Remove individual fav
    document.querySelectorAll('.remove-fav').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.fav-item');
        card.style.transform = 'scale(0.9)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.3s';
        setTimeout(() => { card.remove(); updateCount(); }, 300);
      });
    });

    // Clear all
    document.getElementById('clearFavs').addEventListener('click', () => {
      document.querySelectorAll('.fav-item').forEach(card => {
        card.style.transform = 'scale(0.9)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.3s';
      });
      setTimeout(() => {
        document.querySelectorAll('.fav-item').forEach(c => c.remove());
        updateCount();
      }, 300);
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
  