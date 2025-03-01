let json = [
  {
    name: 'abc',
    children: [
      {
        name: 'def',
      },
      {
        name: 'ghi',
      },
    ],
  },
  {
    name: 'jkl',
  },
  {
    name: 'mno',
  },
];

function listAllNodes(data) {
  data.forEach((oneLevel) => {
    console.log(oneLevel.name);
    if (oneLevel.children) {
      listAllNodes(oneLevel.children);
    }
  });
}

listAllNodes(json);
