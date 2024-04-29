export const DataTable = ({ columns, rows }: { columns: Array<string>, rows: Array<number>[] }) => {
  return (
    <div className="relative overflow-x-auto w-full">
      <table className="w-full text-left rtl:text-right text-gray-500">
        <thead className="text-gray-700 bg-gray-50">
          <tr className="bg-slate-200 border-b">
            {columns.map((column) => (
              <th scope="col" className="px-6 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="bg-white border-b">
              {row.map((cell, i) => (
                <td scope="row" className="px-6 py-4">{
                  columns[i] == "error" && cell == 100
                    ? "-"
                    : cell
                }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
