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
  height: 214px;
  padding: 20px;
  border: 1px solid var(--pc-primary);
  border-radius: 16px;
  background: var(--pc-surface-soft);
}

.personal-cabinet-amount-breakdown > p {
  margin: 0 0 4px;
  color: var(--pc-primary);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 13px;
}

.personal-cabinet-amount-breakdown > strong {
  display: block;
  margin-bottom: 16px;
  color: var(--pc-ink);
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 58px;
}

.personal-cabinet-amount-breakdown dl {
  margin: 0;
  padding-top: 15px;
  border-top: 1px solid rgb(36 145 170 / 30%);
}

.personal-cabinet-amount-breakdown dl div {
  display: flex;
  height: 17px;
  align-items: center;
  justify-content: space-between;
}

.personal-cabinet-amount-breakdown dl div + div {
  margin-top: 8px;
}

.personal-cabinet-amount-breakdown dt,
.personal-cabinet-amount-breakdown dd {
  margin: 0;
  color: var(--pc-ink);
  font-size: 14px;
  line-height: 17px;
}

.personal-cabinet-amount-breakdown dd {
  font-weight: 600;
}

@media (max-width: 767px) {
  .personal-cabinet-amount-breakdown {
    height: 206px;
    padding: 16px;
    background: var(--pc-primary);
  }

  .personal-cabinet-amount-breakdown > p {
    color: var(--pc-surface-soft);
  }

  .personal-cabinet-amount-breakdown > strong,
  .personal-cabinet-amount-breakdown dt,
  .personal-cabinet-amount-breakdown dd {
    color: #ffffff;
  }

  .personal-cabinet-amount-breakdown dl {
    border-top-color: rgb(255 255 255 / 30%);
  }
}
</style>
