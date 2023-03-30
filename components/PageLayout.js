import Footer from 'components/Footer';

export default function PageLayout({children}) {
  return (
    <>
    <div className="container">
      <div className="wrapper">
        {children}
      </div>
    </div>
    <Footer />
    </>
  )
}