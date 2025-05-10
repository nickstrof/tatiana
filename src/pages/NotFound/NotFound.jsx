import DinoGame from '../../container/DinoGame/DinoGame'
import './NotFound.css'

const NotFound = () => {
  return (
	<div className="notfound pad">
		<div className="container">

			<div className="heading">
				<h1 className="title">404</h1>
				<h2 className="subtitle">Page not found</h2>
			</div>

			<div className="content">
				<DinoGame />
				<a href="/" title="">Go home</a>
			</div>
					
		</div>
	</div>
  )
}

export default NotFound
