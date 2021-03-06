import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numral from 'numeral';

const ExpenseListItem = ({ description, id, amount, createdAt }) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numral(amount / 100).format('$0,0.00')}-
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
