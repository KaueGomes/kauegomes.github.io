document.addEventListener('DOMContentLoaded', () => {
  // Clique nos botões de adicionar ao carrinho
  document.querySelectorAll('.add-to-cart').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('[data-product-id]');
      const id = card?.dataset.productId;
      const name = card?.querySelector('h3')?.textContent?.trim();
      console.info('[rastreamento] add_to_cart', { id, name });
    });
  });

  // Envio do formulário de newsletter (simulado)
  const form = document.querySelector('[data-newsletter-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nome = data.get('nome');
      const email = data.get('email');

      console.info('[rastreamento] newsletter_submit', { nome, email });

      const feedback = document.querySelector('[data-newsletter-feedback]');
      if (feedback) {
        feedback.textContent = `${nome}, inscrição confirmada!`;
        feedback.classList.add('show');
      }

      form.reset();
    });
  }
});

