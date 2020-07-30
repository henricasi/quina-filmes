import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      class: 'btn-secondary',
      buttonText: 'Enviar'
    }
  }

  componentDidMount() {
    document.title = "Contato - Quina filmes"
  }

  formSubmit = (e) => {
    e.preventDefault()
  
    this.setState({
        buttonText: 'Enviando...'
    })

    let {name, email, message} = this.state
  
    let data = {
        name,
        email,
        message
    }
    
    axios.post('/sendmail', data)
    .then( res => {
      console.log(res);
        this.resetForm()
    })
    .catch( res => {
      this.setState({class: 'btn-danger', buttonText: "Houve um erro ao enviar sua mensagem"})
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: '', class: 'btn-success', buttonText: 'Mensagem enviada com sucesso!'})
  }

  render() {
    return (
      <div className="page">
        <article className="list contact-page">
          <div className="contact-content">
            <h1 className="details-section-header contact-header">entre em contato</h1>
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
              <div className="form-group textarea-group">
                <label className="message sr-only" htmlFor="message"></label>
                <textarea rows={this.props.width >= 640 && this.props.width < 1024 ? "4" : "8"} onChange={e => this.setState({ message: e.target.value})} name="message" className="form-control" type="text" placeholder="Escreva sua mensagem aqui" value={this.state.message} required/>
              </div>
              <button type="submit" className={"btn " + this.state.class}>{ this.state.buttonText }</button>
            </form>
            {this.props.width < 640 && <Link to="/" className="back-link back-link-contact dark">← voltar</Link>}
          </div>
        </article>
      </div>
    )
  }
}

export default Contact;
