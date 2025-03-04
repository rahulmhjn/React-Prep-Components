// nested file folder structure
// expand and collpase folders
// Add and delete a file/folder

import React, { useState } from 'react';
import BackButton from '../../utilityComponents/BackButton/BackButton';
import json from './data.json';

const ListAll = ({ list, addNewNode, deleteNode }) => {
  const [isExpandable, setIsExpandable] = useState({});

  return (
    <React.Fragment>
      {list.map((obj, key) => (
        <div key={key} style={{ marginLeft: '10px' }}>
          <div>
            {obj.isFolder && (
              <span
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  setIsExpandable((prev) => ({
                    ...prev,
                    [obj.id]: !prev[obj.id],
                  }))
                }
              >
                {isExpandable[obj.id] ? '-' : '+'}
              </span>
            )}
            <span>{obj.name}</span>{' '}
            {obj.isFolder && (
              <span onClick={() => addNewNode(obj.id)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                  alt="add"
                  height={'10px'}
                  width={'10px'}
                />
              </span>
            )}{' '}
            <span onClick={() => deleteNode(obj.id)}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy6cH4pk8uBtQ-_MBHx5MtDO8ms62KxR0UQ&s"
                alt="trash"
                height={'10px'}
                width={'10px'}
              />
            </span>
          </div>
          {obj.isFolder && isExpandable[obj.id] && obj.children && (
            <ListAll
              list={obj.children}
              addNewNode={addNewNode}
              deleteNode={deleteNode}
            />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

const SideBar = () => {
  console.log(json);
  const [data, setData] = useState(json);

  function addNewNode(id) {
    let fileName = window.prompt('Enter file name');

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: Math.random() * 1000, name: fileName, isFolder: false },
            ],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
        return node;
      });
    };

    setData((prev) => updateTree(prev));
  }

  const deleteNode = (id) => {
    const updateTree = (list) => {
      return list
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }

          return node;
        })
        .filter((node) => node.id !== id);
    };

    console.log(updateTree(data));

    setData((prev) => updateTree(prev));
  };

  return (
    <React.Fragment>
      <BackButton />
      <h1 style={{ textAlign: 'center' }}>VS CODE SIDEBAR</h1>
      <div style={{ margin: '50px' }}>
        <ListAll list={data} addNewNode={addNewNode} deleteNode={deleteNode} />
      </div>
    </React.Fragment>
  );
};

export default SideBar;
