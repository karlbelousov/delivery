<template>
  <section class="products">
    <div class="container">
      <div class="products-wrapper" id="goods-container">
        <div class="product-card" v-for="good in goodArray" :key="good.id">
          <div class="product-card__image">
            <img :src="getUrl(good.image)" alt="goods-1" />
          </div>
          <div class="product-card__description">
            <div class="product-card__description-row">
              <h5 class="product-card__description--name">
                {{ good.title }}
              </h5>
            </div>
            <div class="product-card__description-row">
              <p class="product-card__description--text">
                {{ good.description }}
              </p>
            </div>
            <div class="product-card__description-row">
              <div class="product-card__description-controls">
                <button class="btn btn-primary">
                  В корзину
                  <img
                    src="../assets/images/icons/shopping-cart-white.svg"
                    alt="cart"
                  />
                </button>
                <span class="product-card__description-controls--price">
                 {{ good.price }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { goodArray } from '@/constants/goods';
const getUrl = (name) => {
  return new URL(`../assets/images/goods/${name}`, import.meta.url);
}
</script>