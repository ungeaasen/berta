import Footer from 'components/Footer';

export default function PageLayout({children}) {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}