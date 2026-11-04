// Black Friday runs through November 2026. From 1 December the site falls back
// to the regular hero and announcement bar on its own, no deploy needed.
export const BLACK_FRIDAY_EINDE = new Date('2026-12-01T00:00:00+01:00');

export function isBlackFriday(nu = new Date()) {
  return nu < BLACK_FRIDAY_EINDE;
}
