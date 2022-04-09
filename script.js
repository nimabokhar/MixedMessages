const generateDadJokes = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};
const dadJokes = [
  `Why does Superman get invited to dinners? Because he is a Supperhero.`,
  `What do you call a cow with two legs? Lean beef.`,
  `What do vegetarian zombies eat? Grrrrrainnnnnssss.`,
  `Why did the opera singer go sailing? They wanted to hit the high Cs.`,
  `Two dyslexics walk into a bra.`,
  `What do you call a duck that gets all A's? A wise quacker.`,
  `How are false teeth like stars? They come out at night!`,
  `What did the pirate say on his 80th birthday? Aye Matey!`,
  `"Dad, I'm hungry." Hello, Hungry. I'm Dad.`,
  `What is the best way to carve?Whittle by whittle.`,
  `What does a pirate pay for his corn? A buccaneer!`,
  `You can't trust a ladder. It will always let you down`,
  `Did you hear about the scientist who was lab partners with a pot of boiling water? He had a very esteemed colleague.`,
  `Why did the octopus beat the shark in a fight? Because it was well armed.`,
  `I went to the zoo the other day, there was only one dog in it. It was a shitzu.`,
];

console.log(generateDadJokes(dadJokes));
