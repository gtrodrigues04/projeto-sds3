import NavBar from "components/NavBar"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
        <NavBar />
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">DSVendas</h1>
                <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                <hr />
                <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                <Link to="/dashboard" className="btn btn-primary btn-lg">
                    Acessar o DashBoard
                </Link>
           </div>
           <p className="text-dev">App desenvolvido por <a href="https://github.com/gtrodrigues04" target="_blank" rel="noreferrer">Guilherme Teixeira</a></p>
          </div>
        
    </>
    )
}