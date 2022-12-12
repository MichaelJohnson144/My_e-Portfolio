import cn from 'classnames';
import styles from './Contact.module.css';
import Form from '../../Form';
import Footer from '../../ui/Footer';

const contact = cn(
  'overflow-auto w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-contact',
  styles.scrollbar,
);

export default function Contact() {
  return (
    <main className={contact}>
      <Form />
      <Footer />
    </main>
  );
}
