import Login from './login';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 py-2">
          <h3> Next.js and OAuth  </h3>
          <Login />
        </div>
      </div>
    </div>
  )
}
