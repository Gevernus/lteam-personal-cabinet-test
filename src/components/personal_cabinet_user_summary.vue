<template>
  <section class="personal-cabinet-user-summary" aria-label="Profilo utente">
    <div class="personal-cabinet-user-summary__avatar" aria-hidden="true">MR</div>
    <div>
      <strong>Marco Rossi</strong>
      <span>rossi90@gmail.com</span>
    </div>
    <dl>
      <div>
        <dt>Piattaforma</dt>
        <dd>Intesa Sanpaolo S.p.A.</dd>
      </div>
      <div>
        <dt>Utente</dt>
        <dd>Marco Rossi</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.personal-cabinet-user-summary {
  display: flex;
  min-height: 72px;
  align-items: center;
  gap: 12px;
  padding: 13px 20px;
  border: 1px solid var(--pc-line);
  border-radius: 10px;
  background: #ffffff;
}

.personal-cabinet-user-summary__avatar {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  place-items: center;
  border: 3px solid #dcebed;
  border-radius: 50%;
  background: linear-gradient(145deg, #263c42 0 48%, #b9d6d9 48%);
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
}

.personal-cabinet-user-summary strong,
.personal-cabinet-user-summary span {
  display: block;
}

.personal-cabinet-user-summary strong {
  color: var(--pc-ink);
  font-size: 13px;
}

.personal-cabinet-user-summary span {
  margin-top: 2px;
  color: var(--pc-ink-muted);
  font-size: 10px;
}

.personal-cabinet-user-summary dl {
  display: grid;
  margin: 0 0 0 auto;
  gap: 7px;
  text-align: right;
}

.personal-cabinet-user-summary dl div {
  display: grid;
  grid-template-columns: 90px 180px;
}

.personal-cabinet-user-summary dt,
.personal-cabinet-user-summary dd {
  margin: 0;
  font-size: 10px;
}

.personal-cabinet-user-summary dt {
  color: var(--pc-ink-muted);
}

.personal-cabinet-user-summary dd {
  color: var(--pc-ink);
  font-weight: 650;
}

@media (max-width: 767px) {
  .personal-cabinet-user-summary {
    min-height: 64px;
    padding: 10px 12px;
  }

  .personal-cabinet-user-summary dl {
    display: none;
  }
}
</style>
