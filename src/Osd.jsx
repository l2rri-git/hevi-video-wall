// On-screen display for a wall tile. Keeps every value of the original Hevi OSD and adds the mount context:
// where the mount faces, how far the camera is turned from it, and how much travel is left in pan and tilt.
import React from 'react';

const Y = '#E9DC7A'; // OSD ink
const YD = 'rgba(233, 220, 122, 0.55)';
const YF = 'rgba(233, 220, 122, 0.16)';
const RED = '#FF6B7A';
const SHADOW = 'drop-shadow(0 0 1px #000) drop-shadow(0 0 2px rgba(0,0,0,0.8))';

const norm360 = (a) => ((a % 360) + 360) % 360;
const signed = (a) => {
  const x = norm360(a);
  return x > 180 ? x - 360 : x;
};
const CARD = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };
const pad3 = (n) => String(Math.round(norm360(n)) % 360).padStart(3, '0');
const sgn = (n, d = 1) => (n > 0 ? '+' : n < 0 ? '−' : '±') + Math.abs(n).toFixed(d);

// Polar point on a top-down dial: 0° = up (north), clockwise.
const pt = (deg, r) => [Math.sin((deg * Math.PI) / 180) * r, -Math.cos((deg * Math.PI) / 180) * r];
const arc = (r, a0, a1) => {
  const [x0, y0] = pt(a0, r);
  const [x1, y1] = pt(a1, r);
  const sweep = norm360(a1 - a0);
  return `M ${x0} ${y0} A ${r} ${r} 0 ${sweep > 180 ? 1 : 0} 1 ${x1} ${y1}`;
};
const sector = (r, a0, a1) => `M 0 0 L ${pt(a0, r).join(' ')} ${arc(r, a0, a1).replace(/^M [^A]*/, '')} Z`;

// Heading tape: a 90° window around the heading. Shows the frame's field of view as a bracket,
// the mount's straight-ahead mark and, when in view, the end of pan travel.
function HeadingTape({ d }) {
  const W = 440,
    H = 70,
    span = 90,
    k = W / span,
    c = W / 2;
  const x = (deg) => c + signed(deg - d.hdg) * k;
  const ticks = [];
  const from = Math.floor((d.hdg - span / 2) / 5) * 5;
  for (let a = from; a <= d.hdg + span / 2; a += 5) {
    const xx = x(a);
    if (xx < 2 || xx > W - 2) continue;
    const n = norm360(a),
      major = n % 10 === 0,
      lab = n % 30 === 0 || CARD[n] != null;
    ticks.push(<line key={'t' + a} x1={xx} x2={xx} y1={H - 14} y2={H - (major ? 26 : 20)} stroke={Y} strokeWidth="2" />);
    if (lab)
      ticks.push(
        <text key={'l' + a} x={xx} y={H - 30} textAnchor="middle" fontSize="18" fill={CARD[n] ? Y : YD} fontWeight={CARD[n] ? 700 : 400}>
          {CARD[n] || pad3(n)}
        </text>,
      );
  }
  // pan travel ends, relative to the mount
  const limits = [];
  if (d.panLimit < 180) {
    [d.mount - d.panLimit, d.mount + d.panLimit].forEach((lim, i) => {
      const off = signed(lim - d.hdg);
      if (Math.abs(off) <= span / 2) {
        const xx = c + off * k,
          w = i === 0 ? -xx : W - xx;
        limits.push(
          <rect key={'lim' + i} x={i === 0 ? 0 : xx} y={H - 14} width={Math.abs(w)} height="10" fill={YF} stroke={YD} strokeWidth="1" />,
        );
        limits.push(<line key={'lime' + i} x1={xx} x2={xx} y1={H - 26} y2={H - 4} stroke={Y} strokeWidth="2.4" />);
      }
    });
  }
  const mOff = signed(d.mount - d.hdg);
  const fx0 = c - (d.fov / 2) * k,
    fx1 = c + (d.fov / 2) * k;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      <line x1="0" x2={W} y1={H - 14} y2={H - 14} stroke={YD} strokeWidth="1" />
      {ticks}
      {limits}
      {/* field of view of the frame */}
      <path d={`M ${fx0} ${H - 2} V ${H - 8} H ${fx1} V ${H - 2}`} fill="none" stroke={Y} strokeWidth="2" />
      {/* mount straight-ahead */}
      {Math.abs(mOff) <= span / 2 ? (
        <g transform={`translate(${c + mOff * k} ${H - 14})`}>
          <path d="M 0 -1 L 6 7 L -6 7 Z" fill="none" stroke={Y} strokeWidth="1.6" />
        </g>
      ) : (
        <text x={mOff < 0 ? 4 : W - 4} y={H - 1} textAnchor={mOff < 0 ? 'start' : 'end'} fontSize="11" fill={YD}>
          {mOff < 0 ? '◄ MNT' : 'MNT ►'}
        </text>
      )}
      {/* pointer and value */}
      <path d={`M ${c} ${H - 14} l -6 -9 h 12 Z`} fill={Y} />
      <rect x={c - 38} y="0" width="76" height="26" fill="rgba(5,7,10,0.6)" stroke={Y} strokeWidth="1.4" />
      <text x={c} y="20" textAnchor="middle" fontSize="20" fontWeight="700" fill={Y}>
        {pad3(d.hdg)}°
      </text>
    </svg>
  );
}

// Pan dial, seen from above: north up, the camera's field of view as a wedge, the mount's forward line,
// and the sector the mount cannot reach shaded.
function PanDial({ d }) {
  const R = 40;
  const blocked = d.panLimit < 180 ? sector(R, d.mount + d.panLimit, d.mount - d.panLimit + 360) : null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15em' }}>
      <svg viewBox="-50 -50 100 100" style={{ width: '7em', height: '7em', display: 'block', overflow: 'visible' }}>
        <circle r={R} fill="rgba(5,7,10,0.4)" stroke={Y} strokeWidth="1.8" />
        {blocked ? <path d={blocked} fill={YF} stroke={YD} strokeWidth="0.8" strokeDasharray="2 2" /> : null}
        {[0, 90, 180, 270].map((a) => {
          const [x0, y0] = pt(a, R - 5),
            [x1, y1] = pt(a, R);
          return <line key={a} x1={x0} y1={y0} x2={x1} y2={y1} stroke={Y} strokeWidth="1.4" />;
        })}
        <text x="0" y={-R - 3} textAnchor="middle" fontSize="11" fontWeight="700" fill={Y}>
          N
        </text>
        <path d={sector(R - 2, d.hdg - d.fov / 2, d.hdg + d.fov / 2)} fill="rgba(233,220,122,0.35)" />
        <line x1="0" y1="0" x2={pt(d.mount, R)[0]} y2={pt(d.mount, R)[1]} stroke={Y} strokeWidth="1.4" strokeDasharray="3 3" />
        <line x1="0" y1="0" x2={pt(d.hdg, R + 4)[0]} y2={pt(d.hdg, R + 4)[1]} stroke={Y} strokeWidth="2.4" />
        <circle r="2.6" fill={Y} />
      </svg>
      <span style={{ whiteSpace: 'nowrap', textAlign: 'center', lineHeight: 1.2 }}>
        AZ {d.mils} mil
        <br />
        REL {sgn(d.rel, 1)}° <span style={{ color: YD }}>of {d.panLimit < 180 ? '±' + d.panLimit + '°' : '360°'}</span>
      </span>
    </div>
  );
}

// Tilt dial, seen from the side: horizon, camera axis with its vertical field of view, reachable range.
function TiltDial({ d }) {
  const R = 40;
  // angles for this dial: 0 = horizontal right, up is positive; convert to the top-down helper (0 = up)
  const t = (deg) => 90 - deg;
  const range = arc(R, t(d.tiltMax), t(d.tiltMin));
  const vfov = d.fov * 0.5625;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15em' }}>
      <svg viewBox="-12 -50 64 100" style={{ width: '4.5em', height: '7em', display: 'block', overflow: 'visible' }}>
        <path d={range} fill="none" stroke={Y} strokeWidth="2" />
        <path d={sector(R, t(d.tiltMax), t(d.tiltMin))} fill="rgba(5,7,10,0.4)" />
        <line x1="-6" y1="0" x2={R + 6} y2="0" stroke={YD} strokeWidth="1" strokeDasharray="3 2" />
        <path d={sector(R - 2, t(d.tilt + vfov / 2), t(d.tilt - vfov / 2))} fill="rgba(233,220,122,0.35)" />
        <line x1="0" y1="0" x2={pt(t(d.tilt), R + 4)[0]} y2={pt(t(d.tilt), R + 4)[1]} stroke={Y} strokeWidth="2.4" />
        {[d.tiltMax, d.tiltMin].map((a) => {
          const [x0, y0] = pt(t(a), R - 4),
            [x1, y1] = pt(t(a), R + 4);
          return <line key={a} x1={x0} y1={y0} x2={x1} y2={y1} stroke={Y} strokeWidth="1.6" />;
        })}
        <circle r="2.6" fill={Y} />
      </svg>
      <span style={{ whiteSpace: 'nowrap', textAlign: 'center', lineHeight: 1.2 }}>
        TILT {sgn(d.tilt, 1)}°
        <br />
        <span style={{ color: YD }}>
          {d.tiltMin}…{sgn(d.tiltMax, 0)}°
        </span>
      </span>
    </div>
  );
}

export default function Osd({ d, k = 1, compact = false }) {
  if (!d) return null;
  // Sized to the tile, not the wall: text about 3% of the tile height, instruments in the same unit.
  // The reduced set on small tiles has room to be larger.
  const kk = compact ? k * 1.5 : k;
  const fs = `${(3 * kk).toFixed(2)}cqh`;
  const box = { position: 'absolute', whiteSpace: 'nowrap', lineHeight: 1.3 };
  const age = d.tgt ? Math.max(0, Math.min(1, d.tgt.reset / 60)) : 0;
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, containerType: 'size', pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', inset: 0, fontFamily: "'IBM Plex Mono', monospace", fontSize: fs, color: Y, filter: SHADOW }}>
        {/* 1 sensor */}
        {compact ? null : (
          <div style={{ ...box, left: '2.5%', top: '3%' }}>
            <b>{d.sensor}</b> HFOV {d.fov.toFixed(1)}°{d.digital ? ' D' : ''}
            <br />
            FOCUS {d.focus}
            <br />
            STAB {d.stab} · SPD {d.spd.toFixed(1)}
          </div>
        )}
        {/* 4 heading: centred on the space left of the inset */}
        <div
          style={{
            position: 'absolute',
            left: '47%',
            top: '3%',
            transform: 'translateX(-50%)',
            width: `${compact ? 48 : Math.min(30 * k, 36)}cqw`,
          }}
        >
          <HeadingTape d={d} />
        </div>
        {/* 5 aim point */}
        <svg
          viewBox="-50 -50 100 100"
          style={{ position: 'absolute', left: '50%', top: '50%', width: '9%', transform: 'translate(-50%, -50%)', overflow: 'visible' }}
        >
          <path d="M -50 0 H -12 M 12 0 H 50 M 0 -30 V -10 M 0 10 V 30" stroke={Y} strokeWidth="2.6" fill="none" />
          <circle r="2.4" fill={Y} />
        </svg>
        {/* 2 own position, 3 health */}
        {compact ? null : (
          <div style={{ ...box, left: '2.5%', bottom: '3%' }}>
            HOME {d.posSrc} · {d.alt.toFixed(1)} m
            <br />
            {d.home}
            <br />
            <span style={{ color: d.hot ? RED : YD }}>
              CPU {d.cpu.toFixed(1)}° GPU {d.gpu.toFixed(1)}° {d.sply.toFixed(1)} V
            </span>
          </div>
        )}
        {/* 6 pan and tilt */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '3%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '1em',
          }}
        >
          <TiltDial d={d} />
          <PanDial d={d} />
        </div>
        {/* 8 target */}
        {d.tgt && !compact ? (
          <div
            style={{
              ...box,
              right: '2.5%',
              bottom: '14%',
              padding: '0.3em 0.5em',
              border: `2px solid ${RED}`,
              background: 'rgba(5,7,10,0.45)',
            }}
          >
            TRGT {d.tgt.range.toFixed(1)} m
            <br />
            {d.tgt.grid}
            <br />
            ALT {d.tgt.alt.toFixed(1)} m ±{d.tgt.altAcc.toFixed(1)}
            <br />
            ACC ±{d.tgt.acc.toFixed(1)} m
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4em', marginTop: '0.15em' }}>
              <span>RESET {String(d.tgt.reset).padStart(2, '0')}s</span>
              <span style={{ flex: '1 1 auto', minWidth: '3em', height: '0.3em', background: YF, position: 'relative' }}>
                <span
                  style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: age * 100 + '%', background: age < 0.25 ? RED : Y }}
                />
              </span>
            </div>
          </div>
        ) : null}
        {/* 9 time and format */}
        <div style={{ ...box, right: '2.5%', bottom: '3%', textAlign: 'right' }}>
          {d.format}
          <br />
          {d.time}
        </div>
      </div>
    </div>
  );
}
