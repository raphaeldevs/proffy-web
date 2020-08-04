import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Raphael Corrêa"/>
        
        <div>
          <strong>Diego Fernandes</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur lorem tortor, id cursus sem accumsan tincidunt.
        <br/><br/>
        Mauris pulvinar sodales metus in mollis. Morbi venenatis fermentum augue ac condimentum. Aliquam nec blandit sem. Aenean a iaculis diam. Aenean vitae.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$60,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>

      </footer>

    </article>
  )
}

export default TeacherItem;