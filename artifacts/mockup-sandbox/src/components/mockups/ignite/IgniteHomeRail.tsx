import React, { useState } from "react";

const navItems = ["About", "Streams", "Gallery", "Results", "Contact"];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 15 15 5M7 5h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IgniteHomeRail() {
  const [active, setActive] = useState("Home");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="ignite-shell">
      <style>{`
        .ignite-shell{--ink:#20262a;--paper:#f6f2e9;--coral:#e85f3d;--mint:#c7dbcf;--line:rgba(32,38,42,.18);min-height:100vh;background:var(--paper);color:var(--ink);font-family:ui-sans-serif,system-ui,sans-serif;overflow:hidden}
        .ignite-shell *{box-sizing:border-box}
        .ignite-grain{position:fixed;inset:0;pointer-events:none;opacity:.06;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.42'/%3E%3C/svg%3E")}
        .ignite-display{font-family:Georgia,'Times New Roman',serif;font-weight:400;letter-spacing:-.065em}
        .ignite-nav{display:flex;align-items:center;justify-content:space-between;padding:20px clamp(20px,4vw,62px);border-bottom:1px solid var(--line)}
        .ignite-brand{font-weight:800;font-size:15px;letter-spacing:.19em;text-transform:uppercase}
        .ignite-brand span{color:var(--coral)}
        .ignite-navlinks{display:flex;gap:clamp(14px,3vw,42px);align-items:center;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
        .ignite-navlinks button{border:0;background:none;color:inherit;cursor:pointer;padding:5px 0;opacity:.6}
        .ignite-navlinks button:hover,.ignite-navlinks button.active{opacity:1;color:var(--coral)}
        .ignite-apply{background:var(--ink)!important;color:var(--paper)!important;border-radius:999px;padding:11px 17px!important;opacity:1!important}
        .ignite-main{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(280px,.75fr);min-height:650px}
        .ignite-hero{padding:clamp(48px,8vw,120px) clamp(20px,6vw,96px) 52px;border-right:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between}
        .ignite-kicker{display:flex;align-items:center;gap:11px;text-transform:uppercase;letter-spacing:.2em;font-size:10px;font-weight:700;color:var(--coral)}
        .ignite-kicker:before{content:'';width:29px;height:1px;background:var(--coral)}
        .ignite-title{font-size:clamp(66px,10.7vw,166px);line-height:.84;margin:26px 0 34px;max-width:900px}
        .ignite-title em{color:var(--coral);font-style:italic}
        .ignite-intro{display:flex;gap:26px;align-items:flex-start;max-width:680px}
        .ignite-intro p{font-size:14px;line-height:1.7;max-width:320px;margin:0;color:#596066}
        .ignite-button{border:1px solid var(--ink);background:transparent;border-radius:999px;padding:13px 18px;display:inline-flex;gap:13px;align-items:center;cursor:pointer;font-size:11px;text-transform:uppercase;letter-spacing:.1em;white-space:nowrap}
        .ignite-button:hover{background:var(--ink);color:var(--paper)}
        .ignite-side{display:flex;flex-direction:column;background:var(--mint)}
        .ignite-side-top{padding:37px clamp(24px,4vw,56px);display:flex;justify-content:space-between;align-items:flex-start}
        .ignite-index{font-size:12px;letter-spacing:.14em}
        .ignite-index strong{display:block;font-size:48px;font-weight:400;line-height:.8;margin-top:10px}
        .ignite-orb{width:112px;height:112px;border:1px solid var(--ink);border-radius:50%;display:grid;place-items:center;transform:rotate(-16deg);font-family:Georgia,serif;font-style:italic;font-size:13px}
        .ignite-side-image{margin:auto 0 0;min-height:270px;padding:35px clamp(24px,4vw,56px);background:var(--coral);position:relative;overflow:hidden}
        .ignite-side-image:after{content:'';position:absolute;width:280px;height:280px;border:1px solid rgba(32,38,42,.45);border-radius:50%;right:-65px;bottom:-120px;box-shadow:0 0 0 18px rgba(32,38,42,.07),0 0 0 36px rgba(32,38,42,.07)}
        .ignite-side-image h2{font-family:Georgia,serif;font-weight:400;font-size:35px;line-height:.96;max-width:210px;margin:0;position:relative;z-index:1}
        .ignite-side-image p{font-size:11px;line-height:1.5;max-width:175px;margin-top:25px;position:relative;z-index:1}
        .ignite-strip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);display:grid;grid-template-columns:1fr 1fr 1fr;padding:18px clamp(20px,6vw,96px);gap:20px}
        .ignite-stat{display:flex;align-items:baseline;gap:12px}
        .ignite-stat strong{font-family:Georgia,serif;font-size:32px;font-weight:400}
        .ignite-stat span{font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:#697277}
        .ignite-bottom{display:grid;grid-template-columns:1fr 1fr;padding:65px clamp(20px,6vw,96px);gap:50px}
        .ignite-bottom h2{font:400 clamp(38px,5vw,67px)/.94 Georgia,serif;letter-spacing:-.06em;margin:0;max-width:440px}
        .ignite-bottom p{color:#697277;line-height:1.65;font-size:14px;max-width:370px;margin:0 0 22px}
        .ignite-form{display:flex;gap:0;max-width:420px;border-bottom:1px solid var(--ink)}
        .ignite-form input{border:0;background:transparent;padding:13px 0;flex:1;outline:none;font:inherit;font-size:13px}
        .ignite-form button{border:0;background:none;cursor:pointer;font-size:11px;text-transform:uppercase;letter-spacing:.11em}
        @media(max-width:700px){.ignite-navlinks{display:none}.ignite-main{grid-template-columns:1fr}.ignite-hero{border-right:0;min-height:590px}.ignite-side{min-height:510px}.ignite-strip{padding:18px 20px}.ignite-stat{display:block}.ignite-stat strong{display:block}.ignite-stat span{font-size:8px}.ignite-bottom{grid-template-columns:1fr;padding-top:48px}.ignite-intro{flex-direction:column}.ignite-title{font-size:clamp(64px,19vw,120px)}}
      `}</style>
      <div className="ignite-grain" />
      <header className="ignite-nav">
        <div className="ignite-brand">ignite<span>.</span></div>
        <nav className="ignite-navlinks" aria-label="Primary">
          {navItems.map((item) => (
            <button key={item} className={active === item ? "active" : ""} onClick={() => setActive(item)}>{item}</button>
          ))}
          <button className="ignite-apply" onClick={() => document.getElementById("ignite-form")?.scrollIntoView({ behavior: "smooth" })}>Apply now</button>
        </nav>
        <div className="ignite-brand" style={{ fontSize: 10, letterSpacing: ".1em" }}>2024 — 25</div>
      </header>
      <main>
        <section className="ignite-main">
          <div className="ignite-hero">
            <div>
              <div className="ignite-kicker">Junior college · Hyderabad</div>
              <h1 className="ignite-title ignite-display">Make your<br /><em>mark.</em></h1>
              <div className="ignite-intro">
                <p>At Ignite, curiosity is a daily practice. Build the confidence, clarity and courage to choose your own next step.</p>
                <button className="ignite-button" onClick={() => setActive("Streams")}>Explore streams <ArrowUpRight /></button>
              </div>
            </div>
            <div style={{ fontSize: 10, letterSpacing: ".13em", textTransform: "uppercase", color: "#697277" }}>Scroll to discover <span style={{ color: "var(--coral)", paddingLeft: 10 }}>↓</span></div>
          </div>
          <aside className="ignite-side">
            <div className="ignite-side-top">
              <div className="ignite-index">01 / 04<strong>∞</strong></div>
              <div className="ignite-orb">learn<br />out loud</div>
            </div>
            <div className="ignite-side-image">
              <h2>Not just<br />a classroom.</h2>
              <p>Small cohorts. Big questions. A campus that gives you room to become.</p>
            </div>
          </aside>
        </section>
        <section className="ignite-strip">
          <div className="ignite-stat"><strong>24</strong><span>years of learning</span></div>
          <div className="ignite-stat"><strong>47.2k</strong><span>alumni making waves</span></div>
          <div className="ignite-stat"><strong>12:1</strong><span>student / mentor ratio</span></div>
        </section>
        <section className="ignite-bottom" id="ignite-form">
          <h2>There’s a place<br />for your <em style={{ color: "var(--coral)" }}>question.</em></h2>
          <div>
            <p>Come see how we learn, live and look at the world. Leave your number and our admissions team will call you back.</p>
            {submitted ? <p style={{ color: "var(--coral)", fontWeight: 700 }}>Thanks — we’ll be in touch shortly.</p> : <form className="ignite-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><input required aria-label="Phone number" placeholder="Your phone number" type="tel" /><button type="submit">Talk to us →</button></form>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default IgniteHomeRail;