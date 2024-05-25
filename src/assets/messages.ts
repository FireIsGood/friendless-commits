const safe = [
  //
  "small changes",
  "fixed some stuff",
  "fixed all the stuff",
  "I wish this worked",
  "incredible work",
  "sailKite is cute",
  "oh yes",
  "CI didn't pass but I changed the tests",
  "it's so over",
  "we're so back",
  "whoops!",
  "blame bit flips",
  "WIP",
  "# Please enter the commit message for your changes. Lines starting",
  "Dear god please work",
  "deleted the API key",
  "good enough",
  "forgot to add this last time",
  "Not a backdoor",
  "oopsies",
  "Create LICENSE",
  "Merge pull request #1 from NSA/5badb4",
  "feat: h",
  ".",
  "-m",
  "--help",
];
const unsafe = [
  //
  "Fuck it, we ball",
  "What the fuck am I looking at",
  "I don't get paid enough to deal with this shit",
];

const all = [...safe, ...unsafe];

export default { safe, unsafe, all };
