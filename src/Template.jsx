// Generated from the Claude Design prototype (Main.dc.html). The markup mirrors the canvas version.
import React from "react";
import { css } from "./css.js";
import Osd from "./Osd.jsx";

// Section number badge; lit when the section has the keyboard.
function SecKey({ n, on }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        minWidth: "1.4em",
        textAlign: "center",
        marginRight: "6px",
        padding: "0 3px",
        borderRadius: "3px",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "10.5px",
        letterSpacing: 0,
        color: on ? "#04121C" : "#95A3B5",
        background: on ? "#4CC3FF" : "transparent",
        border: on ? "1px solid #4CC3FF" : "1px solid #3A4B63",
      }}
    >
      {n}
    </span>
  );
}

export default function Template(V) {
  return (
    <>
      <div
        tabIndex="-1"
        onKeyDown={V.onDeskKey}
        onKeyUp={V.onDeskKeyUp}
        onFocus={V.onDeskFocus}
        onMouseDown={V.markActive}
        onClick={V.claimFocus}
        style={css(
          `position: relative; outline: none; height: 100vh; overflow: hidden; display: flex; flex-direction: column; background: ${V.rootBg}; color: #DCE3EC; font-family: 'IBM Plex Sans', system-ui, sans-serif; box-sizing: border-box; padding: ${V.rootPad};`,
        )}
      >
        {V.help ? (
          <>
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Keyboard shortcuts"
              style={css(
                `position: absolute; inset: 0; z-index: 50; background: rgba(5, 7, 10, 0.72); display: flex; align-items: flex-start; justify-content: center; padding: 32px 24px; box-sizing: border-box; overflow-y: auto;`,
              )}
            >
              <div
                style={css(
                  `width: 100%; max-width: 1240px; background: #111720; border: 1px solid #3A4B63; border-radius: 12px; padding: 18px 24px; display: flex; flex-direction: column; gap: 14px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);`,
                )}
              >
                <div
                  style={css(
                    `display: flex; justify-content: space-between; align-items: center; gap: 12px;`,
                  )}
                >
                  <div
                    style={css(
                      `display: flex; flex-direction: column; gap: 2px;`,
                    )}
                  >
                    <span style={css(`font-size: 18px; font-weight: 600;`)}>
                      {"Keyboard shortcuts"}
                    </span>
                    <span style={css(`font-size: 12.5px; color: #95A3B5;`)}>
                      {"Showing "}
                      {V.osName}
                      {" keys \u00b7 press ? to open or close"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={V.toggleHelp}
                    autoFocus={V.yes}
                    style={css(
                      `height: 34px; padding: 0 12px; border-radius: 6px; font-size: 13px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                    )}
                  >
                    {"Close \u00b7 Esc"}
                  </button>
                </div>
                <div
                  style={css(
                    `column-count: 3; column-gap: 28px;`,
                  )}
                >
                  {(V.shortcuts || []).map((sg, i_sg) => (
                    <React.Fragment key={sg && sg.key != null ? sg.key : i_sg}>
                      <div
                        style={css(
                          `display: flex; flex-direction: column; gap: 2px; break-inside: avoid; margin-bottom: 16px;`,
                        )}
                      >
                        <span
                          style={css(
                            `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #95A3B5; margin-bottom: 2px;`,
                          )}
                        >
                          {sg.title}
                        </span>
                        {(sg.items || []).map((si, i_si) => (
                          <React.Fragment
                            key={si && si.key != null ? si.key : i_si}
                          >
                            <div
                              style={css(
                                `display: flex; justify-content: space-between; align-items: baseline; gap: 12px; font-size: 13px; border-bottom: 1px solid #1E2836; padding: 4px 0;`,
                              )}
                            >
                              {" "}
                              <span>{si.d}</span>{" "}
                              <span
                                style={css(
                                  `font-family: 'IBM Plex Mono', monospace; color: #8ED9FF; white-space: nowrap;`,
                                )}
                              >
                                {si.k}
                              </span>{" "}
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : null}
        <div
          style={css(
            `flex: 1 1 auto; min-height: 0; width: 100%; display: flex; flex-direction: column; gap: 10px;`,
          )}
        >
          <div
            style={css(
              `flex: 1 1 auto; min-height: 0; display: flex; gap: 20px;`,
            )}
          >
            {V.isDesk ? (
              <>
                <section
                  aria-label="Operator config view"
                  style={css(
                    `flex: 1 1 auto; min-width: 0; min-height: 0; background: #111720; border: 1px solid #243042; border-radius: 10px; display: flex; flex-direction: column;`,
                  )}
                >
                  <div
                    style={css(
                      `flex: 0 0 auto; display: flex; flex-wrap: nowrap; align-items: center; gap: 8px 12px; padding: 8px 14px; border-bottom: 1px solid #243042; white-space: nowrap;`,
                    )}
                  >
                    <div
                      style={css(
                        `display: flex; flex-direction: column; gap: 2px; min-width: 0;`,
                      )}
                    >
                      <span
                        style={css(
                          `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #95A3B5;`,
                        )}
                      >
                        {"HEVI \u00b7 LAYOUT DESK \u00b7 WALL 1"}
                      </span>
                      <div
                        style={css(
                          `display: flex; align-items: center; gap: 8px;`,
                        )}
                      >
                        <span style={css(`font-size: 16px; font-weight: 600;`)}>
                          {V.layoutTitle}
                        </span>
                        {V.edited ? (
                          <>
                            {" "}
                            <span
                              style={css(
                                `font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #95A3B5; border: 1px solid #33435A; border-radius: 4px; padding: 1px 6px;`,
                              )}
                            >
                              {"EDITED"}
                            </span>{" "}
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div style={css(`flex: 1 1 auto;`)}> </div>
                    <div
                      role="group"
                      aria-label="History"
                      style={css(`display: flex; gap: 4px;`)}
                    >
                      <button
                        type="button"
                        onClick={V.undo}
                        disabled={V.noUndo}
                        aria-label={V.undoAria}
                        title={V.undoTitle}
                        style={css(
                          `height: 34px; width: 40px; border-radius: 6px; font-size: 18px; line-height: 1; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                        )}
                      >
                        {"\u21b6"}
                      </button>
                      <button
                        type="button"
                        onClick={V.redo}
                        disabled={V.noRedo}
                        aria-label={V.redoAria}
                        title={V.redoTitle}
                        style={css(
                          `height: 34px; width: 40px; border-radius: 6px; font-size: 18px; line-height: 1; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                        )}
                      >
                        {"\u21b7"}
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={V.toggleHelp}
                      aria-haspopup="dialog"
                      aria-label="Keyboard shortcuts"
                      title="Keyboard shortcuts"
                      style={css(
                        `height: 32px; padding: 0 10px; border-radius: 6px; font-size: 13px; cursor: pointer; background: transparent; border: 1px solid #33435A; display: flex; align-items: center; gap: 6px;`,
                      )}
                    >
                      {" "}
                      <span>{"Keys"}</span>{" "}
                      <span
                        style={css(
                          `font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #95A3B5; border: 1px solid #33435A; border-radius: 3px; padding: 0 4px;`,
                        )}
                      >
                        {"?"}
                      </span>{" "}
                    </button>
                    <div
                      role="group"
                      aria-label="When changes reach the wall"
                      style={css(
                        `display: flex; align-items: center; gap: 4px;`,
                      )}
                    >
                      <span
                        style={css(
                          `font-size: 12px; color: #95A3B5; margin-right: 4px;`,
                        )}
                      >
                        {"Changes go"}
                      </span>
                      <button
                        type="button"
                        onClick={V.setLive}
                        aria-pressed={V.livePressed}
                        title="Every change reaches the wall at once"
                        style={css(
                          `height: 32px; padding: 0 10px; border-radius: 6px; font-size: 13px; cursor: pointer; background: ${V.liveBg}; border: ${V.liveBorder};`,
                        )}
                      >
                        {"Live"}
                      </button>
                      <button
                        type="button"
                        onClick={V.setStaged}
                        aria-pressed={V.stagedPressed}
                        title="Changes wait until you publish them to the wall"
                        style={css(
                          `height: 32px; padding: 0 10px; border-radius: 6px; font-size: 13px; cursor: pointer; background: ${V.stagedBg}; border: ${V.stagedBorder};`,
                        )}
                      >
                        {"Staged"}
                      </button>
                    </div>
                    {V.hasStaged ? (
                      <>
                        <div
                          style={css(
                            `display: flex; align-items: center; gap: 8px;`,
                          )}
                        >
                          <span
                            style={css(`font-size: 12.5px; color: #FFD27A;`)}
                          >
                            {V.stagedText}
                          </span>
                          <button
                            type="button"
                            onClick={V.discard}
                            style={css(
                              `height: 34px; padding: 0 12px; border-radius: 6px; font-size: 13px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                            )}
                          >
                            {"Discard"}
                          </button>
                          <button
                            type="button"
                            onClick={V.publish}
                            style={css(
                              `height: 34px; padding: 0 14px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; background: #4CC3FF; color: #04121C; border: 1px solid #4CC3FF;`,
                            )}
                          >
                            {"Publish to wall"}
                          </button>
                        </div>
                      </>
                    ) : null}
                    <span
                      style={css(
                        `font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: #95A3B5; font-variant-numeric: tabular-nums;`,
                      )}
                    >
                      {V.clock}
                    </span>
                    <div
                      role="group"
                      aria-label="Screen"
                      style={css(
                        `display: flex; align-items: center; gap: 4px; padding-left: 12px; border-left: 1px solid #243042;`,
                      )}
                    >
                      <button
                        type="button"
                        onClick={V.showDesk}
                        aria-pressed="true"
                        style={css(
                          `height: 30px; padding: 0 12px; border-radius: 6px; font-size: 13px; cursor: pointer; background: #1C2B3B; border: 1px solid #4CC3FF;`,
                        )}
                      >
                        {"Desk"}
                      </button>
                      <button
                        type="button"
                        onClick={V.showWall}
                        aria-pressed="false"
                        title={`Switch to the wall (${V.keys.altW})`}
                        style={css(
                          `height: 30px; padding: 0 12px; border-radius: 6px; font-size: 13px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                        )}
                      >
                        {"Wall "}
                        <span
                          style={css(
                            `font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #95A3B5;`,
                          )}
                        >
                          {V.keys.altW}
                        </span>{" "}
                      </button>
                      <a
                        href="/wall"
                        target="hevi-wall"
                        rel="noopener"
                        aria-label="Open the wall in its own tab"
                        title="Open the wall in its own tab"
                        style={css(
                          `height: 30px; width: 32px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border-radius: 6px; font-size: 14px; text-decoration: none; color: #DCE3EC; border: 1px solid #33435A;`,
                        )}
                      >
                        {"↗"}
                      </a>
                    </div>
                  </div>
                  <div
                    style={css(
                      `flex: 1 1 auto; min-height: 0; display: flex; gap: 14px; padding: 12px 14px 14px;`,
                    )}
                  >
                    <div
                      data-sec="find"
                      style={css(
                        `flex: 0 0 ${V.lay.searchW}; min-width: 0; min-height: 0; display: flex; flex-direction: column; gap: 8px; box-sizing: border-box; background: ${V.lay.searchBg}; border: ${V.lay.searchBorder}; border-radius: 10px; padding: ${V.lay.searchPad}; box-shadow: ${V.secRing.find};`,
                      )}
                    >
                      <label
                        htmlFor="feed-search"
                        style={css(
                          `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #95A3B5;`,
                        )}
                      >
                        <SecKey n="1" on={V.secOn.find} />
                        {V.lay.searchLabel}
                      </label>
                      <div style={css(`position: relative;`)}>
                        <svg
                          aria-hidden="true"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#95A3B5"
                          style={css(
                            `position: absolute; left: 12px; top: 14px;`,
                          )}
                        >
                          {" "}
                          <circle cx="11" cy="11" r="7">
                            {" "}
                          </circle>{" "}
                          <path d="M20 20l-4-4"> </path>{" "}
                        </svg>
                        <input
                          id="feed-search"
                          type="search"
                          autoComplete="off"
                          spellCheck="false"
                          value={V.q}
                          onChange={V.onQ}
                          onKeyDown={V.onKey}
                          onFocus={V.kbdOn}
                          onBlur={V.kbdOff}
                          placeholder="Call sign, name, grid, host or serial"
                          style={css(
                            `width: 100%; box-sizing: border-box; height: 44px; padding: 0 150px 0 38px; background: #0A0E13; border: 1px solid #3A4B63; border-radius: 8px; color: #DCE3EC; font-size: 15px; font-family: 'IBM Plex Sans', system-ui, sans-serif;`,
                          )}
                        />
                        <button
                          type="button"
                          onClick={V.toggleTargetPick}
                          aria-expanded={V.pickExpanded}
                          aria-label={V.targetAria}
                          title={V.targetNow}
                          style={css(
                            `position: absolute; right: 6px; top: 6px; height: 32px; padding: 0 10px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; background: #132232; border: 1px solid #2C6A8F; color: #8ED9FF; white-space: nowrap;`,
                          )}
                        >
                          {"\u2192 "}
                          {V.targetText}
                        </button>
                      </div>
                      {V.pickTarget ? (
                        <>
                          <div
                            role="group"
                            aria-label="Send target tile"
                            style={css(
                              `display: flex; flex-wrap: wrap; gap: 4px; align-items: center;`,
                            )}
                          >
                            <span
                              style={css(
                                `font-size: 12px; color: #95A3B5; margin-right: 4px;`,
                              )}
                            >
                              {"Send to tile"}
                            </span>
                            {(V.targetOpts || []).map((o, i_o) => (
                              <React.Fragment
                                key={o && o.key != null ? o.key : i_o}
                              >
                                <button
                                  type="button"
                                  onClick={o.pick}
                                  aria-pressed={o.pressed}
                                  title={o.now}
                                  aria-label={o.aria}
                                  style={css(
                                    `height: 30px; min-width: 34px; padding: 0 8px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: ${o.bg}; border: ${o.border};`,
                                  )}
                                >
                                  {o.label}
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                        </>
                      ) : null}
                      {V.hasInterp ? (
                        <>
                          {" "}
                          <p
                            style={css(
                              `margin: 0; font-size: 12.5px; line-height: 1.45; color: #B7C3D1;`,
                            )}
                          >
                            {V.interp}
                          </p>{" "}
                        </>
                      ) : null}
                      {V.hasPend ? (
                        <>
                          <div
                            role="alert"
                            style={css(
                              `border: 1px solid ${V.pend.border}; background: ${V.pend.bg}; border-radius: 8px; padding: 10px; display: flex; flex-direction: column; gap: 8px;`,
                            )}
                          >
                            <span
                              style={css(
                                `font-size: 13px; font-weight: 600; color: ${V.pend.color};`,
                              )}
                            >
                              {V.pend.text}
                            </span>
                            <div
                              style={css(
                                `display: flex; gap: 6px; flex-wrap: wrap;`,
                              )}
                            >
                              <button
                                type="button"
                                onClick={V.pend.primary}
                                style={css(
                                  `min-height: 34px; padding: 4px 12px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; background: #4CC3FF; color: #04121C; border: 1px solid #4CC3FF;`,
                                )}
                              >
                                {V.pend.primaryText}
                              </button>
                              {V.pend.hasSecond ? (
                                <>
                                  {" "}
                                  <button
                                    type="button"
                                    onClick={V.pend.second}
                                    style={css(
                                      `min-height: 34px; padding: 4px 12px; border-radius: 6px; font-size: 13px; cursor: pointer; background: transparent; border: 1px solid #4CC3FF; color: #8ED9FF;`,
                                    )}
                                  >
                                    {V.pend.secondText}
                                  </button>{" "}
                                </>
                              ) : null}
                              <button
                                type="button"
                                onClick={V.pend.cancel}
                                style={css(
                                  `min-height: 34px; padding: 4px 12px; border-radius: 6px; font-size: 13px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                                )}
                              >
                                {"Cancel"}
                              </button>
                            </div>
                          </div>
                        </>
                      ) : null}
                      <div
                        role="group"
                        aria-label="Quick filters"
                        style={css(
                          `display: flex; flex-wrap: nowrap; gap: 4px; align-items: center; min-width: 0;`,
                        )}
                      >
                        <div
                          style={css(
                            `display: flex; gap: 4px; flex: 1 1 auto; min-width: 0; overflow: hidden;`,
                          )}
                        >
                          {(V.quickChips || []).map((c, i_c) => (
                            <React.Fragment
                              key={c && c.key != null ? c.key : i_c}
                            >
                              <button
                                type="button"
                                onClick={c.toggle}
                                aria-pressed={c.pressed}
                                style={css(
                                  `flex: 0 0 auto; height: 30px; padding: 0 10px; border-radius: 15px; font-size: 12.5px; cursor: pointer; background: ${c.bg}; border: ${c.border}; color: ${c.color}; white-space: nowrap;`,
                                )}
                              >
                                {c.label}
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={V.toggleMore}
                          aria-expanded={V.moreExpanded}
                          style={css(
                            `flex: 0 0 auto; height: 30px; padding: 0 10px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: ${V.moreBg}; border: 1px solid #33435A; color: #B7C3D1; white-space: nowrap;`,
                          )}
                        >
                          {V.sortSummary}
                          {" \u00b7 "}
                          {V.moreLabel}
                        </button>
                      </div>
                      {V.moreFilters ? (
                        <>
                          <div
                            style={css(
                              `display: flex; flex-direction: column; gap: 8px; padding: 10px; background: #0E141C; border: 1px solid #243042; border-radius: 8px;`,
                            )}
                          >
                            <div
                              role="group"
                              aria-label="All filters"
                              style={css(
                                `display: flex; flex-wrap: wrap; gap: 4px; align-items: center;`,
                              )}
                            >
                              <span
                                style={css(
                                  `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.1em; color: #95A3B5; margin-right: 4px;`,
                                )}
                              >
                                {"FILTER"}
                              </span>
                              {(V.chips || []).map((c, i_c) => (
                                <React.Fragment
                                  key={c && c.key != null ? c.key : i_c}
                                >
                                  <button
                                    type="button"
                                    onClick={c.toggle}
                                    aria-pressed={c.pressed}
                                    style={css(
                                      `height: 30px; padding: 0 10px; border-radius: 15px; font-size: 12.5px; cursor: pointer; background: ${c.bg}; border: ${c.border}; color: ${c.color};`,
                                    )}
                                  >
                                    {c.label}
                                  </button>
                                </React.Fragment>
                              ))}
                            </div>
                            <div
                              role="group"
                              aria-label="Sort"
                              style={css(
                                `display: flex; flex-wrap: wrap; gap: 4px; align-items: center;`,
                              )}
                            >
                              <span
                                style={css(
                                  `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.1em; color: #95A3B5; margin-right: 4px;`,
                                )}
                              >
                                {"SORT"}
                              </span>
                              {(V.sorts || []).map((o, i_o) => (
                                <React.Fragment
                                  key={o && o.key != null ? o.key : i_o}
                                >
                                  <button
                                    type="button"
                                    onClick={o.pick}
                                    aria-pressed={o.pressed}
                                    style={css(
                                      `height: 30px; padding: 0 10px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: ${o.bg}; border: ${o.border};`,
                                    )}
                                  >
                                    {o.label}
                                  </button>
                                </React.Fragment>
                              ))}
                              <button
                                type="button"
                                onClick={V.toggleGroup}
                                aria-pressed={V.groupPressed}
                                style={css(
                                  `height: 30px; padding: 0 10px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: ${V.groupBg}; border: ${V.groupBorder}; margin-left: 4px;`,
                                )}
                              >
                                {"Group by site"}
                              </button>
                            </div>
                          </div>
                        </>
                      ) : null}
                      <div
                        style={css(
                          `display: flex; justify-content: space-between; align-items: baseline; margin-top: 2px; gap: 8px;`,
                        )}
                      >
                        <span
                          style={css(
                            `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.1em; color: #95A3B5;`,
                          )}
                        >
                          {V.resultHead}
                        </span>
                        {V.hasFilters ? (
                          <>
                            {" "}
                            <button
                              type="button"
                              onClick={V.clearFilters}
                              style={css(
                                `height: 26px; padding: 0 8px; border-radius: 6px; font-size: 12px; cursor: pointer; background: transparent; border: 1px solid #33435A; color: #B7C3D1;`,
                              )}
                            >
                              {"Clear filters"}
                            </button>{" "}
                          </>
                        ) : null}
                      </div>
                      <div
                        style={css(
                          `display: flex; flex-direction: column; gap: 2px; flex: 1 1 0; min-height: 0; overflow-y: auto; padding-right: 4px;`,
                        )}
                      >
                        {(V.sections || []).map((sec, i_sec) => (
                          <React.Fragment
                            key={sec && sec.key != null ? sec.key : i_sec}
                          >
                            {sec.hasTitle ? (
                              <>
                                <div
                                  style={css(
                                    `display: flex; justify-content: space-between; gap: 8px; padding: 8px 4px 4px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.1em; color: ${sec.color}; border-bottom: ${sec.border}; background: ${sec.bg}; border-radius: 4px 4px 0 0; white-space: nowrap;`,
                                  )}
                                >
                                  {" "}
                                  <span
                                    style={css(
                                      `min-width: 0; overflow: hidden; text-overflow: ellipsis; display: flex; align-items: center; gap: 6px;`,
                                    )}
                                  >
                                    {" "}
                                    {sec.dot ? (
                                      <>
                                        {" "}
                                        <span
                                          aria-hidden="true"
                                          style={css(
                                            `flex: 0 0 7px; width: 7px; height: 7px; border-radius: 50%; background: #FF6B7A;`,
                                          )}
                                        >
                                          {" "}
                                        </span>{" "}
                                      </>
                                    ) : null}{" "}
                                    <span
                                      style={css(
                                        `overflow: hidden; text-overflow: ellipsis;`,
                                      )}
                                    >
                                      {sec.title}
                                    </span>{" "}
                                  </span>{" "}
                                  <span>{sec.meta}</span>{" "}
                                </div>
                              </>
                            ) : null}
                            {(sec.rows || []).map((r, i_r) => (
                              <React.Fragment
                                key={r && r.key != null ? r.key : i_r}
                              >
                                <div
                                  data-ri={r.ri}
                                  style={css(
                                    `display: flex; flex-direction: column; gap: 6px; padding: 5px 6px; border-radius: 6px; background: ${r.bg}; box-shadow: ${r.ring};`,
                                  )}
                                >
                                  <div
                                    style={css(
                                      `display: flex; align-items: center; gap: 8px;`,
                                    )}
                                  >
                                    <button
                                      type="button"
                                      className="rowbtn"
                                      onClick={r.toggle}
                                      onFocus={r.focus}
                                      onBlur={V.kbdOff}
                                      aria-expanded={r.expanded}
                                      aria-label={r.detailAria}
                                      style={css(
                                        `flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 1px; text-align: left; background: transparent; border: 0; padding: 2px 0; cursor: pointer;`,
                                      )}
                                    >
                                      <span
                                        style={css(
                                          `display: flex; align-items: baseline; gap: 6px; min-width: 0;`,
                                        )}
                                      >
                                        <span
                                          aria-hidden="true"
                                          style={css(
                                            `flex: 0 0 10px; font-size: 10px; color: #95A3B5;`,
                                          )}
                                        >
                                          {r.caret}
                                        </span>
                                        <span
                                          style={css(
                                            `font-weight: 600; font-size: 14px; white-space: nowrap;`,
                                          )}
                                        >
                                          {r.cs}
                                        </span>
                                        {r.onWall ? (
                                          <>
                                            {" "}
                                            <span
                                              style={css(
                                                `font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: #DCE3EC; background: #2A3647; border-radius: 3px; padding: 0 4px; white-space: nowrap;`,
                                              )}
                                            >
                                              {r.onWallText}
                                            </span>{" "}
                                          </>
                                        ) : null}
                                        <span
                                          style={css(
                                            `font-size: 12.5px; color: #95A3B5; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,
                                          )}
                                        >
                                          {r.sub}
                                        </span>
                                      </span>
                                      <span
                                        style={css(
                                          `display: flex; gap: 8px; padding-left: 16px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; white-space: nowrap; overflow: hidden;`,
                                        )}
                                      >
                                        {r.hasDist ? (
                                          <>
                                            {" "}
                                            <span
                                              style={css(
                                                `color: ${r.distColor};`,
                                              )}
                                            >
                                              {r.dist}
                                            </span>{" "}
                                          </>
                                        ) : null}
                                        <span
                                          style={css(
                                            `color: ${r.metaColor}; overflow: hidden; text-overflow: ellipsis;`,
                                          )}
                                        >
                                          {r.meta}
                                        </span>
                                      </span>
                                    </button>
                                    {(r.cams || []).map((f, i_f) => (
                                      <React.Fragment
                                        key={f && f.key != null ? f.key : i_f}
                                      >
                                        <button
                                          type="button"
                                          onClick={f.send}
                                          aria-label={f.aria}
                                          style={css(
                                            `flex: 0 0 62px; height: 38px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px; border-radius: 5px; cursor: pointer; background: ${f.bg}; border: ${f.border}; box-shadow: ${f.shadow};`,
                                          )}
                                        >
                                          <span
                                            style={css(
                                              `font-size: 11.5px; font-weight: 600; letter-spacing: 0.05em;`,
                                            )}
                                          >
                                            {f.label}
                                          </span>
                                          <span
                                            style={css(
                                              `font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: ${f.color};`,
                                            )}
                                          >
                                            {f.line}
                                          </span>
                                        </button>
                                      </React.Fragment>
                                    ))}
                                  </div>
                                  {r.open ? (
                                    <>
                                      <div
                                        style={css(
                                          `display: flex; flex-direction: column; gap: 8px; padding: 2px 0 6px 16px;`,
                                        )}
                                      >
                                        <div
                                          style={css(
                                            `display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px;`,
                                          )}
                                        >
                                          {(r.previews || []).map(
                                            (pv, i_pv) => (
                                              <React.Fragment
                                                key={
                                                  pv && pv.key != null
                                                    ? pv.key
                                                    : i_pv
                                                }
                                              >
                                                <button
                                                  type="button"
                                                  onClick={pv.send}
                                                  aria-label={pv.aria}
                                                  style={css(
                                                    `display: flex; flex-direction: column; gap: 4px; padding: 4px; background: #0E141C; border: 1px solid #2A3647; border-radius: 6px; cursor: pointer; text-align: left;`,
                                                  )}
                                                >
                                                  <span
                                                    className={`scn ${pv.cls}`}
                                                    style={css(
                                                      `display: block; width: 100%; aspect-ratio: 16 / 9; border-radius: 3px; background-size: 150%; background-position: ${pv.bpos}; filter: ${pv.filter};`,
                                                    )}
                                                  >
                                                    {" "}
                                                  </span>
                                                  <span
                                                    style={css(
                                                      `display: flex; justify-content: space-between; gap: 6px; font-size: 11.5px;`,
                                                    )}
                                                  >
                                                    {" "}
                                                    <span
                                                      style={css(
                                                        `font-weight: 600;`,
                                                      )}
                                                    >
                                                      {pv.label}
                                                    </span>{" "}
                                                    <span
                                                      style={css(
                                                        `color: ${pv.color};`,
                                                      )}
                                                    >
                                                      {pv.state}
                                                    </span>{" "}
                                                  </span>
                                                </button>
                                              </React.Fragment>
                                            ),
                                          )}
                                        </div>
                                        <div
                                          style={css(
                                            `display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px 12px;`,
                                          )}
                                        >
                                          {(r.facts || []).map((fa, i_fa) => (
                                            <React.Fragment
                                              key={
                                                fa && fa.key != null
                                                  ? fa.key
                                                  : i_fa
                                              }
                                            >
                                              <div
                                                style={css(
                                                  `display: flex; flex-direction: column; min-width: 0;`,
                                                )}
                                              >
                                                {" "}
                                                <span
                                                  style={css(
                                                    `font-size: 11px; color: #95A3B5;`,
                                                  )}
                                                >
                                                  {fa.k}
                                                </span>{" "}
                                                <span
                                                  style={css(
                                                    `font-family: 'IBM Plex Mono', monospace; font-size: 12px; overflow-wrap: anywhere;`,
                                                  )}
                                                >
                                                  {fa.v}
                                                </span>{" "}
                                              </div>
                                            </React.Fragment>
                                          ))}
                                        </div>
                                      </div>
                                    </>
                                  ) : null}
                                </div>
                              </React.Fragment>
                            ))}
                          </React.Fragment>
                        ))}
                        {V.noResults ? (
                          <>
                            <p
                              style={css(
                                `margin: 0; padding: 12px; font-size: 13px; color: #B7C3D1;`,
                              )}
                            >
                              {"No matches"}
                            </p>
                          </>
                        ) : null}
                      </div>
                    </div>
                    <div
                      style={css(
                        `flex: 1 1 auto; min-width: 0; min-height: 0; display: grid; gap: 12px; grid-template-columns: ${V.lay.cols}; grid-template-rows: ${V.lay.rows}; grid-template-areas: ${V.lay.areas};`,
                      )}
                    >
                      <div
                        style={css(
                          `grid-area: hdr; min-width: 0; display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 8px; white-space: nowrap; overflow: hidden;`,
                        )}
                      >
                        <span
                          style={css(
                            `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: ${V.mirrorNoteColor};`,
                          )}
                        >
                          <SecKey n="2" on={V.secOn.mirror} />
                          {"WALL MIRROR \u00b7 "}
                          {V.mirrorNote}
                        </span>
                        {V.swapping ? (
                          <>
                            <div
                              style={css(
                                `display: flex; align-items: center; gap: 8px;`,
                              )}
                            >
                              <span
                                style={css(
                                  `font-size: 12.5px; color: #8ED9FF;`,
                                )}
                              >
                                {V.swapText}
                              </span>
                              <button
                                type="button"
                                onClick={V.cancelSwap}
                                style={css(
                                  `height: 30px; padding: 0 10px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                                )}
                              >
                                {"Cancel"}
                              </button>
                            </div>
                          </>
                        ) : null}
                      </div>
                      <div
                        data-sec="mirror"
                        style={css(
                          `grid-area: mirror; min-width: 0; min-height: 0; container-type: size; border-radius: 8px; box-shadow: ${V.secRing.mirror};`,
                        )}
                      >
                        <div
                          role="group"
                          aria-label="Wall layout, click a tile to select it"
                          style={css(
                            `width: 100%; height: 100%; box-sizing: border-box; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); grid-template-rows: repeat(12, minmax(0, 1fr)); gap: 4px; background: #0A0E13; border: 1px solid #243042; border-radius: 8px; padding: 4px;`,
                          )}
                        >
                          {(V.mirror || []).map((t, i_t) => (
                            <React.Fragment
                              key={t && t.key != null ? t.key : i_t}
                            >
                              <button
                                type="button"
                                className="mt"
                                data-ti={i_t}
                                onClick={t.select}
                                aria-pressed={t.pressed}
                                aria-label={t.aria}
                                style={css(
                                  `position: relative; grid-column: ${t.gc}; grid-row: ${t.gr}; min-width: 0; min-height: 0; overflow: hidden; text-align: left; padding: ${t.pad}; background: ${t.bg}; border: ${t.border}; border-radius: 5px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; gap: 2px;`,
                                )}
                              >
                                <span
                                  className="mt-num"
                                  style={css(
                                    `display: flex; justify-content: flex-start; gap: 8px; font-family: 'IBM Plex Mono', monospace; font-size: min(${t.numFs}, 22cqh); color: #95A3B5;`,
                                  )}
                                >
                                  <span
                                    style={css(
                                      `font-weight: 600; color: #DCE3EC;`,
                                    )}
                                  >
                                    {t.num}
                                  </span>
                                  <span style={css(`color: ${t.flagColor};`)}>
                                    {t.flag}
                                  </span>
                                </span>
                                <span
                                  style={css(
                                    `display: flex; flex-direction: column; gap: 2px; min-width: 0;`,
                                  )}
                                >
                                  <span
                                    style={css(
                                      `display: block; font-family: 'IBM Plex Sans Condensed', sans-serif; font-size: min(${t.fs}, 34cqh, 16cqw); line-height: 1.05; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,
                                    )}
                                  >
                                    {t.title}
                                  </span>
                                  <span
                                    className="mt-sub"
                                    style={css(
                                      `display: block; font-size: min(${t.subFs}, 20cqh); line-height: 1.2; color: ${t.stateColor}; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,
                                    )}
                                  >
                                    {t.sub}
                                  </span>
                                  {t.showName ? (
                                    <>
                                      {" "}
                                      <span
                                        className="mt-name"
                                        style={css(
                                          `display: block; font-size: min(${t.subFs}, 18cqh); line-height: 1.2; color: #95A3B5; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,
                                        )}
                                      >
                                        {t.name}
                                      </span>{" "}
                                    </>
                                  ) : null}
                                </span>
                                {t.inset ? (
                                  <>
                                    {" "}
                                    <span
                                      aria-hidden="true"
                                      style={css(
                                        `position: absolute; top: ${t.insetTop}; right: 5px; width: 26%; max-height: 40%; aspect-ratio: 16 / 9; box-sizing: border-box; border: ${t.insetBorder}; border-radius: 3px; background: ${t.insetBg}; display: flex; align-items: flex-end;`,
                                      )}
                                    >
                                      {" "}
                                      <span
                                        style={css(
                                          `font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; font-weight: 600; line-height: 1.3; padding: 0 3px; color: #04121C; background: ${t.insetTagBg};`,
                                        )}
                                      >
                                        {t.insetLabel}
                                      </span>{" "}
                                    </span>{" "}
                                  </>
                                ) : null}
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div
                        data-sec="sel"
                        style={css(
                          `grid-area: sel; width: ${V.lay.selW}; min-width: ${V.lay.selMin}; max-width: ${V.lay.selMax}; min-height: 0; overflow-y: auto; box-sizing: border-box; background: #161E29; border: 1px solid #243042; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; gap: 10px; box-shadow: ${V.secRing.sel};`,
                        )}
                      >
                        <div
                          style={css(
                            `display: flex; flex-direction: column; gap: 2px; min-width: 0;`,
                          )}
                        >
                          <span
                            style={css(
                              `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #95A3B5;`,
                            )}
                          >
                            <SecKey n="3" on={V.secOn.sel} />
                            {"SELECTED \u00b7 TILE "}
                            {V.ins.num}
                          </span>
                          <span
                            style={css(`font-size: 15px; font-weight: 600;`)}
                          >
                            {V.ins.title}
                          </span>
                          <span
                            style={css(
                              `font-size: 12.5px; color: ${V.ins.stateColor};`,
                            )}
                          >
                            {V.ins.sub}
                          </span>
                        </div>
                        <div
                          style={css(
                            `display: flex; gap: 6px; flex-wrap: ${V.lay.selWrap};`,
                          )}
                        >
                          <button
                            type="button"
                            onClick={V.startSwap}
                            disabled={V.ins.noFeed}
                            aria-label="Swap with another tile"
                            title="Swap with another tile"
                            style={css(
                              `height: 34px; width: 40px; border-radius: 6px; font-size: 17px; line-height: 1; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                            )}
                          >
                            {"\u21c4"}
                          </button>
                          <button
                            type="button"
                            onClick={V.toggleRec}
                            disabled={V.ins.noRec}
                            aria-pressed={V.ins.recPressed}
                            title={V.ins.recTitle}
                            style={css(
                              `height: 34px; padding: 0 10px; border-radius: 6px; font-size: 12.5px; font-weight: 600; letter-spacing: 0.03em; cursor: pointer; background: ${V.ins.recBg}; border: ${V.ins.recBorder}; color: ${V.ins.recColor};`,
                            )}
                          >
                            {V.ins.recLabel}
                          </button>
                          <button
                            type="button"
                            onClick={V.clearTile}
                            disabled={V.ins.noFeed}
                            style={css(
                              `height: 34px; padding: 0 12px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                            )}
                          >
                            {"Clear"}
                          </button>
                        </div>
                        {V.ins.hasFeed ? (
                          <>
                            <div
                              role="group"
                              aria-label="View"
                              style={css(
                                `display: flex; align-items: center; gap: 4px; flex-wrap: ${V.lay.selWrap};`,
                              )}
                            >
                              <span
                                style={css(
                                  `font-size: 12px; color: #95A3B5; margin-right: 4px; white-space: nowrap;`,
                                )}
                              >
                                {"View "}
                                <span
                                  style={css(
                                    `font-family: 'IBM Plex Mono', monospace; font-size: 11px;`,
                                  )}
                                >
                                  {V.keys.altC}
                                </span>{" "}
                              </span>
                              {(V.ins.views || []).map((v, i_v) => (
                                <React.Fragment
                                  key={v && v.key != null ? v.key : i_v}
                                >
                                  <button
                                    type="button"
                                    onClick={v.pick}
                                    aria-pressed={v.pressed}
                                    aria-label={v.aria}
                                    title={v.tip}
                                    style={css(
                                      `height: 32px; padding: 0 9px; border-radius: 6px; font-size: 12.5px; font-weight: 600; letter-spacing: 0.03em; cursor: pointer; background: ${v.bg}; border: ${v.border}; display: flex; align-items: center; gap: 6px;`,
                                    )}
                                  >
                                    {" "}
                                    <span>{v.label}</span>{" "}
                                    {v.hasTag ? (
                                      <>
                                        {" "}
                                        <span
                                          aria-hidden="true"
                                          style={css(
                                            `width: 7px; height: 7px; border-radius: 50%; background: #FF6B7A; flex: 0 0 7px;`,
                                          )}
                                        >
                                          {" "}
                                        </span>{" "}
                                      </>
                                    ) : null}{" "}
                                  </button>
                                </React.Fragment>
                              ))}
                            </div>
                            <div
                              role="group"
                              aria-label="On-screen display"
                              style={css(
                                `display: flex; align-items: center; gap: 4px; flex-wrap: ${V.lay.selWrap};`,
                              )}
                            >
                              <button
                                type="button"
                                onClick={V.toggleOsd}
                                aria-pressed={V.ins.osdPressed}
                                style={css(
                                  `height: 32px; padding: 0 12px; border-radius: 6px; font-size: 12.5px; font-weight: 600; letter-spacing: 0.03em; cursor: pointer; background: ${V.ins.osdBg}; border: ${V.ins.osdBorder};`,
                                )}
                              >
                                {"OSD"}
                              </button>
                              <span
                                style={css(
                                  `font-size: 12px; color: #95A3B5; margin: 0 2px 0 6px;`,
                                )}
                              >
                                {"Text"}
                              </span>
                              {(V.ins.osdSizes || []).map((z, i_z) => (
                                <React.Fragment
                                  key={z && z.key != null ? z.key : i_z}
                                >
                                  <button
                                    type="button"
                                    onClick={z.pick}
                                    disabled={z.off}
                                    aria-pressed={z.pressed}
                                    aria-label={z.aria}
                                    style={css(
                                      `height: 32px; min-width: 34px; padding: 0 6px; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; cursor: pointer; background: ${z.bg}; border: ${z.border};`,
                                    )}
                                  >
                                    {z.label}
                                  </button>
                                </React.Fragment>
                              ))}
                            </div>
                          </>
                        ) : null}
                        {V.ins.hasPb ? (
                          <>
                            <div
                              role="group"
                              aria-label="Recorded playback"
                              style={css(
                                `border: 1px solid #6B5A2F; background: #1F1A10; border-radius: 6px; padding: 10px; display: flex; flex-direction: column; gap: 8px;`,
                              )}
                            >
                              <div
                                style={css(
                                  `display: flex; justify-content: space-between; align-items: baseline; gap: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 12px;`,
                                )}
                              >
                                <span
                                  style={css(
                                    `color: #FFB547; font-weight: 600;`,
                                  )}
                                >
                                  {"REC "}
                                  {V.pb.time}
                                </span>
                                <span style={css(`color: #B7C3D1;`)}>
                                  {V.pb.behind}
                                </span>
                              </div>
                              <input
                                type="range"
                                min="0"
                                max={V.pb.max}
                                step="1"
                                value={V.pb.pos}
                                onChange={V.pb.scrub}
                                aria-label="Playback position"
                                style={css(
                                  `width: 100%; accent-color: #FFB547;`,
                                )}
                              />
                              <div
                                style={css(
                                  `display: flex; gap: 4px; flex-wrap: ${V.lay.selWrap}; align-items: center;`,
                                )}
                              >
                                <button
                                  type="button"
                                  onClick={V.pb.back}
                                  aria-label="Back 10 seconds"
                                  style={css(
                                    `height: 30px; padding: 0 8px; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                                  )}
                                >
                                  {"\u221210s"}
                                </button>
                                <button
                                  type="button"
                                  onClick={V.pb.toggle}
                                  aria-label={V.pb.toggleAria}
                                  style={css(
                                    `height: 30px; width: 38px; border-radius: 6px; font-size: 13px; cursor: pointer; background: #2A2112; border: 1px solid #FFB547; color: #FFB547;`,
                                  )}
                                >
                                  {V.pb.toggleIcon}
                                </button>
                                <button
                                  type="button"
                                  onClick={V.pb.fwd}
                                  aria-label="Forward 10 seconds"
                                  style={css(
                                    `height: 30px; padding: 0 8px; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                                  )}
                                >
                                  {"+10s"}
                                </button>
                                {(V.pb.speeds || []).map((sp, i_sp) => (
                                  <React.Fragment
                                    key={sp && sp.key != null ? sp.key : i_sp}
                                  >
                                    <button
                                      type="button"
                                      onClick={sp.pick}
                                      aria-pressed={sp.pressed}
                                      style={css(
                                        `height: 30px; min-width: 34px; padding: 0 6px; border-radius: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; cursor: pointer; background: ${sp.bg}; border: ${sp.border};`,
                                      )}
                                    >
                                      {sp.label}
                                    </button>
                                  </React.Fragment>
                                ))}
                                <button
                                  type="button"
                                  onClick={V.toggleRec}
                                  style={css(
                                    `margin-left: auto; height: 30px; padding: 0 10px; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer; background: transparent; border: 1px solid #4CC3FF; color: #8ED9FF;`,
                                  )}
                                >
                                  {"Back to live"}
                                </button>
                              </div>
                            </div>
                          </>
                        ) : null}
                        {V.ins.hasWarn ? (
                          <>
                            <div
                              role="alert"
                              style={css(
                                `border: 1px solid #6B5A2F; background: #241F14; border-radius: 6px; padding: 10px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center;`,
                              )}
                            >
                              <span
                                style={css(
                                  `flex: 1 1 220px; min-width: 0; white-space: normal; font-size: 13px; color: #FFD27A;`,
                                )}
                              >
                                {V.ins.warnText}
                              </span>
                              <button
                                type="button"
                                onClick={V.camWarnYes}
                                style={css(
                                  `height: 32px; padding: 0 12px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: transparent; border: 1px solid #FFD27A; color: #FFD27A;`,
                                )}
                              >
                                {"Switch anyway"}
                              </button>
                              <button
                                type="button"
                                onClick={V.camWarnNo}
                                style={css(
                                  `height: 32px; padding: 0 12px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: transparent; border: 1px solid #33435A;`,
                                )}
                              >
                                {"Cancel"}
                              </button>
                            </div>
                          </>
                        ) : null}
                      </div>
                      <div
                        style={css(
                          `grid-area: bottom; display: ${V.lay.botDisplay}; grid-template-columns: ${V.lay.botCols}; grid-template-rows: ${V.lay.botRows}; grid-template-areas: ${V.lay.botAreas}; gap: ${V.lay.botGap}; min-height: 0;`,
                        )}
                      >
                        {V.lay.tabs ? (
                          <>
                            <div
                              role="tablist"
                              aria-label="Desk panels"
                              style={css(
                                `grid-area: tabs; display: flex; gap: 4px;`,
                              )}
                            >
                              {(V.botTabs || []).map((bt, i_bt) => (
                                <React.Fragment
                                  key={bt && bt.key != null ? bt.key : i_bt}
                                >
                                  <button
                                    type="button"
                                    role="tab"
                                    onClick={bt.pick}
                                    aria-selected={bt.sel}
                                    style={css(
                                      `height: 30px; padding: 0 12px; border-radius: 6px; font-size: 12.5px; cursor: pointer; background: ${bt.bg}; border: ${bt.border};`,
                                    )}
                                  >
                                    {bt.label}
                                  </button>
                                </React.Fragment>
                              ))}
                            </div>
                          </>
                        ) : null}
                        <div
                          role="group"
                          aria-label="Tile arrangement"
                          data-sec="arr"
                          style={css(
                            `grid-area: ${V.lay.ga.arr}; min-width: 0; min-height: 0; overflow-y: auto; display: ${V.lay.dp.arr}; flex-direction: column; gap: 6px; box-sizing: border-box; background: ${V.lay.boxBg}; border: ${V.lay.boxBorder}; border-radius: 8px; padding: ${V.lay.boxPad}; box-shadow: ${V.secRing.arr};`,
                          )}
                        >
                          <span
                            style={css(
                              `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #95A3B5;`,
                            )}
                          >
                            <SecKey n="5" on={V.secOn.arr} />
                            {"ARRANGEMENT"}
                          </span>
                          <div
                            style={css(
                              `display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 4px;`,
                            )}
                          >
                            {(V.presets || []).map((p, i_p) => (
                              <React.Fragment
                                key={p && p.key != null ? p.key : i_p}
                              >
                                <button
                                  type="button"
                                  onClick={p.pick}
                                  aria-pressed={p.pressed}
                                  aria-label={p.aria}
                                  style={css(
                                    `height: 40px; padding: 0 8px; border-radius: 6px; cursor: pointer; background: ${p.bg}; border: ${p.border}; display: flex; align-items: center; gap: 8px;`,
                                  )}
                                >
                                  <span
                                    aria-hidden="true"
                                    style={css(
                                      `flex: 0 0 40px; height: 23px; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); grid-template-rows: repeat(12, minmax(0, 1fr)); gap: 1px;`,
                                    )}
                                  >
                                    {(p.cells || []).map((pc, i_pc) => (
                                      <React.Fragment
                                        key={
                                          pc && pc.key != null ? pc.key : i_pc
                                        }
                                      >
                                        {" "}
                                        <span
                                          style={css(
                                            `grid-column: ${pc.gc}; grid-row: ${pc.gr}; background: ${p.cellBg}; border-radius: 1px;`,
                                          )}
                                        >
                                          {" "}
                                        </span>{" "}
                                      </React.Fragment>
                                    ))}
                                  </span>
                                  <span
                                    style={css(
                                      `font-size: 12.5px; white-space: nowrap;`,
                                    )}
                                  >
                                    {p.label}
                                  </span>
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        <div
                          data-sec="saved"
                          style={css(
                            `grid-area: ${V.lay.ga.saved}; min-width: 0; min-height: 0; overflow-y: auto; display: ${V.lay.dp.saved}; flex-direction: column; gap: 12px; box-sizing: border-box; background: ${V.lay.boxBg}; border: ${V.lay.boxBorder}; border-radius: 8px; padding: ${V.lay.boxPad}; box-shadow: ${V.secRing.saved};`,
                          )}
                        >
                          <div
                            role="group"
                            aria-label="Saved layouts"
                            style={css(
                              `display: flex; flex-direction: column; gap: 6px;`,
                            )}
                          >
                            <span
                              style={css(
                                `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #95A3B5;`,
                              )}
                            >
                              <SecKey n="6" on={V.secOn.saved} />
                              {"SAVED LAYOUTS"}
                            </span>
                            {(V.layouts || []).map((l, i_l) => (
                              <React.Fragment
                                key={l && l.key != null ? l.key : i_l}
                              >
                                <button
                                  type="button"
                                  onClick={l.recall}
                                  aria-pressed={l.pressed}
                                  style={css(
                                    `min-height: 36px; padding: 0 10px; border-radius: 6px; font-size: 13px; cursor: pointer; background: ${l.bg}; border: ${l.border}; display: flex; align-items: center; justify-content: space-between; gap: 8px; text-align: left;`,
                                  )}
                                >
                                  {" "}
                                  <span>{l.name}</span>{" "}
                                  <span
                                    style={css(
                                      `font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #95A3B5;`,
                                    )}
                                  >
                                    {l.meta}
                                  </span>{" "}
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                          <div
                            style={css(
                              `display: flex; flex-direction: column; gap: 6px;`,
                            )}
                          >
                            <label
                              htmlFor="layout-name"
                              style={css(
                                `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #95A3B5;`,
                              )}
                            >
                              {"SAVE AS"}
                            </label>
                            <div style={css(`display: flex; gap: 6px;`)}>
                              <input
                                id="layout-name"
                                type="text"
                                value={V.nameInput}
                                onChange={V.onName}
                                style={css(
                                  `flex: 1 1 auto; min-width: 0; height: 36px; box-sizing: border-box; padding: 0 10px; background: #0A0E13; border: 1px solid #3A4B63; border-radius: 6px; color: #DCE3EC; font-size: 13px; font-family: 'IBM Plex Sans', system-ui, sans-serif;`,
                                )}
                              />
                              <button
                                type="button"
                                onClick={V.save}
                                style={css(
                                  `height: 36px; padding: 0 12px; border-radius: 6px; font-size: 13px; cursor: pointer; background: transparent; border: 1px solid #4CC3FF; color: #8ED9FF;`,
                                )}
                              >
                                {"Save"}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          onMouseLeave={V.logLeave}
                          data-sec="log"
                          style={css(
                            `grid-area: ${V.lay.ga.log}; position: relative; min-width: 0; min-height: 0; display: ${V.lay.dp.log}; flex-direction: column; gap: 8px; box-sizing: border-box; background: #161E29; border: 1px solid #243042; border-radius: 8px; padding: 12px; box-shadow: ${V.secRing.log};`,
                          )}
                        >
                          <div
                            style={css(
                              `display: flex; justify-content: space-between; align-items: baseline; gap: 8px;`,
                            )}
                          >
                            <span
                              style={css(
                                `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #95A3B5;`,
                              )}
                            >
                              <SecKey n="4" on={V.secOn.log} />
                              {"RECENT CHANGES"}
                            </span>
                          </div>
                          <ol
                            style={css(
                              `list-style: none; margin: 0; padding: 0 4px 0 0; display: flex; flex-direction: column; gap: 2px; flex: 1 1 0; min-height: 0; overflow-y: auto;`,
                            )}
                          >
                            {(V.log || []).map((e, i_e) => (
                              <React.Fragment
                                key={e && e.key != null ? e.key : i_e}
                              >
                                <li
                                  data-row={i_e}
                                  onMouseEnter={e.enter}
                                  style={css(
                                    `display: flex; align-items: center; gap: 8px; font-size: 12.5px; min-height: 30px; padding: 0 4px; border-radius: 4px; background: ${e.bg};`,
                                  )}
                                >
                                  <span
                                    style={css(
                                      `font-family: 'IBM Plex Mono', monospace; color: #95A3B5; font-variant-numeric: tabular-nums; flex: 0 0 40px;`,
                                    )}
                                  >
                                    {e.t}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={e.pin}
                                    aria-expanded={e.expanded}
                                    title={e.text}
                                    style={css(
                                      `flex: 1 1 auto; min-width: 0; text-align: left; background: transparent; border: 0; padding: 5px 0; cursor: pointer; font-size: 12.5px; color: #DCE3EC; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,
                                    )}
                                  >
                                    {e.text}
                                  </button>
                                  {e.isCurrent ? (
                                    <>
                                      {" "}
                                      <span
                                        style={css(
                                          `flex: 0 0 auto; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #8ED9FF; padding: 0 6px;`,
                                        )}
                                      >
                                        {"CURRENT"}
                                      </span>{" "}
                                    </>
                                  ) : null}
                                  {e.notCurrent ? (
                                    <>
                                      {" "}
                                      <button
                                        type="button"
                                        onClick={e.restore}
                                        aria-label={e.aria}
                                        style={css(
                                          `flex: 0 0 auto; height: 26px; padding: 0 8px; border-radius: 6px; font-size: 12px; cursor: pointer; background: transparent; border: 1px solid #33435A; color: #B7C3D1;`,
                                        )}
                                      >
                                        {"Restore"}
                                      </button>{" "}
                                    </>
                                  ) : null}
                                </li>
                              </React.Fragment>
                            ))}
                          </ol>
                          {V.hasLogCard ? (
                            <>
                              <div
                                role="dialog"
                                aria-label={V.logCard.aria}
                                style={css(
                                  `position: absolute; left: ${V.lay.cardL}; right: ${V.lay.cardR}; bottom: ${V.lay.cardB}; z-index: 20; width: 340px; pointer-events: none; box-sizing: border-box; background: #111720; border: 1px solid #3A4B63; border-radius: 8px; padding: 10px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; gap: 8px;`,
                                )}
                              >
                                <span
                                  style={css(
                                    `font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.1em; color: #95A3B5;`,
                                  )}
                                >
                                  {"WALL AFTER \u00b7 "}
                                  {V.logCard.t}
                                </span>
                                <span
                                  style={css(
                                    `font-size: 12.5px; color: #DCE3EC;`,
                                  )}
                                >
                                  {V.logCard.text}
                                </span>
                                <div
                                  style={css(
                                    `display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); grid-template-rows: repeat(12, minmax(0, 1fr)); gap: 2px; aspect-ratio: 16 / 9; background: #0A0E13; border-radius: 4px; padding: 2px;`,
                                  )}
                                >
                                  {(V.logCard.cells || []).map((mc, i_mc) => (
                                    <React.Fragment
                                      key={mc && mc.key != null ? mc.key : i_mc}
                                    >
                                      <span
                                        style={css(
                                          `grid-column: ${mc.gc}; grid-row: ${mc.gr}; min-width: 0; min-height: 0; overflow: hidden; box-sizing: border-box; background: ${mc.bg}; border: ${mc.border}; border-radius: 2px; padding: 2px 3px; font-size: ${mc.fs}; line-height: 1.15; color: #DCE3EC;`,
                                        )}
                                      >
                                        {mc.label}
                                      </span>
                                    </React.Fragment>
                                  ))}
                                </div>
                                <span
                                  style={css(
                                    `font-size: 12.5px; color: #FFD27A;`,
                                  )}
                                >
                                  {V.logCard.diff}
                                </span>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : null}
            {V.isWall ? (
              <>
                <section
                  aria-label="Video wall as the room sees it"
                  style={css(
                    `flex: 1 1 auto; min-width: 0; min-height: 0; display: flex; align-items: center; justify-content: center; container-type: size; background: #000000;`,
                  )}
                >
                  <div
                    style={css(
                      `width: min(100cqw, calc(100cqh * 16 / 9)); height: min(100cqh, calc(100cqw * 9 / 16)); box-sizing: border-box; background: #05070A; container-type: inline-size;`,
                    )}
                  >
                    <div
                      style={css(
                        `display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); grid-template-rows: repeat(12, minmax(0, 1fr)); gap: 0.35cqw; height: 100%; background: #3E4856;`,
                      )}
                    >
                      {(V.wall || []).map((w, i_w) => (
                        <React.Fragment key={w && w.key != null ? w.key : i_w}>
                          <div
                            style={css(
                              `grid-column: ${w.gc}; grid-row: ${w.gr}; min-width: 0; min-height: 0; display: flex; flex-direction: column; background: #0B0F14; box-shadow: ${w.ring}; overflow: hidden;`,
                            )}
                          >
                            <div
                              style={css(
                                `position: relative; flex: 1 1 auto; min-height: 0;`,
                              )}
                            >
                              <div
                                className={`scn ${w.cls}`}
                                style={css(
                                  `position: absolute; inset: 0; background-size: ${w.bsz}; background-position: ${w.bpos}; filter: ${w.filter};`,
                                )}
                              >
                                {" "}
                              </div>
                              {w.pip ? (
                                <>
                                  <div
                                    style={css(
                                      `position: absolute; top: 5%; right: 3%; width: 32%; aspect-ratio: 16 / 9; border: 2px solid #DCE3EC; box-shadow: 0 0 0 1px #05070A; overflow: hidden; background: #0D1117;`,
                                    )}
                                  >
                                    <div
                                      className={`scn ${w.pipCls}`}
                                      style={css(
                                        `position: absolute; inset: 0; background-size: 150%; background-position: ${w.bpos}; filter: ${w.pipFilter};`,
                                      )}
                                    >
                                      {" "}
                                    </div>
                                    {w.osd ? (
                                      <svg
                                        aria-hidden="true"
                                        viewBox="-50 -50 100 100"
                                        style={css(
                                          `position: absolute; left: 50%; top: 50%; width: 22%; transform: translate(-50%, -50%); overflow: visible; filter: drop-shadow(0 0 1px #000);`,
                                        )}
                                      >
                                        <path
                                          d="M -50 0 H -12 M 12 0 H 50 M 0 -30 V -10 M 0 10 V 30"
                                          stroke="#E9DC7A"
                                          strokeWidth="3.5"
                                          fill="none"
                                        />
                                        <circle r="3" fill="#E9DC7A" />
                                      </svg>
                                    ) : null}
                                    <span
                                      style={css(
                                        `position: absolute; left: 0; bottom: 0; font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: ${w.pipFs}; color: #05070A; background: ${w.pipTagBg}; padding: 1px 5px;`,
                                      )}
                                    >
                                      {w.pipLabel}
                                    </span>
                                  </div>
                                </>
                              ) : null}
                              {w.stripes ? (
                                <>
                                  {" "}
                                  <div
                                    style={css(
                                      `position: absolute; inset: 0; background: repeating-linear-gradient(135deg, rgba(255, 107, 122, 0.22) 0 1.2cqw, transparent 1.2cqw 2.4cqw);`,
                                    )}
                                  >
                                    {" "}
                                  </div>{" "}
                                </>
                              ) : null}
                              {w.osd ? (
                                <Osd
                                  d={w.osdD}
                                  k={w.osdK}
                                  compact={w.osdCompact}
                                />
                              ) : null}
                              {w.hasCenter ? (
                                <>
                                  <div
                                    style={css(
                                      `position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; text-align: center; padding: 6px;`,
                                    )}
                                  >
                                    <span
                                      style={css(
                                        `font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: ${w.fs}; letter-spacing: 0.04em; color: ${w.centerColor}; background: ${w.centerBg}; padding: 4px 8px;`,
                                      )}
                                    >
                                      {w.center}
                                    </span>
                                  </div>
                                </>
                              ) : null}
                            </div>
                            <div
                              style={css(
                                `flex: 0 0 auto; display: flex; align-items: center; gap: ${w.gap}; padding: ${w.pad}; background: ${w.bandBg}; color: ${w.bandColor}; font-family: 'IBM Plex Sans Condensed', sans-serif; font-size: ${w.fs}; line-height: 1.1;`,
                              )}
                            >
                              <span
                                style={css(
                                  `font-family: 'IBM Plex Mono', monospace; opacity: 0.75;`,
                                )}
                              >
                                {w.num}
                              </span>
                              <span
                                style={css(
                                  `font-weight: 700; letter-spacing: 0.03em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1 1 auto; min-width: 0;`,
                                )}
                              >
                                {w.title}
                              </span>
                              <span
                                style={css(
                                  `font-weight: 700; white-space: nowrap; color: ${w.stateColor};`,
                                )}
                              >
                                {w.state}
                              </span>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  {V.showPeek ? (
                    <button
                      type="button"
                      className="peek"
                      onClick={V.showDesk}
                      aria-label="Back to the layout desk"
                      style={css(
                        `position: absolute; right: 14px; bottom: 14px; z-index: 30; height: 34px; padding: 0 12px; border-radius: 6px; font-size: 13px; cursor: pointer; background: #111720; border: 1px solid #33435A; color: #DCE3EC;`,
                      )}
                    >
                      {"Desk "}
                      {V.keys.altW}
                    </button>
                  ) : null}
                </section>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
