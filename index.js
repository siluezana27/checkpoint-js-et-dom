document.addEventListener('DOMContentLoaded', () => {
  const updateTotalPrice = () => {
    let total = 0;
    document.querySelectorAll('.card').forEach(card => {
      const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
      const quantity = parseInt(card.querySelector('.quantity').textContent);
      total += unitPrice * quantity;
    });
    document.querySelector('.total').textContent = `${total} $`;
  };

  document.querySelectorAll('.fa-plus-circle').forEach(button => {
    button.addEventListener('click', () => {
      const quantityElement = button.nextElementSibling;
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
      updateTotalPrice();
    });
  });

  document.querySelectorAll('.fa-minus-circle').forEach(button => {
    button.addEventListener('click', () => {
      const quantityElement = button.previousElementSibling;
      if (parseInt(quantityElement.textContent) > 0) {
        quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
        updateTotalPrice();
      }
    });
  });

  document.querySelectorAll('.fa-trash-alt').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card-body');
      card.remove();
      updateTotalPrice();
    });
  });

  document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click', () => {
      button.style.color = 'red';
      setTimeout(() => {
        button.style.color = '';
      }, 300000); // 5 minutes in milliseconds
    });
  });

  updateTotalPrice();
});

/*document.addEventListener('DOMContentLoaded', () => {
  const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll('.card').forEach(card => {
          const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
          const quantity = parseInt(card.querySelector('.quantity').textContent);
          total += unitPrice * quantity;
      });
      document.querySelector('.total').textContent = `${total} $`;
  };

  const updateQuantity = (element, delta) => {
      const quantityElement = element.closest('.card-body').querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);
      quantity = Math.max(0, quantity + delta);
      quantityElement.textContent = quantity;
      updateTotalPrice();
  };

  const toggleHeart = (heartElement) => {
      heartElement.classList.toggle('fas');
      heartElement.classList.toggle('far');
  };

  const deleteCard = (deleteElement) => {
      const card = deleteElement.closest('.card');
      card.remove();
      updateTotalPrice();
  };

  document.querySelectorAll('.fa-plus-circle').forEach(button => {
      button.addEventListener('click', () => {
          updateQuantity(button, 1);
      });
  });

  document.querySelectorAll('.fa-minus-circle').forEach(button => {
      button.addEventListener('click', () => {
          updateQuantity(button, -1);
      });
  });

  document.querySelectorAll('.fa-heart').forEach(heart => {
      heart.addEventListener('click', () => {
          toggleHeart(heart);
      });
  });

  document.querySelectorAll('.fa-trash-alt').forEach(trash => {
      trash.addEventListener('click', () => {
          deleteCard(trash);
      });
  });

  updateTotalPrice(); // Initial call to set the total price
});*/

