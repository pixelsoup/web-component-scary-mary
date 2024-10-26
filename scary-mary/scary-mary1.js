class ScaryMary extends HTMLElement {
  constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      // Create a style element
      const style = document.createElement('link');
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('href', '/scary-mary/scary-mary.css');

      // Create the main wrapper div
      const wrapper = document.createElement('div');
      wrapper.classList.add('scaryDomWrapper');

      // Create the SVG element
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.classList.add('scaryDom');
      svg.setAttribute("viewBox", "0 0 62.01 90");

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M62,24.73c-.29-1.43-2.89-.32-3.66-.85-.77-.52,1.59-3,.93-3.48-.67-.48-1.43.17-2.81,1.04-1.39.86-1.05-.29-1.01-.83.04-.55-.05-4.85-1.94-.38-1.89,4.47-6.87,5.53-9.45,6.14-2.59.61-10.3.59-7.5-8.63,2.79-9.22-2.09-10.91-2.09-10.91-2.61-1.61-8.44-1.33-12.05,3.79-3.23,4.57-5.89,6.09-7.84,5.73s-4.17-1.29-4.38-5.82c-.21-4.53,5.47-7.82,3.71-8.67-1.76-.85-2.51,2.73-3.95,1.73-1.44-1,.48-3.42-1.32-3.58-1.79-.16-.93,3.9-2.48,4.11-1.54.21-1.42-2.92-2.77-2.3-1.36.62.17,3.03.12,3.94C3.46,6.66,0,6.54,0,7.7c0,1.15,4.36-.14,3.92,5.02-.43,5.16.9,12.19,3.71,20.49,2.82,8.3,10.18,13.35,16.41,15.07,6.23,1.72,9.57,4.01,9.74,5.38.17,1.37.23,2.26-2.92,4.84s-6.15,4.72-5.9,9.1c.24,4.38,3.41,7.07,6.63,8.71,3.28,1.68,6.88.97,9.95,4.36,3.07,3.39-1.67,9.33-1.67,9.33,5.5-3.05,6.3-7.14,3.94-12-2.48-5.11-9.83-4.42-10.14-7.14-.31-2.73,2-3.97,5.84-5.65,3.84-1.68,8.4-4.5,8.54-10.42.14-5.92-4.36-9.88-4.22-15.57.14-5.7,8.27-10.57,11.74-10.92s3.54,2.34,4.68,1.13c1.14-1.21-1.31-1.82-1.21-2.84.1-1.02,3.23-.43,2.94-1.86h0ZM27.88,11.88c.59-1.2,1.37-2.03,1.75-1.84.38.19.22,1.31-.36,2.52s-1.37,2.03-1.75,1.84c-.39-.19-.22-1.31.36-2.52ZM29.5,20.91c-.17,1.37-.52,2.7-1.73,1.94-1.21-.75-.03-3.72,1.73-4.86,0,0,1.07-1.21,1.28.26.2,1.47-1.11,1.29-1.28,2.66h0ZM34.18,14.04c-.5,1.24-1.22,2.12-1.62,1.96s-.31-1.29.18-2.54,1.22-2.12,1.62-1.96c.39.16.31,1.29-.18,2.54Z"); // Add your complete path data here
      svg.appendChild(path);

      // Create the flicker letters container
      const flickerLetters = document.createElement('div');
      flickerLetters.classList.add('flickerLetters');

      // Create individual flicker letter spans
      const letters = ['S', 'H', 'A', 'D', 'O', 'W', 'D', 'O', 'M'];
      letters.forEach((letter, index) => {
          const span = document.createElement('span');
          span.classList.add('flickerLetter');
          span.id = String.fromCharCode(76 + index); // Generate IDs L, G, I, H, T, O, W, D, M
          span.textContent = letter;
          flickerLetters.appendChild(span);
      });

      // Create a slot for additional content
      const slot = document.createElement('slot');

      // Append all elements to the wrapper
      wrapper.appendChild(svg);
      wrapper.appendChild(flickerLetters);
      wrapper.appendChild(slot);

      // Append style and wrapper to the shadow root
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
  }
}

// Define the custom element
customElements.define('scary-mary', ScaryMary);