import { useState } from 'react';
import './pagUser.css';
import '../login2.scss';

function PagUser() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    const formData = {
      name,
      phone,
      email,
      date
    };

    fetch('https://backend-production-ca94.up.railway.app/agendamentos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Erro ao enviar dados do formulário');
    })
    .then(data => {
      console.log(data);
      setName('');
      setPhone('');
      setEmail('');
      setDate('');
      closeModal();

      alert(`Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nData de Agendamento: ${date}`);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  };

  return (
    <div id='agender-form'>
      <button id="openModalButton" onClick={openModal}>
        <div className="text">
          Agendar
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
        </svg>
      </button>
      <span id="closeModalButton" onClick={closeModal}>X</span>

      {showModal && (
        <div id="myModal" className='modal'>
          <div className="modal-content">
            <h2>Agendamento</h2>
            <form>
              <label htmlFor="name">Nome:</label>
              <input type="name" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              /><br />
              
              <label htmlFor="phone">Telefone:</label>
              <input type="tel" 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              /><br />

              <label htmlFor="email">Email:</label>
              <input type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              /><br />
              

              <label htmlFor="date">Data de Agendamento:</label>
              <input type="date" 
              id="date" 
              required value={date} 
              onChange={(e) => setDate(e.target.value)}
              /><br />

              <button type="button" id="submitFormButton" onClick={handleSubmit}>Enviar</button>
              <button type="button" id="cancelButton" className='cancel' onClick={closeModal}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PagUser;
