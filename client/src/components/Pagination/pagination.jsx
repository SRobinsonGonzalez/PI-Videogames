const Pagination = ({ page, total }) => {
    const pageNumbers = [];
    for (let i = 1; i <= total.length; i++) {
        pageNumbers.push(i);

    }
    return (
        <div>
            {pageNumbers.map((pages) => (
                <button onClick={() => page(pages)}>{pages}</button>
            ))}
        </div >
    )
};

export default Pagination;