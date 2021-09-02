/**
 * Функция-конструктор персонажей, основной класс, от него наследуются классы всех персонажей
 * @constructor
 * @param {string} name , в виде строки, имя игрока
 * @param {string} type , в виде строки, тип персонажа
 * @throws выбрасывает ошибку, если имя игрока меньше 2 символов или болше 10
 * или если тип персонажа не существует
 */

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('The name must be a string!');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('The name must be between 2 and 10 characters!');
    }

    if (!Character.listOfTypes().includes(type)) {
      throw new Error('The type must be selected from the list of suggested types!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  static listOfTypes() {
    return ['Bowman', 'Swordsman', 'Magician', 'Deamon', 'Undead', 'Zombie'];
  }

  levelUP() {
    if (!this.health) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}