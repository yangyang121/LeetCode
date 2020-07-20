// 去除树形结构子节点
const treeData = [
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [
          {
            id: 3,
          },
        ],
      },
      {
        id: 4,
        children: [
          {
            id: 5,
          },
        ],
      },
    ],
  },
];
const data = [
  {
    key: 2,
  },
  {
    key: 3,
  },
  {
    key: 5,
  },
  {
    key: 4,
  },
];

const handleRemoveChild = (treeData, data) => {
  function handleFindItemLoop(key, arr) {
    const findItem = arr.find((item) => item.id === key);
    if (findItem) return findItem;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
        const childFindItem = handleFindItemLoop(key, arr[i].children);
        if (childFindItem) return childFindItem;
      }
    }
  }
  function handleRemoveFindItemChildrenLoop(arr, item, index) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== index && arr[i]) {
        const findItem = handleFindItemLoop(arr[i].key, item.children || []);
        if (findItem) {
          arr[i] = undefined;
        }
      }
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      const findItem = handleFindItemLoop(data[i].key, treeData);
      handleRemoveFindItemChildrenLoop(data, findItem, i);
    }
  }
};

handleRemoveChild(treeData, data);
console.log(data.filter(Boolean));
