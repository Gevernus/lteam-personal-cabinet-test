<script setup>
import {
  COMMISSION_FEE_ITEMS,
  COMMISSION_TOTAL_CENTS,
  formatEuro,
} from '../utils/personal_cabinet_money.js'
</script>

<template>
  <section class="personal-cabinet-amount-breakdown" aria-labelledby="amount-title">
    <p id="amount-title">IMPORTO DA VERSARE</p>
    <strong>37 €</strong>
    <dl>
      <div v-for="item in COMMISSION_FEE_ITEMS" :key="item.label">
        <dt>{{ item.label }}</dt>
        <dd>{{ formatEuro(item.amountCents) }}</dd>
      </div>
    </dl>
    <span class="sr-only">Totale esatto {{ formatEuro(COMMISSION_TOTAL_CENTS) }}</span>
  </section>
</template>

<style scoped>
.personal-cabinet-amount-breakdown {
  padding: 18px 20px;
  border: 1px solid var(--pc-primary);
  border-radius: 10px;
  background: linear-gradient(110deg, #effafd, #f9fdfe);
}

.personal-cabinet-amount-breakdown > p {
  margin: 0 0 5px;
  color: var(--pc-primary-dark);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.09em;
}

.personal-cabinet-amount-breakdown > strong {
  display: block;
  margin-bottom: 13px;
  color: var(--pc-ink);
  font-size: 35px;
  line-height: 1;
  letter-spacing: -0.04em;
}

.personal-cabinet-amount-breakdown dl {
  margin: 0;
  padding-top: 12px;
  border-top: 1px solid var(--pc-line);
}

.personal-cabinet-amount-breakdown dl div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}

.personal-cabinet-amount-breakdown dt,
.personal-cabinet-amount-breakdown dd {
  margin: 0;
  color: var(--pc-ink);
  font-size: 11px;
}

.personal-cabinet-amount-breakdown dd {
  font-weight: 750;
}

@media (max-width: 479px) {
  .personal-cabinet-amount-breakdown {
    padding: 14px;
    background: linear-gradient(145deg, #09869c, #27a4b9);
  }

  .personal-cabinet-amount-breakdown > p,
  .personal-cabinet-amount-breakdown > strong,
  .personal-cabinet-amount-breakdown dt,
  .personal-cabinet-amount-breakdown dd {
    color: #ffffff;
  }

  .personal-cabinet-amount-breakdown dl {
    border-top-color: rgb(255 255 255 / 30%);
  }

  .personal-cabinet-amount-breakdown > strong {
    font-size: 31px;
  }
}
</style>
