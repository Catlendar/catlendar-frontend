import React from 'react';
import Modal from '../../components/Common/Modal/Modal';

export default function HomePage() {
  return (
    <div>
      <Modal type="revise" />
      <Modal type="withdraw" />
    </div>
  );
}
