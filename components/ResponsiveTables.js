'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Wide tables do not fit a phone. On screens under 640 px, every table that is wider than its
// container is shown as stacked cards (row title on top, column names above each value).
// The HTML table stays exactly as it is (same text, same markup); only the presentation changes,
// and the table roles are set explicitly so screen readers still announce a table.
export default function ResponsiveTables() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.matchMedia('(max-width: 639px)').matches) return;

    const frame = requestAnimationFrame(() => {
      document.querySelectorAll('main table, article table').forEach((table) => {
        if (table.dataset.stack) return;
        const wrapper = table.parentElement;
        if (!wrapper || table.scrollWidth <= wrapper.clientWidth + 2) return; // past al: laat staan

        const headRow = table.tHead?.rows[0] || table.rows[0];
        if (!headRow) return;
        const koppen = [...headRow.cells].map((c) => c.textContent.trim());
        if (koppen.filter(Boolean).length < 2) return;

        table.setAttribute('role', 'table');
        table.querySelectorAll('thead, tbody, tfoot').forEach((g) => g.setAttribute('role', 'rowgroup'));
        table.querySelectorAll('tr').forEach((tr) => tr.setAttribute('role', 'row'));
        table.querySelectorAll('th').forEach((c) => c.setAttribute('role', c.closest('thead') ? 'columnheader' : 'rowheader'));
        table.querySelectorAll('td').forEach((c) => c.setAttribute('role', 'cell'));

        table.querySelectorAll('tbody tr').forEach((tr) => {
          [...tr.cells].forEach((cell, i) => {
            if (i > 0 && koppen[i]) cell.setAttribute('data-label', koppen[i]);
          });
        });
        table.dataset.stack = '1';
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
