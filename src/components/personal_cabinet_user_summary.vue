<template>
  <section class="personal-cabinet-user-summary" aria-label="Profilo utente">
    <div class="personal-cabinet-user-summary__avatar" aria-hidden="true">MR</div>
    <div>
      <strong>Marco Rossi</strong>
      <span>ikoei@09gmail.com</span>
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
  height: 40px;
  align-items: center;
  gap: 12px;
}

.personal-cabinet-user-summary__avatar {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 50%;
  background: url('../assets/marco_rossi_avatar.jpg') center / cover;
  color: transparent;
  font-size: 0;
}

.personal-cabinet-user-summary strong,
.personal-cabinet-user-summary span {
  display: block;
}

.personal-cabinet-user-summary strong {
  color: var(--pc-ink);
  font-size: 14px;
  font-weight: 600;
}

.personal-cabinet-user-summary span {
  color: var(--pc-ink-muted);
  font-size: 12px;
}

.personal-cabinet-user-summary dl {
  display: none;
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
    height: 40px;
    padding-left: 8px;
  }

  .personal-cabinet-user-summary__avatar {
    width: 32px;
    height: 32px;
  }

  .personal-cabinet-user-summary span {
    display: none;
  }
}
</style>
