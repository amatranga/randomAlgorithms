const locations = [
  {"id": 1, "name": "San Francisco Bay Area", "parent_id": null},
  {"id": 2, "name": "San Jose", "parent_id": 3},
  {"id": 3, "name": "South Bay", "parent_id": 1},
  {"id": 4, "name": "San Francisco", "parent_id": 1},
  {"id": 5, "name": "Manhattan", "parent_id": 6},
  {"id": 6, "name": "New York", "parent_id": null},
  {"id": 7, "name": "test", "parent_id": 2}
];

const unflatten = arr => {
  const tree = [];
  const map = {};
  
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    map[cur.id] = cur;
    map[cur.id].children = [];
  }
  
  for (let id in map) {
    if (map.hasOwnProperty(id)) {
      let cur = map[id];
      if (cur.parent_id) {
        map[cur.parent_id].children.push(cur);
        map[cur.parent_id].children.sort((a,b) => a.name > b.name);
      } else {
        tree.push(cur);
      }
    }
  }
  return tree;
};

const findHeight = node => {
  let height = 0;
  // TODO: Complete coding...
}

const preOrderTraverse = (tree, depth) => {
  if (!depth) {
    depth = 0;
  }
  console.log('-'.repeat(depth) + tree.name);
  if (tree.children.length) {
    for (let i = 0; i < tree.children.length; i++) {
      preOrderTraverse(tree.children[i], depth + i);
    }
  }
};

// let tree = unflatten(locations);
// preOrderTraverse(tree[0]);
