/* eslint-disable no-console */
import Bowman from './Bowman';
import Deamon from './Deamon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Team from './Team';

const group1 = new Team();
const player1 = new Bowman('Alex');
const player2 = new Deamon('Ivan');
const player3 = new Magician('Olga');
const player4 = new Swordsman('Jack');

group1.addAll([player1, player2, player3, player4]);

for (const player of group1) {
  console.log(player);
}