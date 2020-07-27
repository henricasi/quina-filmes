import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBack = ({ history }) => <button className="back-link" onClick={() => history.goBack()}>← voltar</button>;

export default withRouter(GoBack);