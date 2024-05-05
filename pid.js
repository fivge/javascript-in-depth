let buildTree = (input) => {
  function getChild(pid, input) {
    let tree = [];

    tree = input.filter((item) => item.pid === pid);

    if (tree.length === 0) {
      return [];
    } else {
      tree.forEach((item) => {
        item.children = getChild(item.id, input);
        delete item.pid;
      });
    }

    return tree;
  }

  return getChild("-1", input);
};

const input = [
  { id: "1", pid: "-1" },
  { id: "2", pid: "1" },
  { id: "7", pid: "4" },
  { id: "4", pid: "2" },
  { id: "3", pid: "1" },
  { id: "5", pid: "2" },
  { id: "6", pid: "3" },
];

const tree = {
  id: "1",
  children: [
    {
      id: "2",
      children: [
        {
          id: "4",
          children: [
            {
              id: "7",
              children: [],
            },
          ],
        },
        {
          id: "5",
          children: [],
        },
      ],
    },
    {
      id: "3",
      children: [
        {
          id: "6",
          children: [],
        },
      ],
    },
  ],
};

console.log(JSON.stringify(buildTree(input)));
