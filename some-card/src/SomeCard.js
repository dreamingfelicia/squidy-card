import { html, css, LitElement } from 'lit-element/lit-element.js';

export class SomeCard extends LitElement {
  static get styles() {
    return [css`
      :host {
        display: block;
        position: relative;
        color: var(--some-card-text-color, #000);
        font-family: var(--some-card-font-family, "Times New Roman", Times, serif);
      }

      .container {
        position: relative;
        display: flex;
        box-shadow: 3px 3px 4px grey;
        border: 10px solid #fff;
        height: 200px;
        transition: all 1s ease-in-out;
      }
      /** default state */
      .stack {
        position: absolute;
        z-index: 9;
        height: 200px;
        border: 10px solid transparent;
        top: -10px;
        left: -10px;
        opacity: 0;
        overflow: hidden;
      }
      .stack ::slotted(*) {
        color: white;
        text-align: center;
        transform: translateY(200px);
	      transition: all 0.2s linear;
        font-size: 10px;
      }

      .wrapper-left {
        position: relative;
        flex: 1;
        overflow: hidden;
        z-index: -1;
      }

      .wrapper-right {
        position: relative;
        flex: 1.25;
        padding: 0px 10px 0px 10px;
        z-index: -1;
      }

      .text {
        padding: 0px 5px 0px 5px;
      }

      img {
        display: block;
        position: absolute;
        width: 100%;
        top: 0px;
        left: 0px;
        transition: all 0.3s ease-in-out; 
      }

      .default-display {
        text-align: center;
        position: relative;
        font-size: 10px;
      }

      /** activated state for the element display */
      :host([active]) .container {
        background-color: black;
        border: 10px solid black;
        transition: all 1s;
      }
      :host([active]) .container img {
        transform: translateX(-300px);
	      transition-delay: 0.1s;
      }
      :host([active]) .stack {
        position: absolute;
        z-index: 9;
        opacity: 1;
      }
      :host([active]) .stack ::slotted(*) { 
        opacity:1; 
        transition-delay: 0.2s;
        transform: translateY(-10px);
      }
    `];
  }

  static get properties() {
    return {
      source: { type: String },
      active: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.source = "";
    this.active = false;
    this.setAttribute('tabindex', 0);
    // on event
    this.addEventListener("focusin", this._activeOnEvent);
    this.addEventListener("mouseover", this._activeOnEvent);
    // off event
    this.addEventListener("focusout", this._activeOffEvent);
    this.addEventListener("mouseout", this._activeOffEvent);
  }

  _activeOnEvent(e) {
    this.active = true;
  }

  _activeOffEvent(e) {
    this.active = false;
  }

  render() {
    return html`
    <div class="body">
      <div class="container">
        <div class="stack">
          <slot name="details"></slot>
        </div>
        <div class="wrapper-left">
          <img src="${this.source}" alt="" />
        </div>
        <div class="wrapper-right">
          <div class="text">
            <div class="default-display">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
