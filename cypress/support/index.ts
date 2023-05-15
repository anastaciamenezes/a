// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace Cypress {
  interface Chainable {
    performSearch(query: string): Chainable<Element>
  }
}
