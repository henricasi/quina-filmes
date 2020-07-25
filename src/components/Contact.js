import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
      sent: false,
      buttonText: 'Enviar'
    }
  }

  formSubmit = (e) => {
    e.preventDefault()
  
    this.setState({
        buttonText: 'Enviando...'
    })
  
    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }
    
    axios.post('API_URI', data)
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }

  render() {
    return (
      <div className="page">
        <article className="list contact-page">
        {/* {this.props.width > 1025 && <>
        <h1 className="page-title">contato</h1>
        <hr className="title-hr hr-less-margin contact-hr"/></>} */}
          <div className="contact-content">
            {/* {this.props.width < 1025 && <> */}
            <h1 className="page-title about-title dark">entre em contato</h1>
            <hr className="title-hr page-hr about-hr hr-dark"/>
            <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label className="message-name sr-only" htmlFor="name">Nome</label>
                  <input onChange={e => this.setState({ name: e.target.value})} name="name" className="form-control" type="text" placeholder="Nome" required value={this.state.name}/>
                </div>
                <div className="form-group col-md-6">
                  <label className="message-email sr-only" htmlFor="email">Email</label>
                  <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="form-control" type="email" placeholder="Email" required value={this.state.email} />
                </div>
              </div>
              <div className="form-group">
                <label className="message sr-only" htmlFor="message"></label>
                <textarea rows="8" onChange={e => this.setState({ message: e.target.value})} name="message" className="form-control" type="text" placeholder="Escreva sua mensagem aqui" value={this.state.message} required/>
              </div>
              <button type="submit" className="btn btn-secondary">{ this.state.buttonText }</button>
            </form>
            {this.props.width < 992 && <Link to="/" className="back-link back-link-contact dark">← voltar</Link>}
          </div>
        </article>
      </div>
    )
  }
}

export default Contact;
