import React from 'react';

const TableRow = ({ projectId, index, name, uploadDateTime, status, handleDelete, projectIndex }) => {
  return (
    
    <tr className="border-b-2">
      <td>{name}</td>
      <td>{uploadDateTime}</td>
      <td>{status}</td>
      <td className="flex items-center text-center justify-around">
        <a href={`/project/${projectIndex}/${index}/transcript`}>
          <button className="p-2 border border-1 border-[#b3b3b3] rounded hover:bg-gray-100">
            Edit
          </button>
        </a>
        <button
          onClick={handleDelete}
          className="text-red-500 p-2 border border-1 rounded border-[#b3b3b3] hover:bg-gray-100"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
