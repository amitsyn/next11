import Link from 'next/link';
import Form from './Form';
export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary text-primary">
        <div className="container-fluid text-primary" >
          <a className="navbar-brand text-primary" href="#" >Shopping</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              <Link className="nav-link active" href="/products">Products</Link>
              <Link className="nav-link active" href="/form">Form</Link>
              <Link className="nav-link active" href="/posts">Users</Link>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
