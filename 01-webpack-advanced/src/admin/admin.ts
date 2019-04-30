import { Common } from '../common/common';

export const ADMIN_TITLE = 'This is admin page';

export function adminFunction() {
  const commonAdmin = new Common('title_admin');

  commonAdmin.populateTitle();
}
