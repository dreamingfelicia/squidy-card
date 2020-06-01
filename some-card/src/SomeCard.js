import { html, css, LitElement } from 'lit-element';

export class SomeCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--some-card-text-color, #000);
      }

      .container{
        position: absolute;
        display: flex;
        box-shadow: 3px 3px 4px grey;
        border: 10px solid #fff;
        width: 500px;
        height: 200px;
        transition: all 1s ease-in-out;
      }

      .container:hover{
        background-color: black;
        border: 10px solid black;
        transition: all 1s;
      }

      .container:hover img{
        transform: translateX(-300px);
	      transition-delay: 0.1s;
      }

      .stack{
        position: absolute;
        z-index: 9;
        width: 500px;
        height: 200px;
        border: 10px solid transparent;
        top: -10px;
        left: -10px;
        opacity: 0;
        overflow: hidden;
      }

      .stack:hover{
        position: absolute;
        z-index: 9;
        opacity: 1;
      }

      .stack p{
        color: white;
        text-align: center;
        transform: translateY(200px);
	      transition: all 0.2s linear;
        font-size: 10px;
        
      }

      .stack:hover p { 
        opacity:1; 
        transition-delay: 0.2s;
        transform: translateY(-10px);
      }

      .wrapperleft{
        position: relative;
        flex: 1;
        overflow: hidden;
        z-index: -1;
      }

      .wrapperright{
        position: relative;
        flex: 1.25;
        padding: 0px 10px 0px 10px;
        z-index: -1;
      }

      .text{
        padding: 0px 5px 0px 5px;
      }

      img{
        display: block;
        position: absolute;
        width: 100%;
        top: 0px;
        left: 0px;
        transition: all 0.3s ease-in-out; 
      }

      .h1{
        font-family: "Times New Roman", Times, serif;
        text-align: center;
        position: relative;
        font-size: 10px;
      }


    `;
  }

  static get properties() {
    return {
      img: { type: String },
    };
  }

  constructor() {
    super();
    this.img = "https://i.imgur.com/cA9E9G8.png";
  }


  render() {
    return html`
    <tr>
    <div class="body">
      <div class="container">
      <div class="stack"><p><slot name="stack"></slot></p></div>
        <div class="wrapperleft">
          <img src="${this.img}">
        </div>
        <div class="wrapperright"><div class="text"><div class="h1"><slot name="attributes"></slot>
        </div>
        </div>
        </div>
      </div>
  </div>
  </div>
    `;
  }
}
