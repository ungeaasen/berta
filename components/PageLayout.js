

export default function PageLayout({children, className}) {
  return (
    <div>
      <div className={`page-wrapper ${className}`}>
        {children}
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">courses</a>{' | '}
          <a href="#">github</a>{' | '}
          <a href="#">facebook</a>
        </div>
      </footer>
    </div>
  )
}