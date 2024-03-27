import { useState, useEffect } from 'react';
import './pagUser.css';
import '../login2.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PagUser() {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formComplete, setFormComplete] = useState<boolean>(false);

  useEffect(() => {
    if (name.trim() !== '' && isValidPhone(phone) && isValidEmail(email) && date.trim() !== '') {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [name, phone, email, date]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setPhone(formattedPhone);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'date') {
      setDate(value);
    }
  };

  const isValidPhone = (phone: string) => {
    const phonePattern = /^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/;
    return phonePattern.test(phone);
  };

  const isValidEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleanedPhone = phoneNumber.replace(/\D/g, '');
    const formattedPhone = cleanedPhone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    return formattedPhone;
  };

  const handleSubmit = () => {
    if (!formComplete) {
      toast.warning('Por favor, preencha todos os campos corretamente!', {
        position: 'top-right',
        className: 'toast-message'
      });
      return;
    }

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


        toast.success("Agendamento enviado com sucesso!", {
          position: 'top-right',
          className: 'toast-message',
        });

      })
      .catch(error => {
        console.error('Erro:', error);
        toast.error("Erro ao enviar os dados do formulário!", {
          position: 'top-right',
          className: 'toats-message',
        })
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
                name="name"
                value={name}
                onChange={handleInputChange}
                required
              /><br />

              <label htmlFor="phone">Telefone:</label>
              <input type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                pattern="\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}"
                title="Digite um telefone no formato (99) 99999-9999"
                required
              /><br />

              <label htmlFor="email">Email:</label>
              <input type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              /><br />


              <label htmlFor="date">Data de Agendamento:</label>
              <input type="date"
                id="date"
                name="date"
                required value={date}
                onChange={handleInputChange}
              /><br />

              <button type="button" id="submitFormButton" onClick={handleSubmit} disabled={!formComplete}>Enviar</button>
              <button type="button" id="cancelButton" className='cancel' onClick={closeModal}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default PagUser;
