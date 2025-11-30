export default function Table({ columns, data }) {
    return (
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-gray-200">
                    {columns.map((col, i) => (
                        <th key={i} className="border p-2 text-left">{col}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data?.length > 0 ? (
                    data.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-100">
                            {Object.values(row).map((value, j) => (
                                <td key={j} className="border p-2">{String(value)}</td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} className="text-center p-4">
                            Nenhum registro encontrado.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
