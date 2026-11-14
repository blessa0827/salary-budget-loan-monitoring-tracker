'use client';

import { useState } from 'react';

const loans = [
  { name: 'BPI Joint Loan', bank: 'BPI', amount: '₱1,867.01', due: '15th', tone: 'lavender', initials: 'B' },
  { name: 'RCBC Joint Loan', bank: 'RCBC', amount: '₱2,254.74', due: '28th', tone: 'peach', initials: 'R' },
];
const people = [
  { name: 'Ante', share: '₱3,000.00', percent: '72.8%', color: 'peach-dot' },
  { name: 'Love', share: '₱997.01', percent: '24.2%', color: 'lavender-dot' },
  { name: 'Me', share: '₱124.74', percent: '3.0%', color: 'mint-dot' },
];
const menu = ['Overview', 'Loans', 'Budget', 'Salary'];

export default function Home() {
  const [active, setActive] = useState('Overview');
  const [month, setMonth] = useState('November 2026');
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#"><span className="brand-mark">✿</span><span>Pocket Plan<small>YOUR MONEY, IN BLOOM</small></span></a>
        <div className="workspace-label">WORKSPACE</div>
        <nav>{menu.map((item, i) => <button key={item} className={`nav-item ${active === item ? 'selected' : ''}`} onClick={() => setActive(item)}><span className="nav-icon">{['⌂', '◉', '▤', '↗'][i]}</span>{item}{item === 'Loans' && <span className="nav-count">2</span>}</button>)}</nav>
        <div className="side-bottom"><div className="help-card"><span className="help-flower">✿</span><strong>Small steps add up.</strong><p>You’re keeping your shared commitments in good shape.</p></div><div className="profile"><div className="avatar">M</div><div><strong>My finances</strong><small>Personal space</small></div><span className="dots">···</span></div></div>
      </aside>
      <section className="main-area">
        <header className="topbar"><div className="crumb">My finances <span>/</span> <b>{active}</b></div><div className="top-actions"><button className="icon-button" aria-label="Notifications">♧<i /></button><div className="avatar small-avatar">M</div></div></header>
        <div className="content">
          <div className="welcome-row"><div><div className="eyebrow">SATURDAY, NOVEMBER 14, 2026</div><h1>Your money, <em>in balance.</em> <span>✦</span></h1><p className="subtitle">A little clarity for all the things you’re working toward.</p></div><button className="month-select" onClick={() => setMonth(month === 'November 2026' ? 'December 2026' : 'November 2026')}>▦ &nbsp;{month}<span>⌄</span></button></div>
          <section className="summary-grid">
            <article className="summary-card salary-card"><div className="card-top"><span>MONTHLY SALARY</span><span className="mini-icon">↗</span></div><div className="metric muted-metric">Add your salary</div><div className="card-foot"><span className="tag tag-mint">Ready to set up</span><span className="foot-note">Track your take-home pay</span></div><div className="decor decor-salary">✿</div></article>
            <article className="summary-card budget-card"><div className="card-top"><span>MONTHLY BUDGET</span><span className="mini-icon">▤</span></div><div className="metric muted-metric">Add your budget</div><div className="card-foot"><span className="tag tag-lavender">Ready to set up</span><span className="foot-note">Give every peso a purpose</span></div><div className="decor decor-budget">◌</div></article>
            <article className="summary-card loan-card"><div className="card-top"><span>JOINT LOAN OBLIGATION</span><span className="mini-icon">⌁</span></div><div className="metric">₱4,121<span className="decimal">.75</span></div><div className="card-foot"><span className="tag tag-peach">2 active loans</span><span className="foot-note">Shared monthly total</span></div><div className="decor decor-loan">◉</div></article>
            <article className="summary-card share-card"><div className="card-top"><span>MY MONTHLY SHARE</span><span className="mini-icon">♡</span></div><div className="metric">₱124<span className="decimal">.74</span></div><div className="card-foot"><span className="tag tag-mint">Self-funded</span><span className="foot-note">Target: 20th of month</span></div><div className="decor decor-share">✧</div></article>
          </section>
          <div className="section-heading"><div><h2>Loan overview <span className="soft-count">02</span></h2><p>Your shared commitments, at a glance.</p></div><button className="text-button" onClick={() => setActive('Loans')}>See all loans <span>→</span></button></div>
          <div className="lower-grid">
            <section className="panel loans-panel"><div className="panel-heading"><div><h3>Active facilities</h3><span className="panel-caption">Monthly payments</span></div><button className="more-button">···</button></div>{loans.map(loan => <div className="loan-row" key={loan.name}><div className={`bank-icon ${loan.tone}`}>{loan.initials}</div><div className="loan-info"><strong>{loan.name}</strong><span>{loan.bank} · 12 months</span></div><div className="loan-amount"><strong>{loan.amount}</strong><span>Due {loan.due} of the month</span></div><span className="status-pill">Active</span></div>)}<div className="loan-total"><span>Total monthly obligation</span><strong>₱4,121.75</strong></div></section>
            <section className="panel due-panel"><div className="panel-heading"><div><h3>Coming up</h3><span className="panel-caption">Next payment dates</span></div><span className="calendar-icon">▦</span></div><div className="due-item"><div className="date-tile"><small>NOV</small><b>15</b></div><div className="due-copy"><strong>BPI Joint Loan</strong><span>In 1 day · BPI</span></div><b className="due-amount">₱1,867.01</b></div><div className="due-item"><div className="date-tile peach-date"><small>NOV</small><b>28</b></div><div className="due-copy"><strong>RCBC Joint Loan</strong><span>In 14 days · RCBC</span></div><b className="due-amount">₱2,254.74</b></div><div className="due-note"><span>✦</span> Your personal share target is the 20th.</div></section>
          </div>
          <div className="section-heading contributions-title"><div><h2>Shared contributions</h2><p>Who’s covering what each month.</p></div><span className="balanced-tag">✓ Balanced</span></div>
          <section className="panel contributions"><div className="contribution-head"><span>CO-BORROWER</span><span>SHARE OF TOTAL</span><span>MONTHLY SHARE</span><span>STATUS</span></div>{people.map(p => <div className="contribution-row" key={p.name}><span className="person-name"><i className={p.color} />{p.name}{p.name === 'Me' && <small>You</small>}</span><div className="share-bar"><span className={p.color} style={{width:p.percent}} /></div><strong>{p.share}</strong><span className="collection-status">{p.name === 'Me' ? '● Self-funded' : '○ Pending collection'}</span></div>)}<div className="contribution-footer"><span>Total joint contributions</span><strong>₱4,121.75</strong><span>100% allocated</span></div></section>
          <footer className="page-footer"><span>Made for peace of mind <b>✿</b></span><span>Amounts shown in Philippine pesos (₱)</span></footer>
        </div>
      </section>
    </main>
  );
}
