import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response=>console.log(response.data))
        
    },[]

    )
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salario</td>
            <td className="deposit">R$1000.00</td>
            <td>Alimentação</td>
            <td>06/12/2022</td>
          </tr>
          <tr>
            <td>Supermercado</td>
            <td className="exit">-R$1000.00</td>
            <td>Alimentação</td>
            <td>06/12/2022</td>
          </tr>
         
        </tbody>
      </table>
    </Container>
  );
}
