import { HistoryContainer, HistoryList } from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>00:00:00</td>
              <td>00:00:00</td>
              <td>--</td>
            </tr>
          </tbody>
          {/* <tfoot>
            <tr>
              <td>Total</td>
              <td>00:00:00</td>
              <td>00:00:00</td>
              <td>00:00:00</td>
            </tr>
          </tfoot> */}
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
