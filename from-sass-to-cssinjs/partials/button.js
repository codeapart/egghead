import sizes from './sizes'

const button = `
  .cssinjs-btn {
    color: #fff;
    background-color: green;
  }
`

// Render styles.
document.head.appendChild(
  document.createElement('style')
).textContent = sizes + button
