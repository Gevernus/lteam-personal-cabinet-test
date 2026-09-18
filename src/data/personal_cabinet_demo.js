import marcoRossiAvatar from '../assets/marco_rossi_avatar.jpg'
import { COMMISSION_FEE_ITEMS } from '../utils/personal_cabinet_money.js'

export const PERSONAL_CABINET_DEMO = {
  modal: {
    eyebrow: 'COMMISSIONE',
    backLabel: 'Indietro',
    closeLabel: 'Chiudi',
    legal: 'Connessione SSL  ·  Visa  ·  Mastercard  ·  SEPA',
    titles: {
      commission: 'Commissione da versare',
      coordinates: 'Coordinate di pagamento',
      confirmed: 'Pagamento confermato',
    },
  },
  steps: ['IBAN', 'COMMISSIONE', 'COORDINATE'],
  dashboard: {
    breadcrumb: ['Piattaforma', 'Home'],
    breadcrumbLabel: 'Breadcrumb',
    navigation: {
      label: 'Navigazione principale',
      logo: {
        brand: 'Avanti',
        href: '#main-content',
        label: 'Avanti, vai al contenuto',
      },
      links: [
        { label: 'Home', shortLabel: 'Home', icon: 'home', active: true },
        { label: 'Documenti', shortLabel: 'Docs', icon: 'document' },
        { label: 'Profilo', shortLabel: 'Profilo', icon: 'user' },
      ],
      support: {
        label: 'ASSISTENZA',
        href: 'mailto:assistenza@example.com',
        notifications: 4,
        notificationsLabel: '4 nuove notifiche',
      },
    },
    user: {
      label: 'Profilo utente',
      name: 'Marco Rossi',
      email: 'ikoei@09gmail.com',
      initials: 'MR',
      avatarUrl: marcoRossiAvatar,
      metadata: [
        { label: 'Piattaforma', value: 'Intesa Sanpaolo S.p.A.' },
        { label: 'Utente', value: 'Marco Rossi' },
      ],
    },
    progress: {
      fixedLayout: true,
      title: 'Passo 4 di 5',
      completionLabel: '3 / 5 completati',
      steps: [
        { label: 'Simul.', complete: true },
        { label: 'Approv.', complete: true },
        { label: 'Account', complete: true },
        { label: 'Docum.', complete: true },
        { label: 'Firma', complete: false },
      ],
    },
    balance: {
      eyebrow: 'Il tuo saldo',
      title: 'Importo approvato dai nostri partner',
      amount: '€ 12 000',
      description: 'Prestito personale • TAN 3,8%',
      cta: 'Vai alla commissione',
      footnote: "Fondi disponibili dopo l'approvazione dei documenti",
    },
    personalData: {
      title: 'Dati personali',
      rows: [
        { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
        { label: 'Nome', value: 'Marco Rossi' },
      ],
    },
    checklist: {
      fixedLayout: true,
      eyebrow: 'COMPLETA TUTTI GLI STEP',
      title: 'Per il prelievo dei fondi, completa tutti gli step',
      completionLabel: '3 / 5 completati',
      completedSegments: 3,
      items: [
        { title: 'Simulazione completata', status: 'Completato', icon: 'chart', done: true },
        { title: 'Credito approvato', status: 'Completato', icon: 'shield-check', done: true },
        { title: 'Account creato', status: 'Completato', icon: 'user', done: true },
        { title: 'Documenti caricati', status: 'Step iniziato', icon: 'upload', done: true },
        { title: 'Contratto firmato', status: 'In attesa', icon: 'signature', done: false },
      ],
    },
    withdrawal: {
      label: 'Requisiti per il prelievo',
      title: 'Per il prelievo dei fondi, completa tutti gli step',
      description: 'Step ancora da completare',
      requirements: ['Documenti', 'Firma'],
    },
  },
  commission: {
    currentStep: 2,
    stepperLabel: 'Avanzamento pagamento',
    amount: {
      label: 'IMPORTO DA VERSARE',
      accessibleTotalLabel: 'Totale esatto',
      total: '37 €',
      items: COMMISSION_FEE_ITEMS,
    },
    notice: {
      prefix: 'Il servizio gestisce la tua pratica di credito e garantisce il trasferimento al tasso agevolato. Il costo del servizio ',
      emphasis: 'non è detraibile',
      suffix: ' dal credito.',
    },
    paymentOption: {
      selected: true,
      icon: 'card',
      title: 'Pagamento servizi',
      description: 'Per proseguire con la procedura di accredito del finanziamento è necessario effettuare il pagamento dei servizi.',
      selectedLabel: 'Metodo di pagamento selezionato',
    },
    cta: 'Vai alle coordinate',
  },
  coordinates: {
    currentStep: 3,
    fixedLayout: true,
    stepperLabel: 'Avanzamento pagamento',
    intro: 'Copia i dati, apri la tua banca e invia il bonifico.',
    paymentMethod: {
      label: 'Seleziona il metodo SEPA Instant',
    },
    copyFeedback: {
      successSuffix: 'copiato',
      manualPrefix: 'Copia manualmente:',
    },
    details: [
      { label: 'BENEFICIARIO', value: 'Indaco Salvatore', copyLabel: 'Copia beneficiario' },
      { label: 'IBAN', value: 'IT26 U020 0809 5000 0043 1003 095', copyLabel: 'Copia IBAN' },
      { label: 'SWIFT/BIC', value: 'UNCRITMMXXX', copyLabel: 'Copia SWIFT/BIC' },
      { label: 'IMPORTO', value: '37 €', copyLabel: 'Copia importo' },
    ],
    reason: {
      prefix: 'Se necessario, nel campo "Causale" indichi ',
      value: '"Transfer"',
      alert: '!',
    },
    receipt: 'Invia la ricevuta al tuo consulente',
    cta: 'Conferma pagamento',
  },
  confirmation: {
    title: 'Richiesta registrata',
    message: 'Grazie, Marco. Verificheremo il pagamento e aggiorneremo lo stato del tuo finanziamento.',
    cta: 'Torna alla home',
  },
}
