import React from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function index() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
