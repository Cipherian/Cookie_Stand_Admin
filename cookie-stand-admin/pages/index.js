import Head from '../components/Head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieForm from '../components/CookieForm';

export default function Home() {
  return (
    <div className="bg">
      <Head />
      <Header  />
      <CookieForm />
      <Footer />
    </div>
  )
}
