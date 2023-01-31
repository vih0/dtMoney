import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'
import {Container} from './styles'


export function Summary() {
    const { transactions } = useContext(TransactionsContext)
    const sumary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        } else {
            acc.withdraws -= transaction.amount
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
        
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas Imagem"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-br',{
                    style: 'currency',
                    currency:'BRL',
                })
                .format(sumary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas Imagem"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-br',{
                    style: 'currency',
                    currency:'BRL',
                })
                .format(sumary.withdraws)}</strong>
            </div>
            <div className='highLight'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total Imagem"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-br',{
                    style: 'currency',
                    currency:'BRL',
                })
                .format(sumary.total)}</strong>
            </div>
        </Container>
    );
    
}