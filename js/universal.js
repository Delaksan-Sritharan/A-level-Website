document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('yearSearch');
    const yearFilter = document.getElementById('yearFilter');
    const tableBody = document.getElementById('tableBody');
    const tableRows = tableBody.querySelectorAll('tr');

    const specialYears = ['1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'];

    // Add event listeners
    searchInput.addEventListener('input', filterTable);
    yearFilter.addEventListener('change', filterTable);

    function filterTable() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filterType = yearFilter.value;

        tableRows.forEach(row => {
            const yearCell = row.querySelector('th');
            if (yearCell) {
                const yearText = yearCell.textContent.toLowerCase();
                const yearValue = yearCell.textContent; // Original case for specialYears check

                // Check search term match
                const matchesSearch = searchTerm === '' || yearText.includes(searchTerm);

                // Check filter match
                let matchesFilter = true;
                if (filterType === 'special') {
                    matchesFilter = specialYears.includes(yearValue);
                }

                // Show/hide row based on matches
                row.style.display = (matchesSearch && matchesFilter) ? '' : 'none';
            }
        });
    }

    // Initial filter in case there's any default value
    filterTable();
});