import React from 'react';
import './BillHeader.scss';

export default function BillHeader({ table }) {
  return (
    <div className="bill-header">
      <h1>Bill of Sale</h1>
      <div className="flex-row">
        <p>Server: {table ? table.employee : ''}</p>
        <p>Table: {table ? table.id : ''}</p>
      </div>
      <div className="flex-row">
        <p>Item Name</p>
        <p>Price</p>
      </div>
    </div>
  );
}
