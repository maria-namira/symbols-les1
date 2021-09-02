export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже eсть в команде');
    }
    this.members.add(character);
  }

  addAll(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const characters = this.toArray();
    return {
      current: 0,
      last: characters.length,
      next() {
        if (this.current < this.last) {
          const element = characters[this.current];
          this.current += 1;
          return { done: false, value: element };
        }
        return { done: true };
      },
    };
  }
}