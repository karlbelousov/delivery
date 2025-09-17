const modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rests-1.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rests-2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rests-3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rests-4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rests-5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rests-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <a href="./goods.html?id=${card.id}" class="product-card">
                <div class="product-card__image">
                    <img src="./images/rests/${card.image}" alt="${card.image}">
                </div>
                <div class="product-card__description">
                    <div class="product-card__description-row">
                        <h4 class="product-card__description--title">${card.title}</h4>
                        <div class="product-card__description--badge">${card.time} мин</div>
                    </div>
                    <div class="product-card__description-row">
                        <div class="product-card__description-info">
                            <div class="product-card__description-info--raiting">
                                <img src="./images/icons/star.svg" alt="star">
                                ${card.rating}
                            </div>
                            <div class="product-card__description-info--price">
                                От ${card.price} ₽
                            </div>
                            <div class="product-card__description-info--group">
                                ${card.type}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        `
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");

  const goodArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "goods-1.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      description: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "goods-2.jpg",
    },
    {
      id: 2,
      title: "Окинава стандарт",
      description: "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
      price: 250,
      image: "goods-3.jpg",
    },
    {
      id: 3,
      title: "Цезарь маки хl",
      description: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
      price: 250,
      image: "goods-4.jpg",
    },
    {
      id: 4,
      title: "Ясай маки стандарт 185 г",
      description: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
      price: 250,
      image: "goods-5.jpg",
    },
    {
      id: 5,
      title: "Ролл с креветкой стандарт",
      description: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцыРис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "goods-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderGoods = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="product-card">
            <div class="product-card__image">
                <img src="./images/goods/${card.image}" alt="${card.image}">
            </div>
            <div class="product-card__description">
                <div class="product-card__description-row">
                    <h5 class="product-card__description--name">
                      ${card.title}
                    </h5>
                </div>
                <div class="product-card__description-row">
                    <p class="product-card__description--text">
                      ${card.description}
                    </p>
                </div>
                <div class="product-card__description-row">
                    <div class="product-card__description-controls">
                        <button class="btn btn-primary">
                            В корзину
                            <img src="./images/icons/shopping-cart-white.svg" alt="cart" />
                        </button>
                        <span class="product-card__description-controls--price">
                          ${card.price}
                        </span>
                    </div>
                </div>
              </div>
          </div>
        `
      );
    });
  };

  if (container) {
    loading();
    setTimeout(() => {
      renderGoods(goodArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();